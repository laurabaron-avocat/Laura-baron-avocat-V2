import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Shield, Users, Scale, FileText, Heart, CheckCircle, Clock } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Victimes d\'attentats | Maître Laura Baron • Avocat Dommage Corporel Bayonne',
  description: 'Victime d\'attentat en Nouvelle-Aquitaine ? Maître Laura Baron accompagne l\'indemnisation : FGTI, expertise médicale, préjudices corporels et psychologiques.',
  alternates: {
    canonical: '/attentats',
  },
  keywords: 'attentat, terrorisme, indemnisation, FGTI, victime, dommage corporel, avocat',
};

export default function AttentatsPage() {
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
                  <AlertTriangle size={40} className="text-or" />
                </div>
                <div>
                  <span className="text-sm font-medium text-or uppercase tracking-wide">
                    Victimes d'attentats
                  </span>
                  <h1 className="text-4xl md:text-5xl font-playfair font-bold text-noir mt-1">
                    Être accompagné après un attentat
                  </h1>
                </div>
              </div>

              <p className="text-xl text-anthracite leading-relaxed mb-8">
                Être victime d'un attentat, directement ou indirectement, constitue une épreuve d'une gravité
                particulière. Au-delà du choc, les démarches juridiques sont complexes et urgentes. Maître Laura Baron
                accompagne les victimes et leurs proches pour faire reconnaître l'ensemble de leurs préjudices et
                obtenir une réparation intégrale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Être accompagné
                </Link>
                <Link href="/indemnisation-victimes" className="btn-secondary">
                  Comprendre l'indemnisation
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl shadow-xl bg-gray-100">
                <img
                  src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/blog/Paris-13-Novembre-attentats.webp"
                  alt="Attentat - accompagnement juridique des victimes"
                  className="w-full h-[400px] object-contain rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-or text-white p-3 rounded-full shadow-lg">
                <Shield size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le FGTI */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Le rôle du FGTI dans l'indemnisation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le <strong>Fonds de Garantie des Victimes des actes de Terrorisme et d'autres Infractions (FGTI)</strong> est
              l'organisme public chargé d'indemniser les victimes d'attentats commis en France ou à l'étranger, lorsque
              les auteurs ne peuvent être identifiés ou sont insolvables.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Contrairement aux procédures classiques d'indemnisation, le FGTI permet une prise en charge <strong>rapide
              et sans franchise</strong> des préjudices subis. Le fonds intervient dès lors qu'un acte de terrorisme est
              reconnu par les autorités compétentes.
            </p>

            <div className="bg-beige border-l-4 border-or p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-playfair font-semibold text-anthracite mb-3">
                Délais à respecter
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Il est essentiel de respecter les délais légaux pour bénéficier de l'indemnisation du FGTI :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span><strong>3 ans</strong> à compter de l'attentat pour déposer votre demande</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span><strong>10 ans</strong> en cas de préjudices évolutifs ou de consolidation tardive</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span>Possibilité de saisir le FGTI même si une procédure pénale est en cours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Qui peut être indemnisé */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Qui peut être indemnisé après un attentat ?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              La notion de victime d'attentat englobe un large périmètre. Chaque situation est unique et nécessite
              une analyse juridique personnalisée pour déterminer vos droits à indemnisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Victimes directes",
                description: "Personnes blessées lors de l'attentat ou touchées physiquement."
              },
              {
                icon: Heart,
                title: "Ayants droit",
                description: "Proches de victimes décédées : conjoint, enfants, parents."
              },
              {
                icon: AlertTriangle,
                title: "Victimes psychologiques",
                description: "État de stress post-traumatique, anxiété, troubles durables."
              },
              {
                icon: Shield,
                title: "Victimes indirectes",
                description: "Témoins ou proches ayant subi un retentissement grave."
              }
            ].map((profile, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-or/10 rounded-lg mr-3">
                    <profile.icon size={24} className="text-or" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-anthracite">
                    {profile.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indemnisation */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
                L'indemnisation des victimes d'attentats
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                L'indemnisation des victimes d'attentats repose sur des mécanismes spécifiques, distincts du droit
                commun. Le <strong>FGTI</strong> (Fonds de Garantie des Victimes des actes de Terrorisme et d'autres
                Infractions) intervient pour garantir une réparation rapide et complète des préjudices.
              </p>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FileText size={24} className="text-or mr-3" />
                  <h3 className="text-xl font-playfair font-semibold text-anthracite">
                    Dossier et expertises
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  La constitution du dossier, l'évaluation médicale et l'argumentation juridique sont essentielles pour
                  obtenir une réparation intégrale, en Nouvelle-Aquitaine comme ailleurs.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-playfair font-semibold text-anthracite mb-6">
                Préjudices indemnisables
              </h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Préjudices corporels et séquelles physiques",
                  "Préjudices psychologiques et souffrances endurées",
                  "Pertes de revenus et incidence professionnelle",
                  "Frais médicaux, assistance et besoins futurs",
                  "Préjudices moraux et économiques des proches"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Attentats à l'étranger */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Attentats commis à l'étranger : vos droits
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Les ressortissants français victimes d'un attentat à l'étranger bénéficient également de la protection
              du FGTI. Que vous soyez en voyage touristique, en déplacement professionnel ou résident à l'étranger,
              vous pouvez solliciter une indemnisation en France.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-beige p-6 rounded-lg">
                <h3 className="text-xl font-playfair font-semibold text-anthracite mb-3 flex items-center">
                  <Users size={20} className="text-or mr-2" />
                  Victimes concernées
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span>Ressortissants français</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span>Résidents habituels en France</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span>Membres de la famille des victimes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-beige p-6 rounded-lg">
                <h3 className="text-xl font-playfair font-semibold text-anthracite mb-3 flex items-center">
                  <FileText size={20} className="text-or mr-2" />
                  Documents nécessaires
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span>Certificats médicaux traduits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span>Preuves de présence sur place</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span>Reconnaissance officielle de l'attentat</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              La complexité administrative liée aux attentats survenus à l'étranger justifie d'autant plus
              l'accompagnement par un avocat spécialisé, afin de constituer un dossier solide et complet.
            </p>
          </div>
        </div>
      </section>

      {/* L'expertise médicale */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              L'importance de l'expertise médicale
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              L'expertise médicale constitue une étape déterminante dans l'évaluation de vos préjudices.
              Elle permet de chiffrer précisément l'ensemble des dommages corporels, psychologiques et leurs
              conséquences sur votre vie quotidienne et professionnelle.
            </p>

            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-playfair font-semibold text-anthracite mb-4">
                Les postes de préjudices évalués
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-anthracite mb-2">Préjudices patrimoniaux</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-or mr-2">•</span>
                      <span>Dépenses de santé actuelles et futures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-or mr-2">•</span>
                      <span>Frais d'adaptation du logement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-or mr-2">•</span>
                      <span>Perte de gains professionnels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-or mr-2">•</span>
                      <span>Incidence professionnelle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-or mr-2">•</span>
                      <span>Assistance par tierce personne</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-anthracite mb-2">Préjudices extra-patrimoniaux</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-or mr-2">•</span>
                      <span>Déficit fonctionnel temporaire et permanent</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-or mr-2">•</span>
                      <span>Souffrances endurées</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-or mr-2">•</span>
                      <span>Préjudice esthétique</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-or mr-2">•</span>
                      <span>Préjudice d'agrément</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-or mr-2">•</span>
                      <span>Préjudice sexuel</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-or/10 border-l-4 border-or p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-anthracite mb-2">
                Le rôle de l'avocat lors de l'expertise
              </h3>
              <p className="text-gray-700 mb-3">
                Votre avocat vous assiste durant toute la procédure d'expertise pour :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span>Préparer l'examen médical avec vous en amont</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span>Être présent lors de l'expertise et formuler des observations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span>Analyser le rapport d'expertise et contester si nécessaire</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span>Solliciter une contre-expertise ou des examens complémentaires</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accompagnement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Un accompagnement juridique à chaque étape
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              L'objectif est de vous permettre de vous concentrer sur votre reconstruction, tout en confiant la défense
              de vos droits à un cabinet dédié au dommage corporel.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                step: "1",
                title: "Constitution du dossier",
                description: "Collecte des pièces, preuves et éléments médicaux nécessaires.",
              },
              {
                step: "2",
                title: "Évaluation médicale",
                description: "Organisation et préparation des expertises pour chiffrer les préjudices.",
              },
              {
                step: "3",
                title: "Échanges avec le FGTI",
                description: "Suivi des demandes, réponses aux offres et négociation.",
              },
              {
                step: "4",
                title: "Obtention d'une réparation adaptée",
                description: "Défense de vos intérêts jusqu'à la décision d'indemnisation.",
              }
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-4 bg-gray-50 p-5 rounded-lg">
                <div className="bg-or text-white rounded-full w-9 h-9 flex items-center justify-center font-semibold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-anthracite">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Préjudices psychologiques */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Les préjudices psychologiques après un attentat
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Au-delà des blessures physiques, les attentats génèrent des <strong>traumatismes psychologiques</strong> souvent
              durables et invalidants. L'état de stress post-traumatique (ESPT), l'anxiété chronique, les troubles du sommeil
              ou les phobies constituent des préjudices à part entière qui doivent être reconnus et indemnisés.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-playfair font-semibold text-anthracite mb-4 flex items-center">
                  <Heart size={20} className="text-or mr-2" />
                  Manifestations courantes
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-or mr-2">•</span>
                    <span>État de stress post-traumatique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-or mr-2">•</span>
                    <span>Anxiété et crises de panique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-or mr-2">•</span>
                    <span>Syndrome dépressif</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-or mr-2">•</span>
                    <span>Troubles du sommeil et cauchemars</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-or mr-2">•</span>
                    <span>Phobies et évitements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-or mr-2">•</span>
                    <span>Troubles de la concentration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-playfair font-semibold text-anthracite mb-4 flex items-center">
                  <FileText size={20} className="text-or mr-2" />
                  Reconnaissance et évaluation
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span>Suivi psychiatrique ou psychologique régulier</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span>Attestations médicales détaillées</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span>Expertise psychiatrique spécialisée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span>Documentation des impacts sur la vie quotidienne</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-or mr-2 mt-1 flex-shrink-0" />
                    <span>Évaluation des conséquences professionnelles</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-l-4 border-or p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong>Important :</strong> Les troubles psychologiques peuvent se manifester ou s'aggraver dans le temps.
                Il est essentiel de ne pas conclure trop rapidement votre dossier et de prévoir la possibilité d'une réévaluation
                si votre état évolue défavorablement. Maître Laura Baron veille à préserver vos droits à une indemnisation
                complémentaire en cas d'aggravation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approche */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-6">
              Une approche humaine et rigoureuse
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Les dossiers d'attentats exigent une attention particulière, tant sur le plan juridique qu'humain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Écoute attentive",
                description: "Un accompagnement respectueux de la souffrance vécue.",
              },
              {
                icon: Scale,
                title: "Défense rigoureuse",
                description: "Une stratégie juridique claire et adaptée à chaque dossier.",
              },
              {
                icon: FileText,
                title: "Information claire",
                description: "Des explications simples à chaque étape de la procédure.",
              },
              {
                icon: Clock,
                title: "Disponibilité",
                description: "Un suivi réactif pour avancer sans délais inutiles.",
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-or/10 rounded-lg mr-3">
                    <item.icon size={22} className="text-or" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-anthracite">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-noir mb-8 text-center">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-anthracite mb-3 flex items-start">
                  <AlertTriangle size={20} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span>Combien de temps ai-je pour déposer ma demande d'indemnisation ?</span>
                </h3>
                <p className="text-gray-700 ml-7">
                  Vous disposez de <strong>3 ans</strong> à compter de la date de l'attentat pour saisir le FGTI.
                  Ce délai peut être porté à 10 ans en cas de préjudices évolutifs ou si la consolidation de votre état
                  intervient tardivement. Il est toutefois recommandé d'agir rapidement pour préserver vos droits.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-anthracite mb-3 flex items-start">
                  <Scale size={20} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span>L'indemnisation du FGTI est-elle complète ?</span>
                </h3>
                <p className="text-gray-700 ml-7">
                  Le FGTI a pour mission d'assurer une <strong>réparation intégrale</strong> des préjudices subis, tant
                  corporels que psychologiques, sans application de franchise. L'objectif est de replacer la victime dans
                  la situation qui aurait été la sienne si l'attentat n'avait pas eu lieu. Un avocat spécialisé garantit
                  que tous les postes de préjudices sont bien pris en compte.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-anthracite mb-3 flex items-start">
                  <Users size={20} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span>Puis-je être indemnisé si je n'ai pas été blessé physiquement ?</span>
                </h3>
                <p className="text-gray-700 ml-7">
                  Oui. Les <strong>victimes psychologiques</strong> (état de stress post-traumatique, troubles anxieux durables)
                  peuvent obtenir une indemnisation même en l'absence de blessure physique. Il est essentiel de constituer un
                  dossier médical solide et de documenter l'impact du traumatisme sur votre vie quotidienne et professionnelle.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-anthracite mb-3 flex items-start">
                  <FileText size={20} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span>Dois-je attendre la fin de l'enquête pénale pour saisir le FGTI ?</span>
                </h3>
                <p className="text-gray-700 ml-7">
                  Non. Vous pouvez <strong>saisir le FGTI indépendamment de la procédure pénale</strong>. Il n'est pas
                  nécessaire d'attendre l'issue de l'enquête ou du procès pour déposer votre demande d'indemnisation.
                  Cette autonomie permet une réparation plus rapide de vos préjudices.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-anthracite mb-3 flex items-start">
                  <Heart size={20} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span>Les proches de victimes décédées peuvent-ils être indemnisés ?</span>
                </h3>
                <p className="text-gray-700 ml-7">
                  Absolument. Les <strong>ayants droit</strong> (conjoint, enfants, parents, frères et sœurs dans certains cas)
                  peuvent obtenir une indemnisation pour leurs préjudices moraux, économiques et d'accompagnement. Chaque proche
                  dispose de droits propres qui doivent être défendus individuellement.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-anthracite mb-3 flex items-start">
                  <Clock size={20} className="text-or mr-2 mt-1 flex-shrink-0" />
                  <span>Combien de temps dure la procédure d'indemnisation ?</span>
                </h3>
                <p className="text-gray-700 ml-7">
                  La durée varie selon la complexité du dossier et l'évolution de votre état de santé. Le FGTI s'efforce
                  de traiter les dossiers <strong>rapidement</strong>, mais l'expertise médicale et la négociation peuvent
                  prendre plusieurs mois. Un avocat expérimenté veille à éviter les retards inutiles tout en préservant
                  vos intérêts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-noir text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Être conseillé après un attentat
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Maître Laura Baron vous accompagne pour défendre vos droits et obtenir une indemnisation à la hauteur de
            vos préjudices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-or hover:bg-yellow-600 text-noir px-8 py-4 rounded-sm font-medium transition-colors">
              Prendre rendez-vous
            </Link>
            <Link href="/indemnisation-victimes" className="border border-white hover:bg-white hover:text-noir px-8 py-4 rounded-sm font-medium transition-colors">
              Comprendre le processus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
