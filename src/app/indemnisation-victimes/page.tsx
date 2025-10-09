import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Users, Clock, Scale, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import Timeline from '@/components/ui/Timeline';
import FAQ from '@/components/ui/FAQ';
import { getFAQByPage } from '@/lib/queries';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Indemnisation des Victimes • Processus et Démarches Complètes',
  description: 'Guide complet du processus d\'indemnisation des victimes : de la constitution du dossier à l\'obtention de votre indemnisation. Expertise médicale, évaluation des préjudices.',
};

const processSteps = [
  {
    title: 'Constitution du dossier',
    description: 'Rassemblement de tous les documents nécessaires : certificats médicaux, témoignages, photos, factures. Analyse juridique de votre situation et évaluation de vos droits.',
  },
  {
    title: 'Déclaration et procédures',
    description: 'Déclaration auprès des organismes compétents (assurances, CIVI, CCI/ONIAM). Respect des délais légaux et constitution des dossiers administratifs.',
  },
  {
    title: 'Expertise médicale',
    description: 'Préparation et accompagnement lors de l\'expertise. Mission d\'un médecin-conseil pour défendre vos intérêts. Contestation si nécessaire.',
  },
  {
    title: 'Évaluation des préjudices',
    description: 'Chiffrage précis selon la nomenclature Dintilhac. Distinction entre préjudices patrimoniaux et extrapatrimoniaux. Calcul des indemnités.',
  },
  {
    title: 'Négociation et indemnisation',
    description: 'Négociation avec les assureurs ou organismes payeurs. Saisine du tribunal si nécessaire. Obtention d\'une indemnisation juste et complète.',
  },
];

const checklistItems = [
  'Certificat médical initial détaillé',
  'Tous les comptes-rendus médicaux',
  'Justificatifs de frais médicaux',
  'Bulletins de salaire (12 derniers mois)',
  'Attestation employeur (arrêts de travail)',
  'Photos des blessures et séquelles',
  'Témoignages de proches',
  'Factures de frais divers',
  'Justificatifs de perte de revenus',
  'Documents d\'assurance',
];

export default async function IndemnisationVictimesPage() {
  // Récupérer les FAQ depuis Supabase
  const faqItems = await getFAQByPage('indemnisation');

  const jsonLD = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Processus d\'indemnisation des victimes d\'accidents',
    description: 'Guide complet du processus d\'indemnisation : constitution du dossier, expertise médicale, évaluation des préjudices, négociation.',
    step: processSteps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
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
              Indemnisation des Victimes
            </h1>
            <p className="text-xl text-anthracite mb-8 leading-relaxed">
              Comprendre le processus d'indemnisation étape par étape. 
              De la constitution de votre dossier à l'obtention de votre indemnisation complète.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Évaluer mon dossier
              </Link>
              <Link href="/dommage-corporel" className="btn-secondary">
                Nos domaines d'expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Processus Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Le processus d'indemnisation
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Une méthode éprouvée en 5 étapes pour optimiser votre indemnisation 
              et défendre efficacement vos droits.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Timeline steps={processSteps} />
          </div>
        </div>
      </section>

      {/* Premiers gestes en cas d'accident */}
      <section className="section-padding bg-beige border-t-4 border-or">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-12 text-center">
              Les premiers gestes en cas d'accident
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-anthracite">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-anthracite rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-anthracite leading-relaxed">
                    <strong>N'acceptez pas d'offre d'une compagnie d'assurance</strong>, même si celle-ci émane de votre propre assureur !
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-or">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-or rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-anthracite leading-relaxed">
                    <strong>Contactez, sans attendre, un Avocat en réparation du dommage corporel</strong> afin de connaître vos droits.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-noir">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-noir rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-anthracite leading-relaxed">
                    <strong>Ne vous rendez jamais seul à une expertise</strong> même si elle est diligentée par votre propre assureur. L'indemnisation étant déterminée sur la base du rapport d'expertise, il est indispensable que vous soyez assisté par un médecin conseil.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/contact" className="btn-primary inline-flex items-center">
                <Phone size={20} className="mr-2" />
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
                Checklist des documents
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Les pièces essentielles à rassembler pour constituer un dossier solide 
                et optimiser votre indemnisation.
              </p>
              <div className="flex items-center space-x-6 text-anthracite">
                <div className="flex items-center">
                  <FileText size={24} className="text-or mr-2" />
                  <span>Documents médicaux</span>
                </div>
                <div className="flex items-center">
                  <Scale size={24} className="text-or mr-2" />
                  <span>Justificatifs financiers</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <h3 className="text-xl font-playfair font-semibold mb-6 text-anthracite">
                Documents à rassembler
              </h3>
              <div className="space-y-3">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-sm border-l-4 border-or">
                <div className="flex items-start space-x-2">
                  <AlertCircle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800">
                    <strong>Important :</strong> Conservez tous vos documents originaux. 
                    Ne transmettez que des copies aux assureurs et organismes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise médicale */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
                L'expertise médicale
              </h2>
              <p className="text-xl text-gray-700">
                Moment clé de votre indemnisation qui détermine l'évaluation de vos préjudices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText size={24} className="text-or" />
                </div>
                <h3 className="text-lg font-playfair font-semibold mb-3">Avant l'expertise</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>Constitution du dossier médical</li>
                  <li>Liste détaillée des doléances</li>
                  <li>Choix du médecin-conseil</li>
                  <li>Préparation des questions</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-or" />
                </div>
                <h3 className="text-lg font-playfair font-semibold mb-3">Pendant l'expertise</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>Accompagnement avocat/médecin</li>
                  <li>Examen médical complet</li>
                  <li>Interrogatoire sur les séquelles</li>
                  <li>Discussion contradictoire</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale size={24} className="text-or" />
                </div>
                <h3 className="text-lg font-playfair font-semibold mb-3">Après l'expertise</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>Analyse du rapport d'expertise</li>
                  <li>Contestation si nécessaire</li>
                  <li>Chiffrage des préjudices</li>
                  <li>Négociation de l'indemnisation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur le processus d'indemnisation
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FAQ items={faqItems} pageKey="indemnisation" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-noir text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Prêt à commencer votre démarche d'indemnisation ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Chaque jour compte dans une procédure d'indemnisation. 
            Contactez-nous dès maintenant pour une première évaluation de votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+33750234606" className="bg-or hover:bg-yellow-600 text-noir px-8 py-4 rounded-sm font-medium transition-colors inline-flex items-center justify-center">
              <Phone size={20} className="mr-2" />
              Appeler maintenant
            </Link>
            <Link href="/contact" className="border border-white hover:bg-white hover:text-noir px-8 py-4 rounded-sm font-medium transition-colors">
              Demander un rendez-vous
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton pageType="expertise" />
    </>
  );
}