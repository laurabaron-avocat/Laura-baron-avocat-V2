import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Tag } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

// Fallback tags when Supabase is not available
const fallbackTags = [
  { slug: 'accident-route', name: 'Accident de la route' },
  { slug: 'accident-medical', name: 'Accident médical' },
  { slug: 'agressions', name: 'Agressions' },
  { slug: 'cci', name: 'CCI' },
  { slug: 'civi', name: 'CIVI' },
  { slug: 'indemnisation', name: 'Indemnisation' },
  { slug: 'expertise-medicale', name: 'Expertise médicale' },
  { slug: 'loi-badinter', name: 'Loi Badinter' },
  { slug: 'oniam', name: 'ONIAM' },
  { slug: 'prejudices', name: 'Préjudices' },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const tag = fallbackTags.find(t => t.slug === params.slug);

  if (!tag) {
    return {
      title: 'Tag non trouvé',
    };
  }

  return {
    title: `${tag.name} | Ressources Juridiques`,
    description: `Articles sur ${tag.name} - Ressources en dommage corporel par Maître Laura Baron`,
  };
}

export async function generateStaticParams() {
  return fallbackTags.map((tag) => ({
    slug: tag.slug,
  }));
}

export default function TagPage({ params }: PageProps) {
  const tag = fallbackTags.find(t => t.slug === params.slug);

  if (!tag) {
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
            <span className="text-anthracite">{tag.name}</span>
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
              <Tag size={48} className="text-or mr-4" />
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-noir">
                {tag.name}
              </h1>
            </div>

            <p className="text-xl text-gray-700 mb-8">
              Retrouvez tous les articles sur "{tag.name}"
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              Cette section sera bientôt disponible avec tous les articles liés à ce sujet.
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