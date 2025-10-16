import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, FileText, ArrowRight } from 'lucide-react';
import { getPostBySlug, getPosts } from '@/lib/queries';
import SocialShare from '@/components/ui/SocialShare';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import '@/styles/article.css';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }

  return {
    title: `${post.title} | Ressources Juridiques`,
    description: post.seo_description || post.excerpt,
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt,
      type: 'article',
      publishedTime: post.published_at || undefined,
      authors: post.authors ? [post.authors.name] : undefined,
      images: post.cover_url ? [{ url: post.cover_url }] : undefined,
    },
  };
}

// Revalidation ISR toutes les 60 secondes pour récupérer le nouveau contenu
export const revalidate = 60;

// Permet de générer dynamiquement les pages non générées au build
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const posts = await getPosts();

    // If no posts are returned (e.g., Supabase not configured), return fallback slugs
    if (!posts || posts.length === 0) {
      return [
        { slug: 'guide-indemnisation-accident-route' },
        { slug: 'procedure-expertise-medicale' },
        { slug: 'calcul-prejudices-corporels' },
        { slug: 'droits-victimes-accident-travail' }
      ];
    }

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.warn('Error generating static params, using fallback slugs:', error);
    // Return fallback slugs for static export when Supabase is not available
    return [
      { slug: 'guide-indemnisation-accident-route' },
      { slug: 'procedure-expertise-medicale' },
      { slug: 'calcul-prejudices-corporels' },
      { slug: 'droits-victimes-accident-travail' }
    ];
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLD = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.authors?.name || 'Maître Laura Baron',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cabinet Maître Laura Baron',
    },
    datePublished: post.published_at,
    dateModified: post.updated_at,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://laurabaron-avocat.com/ressources/${post.slug}`,
    },
    image: post.cover_url || undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />

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
            <span className="text-anthracite">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige via-white to-beige overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-from)_0%,_transparent_50%)] from-or/10"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto pt-8 pb-16">
            <Link
              href="/ressources"
              className="inline-flex items-center text-or hover:text-yellow-600 mb-8 transition-colors group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour aux ressources
            </Link>

            <article>
              <header className="text-center mb-12">
                <div className="mb-6">
                  {post.post_tags && post.post_tags.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {post.post_tags.slice(0, 3).map((postTag: any) => (
                        <span
                          key={postTag.tags.id}
                          className="inline-flex items-center px-3 py-1 bg-white/80 backdrop-blur-sm border border-or/20 text-xs font-medium text-anthracite rounded-full hover:bg-or/10 transition-colors"
                        >
                          <Tag size={12} className="mr-1 text-or" />
                          {postTag.tags.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-noir mb-6 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 mb-8">
                  <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                    <User size={16} className="mr-2 text-or" />
                    <span className="font-medium">{post.authors?.name || 'Maître Laura Baron'}</span>
                  </div>
                  <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Calendar size={16} className="mr-2 text-or" />
                    <span>
                      {post.published_at
                        ? new Date(post.published_at).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        : 'Date non disponible'
                      }
                    </span>
                  </div>
                  <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Clock size={16} className="mr-2 text-or" />
                    <span>5 min de lecture</span>
                  </div>
                </div>

              </header>
            </article>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {post.cover_url && (
        <section className="relative">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto -mt-8 relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={post.cover_url}
                  alt={post.title}
                  className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents - Optional */}
            <div className="mb-8 p-6 bg-gradient-to-r from-beige/30 to-beige/10 rounded-lg border-l-4 border-or">
              <h3 className="text-lg font-playfair font-semibold text-anthracite mb-3 flex items-center">
                <FileText size={20} className="mr-2 text-or" />
                Sommaire de l'article
              </h3>
              <p className="text-sm text-gray-600">
                Guide complet sur {post.title.toLowerCase()} - Informations juridiques essentielles
              </p>
            </div>

            {/* Main Article Content */}
            <article className="bg-white">
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: post.content_html }}
              />

              {/* Article Conclusion */}
              <div className="mt-12 p-6 bg-gradient-to-r from-beige/40 to-beige/10 rounded-lg border border-or/20">
                <h3 className="text-xl font-playfair font-semibold text-anthracite mb-4 flex items-center">
                  <ArrowRight size={20} className="mr-2 text-or" />
                  Points clés à retenir
                </h3>
                <div className="text-gray-700 space-y-2">
                  <p className="text-base leading-relaxed">
                    Cette analyse juridique vous donne les clés pour comprendre <strong>{post.title.toLowerCase()}</strong>.
                    Pour une évaluation personnalisée de votre situation, n'hésitez pas à consulter notre cabinet.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    📅 Article mis à jour le {post.updated_at ? new Date(post.updated_at).toLocaleDateString('fr-FR') : 'récemment'}
                    par Maître Laura Baron, avocat en dommage corporel.
                  </p>
                </div>
              </div>

              {/* Social Share at End of Article */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-playfair font-semibold text-anthracite mb-2">
                    Cet article vous a été utile ?
                  </h3>
                  <p className="text-gray-600">
                    Partagez-le avec d'autres personnes qui pourraient en bénéficier
                  </p>
                </div>
                <SocialShare
                  title={post.title}
                  excerpt={post.excerpt}
                  url={`https://laurabaron-avocat.com/ressources/${post.slug}`}
                />
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gradient-to-r from-noir to-anthracite rounded-lg text-white">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-or rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={24} className="text-noir" />
                  </div>
                  <div>
                    <h4 className="text-xl font-playfair font-semibold mb-2">
                      {post.authors?.name || 'Maître Laura Baron'}
                    </h4>
                    <p className="text-beige mb-3">
                      Avocat en dommage corporel et indemnisation des victimes
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Forte de plusieurs années d'expérience en droit du dommage corporel,
                      Maître Laura Baron accompagne les victimes d'accidents dans leurs démarches
                      d'indemnisation avec expertise et bienveillance.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-beige">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-playfair font-bold text-noir mb-6">
            Besoin d'un conseil personnalisé ?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Cet article vous a éclairé ? Contactez-nous pour une analyse personnalisée 
            de votre situation juridique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Prendre rendez-vous
            </Link>
            <Link href="/ressources" className="btn-secondary">
              Voir d'autres ressources
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton pageType="article" />
    </>
  );
}