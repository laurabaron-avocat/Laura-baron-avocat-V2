import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CookieConsent from '@/components/ui/CookieConsent';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import WebsiteSchema from '@/components/seo/WebsiteSchema';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Avocat Dommage Corporel Bayonne | Maître Laura Baron • Expert Indemnisation Accident',
    template: '%s | Maître Laura Baron • Avocat Dommage Corporel Bayonne',
  },
  description: 'Maître Laura Baron, avocate experte en dommage corporel à Bayonne, Pays Basque. Cabinet spécialisé indemnisation victimes : accidents de la route (Loi Badinter), accidents médicaux (CCI/ONIAM), agressions (CIVI). Consultation sur rendez-vous.',
  keywords: [
    'avocat dommage corporel Bayonne',
    'avocate dommage corporel Bayonne',
    'avocat spécialisé dommage corporel Bayonne',
    'expert dommage corporel Bayonne',
    'cabinet avocat accident Bayonne',
    'indemnisation accident Bayonne',
    'avocat Loi Badinter Bayonne',
    'avocat accident route Bayonne',
    'avocat préjudice corporel Bayonne',
    'meilleur avocat dommage corporel Bayonne',
    'avocat indemnisation victimes Bayonne',
    'cabinet dommage corporel Pays Basque',
    'avocat accident Anglet',
    'avocat accident Biarritz',
    'CIVI Bayonne',
    'CCI ONIAM',
    'expertise médicale contradictoire'
  ],
  authors: [{ name: 'Maître Laura Baron' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://laurabaron-avocat.com',
    siteName: 'Maître Laura Baron - Avocat Dommage Corporel Bayonne',
    title: 'Avocat Dommage Corporel Bayonne | Maître Laura Baron • Expert Indemnisation',
    description: 'Maître Laura Baron, avocate experte en dommage corporel à Bayonne, Pays Basque. Cabinet spécialisé indemnisation victimes : accidents de la route, accidents médicaux, agressions. Consultation sur rendez-vous.',
    images: [
      {
        url: 'https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Logo-laura-baron-maitre-avocat-bayonne.png',
        width: 1200,
        height: 630,
        alt: 'Logo Maître Laura Baron - Avocat Dommage Corporel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avocat Dommage Corporel Bayonne | Maître Laura Baron',
    description: 'Maître Laura Baron, avocate experte en dommage corporel à Bayonne, Pays Basque. Cabinet spécialisé indemnisation victimes d\'accidents.',
    images: ['https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Logo-laura-baron-maitre-avocat-bayonne.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Favicon/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Favicon/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Favicon/favicon-96x96.png" />
        <link rel="manifest" href="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Favicon/site.webmanifest" />
      </head>
      <body className="antialiased">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17771701752"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17771701752');
          `}
        </Script>
        <OrganizationSchema />
        <WebsiteSchema />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}