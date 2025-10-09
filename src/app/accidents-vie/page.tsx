import { Metadata } from 'next';
import Link from 'next/link';
import { Home, AlertTriangle, Shield, Users, Zap, Building, CheckCircle, Heart, Scale, FileText } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Accidents de la Vie • Indemnisation Accidents Domestiques • Maître Laura Baron',
  description: 'Expert en indemnisation des accidents de la vie courante. Accidents domestiques, de loisirs, scolaires. Expertise juridique et obtention de dommages-intérêts.',
  keywords: 'accident domestique, accident de loisirs, accident scolaire, vie courante, indemnisation, responsabilité civile',
};

export default function AccidentsViePage() {
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
                  <Home size={40} className="text-or" />
                </div>
                <div>
                  <span className="text-sm font-medium text-or uppercase tracking-wide">
                    Accidents de la vie
                  </span>
                  <h1 className="text-4xl md:text-5xl font-playfair font-bold text-noir mt-1">
                    Indemnisation des accidents du quotidien
                  </h1>
                </div>
              </div>

              <p className="text-xl text-anthracite leading-relaxed mb-8">
                Les accidents de la vie courante peuvent survenir à tout moment et avoir
                des conséquences importantes. Notre expertise juridique vous aide à identifier
                les responsabilités et obtenir une juste indemnisation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Évaluer votre cas
                </Link>
                <Link href="/ressources" className="btn-secondary">
                  Droits et démarches
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <img
                  src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Tribunal-judiciaire-bayonne-jugement-indemnisation-expertise-medicale-indemnites-avocate-maitre-baron-laura.webp"
                  alt="Tribunal judiciaire Bayonne - Indemnisation accidents de la vie"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-or text-white p-3 rounded-full">
                  <Shield size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'accidents de la vie */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Accidents de la vie courante
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Les accidents du quotidien représentent 11 millions d'accidents par an en France
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Accidents domestiques",
                description: "À domicile ou dans ses dépendances",
                items: [
                  "Chutes dans escaliers",
                  "Brûlures et électrocutions",
                  "Intoxications alimentaires",
                  "Accidents de bricolage",
                  "Chutes d'objets",
                  "Accidents de jardinage"
                ]
              },
              {
                icon: Users,
                title: "Accidents de loisirs",
                description: "Pendant les activités récréatives",
                items: [
                  "Accidents de sport",
                  "Activités de plein air",
                  "Parcs d'attractions",
                  "Centres de loisirs",
                  "Activités culturelles",
                  "Voyages et vacances"
                ]
              },
              {
                icon: Building,
                title: "Accidents dans lieux publics",
                description: "Espaces publics et commerciaux",
                items: [
                  "Chutes sur voie publique",
                  "Accidents en magasin",
                  "Défaut d'éclairage public",
                  "Revêtements glissants",
                  "Mobilier urbain défaillant",
                  "Signalisation insuffisante"
                ]
              },
              {
                icon: Shield,
                title: "Accidents scolaires",
                description: "En milieu scolaire et périscolaire",
                items: [
                  "Accidents en cours d'EPS",
                  "Cour de récréation",
                  "Sorties scolaires",
                  "Transport scolaire",
                  "Cantine scolaire",
                  "Garde périscolaire"
                ]
              },
              {
                icon: Zap,
                title: "Accidents électriques",
                description: "Liés aux installations électriques",
                items: [
                  "Défaut d'installation",
                  "Électrocution",
                  "Court-circuits",
                  "Appareils défectueux",
                  "Lignes électriques",
                  "Foudre"
                ]
              },
              {
                icon: AlertTriangle,
                title: "Autres accidents",
                description: "Divers accidents du quotidien",
                items: [
                  "Morsures d'animaux",
                  "Accidents liés aux animaux",
                  "Chutes d'arbres",
                  "Accidents climatiques",
                  "Effondrement de constructions",
                  "Accidents de piscine"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-or/10 rounded-lg mr-3">
                    <category.icon size={24} className="text-or" />
                  </div>
                  <div>
                    <h3 className="text-lg font-playfair font-semibold text-anthracite">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
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

      {/* Responsabilités et assurances */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Responsabilités et assurances
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Identifier les responsabilités et les garanties d'assurance applicables
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-6">
                Types de responsabilité
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Responsabilité des propriétaires",
                    description: "Défaut d'entretien des locaux, vices cachés, défaut de sécurité",
                    examples: ["Chute d'escalier défaillant", "Électrocution par installation vétuste", "Chute de balcon mal entretenu"]
                  },
                  {
                    title: "Responsabilité des organisateurs",
                    description: "Défaut d'organisation, de sécurité ou de surveillance",
                    examples: ["Accident en centre de loisirs", "Défaut de surveillance", "Matériel défaillant"]
                  },
                  {
                    title: "Responsabilité des fabricants",
                    description: "Défaut de conception, vice de fabrication, défaut d'information",
                    examples: ["Produit défectueux", "Absence d'avertissement", "Défaut de sécurité"]
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-medium text-anthracite mb-3">{item.title}</h4>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Exemples : </span>
                      {item.examples.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-6">
                Garanties d'assurance
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Assurance habitation",
                    coverage: "Responsabilité civile vie privée",
                    scope: "Dommages causés à autrui dans la vie privée"
                  },
                  {
                    title: "Assurance scolaire",
                    coverage: "Responsabilité et individuelle accident",
                    scope: "Accidents scolaires et périscolaires"
                  },
                  {
                    title: "Assurance GAV",
                    coverage: "Garantie Accidents de la Vie",
                    scope: "Accidents sans responsable identifié"
                  },
                  {
                    title: "Assurance professionnelle",
                    coverage: "Responsabilité civile professionnelle",
                    scope: "Dommages liés à l'activité professionnelle"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-or">
                    <h4 className="text-lg font-medium text-anthracite mb-2">{item.title}</h4>
                    <p className="text-or font-medium text-sm mb-1">{item.coverage}</p>
                    <p className="text-gray-600 text-sm">{item.scope}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-beige p-6 rounded-lg">
                <h4 className="text-lg font-playfair font-semibold text-anthracite mb-3">
                  Important à retenir
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={14} className="text-or mr-2 mt-1 flex-shrink-0" />
                    Vérifiez vos contrats d'assurance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={14} className="text-or mr-2 mt-1 flex-shrink-0" />
                    Déclarez rapidement le sinistre
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={14} className="text-or mr-2 mt-1 flex-shrink-0" />
                    Conservez toutes les preuves
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Démarches à effectuer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Démarches après un accident
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Les bons réflexes pour préserver vos droits à indemnisation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-6">
                Immédiatement après l'accident
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Soins et sécurité",
                    description: "Appelez les secours si nécessaire et consultez un médecin",
                    priority: "urgent"
                  },
                  {
                    step: "2",
                    title: "Constat et témoins",
                    description: "Établissez un constat des faits et recueillez les témoignages",
                    priority: "urgent"
                  },
                  {
                    step: "3",
                    title: "Photos et preuves",
                    description: "Photographiez les lieux, vos blessures et les éléments défaillants",
                    priority: "important"
                  },
                  {
                    step: "4",
                    title: "Certificat médical",
                    description: "Demandez un certificat médical détaillé avec ITT",
                    priority: "important"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 w-8 h-8 ${item.priority === 'urgent' ? 'bg-red-500' : 'bg-or'} text-white rounded-full flex items-center justify-center text-sm font-bold mr-4`}>
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-anthracite mb-1 flex items-center">
                        {item.title}
                        {item.priority === 'urgent' && <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded">URGENT</span>}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-6">
                Démarches administratives
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "5",
                    title: "Déclaration d'accident",
                    description: "Informez votre employeur si accident pendant le temps de travail"
                  },
                  {
                    step: "6",
                    title: "Déclaration assurance",
                    description: "Contactez votre assureur dans les délais contractuels"
                  },
                  {
                    step: "7",
                    title: "Conservation des justificatifs",
                    description: "Gardez toutes les factures médicales et arrêts de travail"
                  },
                  {
                    step: "8",
                    title: "Suivi médical",
                    description: "Respectez le suivi médical et documentez l'évolution"
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
              Tous les préjudices subis suite à un accident de la vie doivent être indemnisés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-playfair font-semibold text-anthracite mb-4">
                Préjudices temporaires
              </h3>
              <ul className="space-y-2">
                {[
                  "Frais médicaux",
                  "Perte de revenus",
                  "Frais de déplacement",
                  "Aide à domicile temporaire",
                  "Souffrances endurées"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={14} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-playfair font-semibold text-anthracite mb-4">
                Préjudices permanents
              </h3>
              <ul className="space-y-2">
                {[
                  "Incapacité permanente",
                  "Préjudice esthétique",
                  "Préjudice d'agrément",
                  "Perte de revenus futurs",
                  "Aménagements nécessaires"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={14} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-playfair font-semibold text-anthracite mb-4">
                Préjudices des proches
              </h3>
              <ul className="space-y-2">
                {[
                  "Préjudice moral familial",
                  "Frais d'accompagnement",
                  "Perte de revenus pour assistance",
                  "Troubles dans les conditions d'existence"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={14} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
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
                Notre expertise en accidents de la vie
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Maître Laura Baron vous accompagne pour analyser votre situation,
                identifier les responsabilités et optimiser votre indemnisation.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Scale,
                    title: "Analyse juridique approfondie",
                    description: "Étude des responsabilités et des garanties d'assurance applicables"
                  },
                  {
                    icon: FileText,
                    title: "Constitution du dossier",
                    description: "Aide à la collecte des preuves et à l'évaluation des préjudices"
                  },
                  {
                    icon: Users,
                    title: "Négociation avec les assureurs",
                    description: "Défense ferme de vos intérêts pour une indemnisation optimale"
                  },
                  {
                    icon: Heart,
                    title: "Accompagnement personnalisé",
                    description: "Suivi individualisé tout au long de votre démarche"
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
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Expertise juridique en accidents de la vie"
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
            Accident de la vie courante ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Ne laissez pas les conséquences d'un accident bouleverser votre vie.
            Nos équipes analysent votre situation et vous accompagnent pour obtenir
            l'indemnisation que vous méritez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-or hover:bg-yellow-600 text-noir px-8 py-4 rounded-lg font-medium transition-colors">
              Analyser votre cas
            </Link>
            <Link href="/ressources" className="border border-white text-white hover:bg-white hover:text-anthracite px-8 py-4 rounded-lg font-medium transition-colors">
              Guides pratiques
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