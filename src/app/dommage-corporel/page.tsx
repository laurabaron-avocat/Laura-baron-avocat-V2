import { Metadata } from 'next';
import Link from 'next/link';
import { Car, Heart, Shield, AlertTriangle, Scale, FileText, Users, CheckCircle } from 'lucide-react';
import FAQ from '@/components/ui/FAQ';
import { getFAQByPage } from '@/lib/queries';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Avocat Dommage Corporel Bayonne • Expert Indemnisation Victimes Accident',
  description: 'Avocat expert en dommage corporel à Bayonne : accidents de la route (Loi Badinter), accidents médicaux (CCI/ONIAM), agressions (CIVI). Cabinet au Pays Basque. +10 ans d\'expérience. Consultation sur rendez-vous.',
  keywords: ['avocat dommage corporel Bayonne', 'expert indemnisation Bayonne', 'accident route Bayonne', 'Loi Badinter Bayonne', 'CCI ONIAM Bayonne', 'CIVI Bayonne', 'préjudice corporel Bayonne'],
};

export default async function DommageCorporelPage() {
  // Récupérer les FAQ depuis Supabase
  const faqItems = await getFAQByPage('dommage-corporel');

  const jsonLD = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dommage Corporel • Expertise en Indemnisation des Victimes',
    description: 'Guide complet sur le dommage corporel : accidents de la route, médicaux, agressions, accidents de la vie. Expertise juridique en indemnisation.',
    author: {
      '@type': 'Person',
      name: 'Maître Laura Baron',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cabinet Maître Laura Baron',
    },
    datePublished: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://laurabaron-avocat.com/dommage-corporel',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-beige via-white to-beige section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-noir mb-6">
              Avocat Dommage Corporel Bayonne
            </h1>
            <p className="text-xl text-anthracite mb-8 leading-relaxed">
              <strong>Cabinet d'avocat spécialisé en dommage corporel à Bayonne</strong>. Expert en indemnisation des victimes d'accidents de la route, accidents médicaux, agressions.
              Une approche personnalisée pour chaque situation au Pays Basque.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Évaluer mon dossier
              </Link>
              <Link href="/indemnisation-victimes" className="btn-secondary">
                Comprendre le processus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'expertise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Nos domaines d'expertise
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Une expertise complète en dommage corporel pour vous accompagner 
              dans toutes les situations d'accident et d'indemnisation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Accidents de la route */}
            <div className="card p-8" id="accidents-route">
              <div className="flex items-start space-x-4 mb-6">
                <Car size={40} className="text-or flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-2">
                    Accidents de la route
                  </h3>
                  <p className="text-gray-600">Loi Badinter • Protection renforcée</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  La Loi Badinter de 1985 révolutionne l'indemnisation des victimes d'accidents 
                  de la circulation en instaurant un droit à indemnisation quasi-automatique.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-anthracite">Victimes protégées :</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Piétons (protection maximale)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Cyclistes et utilisateurs d'EDPM
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Passagers de véhicules
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Conducteurs (sauf faute inexcusable)
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    href="/accidents-route"
                    className="inline-flex items-center text-or hover:text-yellow-600 font-medium transition-colors"
                  >
                    En savoir plus
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Accidents médicaux */}
            <div className="card p-8" id="accidents-medicaux">
              <div className="flex items-start space-x-4 mb-6">
                <Heart size={40} className="text-or flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-2">
                    Accidents médicaux
                  </h3>
                  <p className="text-gray-600">CCI • ONIAM • Expertise médicale</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Erreurs médicales, infections nosocomiales, accidents thérapeutiques : 
                  des procédures spécifiques pour une indemnisation adaptée.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-anthracite">Procédures :</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center">
                      <FileText size={16} className="text-or mr-2" />
                      CCI (Commission de Conciliation et d'Indemnisation)
                    </li>
                    <li className="flex items-center">
                      <FileText size={16} className="text-or mr-2" />
                      ONIAM (Office National d'Indemnisation)
                    </li>
                    <li className="flex items-center">
                      <FileText size={16} className="text-or mr-2" />
                      Expertise médicale contradictoire
                    </li>
                    <li className="flex items-center">
                      <FileText size={16} className="text-or mr-2" />
                      Recours judiciaire si nécessaire
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    href="/accidents-medicaux"
                    className="inline-flex items-center text-or hover:text-yellow-600 font-medium transition-colors"
                  >
                    En savoir plus
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Agressions - CIVI */}
            <div className="card p-8" id="agressions">
              <div className="flex items-start space-x-4 mb-6">
                <Shield size={40} className="text-or flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-2">
                    Agression
                  </h3>
                  <p className="text-gray-600">Victimes d'infractions • Solidarité nationale</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  La Commission d'Indemnisation des Victimes d'Infractions garantit 
                  une réparation même lorsque l'auteur est insolvable ou non identifié.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-anthracite">Infractions couvertes :</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center">
                      <Shield size={16} className="text-or mr-2" />
                      Agressions physiques et sexuelles
                    </li>
                    <li className="flex items-center">
                      <Shield size={16} className="text-or mr-2" />
                      Vols avec violence
                    </li>
                    <li className="flex items-center">
                      <Shield size={16} className="text-or mr-2" />
                      Attentats et actes de terrorisme
                    </li>
                    <li className="flex items-center">
                      <Shield size={16} className="text-or mr-2" />
                      Violences conjugales et familiales
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    href="/agression"
                    className="inline-flex items-center text-or hover:text-yellow-600 font-medium transition-colors"
                  >
                    En savoir plus
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Accidents de la vie */}
            <div className="card p-8" id="accidents-vie">
              <div className="flex items-start space-x-4 mb-6">
                <AlertTriangle size={40} className="text-or flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-2">
                    Accidents de la vie
                  </h3>
                  <p className="text-gray-600">Responsabilité civile • Assurances</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Accidents domestiques, de loisirs, scolaires ou sportifs : 
                  expertise de la responsabilité et optimisation de l'indemnisation.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-anthracite">Situations fréquentes :</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center">
                      <AlertTriangle size={16} className="text-or mr-2" />
                      Accidents domestiques et de bricolage
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle size={16} className="text-or mr-2" />
                      Accidents de sport et de loisirs
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle size={16} className="text-or mr-2" />
                      Accidents scolaires et de la vie courante
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle size={16} className="text-or mr-2" />
                      Morsures d'animaux et chutes
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    href="/accidents-vie"
                    className="inline-flex items-center text-or hover:text-yellow-600 font-medium transition-colors"
                  >
                    En savoir plus
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Préjudices indemnisables */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-12 text-center">
              Préjudices indemnisables
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-6 text-anthracite">
                  Préjudices patrimoniaux
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-sm">
                    <h4 className="font-semibold mb-2">Pertes économiques</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Perte de revenus (ITT, IPP)</li>
                      <li>• Frais médicaux et futurs</li>
                      <li>• Frais d'adaptation du logement/véhicule</li>
                      <li>• Assistance par tierce personne</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-sm">
                    <h4 className="font-semibold mb-2">Frais divers</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Frais de transport et d'hébergement</li>
                      <li>• Matériel médical et prothèses</li>
                      <li>• Rééducation et kinésithérapie</li>
                      <li>• Soutien psychologique</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-6 text-anthracite">
                  Préjudices extrapatrimoniaux
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-sm">
                    <h4 className="font-semibold mb-2">Atteintes personnelles</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Souffrances endurées</li>
                      <li>• Préjudice esthétique</li>
                      <li>• Préjudice d'agrément</li>
                      <li>• Préjudice sexuel</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-sm">
                    <h4 className="font-semibold mb-2">Impact social et familial</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Préjudice d'établissement</li>
                      <li>• Préjudice scolaire/universitaire</li>
                      <li>• Préjudice de carrière</li>
                      <li>• Préjudice des proches</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Les réponses aux questions essentielles sur le dommage corporel et l'indemnisation
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FAQ items={faqItems} pageKey="dommage-corporel" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-noir text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Besoin d'une expertise en dommage corporel ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Chaque situation est unique. Contactez-nous pour une évaluation personnalisée 
            de votre dossier et de vos droits à indemnisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-or hover:bg-yellow-600 text-noir px-8 py-4 rounded-sm font-medium transition-colors">
              Évaluer mon dossier
            </Link>
            <Link href="/indemnisation-victimes" className="border border-white hover:bg-white hover:text-noir px-8 py-4 rounded-sm font-medium transition-colors">
              Comprendre le processus
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton pageType="expertise" />
    </>
  );
}