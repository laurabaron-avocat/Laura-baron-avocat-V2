import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plan du Site',
  description: 'Plan du site du Cabinet Laura Baron - Avocat en dommage corporel. Trouvez facilement toutes nos pages et services.',
  alternates: {
    canonical: '/plan-du-site',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PlanDuSite() {
  const siteStructure = [
    {
      title: 'Pages Principales',
      links: [
        { name: 'Accueil', href: '/', description: 'Page d\'accueil du cabinet' },
        { name: 'Avocate & Cabinet', href: '/avocate-cabinet', description: 'Présentation de Maître Laura Baron' },
        { name: 'Contact & Rendez-vous', href: '/contact', description: 'Prendre rendez-vous avec l\'avocate' },
      ]
    },
    {
      title: 'Expertises en Dommage Corporel',
      links: [
        { name: 'Dommage Corporel', href: '/dommage-corporel', description: 'Vue d\'ensemble de nos expertises' },
        { name: 'Accidents de la Route', href: '/accidents-route', description: 'Indemnisation selon la Loi Badinter' },
        { name: 'Accidents Médicaux', href: '/accidents-medicaux', description: 'CCI et ONIAM' },
        { name: 'Agressions', href: '/agression', description: 'Indemnisation CIVI' },
        { name: 'Accidents de la Vie', href: '/accidents-vie', description: 'Accidents du quotidien' },
        { name: 'Attentats', href: '/attentats', description: 'Indemnisation des victimes d\'attentat' },
        { name: 'Indemnisation Victimes', href: '/indemnisation-victimes', description: 'Expertise médicale et calcul des préjudices' },
      ]
    },
    {
      title: 'Ressources Juridiques',
      links: [
        { name: 'Guides & Articles', href: '/ressources', description: 'Ressources et guides pratiques' },
      ]
    },
    {
      title: 'Informations Légales',
      links: [
        { name: 'Mentions Légales', href: '/mentions-legales', description: 'Mentions légales du site' },
        { name: 'Politique de Confidentialité', href: '/politique-confidentialite', description: 'Protection des données personnelles' },
        { name: 'Plan du Site', href: '/plan-du-site', description: 'Cette page - Plan du site' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige via-white to-beige">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-noir mb-6">
            Plan du Site
          </h1>
          <p className="text-xl text-anthracite max-w-3xl mx-auto leading-relaxed">
            Trouvez facilement toutes les informations sur nos services juridiques,
            notre expertise en dommage corporel et nos ressources pratiques.
          </p>
        </div>

        {/* Navigation structurée */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteStructure.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-playfair font-semibold text-anthracite mb-6 border-b border-or/20 pb-3">
                {section.title}
              </h2>
              <nav className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="block group hover:bg-beige/30 rounded-lg p-3 transition-all duration-200 hover:translate-x-1"
                  >
                    <h3 className="font-semibold text-anthracite group-hover:text-or transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Informations complémentaires */}
        <div className="mt-12 text-center bg-white rounded-lg shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-playfair font-semibold text-anthracite mb-4">
            Besoin d'aide pour naviguer ?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Si vous ne trouvez pas l'information recherchée, n'hésitez pas à nous contacter.
            Notre équipe sera ravie de vous orienter vers les ressources appropriées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Nous Contacter
            </Link>
            <Link href="/ressources" className="btn-secondary">
              Consulter nos Guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
