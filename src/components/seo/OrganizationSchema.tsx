export default function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Cabinet Laura Baron - Avocat Dommage Corporel Bayonne",
    "alternateName": "Maître Laura Baron",
    "description": "Avocat en dommage corporel et indemnisation des victimes à Bayonne, Pays Basque. Expertise en accidents de la route, médicaux, agressions.",
    "url": "https://laurabaron-avocat.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Logo-laura-baron-maitre-avocat-bayonne.png",
      "width": 400,
      "height": 400,
      "caption": "Logo Cabinet Laura Baron - Avocat Dommage Corporel"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Logo-laura-baron-maitre-avocat-bayonne.png",
      "width": 1200,
      "height": 630,
      "caption": "Cabinet Laura Baron - Avocat Dommage Corporel"
    },
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Laura Baron",
      "jobTitle": "Avocat",
      "alumniOf": {
        "@type": "Organization",
        "name": "Barreau de Bayonne"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "24 Av. Maréchal Foch",
      "addressLocality": "Bayonne",
      "postalCode": "64100",
      "addressCountry": "FR",
      "addressRegion": "Nouvelle-Aquitaine"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33750234606",
      "contactType": "customer service",
      "email": "laurabaron.avocat@gmail.com",
      "availableLanguage": ["French"],
      "areaServed": ["FR"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "sameAs": [
      "https://www.facebook.com/baron.avocats",
      "https://www.instagram.com/laura_baron_avocat/",
      "https://www.linkedin.com/in/laura-baron-a3a22b43/",
      "https://x.com/cabinet-laura-baron"
    ],
    "priceRange": "€€€",
    "paymentAccepted": ["Cash", "Check", "Bank Transfer"],
    "currenciesAccepted": "EUR",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.4932,
        "longitude": -1.4748
      },
      "geoRadius": "50000",
      "name": "Bayonne, Anglet, Biarritz, Pays Basque, Nouvelle-Aquitaine"
    },
    "serviceType": [
      "Dommage corporel",
      "Indemnisation des victimes",
      "Accidents de la route",
      "Accidents médicaux",
      "Agressions",
      "Accidents de la vie"
    ],
    "knowsAbout": [
      "Loi Badinter",
      "Expertise médicale",
      "CIVI",
      "CCI",
      "ONIAM",
      "Préjudices corporels",
      "Indemnisation"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "45",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData)
      }}
    />
  );
}