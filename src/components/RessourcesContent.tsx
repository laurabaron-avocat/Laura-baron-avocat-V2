'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, BookOpen, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import type { Database } from '@/lib/supabase';
import { getPostCountsByCategory } from '@/lib/queries';
import ArticleCard from '@/components/ui/ArticleCard';
import Pagination from '@/components/ui/Pagination';

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

type Category = Database['public']['Tables']['categories']['Row'];
type Tag = Database['public']['Tables']['tags']['Row'];

interface RessourcesContentProps {
  initialFeaturedPosts: Post[];
  initialRecentPosts: Post[];
  initialCategories: Category[];
  initialTags: Tag[];
}

export default function RessourcesContent({
  initialFeaturedPosts,
  initialRecentPosts,
  initialCategories,
  initialTags,
}: RessourcesContentProps) {
  // États pour la pagination et la recherche
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);

  // Configuration pagination
  const ARTICLES_PER_PAGE = 9;

  // Combinaison de tous les articles
  const allPosts = useMemo(() => {
    const combined = [...initialFeaturedPosts, ...initialRecentPosts];
    // Supprimer les doublons basés sur l'ID
    const uniquePosts = combined.filter((post, index, arr) =>
      arr.findIndex(p => p.id === post.id) === index
    );
    return uniquePosts.sort((a, b) =>
      new Date(b.published_at || '').getTime() - new Date(a.published_at || '').getTime()
    );
  }, [initialFeaturedPosts, initialRecentPosts]);

  // Filtrage des articles
  const filteredPosts = useMemo(() => {
    let filtered = allPosts;

    // Filtrage par recherche
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filtrage par catégorie
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category_slug === selectedCategory);
    }

    return filtered;
  }, [allPosts, searchQuery, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = filteredPosts.slice(startIndex, endIndex);

  // Calculer les compteurs de catégories
  const categoryCounts = getPostCountsByCategory(allPosts);

  // Réinitialiser la page lors du changement de filtres
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-beige via-white to-beige section-padding">
        <div className="container-custom">
          <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-noir mb-6">
                Ressources & Guides
              </h1>
              <p className="text-xl text-anthracite mb-8 leading-relaxed">
                Guides pratiques, fiches notions et actualités juridiques pour comprendre
                vos droits et optimiser votre indemnisation en dommage corporel.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Rechercher un guide, une notion juridique..."
                    className="w-full pl-12 pr-4 py-4 rounded-sm border border-gray-300 focus:ring-2 focus:ring-or focus:border-transparent"
                  />
                </div>
              </div>

              {/* Info synchronisation */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  💡 Les nouveaux articles apparaissent automatiquement grâce à notre système de synchronisation
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Filtres rapides */}
      {initialCategories.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-playfair font-bold text-noir mb-4">
                Parcourir par catégorie
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? 'bg-or text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-or hover:text-or'
                }`}
              >
                Tous les articles ({allPosts.length})
              </button>
              {initialCategories.map((category) => {
                const count = categoryCounts[category.slug] || 0;
                if (count === 0) return null;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.slug)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.slug
                        ? 'bg-or text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-or hover:text-or'
                    }`}
                  >
                    {category.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Articles avec pagination */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              {selectedCategory
                ? `Articles - ${initialCategories.find(c => c.slug === selectedCategory)?.name || selectedCategory}`
                : searchQuery
                ? `Résultats de recherche pour "${searchQuery}"`
                : 'Tous nos articles'
              }
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''} trouvé{filteredPosts.length > 1 ? 's' : ''}
            </p>
          </div>

          {currentArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentArticles.map((post) => (
                  <ArticleCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Aucun article trouvé.</p>
              <p className="text-sm text-gray-500 mt-2">
                {searchQuery || selectedCategory
                  ? 'Essayez de modifier vos critères de recherche.'
                  : 'Les articles seront bientôt disponibles.'
                }
              </p>
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                    setCurrentPage(1);
                  }}
                  className="mt-4 px-4 py-2 bg-or text-white rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  Voir tous les articles
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Sidebar */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-playfair font-semibold text-anthracite mb-4 flex items-center">
                <BookOpen size={20} className="mr-2 text-or" />
                Catégories
              </h3>
              <div className="space-y-2">
                {initialCategories && initialCategories.length > 0 ? (
                  <>
                    {initialCategories
                      .filter(category => (categoryCounts[category.slug] || 0) > 0)
                      .slice(0, showAllCategories ? undefined : 4)
                      .map((category) => {
                        const count = categoryCounts[category.slug] || 0;
                        return (
                          <button
                            key={category.id}
                            onClick={() => handleCategoryChange(category.slug)}
                            className="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-50 transition-colors text-left"
                          >
                            <span className="text-gray-700">{category.name}</span>
                            <span className="text-xs text-or bg-or/10 border border-or/20 px-2 py-1 rounded">
                              {count}
                            </span>
                          </button>
                        );
                      })
                    }
                    {initialCategories.filter(category => (categoryCounts[category.slug] || 0) > 0).length > 4 && (
                      <button
                        onClick={() => setShowAllCategories(!showAllCategories)}
                        className="flex items-center justify-center w-full py-2 px-3 text-or hover:bg-or/5 rounded transition-colors text-sm font-medium"
                      >
                        {showAllCategories ? (
                          <>
                            <ChevronUp size={16} className="mr-1" />
                            Voir moins
                          </>
                        ) : (
                          <>
                            <ChevronDown size={16} className="mr-1" />
                            Voir plus ({initialCategories.filter(category => (categoryCounts[category.slug] || 0) > 0).length - 4} autres)
                          </>
                        )}
                      </button>
                    )}
                  </>
                ) : (
                  <p className="text-gray-600 text-sm">Aucune catégorie disponible.</p>
                )}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-playfair font-semibold text-anthracite mb-4 flex items-center">
                <Tag size={20} className="mr-2 text-or" />
                Tags populaires
              </h3>
              <div className="flex flex-wrap gap-2">
                {initialTags && initialTags.length > 0 ? (
                  <>
                    {initialTags
                      .slice(0, showAllTags ? undefined : 4)
                      .map((tag) => (
                        <button
                          key={tag.id}
                          onClick={() => handleSearchChange(tag.name)}
                          className="text-xs text-gray-700 bg-gray-100 hover:bg-or hover:text-white px-3 py-2 rounded transition-colors"
                        >
                          {tag.name}
                        </button>
                      ))
                    }
                    {initialTags.length > 4 && (
                      <button
                        onClick={() => setShowAllTags(!showAllTags)}
                        className="text-xs text-or hover:bg-or hover:text-white px-3 py-2 rounded border border-or transition-colors font-medium"
                      >
                        {showAllTags ? 'Voir moins' : `+${initialTags.length - 4} autres`}
                      </button>
                    )}
                  </>
                ) : (
                  <p className="text-gray-600 text-sm">Aucun tag disponible.</p>
                )}
              </div>
            </div>

          </div>

          {/* Newsletter centrée en dessous pour mobile */}
          <div className="lg:hidden mt-8 max-w-md mx-auto">
            <div className="bg-noir text-white p-6 rounded-lg">
              <h3 className="text-lg font-playfair font-semibold mb-4 text-center">
                Newsletter juridique
              </h3>
              <p className="text-gray-300 text-sm mb-4 text-center">
                Recevez nos derniers guides et actualités en dommage corporel directement dans votre boîte mail.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full px-3 py-2 rounded text-noir"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-or hover:bg-yellow-600 text-noir py-2 px-4 rounded font-medium transition-colors"
                >
                  S'abonner
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Pas de spam, désinscription à tout moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
            Besoin d'un conseil personnalisé ?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Nos guides vous éclairent, mais chaque situation est unique.
            Contactez-nous pour une analyse personnalisée de votre dossier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Prendre rendez-vous
            </Link>
            <Link href="/dommage-corporel" className="btn-secondary">
              Nos expertises
            </Link>
          </div>
        </div>
      </section>

      {/* Note: Synchronisation via ISR + Webhook au lieu de Realtime client */}
    </>
  );
}