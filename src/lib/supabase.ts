import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Check if Supabase is properly configured (allow placeholder values for build)
const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl.startsWith('https://') &&
  supabaseUrl.includes('supabase.co') &&
  supabaseAnonKey.length > 20
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false
      },
      realtime: {
        params: {
          eventsPerSecond: 10
        }
      }
    })
  : null;

// Export configuration status for debugging
export const isConfigured = isSupabaseConfigured;

// Log configuration status in development
if (typeof window === 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('Supabase configuration status:', {
    configured: isSupabaseConfigured,
    hasUrl: Boolean(supabaseUrl),
    hasKey: Boolean(supabaseAnonKey),
    urlValid: supabaseUrl.startsWith('https://') && supabaseUrl.includes('supabase.co')
  });
}

export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string;
          content_html: string;
          cover_url: string | null;
          status: 'draft' | 'published';
          published_at: string | null;
          updated_at: string;
          seo_title: string | null;
          seo_description: string | null;
          lang: string;
          author_id: string;
          category_slug?: string | null;
          tags?: string[] | null;
        };
        Insert: {
          slug: string;
          title: string;
          excerpt: string;
          content_html: string;
          cover_url?: string | null;
          status?: 'draft' | 'published';
          published_at?: string | null;
          seo_title?: string | null;
          seo_description?: string | null;
          lang?: string;
          author_id: string;
        };
        Update: {
          slug?: string;
          title?: string;
          excerpt?: string;
          content_html?: string;
          cover_url?: string | null;
          status?: 'draft' | 'published';
          published_at?: string | null;
          seo_title?: string | null;
          seo_description?: string | null;
          lang?: string;
          author_id?: string;
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
        };
      };
      tags: {
        Row: {
          id: string;
          name: string;
          slug: string;
        };
      };
      post_tags: {
        Row: {
          post_id: string;
          tag_id: string;
        };
      };
      authors: {
        Row: {
          id: string;
          name: string;
          role: string;
          avatar_url: string | null;
          bio_short: string | null;
        };
      };
      media: {
        Row: {
          id: string;
          file_url: string;
          alt: string;
          width: number | null;
          height: number | null;
          mime: string;
        };
      };
      faq: {
        Row: {
          id: string;
          question: string;
          answer_html: string;
          page_key: string;
          order: number;
        };
      };
      glossary: {
        Row: {
          id: string;
          term: string;
          definition_html: string;
          synonyms: string[] | null;
        };
      };
      leads: {
        Row: {
          id: string;
          firstname: string;
          lastname: string;
          email: string;
          phone: string | null;
          city: string | null;
          topic: string;
          message: string;
          created_at: string;
        };
      };
      intakes: {
        Row: {
          id: string;
          case_type: string;
          description: string;
          files: string[] | null;
          consent: boolean;
          created_at: string;
        };
      };
      subscribers: {
        Row: {
          id: string;
          email: string;
          created_at: string;
        };
      };
    };
  };
};