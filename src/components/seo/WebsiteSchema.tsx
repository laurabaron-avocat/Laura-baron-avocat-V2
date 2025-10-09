export default function WebsiteSchema() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cabinet Laura Baron - Avocat Dommage Corporel Bayonne",
    "alternateName": "Maître Laura Baron",
    "url": "https://laurabaron-avocat.com",
    "description": "Avocat en dommage corporel et indemnisation des victimes à Bayonne, Pays Basque. Expertise en accidents de la route, médicaux, agressions.",
    "inLanguage": "fr-FR",
    "publisher": {
      "@type": "LegalService",
      "name": "Cabinet Laura Baron",
      "logo": {
        "@type": "ImageObject",
        "url": "https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Logo-laura-baron-maitre-avocat-bayonne.png"
      }
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://laurabaron-avocat.com/ressources?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ContactAction",
        "target": "https://laurabaron-avocat.com/contact",
        "name": "Prendre rendez-vous"
      }
    ],
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Contact & Rendez-vous",
          "description": "Prendre rendez-vous avec Maître Laura Baron pour votre dossier de dommage corporel",
          "url": "https://laurabaron-avocat.com/contact"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Dommage Corporel",
          "description": "Expertise en dommage corporel, accidents de la route, médicaux et agressions",
          "url": "https://laurabaron-avocat.com/dommage-corporel"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Accidents de la Route",
          "description": "Indemnisation accidents de la route selon la Loi Badinter",
          "url": "https://laurabaron-avocat.com/accidents-route"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Indemnisation Victimes",
          "description": "Expertise médicale et calcul des préjudices corporels",
          "url": "https://laurabaron-avocat.com/indemnisation-victimes"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Ressources Juridiques",
          "description": "Guides pratiques et actualités en dommage corporel",
          "url": "https://laurabaron-avocat.com/ressources"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Avocate & Cabinet",
          "description": "Présentation de Maître Laura Baron et du cabinet",
          "url": "https://laurabaron-avocat.com/avocate-cabinet"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteData)
      }}
    />
  );
}