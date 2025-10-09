import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CookieConsent from '@/components/ui/CookieConsent';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import WebsiteSchema from '@/components/seo/WebsiteSchema';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Avocat Dommage Corporel Bayonne | Maître Laura Baron • Indemnisation Accident',
    template: '%s | Maître Laura Baron • Avocat Bayonne',
  },
  description: 'Avocat en dommage corporel à Bayonne. Indemnisation des victimes d\'accidents de la route (Loi Badinter), accidents médicaux (CCI/ONIAM), agressions (CIVI). Cabinet à Bayonne, Pays Basque.',
  keywords: ['avocat dommage corporel Bayonne', 'indemnisation accident Bayonne', 'avocat accident route Bayonne', 'Loi Badinter Bayonne', 'avocat Pays Basque', 'indemnisation victimes', 'CIVI', 'CCI', 'ONIAM', 'expertise médicale'],
  authors: [{ name: 'Maître Laura Baron' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://laurabaron-avocat.com',
    siteName: 'Maître Laura Baron - Avocat Dommage Corporel Bayonne',
    title: 'Avocat Dommage Corporel Bayonne | Maître Laura Baron • Indemnisation Accident',
    description: 'Avocat en dommage corporel à Bayonne, Pays Basque. Expert en indemnisation des victimes d\'accidents de la route, accidents médicaux, agressions.',
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
    description: 'Avocat en dommage corporel à Bayonne, Pays Basque. Indemnisation des victimes d\'accidents.',
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