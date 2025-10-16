/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour Netlify avec Realtime
  // On supprime 'output: export' pour permettre le JavaScript côté client
  // Désactivation du trailingSlash pour éviter les erreurs 5xx avec Google Search Console
  trailingSlash: false,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    domains: ['images.pexels.com', 'qncljsxdjefkimfxdzuf.supabase.co'],
  },
  // Optimisations pour Netlify
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig;