'use client';

import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
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
  category_slug?: string;
  tags?: string[];
};

interface ArticleCardProps {
  post: Post;
  className?: string;
}

export default function ArticleCard({ post, className = '' }: ArticleCardProps) {
  return (
    <article className={`group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-or/20 ${className}`}>
      <div className="relative aspect-video bg-gradient-to-br from-beige to-gray-200 overflow-hidden">
        <img
          src={post.cover_url || 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badge catégorie si disponible */}
        {post.category_slug && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2 py-1 bg-or/90 backdrop-blur-sm text-xs font-medium text-white rounded-full">
              {post.category_slug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-xs text-gray-500">
            <Clock size={12} className="mr-1" />
            <span>5 min</span>
          </div>
          <div className="text-xs text-gray-500">
            {post.published_at ? new Date(post.published_at).toLocaleDateString('fr-FR') : ''}
          </div>
        </div>

        <h3 className="text-lg font-playfair font-semibold text-anthracite mb-3 line-clamp-2 group-hover:text-or transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {/* Afficher les tags du mapping ou ceux de post_tags */}
            {post.tags?.slice(0, 2).map((tag, index) => (
              <span key={index} className="text-xs text-gray-600 bg-beige/60 px-2 py-1 rounded-full border border-gray-200">
                {tag.replace('-', ' ')}
              </span>
            )) || post.post_tags?.slice(0, 2).map((postTag) => (
              <span key={postTag.tags.id} className="text-xs text-gray-600 bg-beige/60 px-2 py-1 rounded-full border border-gray-200">
                {postTag.tags.name}
              </span>
            ))}
          </div>

          <Link
            href={`/ressources/${post.slug}`}
            className="inline-flex items-center text-or hover:text-yellow-600 text-sm font-medium group-hover:translate-x-1 transition-transform"
          >
            Lire
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}