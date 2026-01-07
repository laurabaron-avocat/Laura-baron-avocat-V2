import { supabase, isConfigured } from './supabase';
import type { Database } from './supabase';

type Post = Database['public']['Tables']['posts']['Row'];
type Author = Database['public']['Tables']['authors']['Row'];
type FAQ = Database['public']['Tables']['faq']['Row'];
type Category = Database['public']['Tables']['categories']['Row'];
type Tag = Database['public']['Tables']['tags']['Row'];

// Article mapping to simulate category_slug and tags
const ARTICLE_CATEGORY_MAPPING: Record<string, { category_slug: string; tags: string[] }> = {
  'accidents-route-responsabilite-dommage-corporel-guide-2025': {
    category_slug: 'accidents-route',
    tags: ['loi-badinter', 'responsabilite-civile', 'indemnisation', 'assurance']
  },
  'preparer-expertise-medicale-accident-guide-2025': {
    category_slug: 'procedures-indemnisation',
    tags: ['expertise-medicale', 'bareme-dintilhac', 'prejudices-corporels']
  },
  'accident-de-voiture-que-faire-etape-par-etape': {
    category_slug: 'accidents-route',
    tags: ['loi-badinter', 'responsabilite-civile', 'conseils-pratiques']
  },
  'accident-de-voiture-demarches-pour-blesses': {
    category_slug: 'accidents-route',
    tags: ['loi-badinter', 'indemnisation', 'victimes']
  },
  'accident-conducteur-non-assure-que-faire-guide-2025': {
    category_slug: 'procedures-indemnisation',
    tags: ['assurance', 'indemnisation', 'responsabilite-civile']
  },
  'itt-vs-ipp-incapacites-dommage-corporel-guide-2025': {
    category_slug: 'procedures-indemnisation',
    tags: ['itt', 'ipp', 'expertise-medicale', 'bareme-dintilhac']
  },
  'delais-indemnisation-accident-voiture-guide-2025': {
    category_slug: 'procedures-indemnisation',
    tags: ['indemnisation', 'delais', 'assurance']
  },
  'qui-paye-mes-soins-apres-un-accident-de-la-route': {
    category_slug: 'procedures-indemnisation',
    tags: ['soins', 'remboursement', 'assurance', 'loi-badinter']
  },
  'accidents-medicaux-cci-oniam-expertise-medicale': {
    category_slug: 'accidents-medicaux',
    tags: ['cci', 'oniam', 'expertise-medicale', 'accidents-medicaux']
  },
  'indemnisation-passagers-victimes-accidents-route': {
    category_slug: 'procedures-indemnisation',
    tags: ['passagers', 'victimes', 'indemnisation', 'loi-badinter']
  },
  'accidents-vie-responsabilite-civile-assurances-guide-2025': {
    category_slug: 'accidents-vie',
    tags: ['responsabilite-civile', 'indemnisation', 'assurance']
  },
  'agression-victimes-infractions-solidarite-nationale-civi': {
    category_slug: 'agressions-civi',
    tags: ['civi', 'indemnisation', 'victimes', 'agression']
  }
};

// Cache des posts pour éviter les disparitions en cas d'erreur temporaire
let postsCache: any[] | null = null;
let postsCacheTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Posts queries
export async function getPosts(limit?: number) {
  if (!supabase || !isConfigured) {
    console.log('Supabase not configured, returning cached data or empty array');
    return postsCache || [];
  }

  try {
    const query = supabase
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

    if (limit) {
      query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching posts:', error);
      // Retourner le cache si disponible au lieu d'un tableau vide
      if (postsCache && postsCache.length > 0) {
        console.log('Returning cached posts due to error');
        return limit ? postsCache.slice(0, limit) : postsCache;
      }
      return [];
    }

    // Enrichir avec les données de mapping
    const enrichedData = (data || []).map(post => {
      const mapping = ARTICLE_CATEGORY_MAPPING[post.slug];
      return {
        ...post,
        category_slug: mapping?.category_slug || 'conseils-pratiques',
        tags: mapping?.tags || ['dommage-corporel']
      };
    });

    // Mettre à jour le cache uniquement si on a des données valides
    if (enrichedData && enrichedData.length > 0) {
      postsCache = enrichedData;
      postsCacheTime = Date.now();
    }

    return limit ? enrichedData.slice(0, limit) : enrichedData;
  } catch (fetchError) {
    console.error('Network error fetching posts:', fetchError);
    // Retourner le cache si disponible au lieu d'un tableau vide
    if (postsCache && postsCache.length > 0) {
      console.log('Returning cached posts due to network error');
      return limit ? postsCache.slice(0, limit) : postsCache;
    }
    return [];
  }
}

// Cache pour les posts individuels
const postBySlugCache: Map<string, any> = new Map();

export async function getPostBySlug(slug: string) {
  if (!supabase || !isConfigured) {
    console.log('Supabase not configured, returning cached post or null');
    return postBySlugCache.get(slug) || null;
  }

  try {
    const { data, error } = await supabase
      .from('posts')
      .select(`
        *,
        authors (
          id,
          name,
          role,
          avatar_url,
          bio_short
        ),
        post_tags (
          tags (
            id,
            name,
            slug
          )
        )
      `)
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error) {
      console.error('Error fetching post by slug:', slug, error);
      // Retourner le cache si disponible
      const cachedPost = postBySlugCache.get(slug);
      if (cachedPost) {
        console.log('Returning cached post due to error:', slug);
        return cachedPost;
      }
      return null;
    }

    // Enrichir avec les données de mapping
    const mapping = ARTICLE_CATEGORY_MAPPING[data.slug];
    const enrichedData = {
      ...data,
      category_slug: mapping?.category_slug || 'conseils-pratiques',
      tags: mapping?.tags || ['dommage-corporel']
    };

    // Mettre à jour le cache
    postBySlugCache.set(slug, enrichedData);

    return enrichedData;
  } catch (fetchError) {
    console.error('Network error fetching post by slug:', fetchError);
    // Retourner le cache si disponible
    const cachedPost = postBySlugCache.get(slug);
    if (cachedPost) {
      console.log('Returning cached post due to network error:', slug);
      return cachedPost;
    }
    return null;
  }
}

export async function getFeaturedPosts(limit = 3) {
  return getPosts(limit);
}

// FAQ queries
export async function getFAQByPage(pageKey: string) {
  if (!supabase || !isConfigured) {
    console.log('Supabase not configured, returning mock FAQ data for page:', pageKey);
    return getMockFAQ(pageKey);
  }

  try {
    const { data, error } = await supabase
      .from('faq')
      .select('*')
      .eq('page_key', pageKey)
      .order('order_num', { ascending: true });

    if (error) {
      console.error('Error fetching FAQ:', error);
      console.log('Falling back to mock FAQ data for page:', pageKey);
      return getMockFAQ(pageKey);
    }

    return data || [];
  } catch (fetchError) {
    console.error('Network error fetching FAQ:', fetchError);
    console.log('Falling back to mock FAQ data for page:', pageKey);
    return getMockFAQ(pageKey);
  }
}

export async function getCategories() {
  if (!supabase || !isConfigured) {
    console.log('Supabase not configured, returning mock categories');
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching categories:', error);
      return [];
    }

    return data || [];
  } catch (fetchError) {
    console.error('Network error fetching categories:', fetchError);
    return [];
  }
}

// Tags queries
export async function getTags() {
  if (!supabase || !isConfigured) {
    console.log('Supabase not configured, returning mock tags');
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('tags')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching tags:', error);
      return [];
    }

    return data || [];
  } catch (fetchError) {
    console.error('Network error fetching tags:', fetchError);
    return [];
  }
}

// Helper function to count posts by category
export function getPostCountsByCategory(posts: any[]): Record<string, number> {
  const counts: Record<string, number> = {};

  posts.forEach(post => {
    const mapping = ARTICLE_CATEGORY_MAPPING[post.slug];
    const categorySlug = mapping?.category_slug || 'conseils-pratiques';
    counts[categorySlug] = (counts[categorySlug] || 0) + 1;
  });

  return counts;
}

export async function submitContactForm(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  city?: string;
  topic: string;
  message: string;
}, files?: File[]) {
  if (!supabase || !isConfigured) {
    console.log('Supabase not configured, simulating form submission');
    return { success: true, message: 'Form submitted (mock)' };
  }

  try {
    let attachmentUrl: string | null = null;

    // Upload files if provided
    if (files && files.length > 0) {
      const file = files[0]; // Take only the first file for now
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${formData.firstName}-${formData.lastName}.${fileExt}`;
      const filePath = `leads/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('Error uploading file:', uploadError);
      } else {
        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('documents')
          .getPublicUrl(filePath);

        attachmentUrl = publicUrl;
      }
    }

    const { data, error } = await supabase
      .from('leads')
      .insert([{
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        city: formData.city || null,
        topic: formData.topic,
        message: formData.message,
        attachment_url: attachmentUrl,
      }]);

    if (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }

    return data;
  } catch (fetchError) {
    console.error('Network error submitting contact form:', fetchError);
    throw fetchError;
  }
}

export async function subscribeNewsletter(email: string) {
  if (!supabase) {
    console.log('Supabase not configured, simulating newsletter subscription');
    return { success: true, message: 'Subscribed (mock)' };
  }

  try {
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email }]);

    if (error) {
      console.error('Error subscribing to newsletter:', error);
      throw error;
    }

    return data;
  } catch (fetchError) {
    console.error('Network error subscribing to newsletter:', fetchError);
    throw fetchError;
  }
}

// Mock data functions for when Supabase is not configured
function getMockFAQ(pageKey: string) {
  const mockFAQs = {
    accueil: [
      {
        id: '1',
        question: 'Dans quels délais dois-je consulter après un accident ?',
        answer_html: '<p>Il est recommandé de consulter un avocat le plus rapidement possible après un accident. Les délais légaux varient selon le type de procédure : 3 ans pour une action en responsabilité civile, 1 an pour une demande CIVI, et 10 ans pour une demande CCI/ONIAM. Plus vous agissez tôt, plus nous avons de temps pour construire un dossier solide et optimiser votre indemnisation.</p>',
        page_key: 'accueil',
        order_num: 1,
      },
      {
        id: '2',
        question: 'Quels sont les préjudices indemnisables ?',
        answer_html: '<p>Tous vos préjudices sont indemnisables selon la nomenclature Dintilhac. Les préjudices patrimoniaux incluent vos pertes de revenus, frais médicaux et frais d\'assistance. Les préjudices extrapatrimoniaux couvrent vos souffrances endurées, préjudice esthétique, préjudice d\'agrément et préjudice sexuel. Notre expertise consiste à identifier et chiffrer précisément chaque préjudice pour maximiser votre indemnisation.</p>',
        page_key: 'accueil',
        order_num: 2,
      },
      {
        id: '3',
        question: 'Comment se déroule une expertise médicale ?',
        answer_html: '<p>L\'expertise médicale est une étape cruciale où un médecin évalue vos séquelles. Vous recevez une convocation 15 jours avant, puis l\'expert examine votre état de santé et vous interroge sur les circonstances de l\'accident. Un rapport médical est rédigé dans les 2 mois qui déterminera votre indemnisation. Vous avez le droit d\'être accompagné par votre avocat et de faire appel à un médecin-conseil pour défendre vos intérêts.</p>',
        page_key: 'accueil',
        order_num: 3,
      },
      {
        id: '4',
        question: 'Ma protection juridique peut-elle prendre en charge les frais ?',
        answer_html: '<p>Votre contrat de protection juridique peut effectivement couvrir les frais d\'avocat en cas d\'accident. Cette garantie est souvent incluse dans votre assurance auto, habitation ou via votre mutuelle. Il est important de déclarer rapidement votre sinistre à votre assureur pour bénéficier de cette prise en charge. Nous vous accompagnons dans les démarches avec votre protection juridique pour optimiser cette couverture.</p>',
        page_key: 'accueil',
        order_num: 4,
      },
    ],
    'dommage-corporel': [
      {
        id: '5',
        question: 'Qu\'est-ce que la Loi Badinter et qui protège-t-elle ?',
        answer_html: '<p>La <strong>Loi Badinter de 1985</strong> révolutionne l\'indemnisation des victimes d\'accidents de la circulation en instaurant un droit à indemnisation quasi-automatique. Elle protège particulièrement les <strong>piétons, cyclistes, passagers et conducteurs</strong> (sauf en cas de faute inexcusable). Cette loi garantit une indemnisation rapide et complète de tous vos préjudices par l\'assurance du véhicule impliqué, même si vous n\'êtes pas responsable.</p>',
        page_key: 'dommage-corporel',
        order_num: 1,
      },
      {
        id: '6',
        question: 'Quelle est la différence entre CCI et ONIAM pour les accidents médicaux ?',
        answer_html: '<p>La <strong>CCI (Commission de Conciliation et d\'Indemnisation)</strong> est une procédure amiable qui permet d\'obtenir une indemnisation en cas d\'accident médical sans passer par les tribunaux. L\'<strong>ONIAM (Office National d\'Indemnisation des Accidents Médicaux)</strong> intervient lorsque la responsabilité du professionnel de santé n\'est pas engagée ou en cas d\'aléa thérapeutique. Ces deux procédures offrent une alternative rapide et efficace au contentieux judiciaire pour les victimes d\'erreurs médicales ou d\'infections nosocomiales.</p>',
        page_key: 'dommage-corporel',
        order_num: 2,
      },
      {
        id: '7',
        question: 'Qu\'est-ce que la CIVI et dans quels cas puis-je en bénéficier ?',
        answer_html: '<p>La <strong>CIVI (Commission d\'Indemnisation des Victimes d\'Infractions)</strong> est un dispositif de solidarité nationale qui indemnise les victimes d\'infractions pénales. Vous pouvez en bénéficier si vous avez été victime d\'<strong>agression physique ou sexuelle, vol avec violence, attentat, ou violences conjugales</strong>. La CIVI garantit une indemnisation même lorsque l\'auteur est insolvable, introuvable ou non identifié. Le délai pour déposer votre demande est d\'<strong>1 an à compter des faits</strong>.</p>',
        page_key: 'dommage-corporel',
        order_num: 3,
      },
      {
        id: '8',
        question: 'Quels sont les préjudices patrimoniaux et extrapatrimoniaux ?',
        answer_html: '<p>Les <strong>préjudices patrimoniaux</strong> sont vos pertes économiques chiffrables : perte de revenus (ITT, IPP), frais médicaux actuels et futurs, frais d\'adaptation du logement et du véhicule, assistance par tierce personne. Les <strong>préjudices extrapatrimoniaux</strong> concernent vos atteintes personnelles : souffrances endurées, préjudice esthétique, préjudice d\'agrément, préjudice sexuel, préjudice d\'établissement. La nomenclature Dintilhac permet de chiffrer précisément chaque poste de préjudice pour obtenir une indemnisation complète.</p>',
        page_key: 'dommage-corporel',
        order_num: 4,
      },
      {
        id: '9',
        question: 'Combien de temps faut-il pour obtenir une indemnisation ?',
        answer_html: '<p>Les délais d\'indemnisation varient selon le type de procédure. Pour un <strong>accident de la route</strong>, l\'offre d\'indemnisation doit intervenir dans les <strong>8 mois</strong> après consolidation. Pour les <strong>accidents médicaux (CCI/ONIAM)</strong>, comptez entre <strong>6 et 18 mois</strong>. Pour une <strong>demande CIVI</strong>, le délai est généralement de <strong>12 à 18 mois</strong>. Notre rôle est d\'accélérer ces procédures et de vous obtenir des provisions sur indemnisation dès que possible pour couvrir vos besoins urgents.</p>',
        page_key: 'dommage-corporel',
        order_num: 5,
      },
      {
        id: '10',
        question: 'Ai-je besoin d\'un avocat pour être indemnisé ?',
        answer_html: '<p>Bien que ce ne soit pas légalement obligatoire, <strong>faire appel à un avocat spécialisé en dommage corporel est fortement recommandé</strong>. Les études montrent que les victimes accompagnées par un avocat obtiennent en moyenne <strong>2 à 3 fois plus d\'indemnisation</strong> que celles qui négocient seules. Un avocat expert connaît tous les postes de préjudices indemnisables, maîtrise les techniques de négociation avec les assureurs et peut vous faire accompagner par un médecin-conseil lors de l\'expertise médicale pour défendre vos intérêts.</p>',
        page_key: 'dommage-corporel',
        order_num: 6,
      },
    ],
    indemnisation: [
      {
        id: '6',
        question: 'Comment se déroule une expertise médicale ?',
        answer_html: '<p>L\'expertise médicale comprend plusieurs étapes :</p><ol><li>Convocation par l\'expert</li><li>Examen médical complet</li><li>Rédaction du rapport</li></ol>',
        page_key: 'indemnisation',
        order_num: 1,
      },
    ],
  };

  return mockFAQs[pageKey as keyof typeof mockFAQs] || [];
}