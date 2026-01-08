import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Users, Scale, Heart, FileText, Clock, CheckCircle, Phone } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Agression • Indemnisation Victimes d\'Agression • Maître Laura Baron',
  description: 'Expert en indemnisation des victimes d\'agression. Violence physique, psychologique, sexuelle. Accompagnement juridique et obtention de dommages-intérêts.',
  alternates: {
    canonical: '/agression',
  },
  keywords: 'agression, violence, victime, indemnisation, dommages-intérêts, CIVI, plainte, préjudice moral',
};

export default function AgressionPage() {
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
                  <Shield size={40} className="text-or" />
                </div>
                <div>
                  <span className="text-sm font-medium text-or uppercase tracking-wide">
                    Victimes d'agression
                  </span>
                  <h1 className="text-4xl md:text-5xl font-playfair font-bold text-noir mt-1">
                    Défendre et indemniser les victimes
                  </h1>
                </div>
              </div>

              <p className="text-xl text-anthracite leading-relaxed mb-8">
                Être victime d'une agression laisse des séquelles physiques et psychologiques durables.
                Notre expertise juridique vous accompagne pour obtenir justice et une indemnisation
                intégrale de vos préjudices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Urgence victime
                </Link>
                <Link href="/ressources" className="btn-secondary">
                  Vos droits
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Accompagnement juridique des victimes d'agression"
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

      {/* Types d'agressions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Types d'agressions prises en charge
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Toute forme de violence peut donner lieu à indemnisation, qu'elle soit physique ou psychologique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Violence physique",
                description: "Coups, blessures, séquestration",
                items: [
                  "Coups et blessures volontaires",
                  "Violences avec arme",
                  "Séquestration et enlèvement",
                  "Tentative d'homicide"
                ]
              },
              {
                icon: Heart,
                title: "Violence sexuelle",
                description: "Agression, harcèlement, viol",
                items: [
                  "Agression sexuelle",
                  "Viol et tentative de viol",
                  "Harcèlement sexuel",
                  "Atteinte à la dignité"
                ]
              },
              {
                icon: Users,
                title: "Violence conjugale",
                description: "Violence au sein du couple",
                items: [
                  "Violences physiques conjugales",
                  "Violences psychologiques",
                  "Harcèlement moral",
                  "Menaces et chantage"
                ]
              },
              {
                icon: Shield,
                title: "Violence au travail",
                description: "Agression sur le lieu de travail",
                items: [
                  "Agression par un client",
                  "Violence entre collègues",
                  "Harcèlement professionnel",
                  "Discrimination et brimades"
                ]
              },
              {
                icon: Scale,
                title: "Escroquerie et vol",
                description: "Atteintes aux biens avec violence",
                items: [
                  "Vol avec violence",
                  "Escroquerie et abus de confiance",
                  "Extorsion et chantage",
                  "Dégradations volontaires"
                ]
              },
              {
                icon: AlertTriangle,
                title: "Terrorisme",
                description: "Actes de terrorisme et leurs conséquences",
                items: [
                  "Victimes directes d'attentat",
                  "Victimes par ricochet",
                  "Témoins traumatisés",
                  "Proches de victimes"
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

      {/* Démarches urgentes */}
      <section className="section-padding bg-red-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full mb-4">
              <Phone size={16} className="mr-2" />
              <span className="text-sm font-medium">Démarches urgentes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Que faire immédiatement après une agression ?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Les premières heures sont cruciales pour préserver vos droits et constituer votre dossier
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-6">
                Démarches immédiates
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Soins médicaux",
                    description: "Consultez un médecin même si les blessures semblent légères",
                    urgent: true
                  },
                  {
                    step: "2",
                    title: "Porter plainte",
                    description: "Déposez plainte au commissariat ou à la gendarmerie",
                    urgent: true
                  },
                  {
                    step: "3",
                    title: "Certificat médical",
                    description: "Demandez un certificat médical d'ITT (Incapacité Totale de Travail)",
                    urgent: false
                  },
                  {
                    step: "4",
                    title: "Témoins",
                    description: "Recueillez les coordonnées des témoins de l'agression",
                    urgent: false
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 w-8 h-8 ${item.urgent ? 'bg-red-500' : 'bg-or'} text-white rounded-full flex items-center justify-center text-sm font-bold mr-4`}>
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-anthracite mb-1 flex items-center">
                        {item.title}
                        {item.urgent && <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded">URGENT</span>}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-6">
                Constitution du dossier
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "5",
                    title: "Photos des blessures",
                    description: "Prenez des photos des blessures et vêtements abîmés"
                  },
                  {
                    step: "6",
                    title: "Arrêt de travail",
                    description: "Conservez tous vos arrêts de travail et justificatifs de revenus"
                  },
                  {
                    step: "7",
                    title: "Factures médicales",
                    description: "Gardez toutes les factures de soins et frais de santé"
                  },
                  {
                    step: "8",
                    title: "Suivi psychologique",
                    description: "Documentez l'impact psychologique et les soins nécessaires"
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

      {/* Voies d'indemnisation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Voies d'indemnisation
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Plusieurs mécanismes existent pour obtenir réparation du préjudice subi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-or/5 to-yellow-50 p-8 rounded-xl">
              <div className="p-3 bg-or/10 rounded-lg w-fit mb-4">
                <Scale size={32} className="text-or" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-anthracite mb-4">
                Action civile
              </h3>
              <p className="text-gray-700 mb-4">
                Demande de dommages-intérêts auprès de l'auteur de l'agression dans le cadre
                de la procédure pénale ou par action civile séparée.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Constitution de partie civile</li>
                <li>• Expertise des préjudices</li>
                <li>• Condamnation de l'agresseur</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Shield size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-anthracite mb-4">
                CIVI
              </h3>
              <p className="text-gray-700 mb-4">
                Commission d'Indemnisation des Victimes d'Infractions pour obtenir
                une indemnisation de l'État en cas d'insolvabilité de l'agresseur.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Saisine dans les 3 ans</li>
                <li>• Indemnisation subsidiaire</li>
                <li>• Fonds de garantie</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                <Heart size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-anthracite mb-4">
                FGTI
              </h3>
              <p className="text-gray-700 mb-4">
                Fonds de Garantie des victimes d'actes de Terrorisme et d'autres Infractions
                pour les infractions les plus graves.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Infractions graves</li>
                <li>• Indemnisation intégrale</li>
                <li>• Procédure dédiée</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Préjudices indemnisables */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Préjudices indemnisables
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              L'indemnisation doit couvrir l'ensemble des préjudices subis suite à l'agression
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-playfair font-semibold text-anthracite mb-6">
                Préjudices économiques
              </h3>
              <ul className="space-y-3">
                {[
                  "Perte de revenus (arrêts de travail)",
                  "Frais médicaux et hospitaliers",
                  "Frais de transport sanitaire",
                  "Frais de psychologue/psychiatre",
                  "Incapacité permanente partielle",
                  "Perte de capacité de gains futurs",
                  "Assistance par tierce personne",
                  "Aménagements nécessaires"
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
                Préjudices moraux
              </h3>
              <ul className="space-y-3">
                {[
                  "Souffrances endurées (pretium doloris)",
                  "Préjudice esthétique permanent",
                  "Préjudice d'agrément",
                  "Préjudice sexuel",
                  "Traumatisme psychologique",
                  "Troubles dans les conditions d'existence",
                  "Préjudice d'angoisse",
                  "Atteinte à la dignité humaine"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-beige p-6 rounded-xl">
            <h4 className="text-lg font-playfair font-semibold text-anthracite mb-3">
              Préjudices des proches
            </h4>
            <p className="text-gray-700 mb-4">
              Les proches de la victime peuvent également être indemnisés pour leur propre préjudice :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={14} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Préjudice moral des proches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={14} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Frais d'accompagnement</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={14} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Perte de revenus pour assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={14} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Soins psychologiques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Notre accompagnement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
                Un accompagnement humain et juridique
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Être victime d'une agression est un traumatisme qui nécessite un accompagnement
                à la fois juridique et humain. Notre cabinet vous offre un soutien complet.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Heart,
                    title: "Écoute et bienveillance",
                    description: "Accueil personnalisé dans le respect de votre situation"
                  },
                  {
                    icon: FileText,
                    title: "Constitution du dossier",
                    description: "Aide à la collecte des preuves et documents nécessaires"
                  },
                  {
                    icon: Scale,
                    title: "Défense de vos droits",
                    description: "Représentation devant toutes les juridictions"
                  },
                  {
                    icon: Clock,
                    title: "Suivi à long terme",
                    description: "Accompagnement pendant toute la durée de la procédure"
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
                src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Maitre-Laura-Baron-Avocat-bayonne-rendez-vous-dommage-corporelle-accident-de-la-route.webp"
                alt="Maître Laura Baron - Accompagnement bienveillant des victimes"
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
            Vous êtes victime d'une agression ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Ne laissez pas l'agression détruire votre vie. Nos équipes vous accompagnent
            avec humanité et détermination pour obtenir justice et réparation.
          </p>

          <div className="bg-red-900/20 border border-red-400 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-2">
              <Phone size={20} className="text-red-300 mr-2" />
              <span className="text-red-300 font-medium">Urgence 24h/24</span>
            </div>
            <p className="text-red-100 text-sm">
              En cas d'agression récente, contactez-nous immédiatement pour préserver vos droits
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-or hover:bg-yellow-600 text-noir px-8 py-4 rounded-lg font-medium transition-colors">
              Contact urgence
            </Link>
            <Link href="/ressources" className="border border-white text-white hover:bg-white hover:text-anthracite px-8 py-4 rounded-lg font-medium transition-colors">
              Guide des victimes
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-6">
            Première consultation gratuite • Aide juridictionnelle possible • Honoraires de résultat
          </p>
        </div>
      </section>
    </>
  );
}