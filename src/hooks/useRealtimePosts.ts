'use client';

import { useState, useEffect } from 'react';
import { supabase, isConfigured } from '@/lib/supabase';
import type { Database } from '@/lib/supabase';

type Post = Database['public']['Tables']['posts']['Row'] & {
  authors?: {
    id: string;
    name: string;
    role: string;
    avatar_url: string | null;
  };
  post_tags?: Array<{
    tags: {
      id: string;
      name: string;
      slug: string;
    };
  }>;
};

export function useRealtimePosts(initialPosts: Post[]) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!supabase || !isConfigured) return;

    const channel = supabase
      .channel('posts_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'posts',
          filter: 'status=eq.published'
        },
        async (payload) => {
          console.log('Realtime update received:', payload);

          setIsLoading(true);

          try {
            // Refetch all posts when there's any change
            const { data: updatedPosts, error } = await supabase
              .from('posts')
              .select(`
                *,
                authors (
                  id,
                  name,
                  role,
                  avatar_url
                ),
                post_tags (
                  tags (
                    id,
                    name,
                    slug
                  )
                )
              `)
              .eq('status', 'published')
              .order('published_at', { ascending: false });

            if (error) {
              console.error('Error refetching posts:', error);
            } else if (updatedPosts) {
              setPosts(updatedPosts);
              console.log('Posts updated successfully');
            }
          } catch (fetchError) {
            console.error('Network error refetching posts:', fetchError);
          } finally {
            setIsLoading(false);
          }
        }
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { posts, isLoading };
}

export function useRealtimeCategories(initialCategories: Database['public']['Tables']['categories']['Row'][]) {
  const [categories, setCategories] = useState(initialCategories);

  useEffect(() => {
    if (!supabase || !isConfigured) return;

    const channel = supabase
      .channel('categories_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'categories'
        },
        async () => {
          try {
            const { data: updatedCategories, error } = await supabase
              .from('categories')
              .select('*')
              .order('name', { ascending: true });

            if (error) {
              console.error('Error refetching categories:', error);
            } else if (updatedCategories) {
              setCategories(updatedCategories);
            }
          } catch (fetchError) {
            console.error('Network error refetching categories:', fetchError);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return categories;
}

export function useRealtimeTags(initialTags: Database['public']['Tables']['tags']['Row'][]) {
  const [tags, setTags] = useState(initialTags);

  useEffect(() => {
    if (!supabase || !isConfigured) return;

    const channel = supabase
      .channel('tags_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'tags'
        },
        async () => {
          try {
            const { data: updatedTags, error } = await supabase
              .from('tags')
              .select('*')
              .order('name', { ascending: true });

            if (error) {
              console.error('Error refetching tags:', error);
            } else if (updatedTags) {
              setTags(updatedTags);
            }
          } catch (fetchError) {
            console.error('Network error refetching tags:', fetchError);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return tags;
}