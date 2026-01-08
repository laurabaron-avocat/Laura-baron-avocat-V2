import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, MapPin, Phone, Mail, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mentions Légales • Cabinet Maître Laura Baron',
  description: 'Mentions légales du cabinet Maître Laura Baron, avocat en dommage corporel. Informations légales obligatoires et coordonnées professionnelles.',
  alternates: {
    canonical: '/mentions-legales',
  },};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-beige via-white to-beige py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-noir mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl text-anthracite mb-8 leading-relaxed max-w-3xl mx-auto">
              Informations légales obligatoires concernant le cabinet Maître Laura Baron, 
              avocat en dommage corporel.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Identification du cabinet */}
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="w-6 h-6 text-or" />
                <h2 className="text-2xl font-playfair font-bold text-anthracite">
                  Identification du Cabinet
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-anthracite mb-2">Dénomination</h3>
                    <p className="text-gray-700">Cabinet Maître Laura Baron</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-anthracite mb-2">Forme juridique</h3>
                    <p className="text-gray-700">Avocat - Profession libérale</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-anthracite mb-2">Inscription</h3>
                    <p className="text-gray-700">Barreau de Bayonne depuis 2013</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-anthracite mb-2">Numéro RPPS</h3>
                    <p className="text-gray-700">[À compléter]</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-anthracite mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Adresse du siège
                    </h3>
                    <a 
                      href="https://www.google.com/maps/place/24+Av.+Mar%C3%A9chal+Foch,+64100+Bayonne,+France/data=!4m2!3m1!1s0xd51405ff1ec5af5:0x2a57843bc91ed1b0?sa=X&ved=1t:242&ictx=111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-or transition-colors"
                    >
                      24 Av. Maréchal Foch<br />
                      64100 Bayonne, France
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-anthracite mb-2 flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Téléphone
                    </h3>
                    <a href="tel:+33750234606" className="text-gray-700 hover:text-or transition-colors">
                      07 50 23 46 06
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-anthracite mb-2 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </h3>
                    <a href="mailto:contact@cabinet-baron.fr" className="text-gray-700 hover:text-or transition-colors">
                      contact@cabinet-baron.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Directeur de publication */}
            <div className="card p-8">
              <h2 className="text-2xl font-playfair font-bold text-anthracite mb-6">
                Directeur de Publication
              </h2>
              <p className="text-gray-700">
                Maître Laura Baron, avocat inscrit au Barreau de Bayonne, 
                est responsable de la publication du contenu de ce site internet.
              </p>
            </div>

            {/* Hébergement */}
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-6 h-6 text-or" />
                <h2 className="text-2xl font-playfair font-bold text-anthracite">
                  Hébergement du Site
                </h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-anthracite mb-2">Hébergeur</h3>
                  <p className="text-gray-700">
                    Netlify, Inc.<br />
                    2325 3rd Street, Suite 296<br />
                    San Francisco, CA 94107, USA<br />
                    <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-or hover:underline">
                      www.netlify.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Règles déontologiques */}
            <div className="card p-8">
              <h2 className="text-2xl font-playfair font-bold text-anthracite mb-6">
                Règles Déontologiques
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  La profession d'avocat est régie par les textes suivants :
                </p>
                
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Loi n° 71-1130 du 31 décembre 1971 portant réforme de certaines professions judiciaires et juridiques
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Décret n° 91-1197 du 27 novembre 1991 organisant la profession d'avocat
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Règlement Intérieur National (RIN) de la profession d'avocat
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Code de déontologie des avocats européens
                  </li>
                </ul>
                
                <div className="bg-amber-50 p-4 rounded-sm border-l-4 border-or mt-6">
                  <p className="text-amber-800 text-sm">
                    <strong>Important :</strong> Conformément à l'article 10 du RIN, aucune promesse de résultat 
                    ne peut être formulée. Chaque dossier est unique et les résultats dépendent des circonstances 
                    particulières de chaque affaire.
                  </p>
                </div>
              </div>
            </div>

            {/* Assurance professionnelle */}
            <div className="card p-8">
              <h2 className="text-2xl font-playfair font-bold text-anthracite mb-6">
                Assurance Responsabilité Civile Professionnelle
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-anthracite mb-2">Compagnie d'assurance</h3>
                  <p className="text-gray-700">[À compléter avec les informations de l'assurance RCP]</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-anthracite mb-2">Couverture géographique</h3>
                  <p className="text-gray-700">France et Union Européenne</p>
                </div>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="card p-8">
              <h2 className="text-2xl font-playfair font-bold text-anthracite mb-6">
                Propriété Intellectuelle
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur 
                  et appartient au Cabinet Maître Laura Baron ou à ses partenaires.
                </p>
                
                <p className="text-gray-700">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments 
                  du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                </p>
                
                <p className="text-gray-700">
                  Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera 
                  considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des 
                  articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
              </div>
            </div>

            {/* Limitation de responsabilité */}
            <div className="card p-8">
              <h2 className="text-2xl font-playfair font-bold text-anthracite mb-6">
                Limitation de Responsabilité
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Les informations contenues sur ce site sont données à titre indicatif et ne sauraient engager 
                  la responsabilité du Cabinet Maître Laura Baron. Elles ne constituent pas un conseil juridique 
                  personnalisé et ne peuvent se substituer à une consultation.
                </p>
                
                <p className="text-gray-700">
                  Le Cabinet Maître Laura Baron s'efforce de fournir des informations aussi précises que possible. 
                  Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences 
                  dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui 
                  fournissent ces informations.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="card p-8">
              <h2 className="text-2xl font-playfair font-bold text-anthracite mb-6">
                Droit Applicable et Juridiction Compétente
              </h2>
              
              <p className="text-gray-700">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, 
                les tribunaux français seront seuls compétents.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-beige p-8 rounded-sm">
              <h2 className="text-2xl font-playfair font-bold text-anthracite mb-6 text-center">
                Questions sur les Mentions Légales ?
              </h2>
              <p className="text-gray-700 text-center mb-6">
                Pour toute question concernant ces mentions légales, n'hésitez pas à nous contacter.
              </p>
              <div className="text-center">
                <Link href="/contact" className="btn-primary">
                  Nous contacter
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}