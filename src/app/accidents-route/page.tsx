import { Metadata } from 'next';
import Link from 'next/link';
import { Car, Users, Shield, CheckCircle, ArrowRight, Scale, FileText, Clock, Download } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Accidents de la Route • Loi Badinter • Constat Amiable PDF • Avocat Spécialisé',
  description: 'Avocat expert en accidents de la route : indemnisation Loi Badinter 1985, téléchargement gratuit constat amiable PDF, protection piétons, cyclistes, passagers. Expertise juridique complète en dommage corporel.',
};

export default function AccidentsRoutePage() {
  const jsonLD = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Accidents de la Route • Loi Badinter • Constat Amiable PDF • Avocat Spécialisé',
    description: 'Expertise juridique complète en accidents de la route : Loi Badinter 1985, téléchargement gratuit constat amiable PDF, indemnisation piétons, cyclistes, passagers et conducteurs.',
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
      '@id': 'https://laurabaron-avocat.com/accidents-route',
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Loi Badinter',
        description: 'Loi du 5 juillet 1985 sur l\'indemnisation des victimes d\'accidents de la circulation',
        url: 'https://www.legifrance.gouv.fr/loda/id/LEGISCTA000006108633'
      },
      {
        '@type': 'DigitalDocument',
        name: 'Constat Amiable',
        description: 'Document officiel pour déclarer un accident de la route',
        url: 'https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Constat_Amiable.pdf'
      }
    ],
    keywords: 'accident route, loi badinter, constat amiable, indemnisation, dommage corporel, avocat, piéton, cycliste, passager'
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Car size={48} className="text-or mr-4" />
                <div>
                  <h1 className="text-4xl md:text-5xl font-playfair font-bold text-noir mb-2">
                    Accidents de la route
                  </h1>
                  <p className="text-lg text-anthracite">Loi Badinter • Protection renforcée</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                La Loi Badinter de 1985 révolutionne l'indemnisation des victimes d'accidents de circulation
                en instaurant un droit à indemnisation quasi-automatique. Une protection renforcée pour toutes les victimes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Évaluer mon accident
                </Link>
                <Link href="/ressources" className="btn-secondary">
                  Guides pratiques
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Blog/accident-voiture-demarches-blesses-avocat-laura-baron.webp"
                alt="Accident de la route - Expertise juridique"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Loi Badinter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-8 text-center">
              La Loi Badinter : Une protection révolutionnaire
            </h2>
            <div className="bg-gradient-to-r from-or/10 to-yellow-50 p-8 rounded-lg mb-12">
              <div className="flex items-start space-x-4">
                <Scale size={32} className="text-or flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-anthracite mb-4">
                    Principe fondamental
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    La <a href="https://www.legifrance.gouv.fr/loda/id/LEGISCTA000006108633" target="_blank" rel="noopener noreferrer" className="text-or hover:text-yellow-600 underline font-semibold">Loi Badinter du 5 juillet 1985</a> instaure un <strong>droit à indemnisation quasi-automatique</strong>
                    pour les victimes d'accidents de la circulation impliquant un véhicule terrestre à moteur.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Cette loi supprime la notion de faute pour la plupart des victimes et garantit une indemnisation
                    rapide et intégrale des préjudices subis.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-playfair font-semibold text-anthracite">
                  Victimes protégées
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center mb-2">
                      <Users size={20} className="text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-800">Piétons</h4>
                    </div>
                    <p className="text-sm text-green-700">
                      Protection maximale - Indemnisation intégrale sauf faute inexcusable
                      (très rare et difficile à prouver)
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center mb-2">
                      <Car size={20} className="text-blue-600 mr-2" />
                      <h4 className="font-semibold text-blue-800">Cyclistes & EDPM</h4>
                    </div>
                    <p className="text-sm text-blue-700">
                      Vélos, trottinettes, gyropodes - Protection renforcée similaire aux piétons
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <div className="flex items-center mb-2">
                      <Users size={20} className="text-purple-600 mr-2" />
                      <h4 className="font-semibold text-purple-800">Passagers</h4>
                    </div>
                    <p className="text-sm text-purple-700">
                      Indemnisation automatique - Aucune faute ne peut leur être opposée
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <div className="flex items-center mb-2">
                      <Car size={20} className="text-orange-600 mr-2" />
                      <h4 className="font-semibold text-orange-800">Conducteurs</h4>
                    </div>
                    <p className="text-sm text-orange-700">
                      Indemnisation possible, sauf en cas de faute de conduite ayant contribué à l'accident.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-playfair font-semibold text-anthracite">
                  Procédure d'indemnisation
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-or text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-anthracite">Déclaration immédiate</h4>
                      <p className="text-sm text-gray-600">
                        Constat amiable et déclaration aux assurances dans les 5 jours ouvrés
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-or text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-anthracite">Offre d'indemnisation</h4>
                      <p className="text-sm text-gray-600">
                        L'assureur dispose de 8 mois maximum pour présenter une offre
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-or text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-anthracite">Expertise médicale</h4>
                      <p className="text-sm text-gray-600">
                        Évaluation des séquelles par un médecin expert
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-or text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-anthracite">Négociation & règlement</h4>
                      <p className="text-sm text-gray-600">
                        Optimisation de l'indemnisation avec votre avocat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document utile - Constat amiable */}
      <section className="section-padding bg-gradient-to-r from-or/5 to-yellow-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-or/10 rounded-full p-6 flex-shrink-0">
                  <FileText size={48} className="text-or" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold text-noir mb-4">
                    Téléchargez le constat amiable
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Document officiel à remplir immédiatement après un accident de la route.
                    Le constat amiable permet de déclarer l'accident à votre assurance et facilite
                    la procédure d'indemnisation selon la Loi Badinter.
                  </p>
                  <div className="space-y-3 mb-6 text-left">
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        <strong>À remplir sur place</strong> : signatures des deux parties nécessaires
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        <strong>Délai légal</strong> : déclaration à l'assurance dans les 5 jours ouvrés
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        <strong>Document gratuit</strong> : également disponible auprès de votre assureur
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Constat_Amiable.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-or hover:bg-yellow-600 text-noir px-8 py-4 rounded-sm font-semibold transition-colors shadow-md hover:shadow-lg"
                  >
                    <Download size={24} />
                    Télécharger le constat amiable (PDF)
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start space-x-3">
                    <Clock size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Conseils après un accident</h3>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>• Assurez-vous de la sécurité de tous les impliqués</li>
                        <li>• Prenez des photos de l'accident (véhicules, dégâts, environnement)</li>
                        <li>• Notez les coordonnées des témoins éventuels</li>
                        <li>• Ne signez rien d'autre que le constat amiable</li>
                        <li>• Contactez rapidement un avocat spécialisé en dommage corporel</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Préjudices spécifiques */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-12 text-center">
            Préjudices indemnisables
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-6 text-anthracite">
                Préjudices patrimoniaux
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-3 text-anthracite">Pertes économiques directes</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Frais médicaux et hospitaliers
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Perte de revenus pendant l'ITT
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Incidence professionnelle (IPP)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Assistance par tierce personne
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-3 text-anthracite">Frais futurs</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Frais médicaux futurs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Adaptation du logement/véhicule
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Matériel médical et prothèses
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-playfair font-semibold mb-6 text-anthracite">
                Préjudices extrapatrimoniaux
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-3 text-anthracite">Souffrances personnelles</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Souffrances endurées (DFP)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Préjudice esthétique permanent
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Préjudice d'agrément
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Préjudice sexuel
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-3 text-anthracite">Impact social</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Préjudice d'établissement
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Préjudice des proches
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2" />
                      Préjudice de carrière
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise et accompagnement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Notre expertise à votre service
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Une approche personnalisée pour optimiser votre indemnisation après un accident de la route
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-or/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText size={32} className="text-or" />
              </div>
              <h3 className="text-xl font-semibold text-anthracite mb-4">Évaluation du dossier</h3>
              <p className="text-gray-700 leading-relaxed">
                Analyse complète de votre situation, identification de tous les préjudices
                et évaluation du potentiel d'indemnisation.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-or/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-or" />
              </div>
              <h3 className="text-xl font-semibold text-anthracite mb-4">Accompagnement expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                Présence lors de l'expertise médicale, conseil d'un médecin-conseil
                si nécessaire pour défendre vos intérêts.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-or/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale size={32} className="text-or" />
              </div>
              <h3 className="text-xl font-semibold text-anthracite mb-4">Négociation optimale</h3>
              <p className="text-gray-700 leading-relaxed">
                Négociation avec les assurances pour obtenir l'indemnisation
                la plus juste et complète de vos préjudices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-noir text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Victime d'un accident de la route ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Ne laissez pas l'assurance sous-évaluer vos préjudices.
            Contactez-nous pour une évaluation gratuite de votre dossier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-or hover:bg-yellow-600 text-noir px-8 py-4 rounded-sm font-medium transition-colors">
              Évaluation gratuite
            </Link>
            <Link href="/ressources" className="border border-white hover:bg-white hover:text-noir px-8 py-4 rounded-sm font-medium transition-colors">
              Guides pratiques
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton pageType="expertise" />
    </>
  );
}