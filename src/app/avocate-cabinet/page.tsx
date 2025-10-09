import { Metadata } from 'next';
import { Scale, Award, Users, Clock, MapPin, Phone } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Présentation de Maître Laura Baron • Avocat Dommage Corporel',
  description: 'Découvrez le parcours et l\'expertise de Maître Laura Baron, avocat en dommage corporel. Inscrite au Barreau de Bayonne depuis 2013.',
};

export default function AvocateCabinetPage() {
  const jsonLD = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Maître Laura Baron',
      jobTitle: 'Avocat',
      worksFor: {
        '@type': 'Organization',
        name: 'Cabinet Maître Laura Baron',
        address: [
          {
            '@type': 'PostalAddress',
            streetAddress: '24 Av. Maréchal Foch',
            addressLocality: 'Bayonne',
            postalCode: '64100',
            addressCountry: 'FR',
          },
          {
            '@type': 'PostalAddress',
            streetAddress: '[Adresse Toulouse]',
            addressLocality: 'Toulouse',
            postalCode: '31000',
            addressCountry: 'FR',
          },
        ],
      },
      alumniOf: '[Université - À compléter]',
      knowsAbout: ['Droit du dommage corporel', 'Indemnisation des victimes', 'Loi Badinter'],
      memberOf: 'Barreau de Bayonne',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Cabinet Maître Laura Baron',
      description: 'Cabinet d\'avocat en dommage corporel et indemnisation des victimes',
      founder: 'Maître Laura Baron',
      foundingDate: '2013',
      legalName: 'Cabinet Maître Laura Baron',
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: '[Adresse Bayonne]',
          addressLocality: 'Bayonne',
          postalCode: '64100',
          addressCountry: 'FR',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '[Adresse Toulouse]',
          addressLocality: 'Toulouse',
          postalCode: '31000',
          addressCountry: 'FR',
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-beige via-white to-beige py-4 md:py-12">
        <div className="container-custom">
          {/* Version Mobile */}
          <div className="lg:hidden">
            {/* Titre et description en premier sur mobile */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-playfair font-bold text-noir mb-4">
                Maître Laura Baron
              </h1>
              <p className="text-lg text-anthracite mb-6 leading-relaxed px-4">
                Avocat en dommage corporel, je mets mon expertise au service
                des victimes d'accidents pour obtenir une juste indemnisation de leurs préjudices.
              </p>
            </div>

            {/* Première image sur mobile */}
            <div className="w-full max-w-sm mx-auto mb-6">
              <img
                src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Maitre-Laura-Baron-Avocat-barreau-bayonne-specialiste-dommage-corporelle-accident-de-la-vie.jpg"
                alt="Maître Laura Baron, avocat au Barreau de Bayonne, en dommage corporel"
                className="w-full h-[28rem] object-cover object-top rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                loading="eager"
              />
            </div>

            {/* Texte complet entre les images sur mobile */}
            <div className="bg-white p-6 rounded-sm shadow-lg mx-4 mb-6">
              <h2 className="text-xl font-playfair font-semibold mb-4 text-anthracite text-center">
                Maître Laura Baron
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                Avocate au barreau de Bayonne, diplômée de l'École des Avocats de Toulouse où j'ai obtenu le CAPA, je consacre mon activité à la défense des victimes de dommages corporels : accidents de la route, erreurs médicales, agressions ou accidents de la vie. Consciente de la fragilité et des inquiétudes que traversent mes clients, je place l'écoute, la clarté et la disponibilité au cœur de ma pratique. Empathique et pédagogue à vos côtés, mais combative face aux compagnies d'assurances, je m'engage à obtenir pour vous une indemnisation juste et complète avec une approche à la fois humaine et déterminée.
              </p>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <Phone size={16} className="text-or mr-3" />
                  <a href="tel:+33750234606" className="hover:text-or transition-colors font-medium">
                    07 50 23 46 06
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin size={16} className="text-or mr-3" />
                  <a href="mailto:laurabaron.avocat@gmail.com" className="hover:text-or transition-colors font-medium">
                    laurabaron.avocat@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Seconde image sur mobile */}
            <div className="w-full max-w-sm mx-auto">
              <img
                src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Profile-Laura-Baron-Avocat-barreau-bayonne-specialiste-dommage-corporelle-accident-de-la-route.jpg"
                alt="Portrait professionnel de Maître Laura Baron"
                className="w-full h-80 object-cover object-center rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                loading="eager"
              />
            </div>
          </div>

          {/* Version Desktop - Design original conservé */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:-mt-48">
              <div className="pt-72">
                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-noir mb-6">
                  Maître Laura Baron
                </h1>
              <p className="text-xl text-anthracite mb-8 leading-relaxed">
                Avocat en dommage corporel, je mets mon expertise au service
                des victimes d'accidents pour obtenir une juste indemnisation de leurs préjudices.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                <div className="flex items-center">
                  <Scale size={20} className="text-or mr-2" />
                  <span>Barreau de Bayonne</span>
                </div>
                <div className="flex items-center">
                  <Award size={20} className="text-or mr-2" />
                  <span>Serment 2013</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={20} className="text-or mr-2" />
                  <span>Bayonne </span>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="text-or mr-2" />
                  <span>+10 ans d'expérience</span>
                </div>
              </div>
              </div>

              {/* Photo de profil */}
              <div className="max-w-md mt-72">
                <img
                  src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Profile-Laura-Baron-Avocat-barreau-bayonne-specialiste-dommage-corporelle-accident-de-la-route.jpg"
                  alt="Portrait professionnel de Maître Laura Baron"
                  className="w-full h-96 object-cover object-center rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  loading="eager"
                />
              </div>
            </div>
            <div className="order-2">
              <div className="flex flex-col items-center">
                {/* Photo principale de Maître Laura Baron */}
                <div className="mb-8 w-full max-w-md">
                  <img
                    src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Maitre-Laura-Baron-Avocat-barreau-bayonne-specialiste-dommage-corporelle-accident-de-la-vie.jpg"
                    alt="Maître Laura Baron, avocat au Barreau de Bayonne, en dommage corporel"
                    className="w-full h-[500px] lg:h-[600px] object-cover object-top rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                    loading="eager"
                  />
                </div>
                <div className="bg-white p-8 rounded-sm shadow-lg w-full">
                  <h2 className="text-2xl font-playfair font-semibold mb-4 text-anthracite">
                    Maître Laura Baron
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Avocate au barreau de Bayonne, diplômée de l'École des Avocats de Toulouse où j'ai obtenu le CAPA, je consacre mon activité à la défense des victimes de dommages corporels : accidents de la route, erreurs médicales, agressions ou accidents de la vie. Consciente de la fragilité et des inquiétudes que traversent mes clients, je place l'écoute, la clarté et la disponibilité au cœur de ma pratique. Empathique et pédagogue à vos côtés, mais combative face aux compagnies d'assurances, je m'engage à obtenir pour vous une indemnisation juste et complète avec une approche à la fois humaine et déterminée.
                  </p>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone size={16} className="text-or mr-3" />
                      <a href="tel:+33750234606" className="hover:text-or transition-colors font-medium">
                        07 50 23 46 06
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="text-or mr-3" />
                      <a href="mailto:laurabaron.avocat@gmail.com" className="hover:text-or transition-colors font-medium">
                        laurabaron.avocat@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Valeurs et méthode */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-12 text-center">
              Valeurs et méthode
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-6 text-anthracite">
                  Nos valeurs
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Scale size={24} className="text-or mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Expertise juridique</h4>
                      <p className="text-gray-700 text-sm">
                        Activité exclusive en dommage corporel pour une expertise pointue 
                        et une défense optimale de vos intérêts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users size={24} className="text-or mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Accompagnement humain</h4>
                      <p className="text-gray-700 text-sm">
                        Écoute, empathie et soutien tout au long de la procédure. 
                        Chaque client mérite une attention personnalisée.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award size={24} className="text-or mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Déontologie</h4>
                      <p className="text-gray-700 text-sm">
                        Respect strict du secret professionnel et des règles déontologiques. 
                        Transparence sur les honoraires et les démarches.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-6 text-anthracite" id="methode">
                  Notre méthode
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-sm">
                    <h4 className="font-semibold mb-2">Réseau médical expert</h4>
                    <p className="text-gray-700 text-sm">
                      Collaboration avec des médecins-conseils experts pour optimiser 
                      l'évaluation de vos préjudices lors des expertises.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-sm">
                    <h4 className="font-semibold mb-2">Préparation minutieuse</h4>
                    <p className="text-gray-700 text-sm">
                      Constitution rigoureuse du dossier, préparation aux expertises 
                      et anticipation des arguments adverses.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-sm">
                    <h4 className="font-semibold mb-2">Communication régulière</h4>
                    <p className="text-gray-700 text-sm">
                      Points d'étape réguliers, explications claires des procédures 
                      et réponse sous 48h à vos interrogations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos du cabinet */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-12 text-center">
              Nos locaux à Bayonne
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Maitre-Laura-Baron-Avocat-barreau-bayonne-specialiste-dommage-corporelle-accident-de-la-route-salle-dattente.jpg"
                  alt="Salle d'attente du cabinet - Maître Laura Baron"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-anthracite mb-2">Salle d'attente</h3>
                  <p className="text-gray-600 text-sm">Espace d'accueil chaleureux et confortable pour nos clients</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Maitre-Laura-Baron-Avocat-barreau-bayonne-specialiste-erreur-medicale.jpg"
                  alt="Bureau de consultation - Maître Laura Baron"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-anthracite mb-2">Bureau de consultation</h3>
                  <p className="text-gray-600 text-sm">Environnement professionnel et confidentiel pour nos entretiens</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Maitre-Laura-Baron-Avocat-bayonne-rendez-vous-dommage-corporelle-accident-de-la-route.jpg"
                  alt="Espace de rendez-vous - Cabinet Maître Laura Baron"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-anthracite mb-2">Espace de rendez-vous</h3>
                  <p className="text-gray-600 text-sm">Cadre adapté pour un accompagnement personnalisé</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center bg-beige p-8 rounded-sm">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-or mr-3" />
                <h3 className="text-xl font-playfair font-semibold text-anthracite">Cabinet de Bayonne</h3>
              </div>
              <p className="text-gray-700 mb-4">
                24 Avenue Maréchal Foch, 64100 Bayonne
              </p>
              <p className="text-sm text-gray-600">
                Accès facilité • Parking à proximité • Accessible aux personnes à mobilité réduite
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honoraires */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-12 text-center" id="honoraires">
              Honoraires et modalités
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-sm">
                <h3 className="text-xl font-playfair font-semibold mb-4 text-anthracite">
                  Consultation initiale
                </h3>
                <p className="text-gray-700 mb-4">
                  Premier entretien d'évaluation de votre dossier et de vos droits pour déterminer les meilleures stratégies d'indemnisation.
                </p>
                <div className="text-2xl font-bold text-or mb-2"><strong>GRATUITE</strong></div>
                <p className="text-sm text-gray-600">
                  Durée : 1h • Analyse personnalisée de votre situation
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-sm">
                <h3 className="text-xl font-playfair font-semibold mb-4 text-anthracite">
                  Honoraire de résultat
                </h3>
                <p className="text-gray-700 mb-4">
                  L'honoraire dépend de la teneur du dossier et de sa difficulté, compte tenu du temps qui doit y être alloué pour sa prise en charge. Il sera établi au cours de l'étude du dossier et soumis au client par une convention d'honoraire.
                </p>
                <div className="text-2xl font-bold text-or mb-2">Sur mesure</div>
                <p className="text-sm text-gray-600">
                  Uniquement en cas de succès • Convention d'honoraire personnalisée
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-beige p-8 rounded-sm">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-anthracite text-center">
                Prise en charge financière
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Protection juridique</h4>
                  <p className="text-gray-700 text-sm">
                    Lors de la première consultation, l'avocate vérifie si votre dossier peut être pris en charge par une protection juridique ou un contrat d'assurance qui le prévoit.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Aide juridictionnelle</h4>
                  <p className="text-gray-700 text-sm">
                    Le cabinet ne traite pas les dossiers à l'aide juridictionnelle.
                    Nous privilégions un accompagnement personnalisé avec des honoraires adaptés à chaque situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="section-padding bg-noir text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12">
              Nos engagements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Clock size={48} className="mx-auto mb-4 text-or" />
                <h3 className="text-xl font-playfair font-semibold mb-2">Réactivité</h3>
                <p className="text-gray-300 text-sm">
                  Réponse sous 48h à vos messages et disponibilité pour les urgences
                </p>
              </div>
              <div>
                <Scale size={48} className="mx-auto mb-4 text-or" />
                <h3 className="text-xl font-playfair font-semibold mb-2">Transparence</h3>
                <p className="text-gray-300 text-sm">
                  Information claire sur les démarches, délais et coûts prévisionnels
                </p>
              </div>
              <div>
                <Users size={48} className="mx-auto mb-4 text-or" />
                <h3 className="text-xl font-playfair font-semibold mb-2">Accompagnement</h3>
                <p className="text-gray-300 text-sm">
                  Soutien et conseil à chaque étape de votre indemnisation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton pageType="about" />
    </>
  );
}