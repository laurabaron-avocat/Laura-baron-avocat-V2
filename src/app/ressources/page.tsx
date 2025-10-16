import { Metadata } from 'next';
import { getPosts, getFeaturedPosts, getCategories, getTags } from '@/lib/queries';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import RessourcesContent from '@/components/RessourcesContent';

export const metadata: Metadata = {
  title: 'Ressources & Guides • Blog Juridique Dommage Corporel',
  description: 'Guides pratiques, fiches notions et actualités juridiques en dommage corporel. Ressources expertes pour comprendre vos droits et l\'indemnisation des victimes.',
};

// Revalidation toutes les 4 heures pour récupérer le nouveau contenu
export const revalidate = 14400; // 4 heures = 14400 secondes

export default async function RessourcesPage() {
  // Récupérer les données depuis Supabase
  try {
    const [allPosts, categories, tags] = await Promise.all([
      getPosts(), // Récupérer TOUS les articles sans limite
      getCategories(),
      getTags()
    ]);

    console.log('All posts:', allPosts?.length || 0);
    console.log('Categories:', categories?.length || 0);
    console.log('Tags:', tags?.length || 0);

    const jsonLD = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Ressources Juridiques - Dommage Corporel',
      description: 'Blog juridique en dommage corporel et indemnisation des victimes',
      url: 'https://laurabaron-avocat.com/ressources',
      author: {
        '@type': 'Person',
        name: 'Maître Laura Baron',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Cabinet Maître Laura Baron',
      },
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />

        <RessourcesContent
          initialFeaturedPosts={allPosts || []}
          initialRecentPosts={allPosts || []}
          initialCategories={categories || []}
          initialTags={tags || []}
        />

        <WhatsAppButton pageType="article" />
      </>
    );
  } catch (error) {
    console.error('Error loading resources page data:', error);
    return (
      <>
        <RessourcesContent
          initialFeaturedPosts={[]}
          initialRecentPosts={[]}
          initialCategories={[]}
          initialTags={[]}
        />
        <WhatsAppButton pageType="article" />
      </>
    );
  }
}