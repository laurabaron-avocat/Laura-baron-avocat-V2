import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

// Fallback categories when Supabase is not available
const fallbackCategories = [
  { slug: 'guides-pratiques', name: 'Guides Pratiques' },
  { slug: 'fiches-notions', name: 'Fiches Notions' },
  { slug: 'actualites-juridiques', name: 'Actualités Juridiques' },
  { slug: 'etudes-de-cas', name: 'Études de Cas' },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = fallbackCategories.find(cat => cat.slug === params.slug);

  if (!category) {
    return {
      title: 'Catégorie non trouvée',
    };
  }

  return {
    title: `${category.name} | Ressources Juridiques`,
    description: `Articles de la catégorie ${category.name} - Ressources en dommage corporel par Maître Laura Baron`,
  };
}

export async function generateStaticParams() {
  return fallbackCategories.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: PageProps) {
  const category = fallbackCategories.find(cat => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-or">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/ressources" className="text-gray-600 hover:text-or">
              Ressources
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-anthracite">{category.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-gradient-to-br from-beige via-white to-beige section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/ressources"
              className="inline-flex items-center text-or hover:text-yellow-600 mb-8 transition-colors group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour aux ressources
            </Link>

            <div className="flex items-center justify-center mb-6">
              <BookOpen size={48} className="text-or mr-4" />
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-noir">
                {category.name}
              </h1>
            </div>

            <p className="text-xl text-gray-700 mb-8">
              Retrouvez tous les articles de la catégorie "{category.name}"
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              Cette section sera bientôt disponible avec tous les articles de cette catégorie.
            </p>

            <Link href="/ressources" className="btn-primary">
              Voir toutes les ressources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}