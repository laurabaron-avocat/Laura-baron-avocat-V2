import { Metadata } from 'next';
import Link from 'next/link';
import { Activity, Shield, AlertTriangle, Users, FileText, Clock, CheckCircle, Heart } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Accidents Médicaux • Indemnisation Erreur Médicale • Maître Laura Baron',
  description: 'Expert en indemnisation d\'accidents médicaux. Erreurs de diagnostic, infections nosocomiales, défaut d\'information. Expertise juridique dédiée aux victimes.',
  keywords: 'accident médical, erreur médicale, infection nosocomiale, responsabilité médicale, indemnisation, expert médical',
};

export default function AccidentsMedicauxPage() {
  return (
    <>
      <WhatsAppButton pageType="expertise" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige via-white to-beige section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-or/10 rounded-lg mr-4">
                  <Activity size={40} className="text-or" />
                </div>
                <div>
                  <span className="text-sm font-medium text-or uppercase tracking-wide">
                    Accidents Médicaux
                  </span>
                  <h1 className="text-4xl md:text-5xl font-playfair font-bold text-noir mt-1">
                    Défendre vos droits face aux erreurs médicales
                  </h1>
                </div>
              </div>

              <p className="text-xl text-anthracite leading-relaxed mb-8">
                Les accidents médicaux bouleversent la vie des patients et de leurs familles.
                Notre expertise juridique vous accompagne pour obtenir une juste
                indemnisation des préjudices subis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Consultation gratuite
                </Link>
                <Link href="/ressources" className="btn-secondary">
                  Guides pratiques
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professionnel de santé analysant un dossier médical"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-or text-white p-3 rounded-full">
                  <Heart size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Définition et cadre légal */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
                Qu'est-ce qu'un accident médical ?
              </h2>
              <p className="text-xl text-gray-700">
                Un accident médical résulte d'un acte de prévention, de diagnostic ou de soins qui cause un dommage
                au patient sans lien avec l'évolution prévisible de son état de santé.
              </p>
            </div>

            <div className="bg-gradient-to-r from-or/5 to-yellow-50 p-8 rounded-xl mb-12">
              <div className="flex items-start">
                <div className="p-3 bg-or/10 rounded-lg mr-6 flex-shrink-0">
                  <Shield size={32} className="text-or" />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-noir mb-4">
                    Loi Kouchner du 4 mars 2002
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Cette loi reconnaît la responsabilité du système de santé et créé les Commission Régionales
                    de Conciliation et d'Indemnisation (CRCI) pour faciliter l'indemnisation des victimes.
                  </p>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-or">
                    <p className="font-medium text-anthracite">
                      "Toute personne a le droit d'être informée sur son état de santé et a droit
                      à la réparation de ses préjudices"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'accidents médicaux */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Types d'accidents médicaux
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Les accidents médicaux peuvent survenir dans différents contextes de soins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Erreurs de diagnostic",
                items: [
                  "Diagnostic tardif ou erroné",
                  "Défaut de diagnostic",
                  "Confusion de dossiers patients",
                  "Mauvaise interprétation d'examens"
                ]
              },
              {
                icon: Activity,
                title: "Accidents chirurgicaux",
                items: [
                  "Erreur de site opératoire",
                  "Corps étranger oublié",
                  "Lésion d'organe",
                  "Complications per-opératoires"
                ]
              },
              {
                icon: Shield,
                title: "Infections nosocomiales",
                items: [
                  "Infections contractées à l'hôpital",
                  "Défaut d'hygiène",
                  "Matériel mal stérilisé",
                  "Transmission croisée"
                ]
              },
              {
                icon: FileText,
                title: "Défaut d'information",
                items: [
                  "Information insuffisante sur les risques",
                  "Absence de consentement éclairé",
                  "Défaut d'alternatives thérapeutiques",
                  "Information sur les séquelles"
                ]
              },
              {
                icon: Clock,
                title: "Retard de soins",
                items: [
                  "Urgence non reconnue",
                  "Retard de prise en charge",
                  "Délai d'attente excessif",
                  "Défaut d'orientation"
                ]
              },
              {
                icon: Heart,
                title: "Accidents médicamenteux",
                items: [
                  "Erreur de prescription",
                  "Surdosage ou sous-dosage",
                  "Interactions médicamenteuses",
                  "Défaut de surveillance"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-or/10 rounded-lg mr-3">
                    <category.icon size={24} className="text-or" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-anthracite">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle size={14} className="text-or mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procédure d'indemnisation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Procédure d'indemnisation
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Plusieurs voies sont possibles pour obtenir réparation d'un accident médical
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-6">
                Voie amiable - CRCI
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Saisine de la CRCI",
                    description: "Dépôt du dossier avec pièces médicales"
                  },
                  {
                    step: "2",
                    title: "Expertise médicale",
                    description: "Examen par un expert médical indépendant"
                  },
                  {
                    step: "3",
                    title: "Avis de la commission",
                    description: "Analyse de la responsabilité et des préjudices"
                  },
                  {
                    step: "4",
                    title: "Offre d'indemnisation",
                    description: "Proposition par l'assureur ou l'ONIAM"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-or text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-anthracite mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-6">
                Voie judiciaire
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Assignation",
                    description: "Action en responsabilité devant le tribunal"
                  },
                  {
                    step: "2",
                    title: "Expertise judiciaire",
                    description: "Désignation d'un expert par le juge"
                  },
                  {
                    step: "3",
                    title: "Débats contradictoires",
                    description: "Échange d'arguments entre les parties"
                  },
                  {
                    step: "4",
                    title: "Jugement",
                    description: "Décision sur la responsabilité et l'indemnisation"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-anthracite text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-anthracite mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Préjudices indemnisables */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Préjudices indemnisables
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              L'indemnisation couvre l'ensemble des préjudices subis par la victime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-playfair font-semibold text-anthracite mb-6">
                Préjudices patrimoniaux
              </h3>
              <ul className="space-y-3">
                {[
                  "Frais médicaux et de rééducation",
                  "Perte de revenus professionnels",
                  "Incapacité permanente partielle",
                  "Aménagement du domicile et du véhicule",
                  "Assistance par tierce personne",
                  "Frais futurs de soins"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-playfair font-semibold text-anthracite mb-6">
                Préjudices extrapatrimoniaux
              </h3>
              <ul className="space-y-3">
                {[
                  "Souffrances endurées",
                  "Préjudice esthétique",
                  "Préjudice d'agrément",
                  "Préjudice sexuel",
                  "Préjudice d'établissement",
                  "Pretium doloris (douleurs physiques)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Notre expertise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
                Notre expertise en accidents médicaux
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Maître Laura Baron vous accompagne avec une approche personnalisée,
                s'appuyant sur un réseau d'experts médicaux reconnus.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Réseau d'experts médicaux",
                    description: "Collaboration avec des médecins-conseils experts dans chaque domaine"
                  },
                  {
                    icon: FileText,
                    title: "Analyse approfondie du dossier",
                    description: "Étude minutieuse de votre dossier médical et des circonstances"
                  },
                  {
                    icon: Shield,
                    title: "Défense de vos intérêts",
                    description: "Négociation ferme pour obtenir une indemnisation juste"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 bg-or/10 rounded-lg mr-4 flex-shrink-0">
                      <item.icon size={24} className="text-or" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-anthracite mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Consultation juridique en accident médical"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-anthracite text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Victime d'un accident médical ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Ne restez pas seul face aux conséquences d'un accident médical.
            Nos équipes vous accompagnent pour faire valoir vos droits et obtenir
            l'indemnisation que vous méritez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-or hover:bg-yellow-600 text-noir px-8 py-4 rounded-lg font-medium transition-colors">
              Consultation gratuite
            </Link>
            <Link href="/ressources" className="border border-white text-white hover:bg-white hover:text-anthracite px-8 py-4 rounded-lg font-medium transition-colors">
              Documentation
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-6">
            Consultation gratuite • Pas d'avance de frais • Honoraires de résultat
          </p>
        </div>
      </section>
    </>
  );
}