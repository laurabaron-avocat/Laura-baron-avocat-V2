import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Car, Train, Plane } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import Link from 'next/link';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Contact • Prendre Rendez-vous avec Maître Laura Baron',
  description: 'Contactez Maître Laura Baron, avocat en dommage corporel. Cabinets à Bayonne et Toulouse. Consultation sur rendez-vous, urgences acceptées.',
};

export default function ContactPage() {
  const jsonLD = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Cabinet Maître Laura Baron - Bayonne',
      description: 'Avocat en dommage corporel et indemnisation des victimes',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '24 Av. Maréchal Foch',
        addressLocality: 'Bayonne',
        postalCode: '64100',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.4929,
        longitude: -1.4748,
      },
      telephone: '+33559123456',
      email: 'laurabaron.avocat@gmail.com',
      openingHours: ['Mo-Fr 09:00-18:00'],
      priceRange: 'Consultation sur rendez-vous',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Cabinet Maître Laura Baron - Toulouse',
      description: 'Avocat en dommage corporel et indemnisation des victimes',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Centre ville de toulouse, place du capitole',
        addressLocality: 'Toulouse',
        postalCode: '31000',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.6043,
        longitude: 1.4437,
      },
      telephone: '+33561123456',
      email: 'laurabaron.avocat@gmail.com',
      openingHours: ['Mo-Fr 09:00-18:00'],
      priceRange: 'Consultation sur rendez-vous',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+33559123456',
      email: 'laurabaron.avocat@gmail.com',
      availableLanguage: ['French'],
      areaServed: ['Nouvelle-Aquitaine', 'Occitanie'],
    },
  ];

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
              Nous contacter
            </h1>
            <p className="text-xl text-anthracite mb-8 leading-relaxed">
              Deux cabinets à votre service pour vous accompagner dans votre démarche d'indemnisation. 
              Consultation sur rendez-vous, urgences acceptées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+33750234606" className="btn-primary inline-flex items-center justify-center">
                <Phone size={20} className="mr-2" />
                Appeler maintenant
              </a>
              <Link href="/contact#formulaire" className="btn-secondary inline-flex items-center justify-center">
                Demander un rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Nos cabinets
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Deux implantations stratégiques pour vous recevoir dans les meilleures conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Cabinet Bayonne */}
            <div className="card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin size={32} className="text-or flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-2">
                    Cabinet Bayonne
                  </h3>
                  <p className="text-gray-600">Barreau de Bayonne</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-or mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-anthracite">24 Av. Maréchal Foch</p>
                    <a 
                      href="https://www.google.com/maps/place/24+Av.+Mar%C3%A9chal+Foch,+64100+Bayonne,+France/data=!4m2!3m1!1s0xd51405ff1ec5af5:0x2a57843bc91ed1b0?sa=X&ved=1t:242&ictx=111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-or transition-colors cursor-pointer"
                    >
                      64100 Bayonne, France
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-or flex-shrink-0" />
                  <a href="tel:+33750234606" className="text-anthracite hover:text-or transition-colors">
                    07 50 23 46 06
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-or flex-shrink-0" />
                  <a href="mailto:laurabaron.avocat@gmail.com" className="text-anthracite hover:text-or transition-colors">
                    laurabaron.avocat@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-or flex-shrink-0" />
                  <span className="text-anthracite">Sur rendez-vous uniquement</span>
                </div>
              </div>
              
              {/* Access Info */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-anthracite mb-3">Accès</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Car size={16} className="text-or" />
                    <span>Parking public à proximité</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Train size={16} className="text-or" />
                    <span>Gare SNCF Bayonne (10 min à pied)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Plane size={16} className="text-or" />
                    <span>Aéroport Biarritz-Bayonne (15 min)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cabinet Toulouse */}
            <div className="card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin size={32} className="text-or flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-2">
                    Antenne à Toulouse
                  </h3>
                  <p className="text-gray-600">Antenne • Consultations sur rendez-vous</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-or mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-anthracite">Centre ville de toulouse, place du capitole</p>
                    <p className="text-gray-700">31000 Toulouse</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-or flex-shrink-0" />
                  <a href="tel:+33750234606" className="text-anthracite hover:text-or transition-colors">
                    07 50 23 46 06
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-or flex-shrink-0" />
                  <a href="mailto:laurabaron.avocat@gmail.com" className="text-anthracite hover:text-or transition-colors">
                    laurabaron.avocat@gmail.com
                  </a>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock size={20} className="text-or mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-anthracite">Lundi - Jeudi : 9h - 18h</p>
                    <p className="text-anthracite">Vendredi : 9h - 17h</p>
                    <p className="text-gray-600 text-sm">Samedi - Dimanche : Fermé</p>
                    <p className="text-gray-600 text-sm">Sur rendez-vous uniquement</p>
                  </div>
                </div>
              </div>
              
              {/* Access Info */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-anthracite mb-3">Accès</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Car size={16} className="text-or" />
                    <span>Parking sécurisé disponible</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Train size={16} className="text-or" />
                    <span>Métro ligne A ou B</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Plane size={16} className="text-or" />
                    <span>Aéroport Toulouse-Blagnac (30 min)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-beige" id="formulaire">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
                Demander un rendez-vous
              </h2>
              <p className="text-xl text-gray-700">
                Décrivez votre situation pour une première évaluation de votre dossier
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-playfair font-bold text-noir mb-8 text-center">
              Informations importantes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-amber-50 p-6 rounded-sm border-l-4 border-or">
                <h3 className="font-semibold text-anthracite mb-3">Urgences</h3>
                <p className="text-gray-700 text-sm mb-3">
                  En cas d'urgence (accident récent, délais courts), contactez-nous immédiatement par téléphone. 
                  Nous nous efforçons de vous recevoir dans les 48h.
                </p>
                <p className="text-or font-medium text-sm">
                  ⚠️ Certains délais légaux sont impératifs (CIVI : 1 an, Loi Badinter : 3 ans)
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-sm border-l-4 border-blue-400">
                <h3 className="font-semibold text-anthracite mb-3">Première consultation</h3>
                <p className="text-gray-700 text-sm mb-3">
                  La première consultation permet d'évaluer votre dossier et vos droits. 
                  Apportez tous les documents en votre possession.
                </p>
                <p className="text-blue-700 font-medium text-sm">
                  💡 Consultation remboursée en cas de mandatement
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-sm border-l-4 border-green-400">
                <h3 className="font-semibold text-anthracite mb-3">Aide juridictionnelle</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Nous étudions systématiquement votre éligibilité à l'aide juridictionnelle 
                  lors de notre premier entretien.
                </p>
                <p className="text-green-700 font-medium text-sm">
                  ✓ Prise en charge totale ou partielle possible
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-gray-400">
                <h3 className="font-semibold text-anthracite mb-3">Déontologie</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Conformément aux règles déontologiques, aucune promesse de résultat ne peut être formulée. 
                  Chaque dossier est unique.
                </p>
                <p className="text-gray-700 font-medium text-sm">
                  🔒 Secret professionnel garanti
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton pageType="contact" />
    </>
  );
}