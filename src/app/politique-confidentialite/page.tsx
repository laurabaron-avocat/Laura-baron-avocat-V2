import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Eye, Lock, Users, FileText, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité • Protection des Données | Maître Laura Baron',
  description: 'Politique de confidentialité du cabinet Maître Laura Baron. Traitement des données personnelles conforme au RGPD, droits des utilisateurs et mesures de sécurité.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-beige via-white to-beige py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-noir mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-anthracite mb-8 leading-relaxed max-w-3xl mx-auto">
              Protection de vos données personnelles et respect du RGPD. 
              Transparence totale sur la collecte et l'utilisation de vos informations.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-6 h-6 text-or" />
                <h2 className="text-2xl font-playfair font-bold text-anthracite">
                  Engagement de Protection
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Le Cabinet Maître Laura Baron s'engage à protéger la confidentialité et la sécurité 
                  de vos données personnelles conformément au Règlement Général sur la Protection des 
                  Données (RGPD) et à la loi Informatique et Libertés.
                </p>
                
                <p className="text-gray-700">
                  Cette politique de confidentialité vous informe sur la manière dont nous collectons, 
                  utilisons, stockons et protégeons vos données personnelles lorsque vous utilisez 
                  notre site web ou nos services.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-sm border-l-4 border-blue-400">
                  <p className="text-blue-800 text-sm">
                    <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
            </div>

            {/* Responsable du traitement */}
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-or" />
                <h2 className="text-2xl font-playfair font-bold text-anthracite">
                  Responsable du Traitement
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Le responsable du traitement de vos données personnelles est :
                </p>
                
                <div className="bg-gray-50 p-4 rounded-sm">
                  <p className="text-gray-700">
                    <strong>Maître Laura Baron</strong><br />
                    Cabinet d'avocat<br />
                    24 Av. Maréchal Foch<br />
                    64100 Bayonne, France<br />
                    Téléphone : <a href="tel:+33750234606" className="text-or hover:underline">07 50 23 46 06</a><br />
                    Email : <a href="mailto:contact@cabinet-baron.fr" className="text-or hover:underline">contact@cabinet-baron.fr</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Données collectées */}
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="w-6 h-6 text-or" />
                <h2 className="text-2xl font-playfair font-bold text-anthracite">
                  Données Personnelles Collectées
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-anthracite mb-3">
                    1. Données collectées directement
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Lorsque vous utilisez nos formulaires de contact ou prenez rendez-vous :
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Nom et prénom
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Adresse email
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Numéro de téléphone (optionnel)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ville (optionnel)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Motif de votre demande
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Message et description de votre situation
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Pièces jointes (documents, photos)
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-anthracite mb-3">
                    2. Données collectées automatiquement
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Adresse IP
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Type de navigateur et version
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Pages visitées et temps passé
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Données de géolocalisation approximative
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Finalités du traitement */}
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-6 h-6 text-or" />
                <h2 className="text-2xl font-playfair font-bold text-anthracite">
                  Finalités du Traitement
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Vos données personnelles sont traitées pour les finalités suivantes :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-sm">
                    <h4 className="font-semibold text-anthracite mb-2">Gestion des demandes</h4>
                    <p className="text-sm text-gray-700">
                      Traitement de vos demandes de contact, prise de rendez-vous, 
                      réponse à vos questions juridiques.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-sm">
                    <h4 className="font-semibold text-anthracite mb-2">Relation client</h4>
                    <p className="text-sm text-gray-700">
                      Suivi de la relation client, gestion des dossiers, 
                      communication sur l'avancement des procédures.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-sm">
                    <h4 className="font-semibold text-anthracite mb-2">Amélioration du site</h4>
                    <p className="text-sm text-gray-700">
                      Analyse de l'utilisation du site, amélioration de l'expérience utilisateur, 
                      optimisation du contenu.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-sm">
                    <h4 className="font-semibold text-anthracite mb-2">Obligations légales</h4>
                    <p className="text-sm text-gray-700">
                      Respect des obligations légales et déontologiques de la profession d'avocat, 
                      conservation des pièces du dossier.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Base légale */}
            <div className="card p-8">
              <h2 className="text-2xl font-playfair font-bold text-anthracite mb-6">
                Base Légale du Traitement
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-or rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">1</span>
                  <div>
                    <h4 className="font-semibold text-anthracite">Consentement</h4>
                    <p className="text-gray-700 text-sm">
                      Pour l'envoi de newsletters et communications marketing (case à cocher obligatoire).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-or rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">2</span>
                  <div>
                    <h4 className="font-semibold text-anthracite">Exécution d'un contrat</h4>
                    <p className="text-gray-700 text-sm">
                      Pour la gestion de la relation client et l'exécution des prestations juridiques.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-or rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">3</span>
                  <div>
                    <h4 className="font-semibold text-anthracite">Intérêt légitime</h4>
                    <p className="text-gray-700 text-sm">
                      Pour l'amélioration de nos services et la sécurité de notre site web.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-or rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">4</span>
                  <div>
                    <h4 className="font-semibold text-anthracite">Obligation légale</h4>
                    <p className="text-gray-700 text-sm">
                      Pour le respect des obligations déontologiques et légales de la profession d'avocat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Durée de conservation */}
            <div className="card p-8">
              <h2 className="text-2xl font-playfair font-bold text-anthracite mb-6">
                Durée de Conservation
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-sm border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-2">Demandes de contact</h4>
                    <p className="text-blue-700 text-sm">
                      3 ans à compter de la dernière interaction, 
                      sauf si une relation client s'établit.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-sm border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2">Dossiers clients</h4>
                    <p className="text-green-700 text-sm">
                      30 ans minimum conformément aux obligations 
                      déontologiques de la profession d'avocat.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-sm border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-800 mb-2">Données de navigation</h4>
                    <p className="text-purple-700 text-sm">
                      13 mois maximum pour les cookies, 
                      logs serveur conservés 1 an.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-sm border-l-4 border-orange-400">
                    <h4 className="font-semibold text-orange-800 mb-2">Newsletter</h4>
                    <p className="text-orange-700 text-sm">
                      Jusqu'à désinscription ou 3 ans 
                      d'inactivité (pas d'ouverture d'email).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vos droits */}
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="w-6 h-6 text-or" />
                <h2 className="text-2xl font-playfair font-bold text-anthracite">
                  Vos Droits RGPD
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-700">
                  Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-or rounded-full flex items-center justify-center flex-shrink-0">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-anthracite">Droit d'accès</h4>
                      <p className="text-gray-700 text-sm">
                        Connaître les données que nous détenons sur vous.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-or rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-anthracite">Droit de rectification</h4>
                      <p className="text-gray-700 text-sm">
                        Corriger ou mettre à jour vos informations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-or rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-anthracite">Droit d'effacement</h4>
                      <p className="text-gray-700 text-sm">
                        Demander la suppression de vos données (sous conditions).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-or rounded-full flex items-center justify-center flex-shrink-0">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-anthracite">Droit à la portabilité</h4>
                      <p className="text-gray-700 text-sm">
                        Récupérer vos données dans un format structuré.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-sm border-l-4 border-or">
                  <h4 className="font-semibold text-amber-800 mb-2">Comment exercer vos droits ?</h4>
                  <p className="text-amber-700 text-sm mb-2">
                    Pour exercer vos droits, contactez-nous par email à{' '}
                    <a href="mailto:contact@cabinet-baron.fr" className="underline">contact@cabinet-baron.fr</a>{' '}
                    en précisant votre demande et en joignant une copie de votre pièce d'identité.
                  </p>
                  <p className="text-amber-700 text-sm">
                    Nous vous répondrons dans un délai maximum de 1 mois.
                  </p>
                </div>
              </div>
            </div>

            {/* Sécurité */}
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-6 h-6 text-or" />
                <h2 className="text-2xl font-playfair font-bold text-anthracite">
                  Sécurité des Données
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                  pour protéger vos données personnelles :
                </p>
                
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Chiffrement SSL/TLS pour toutes les communications
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hébergement sécurisé avec sauvegardes régulières
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Accès restreint aux données par mot de passe fort
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mise à jour régulière des systèmes de sécurité
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-or rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Formation du personnel aux bonnes pratiques RGPD
                  </li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="card p-8">
              <h2 className="text-2xl font-playfair font-bold text-anthracite mb-6">
                Cookies et Technologies Similaires
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                  Vous pouvez gérer vos préférences via le bandeau de cookies qui s'affiche 
                  lors de votre première visite.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-sm border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2">Cookies essentiels</h4>
                    <p className="text-green-700 text-sm">
                      Nécessaires au fonctionnement du site (sécurité, navigation).
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-sm border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-2">Cookies analytiques</h4>
                    <p className="text-blue-700 text-sm">
                      Mesure d'audience et amélioration du site (avec votre consentement).
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-sm border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-800 mb-2">Cookies marketing</h4>
                    <p className="text-purple-700 text-sm">
                      Personnalisation des contenus (avec votre consentement).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact DPO */}
            <div className="bg-beige p-8 rounded-sm">
              <h2 className="text-2xl font-playfair font-bold text-anthracite mb-6 text-center">
                Questions sur vos Données ?
              </h2>
              <p className="text-gray-700 text-center mb-6">
                Pour toute question concernant le traitement de vos données personnelles 
                ou pour exercer vos droits RGPD, contactez-nous.
              </p>
              <div className="text-center space-y-4">
                <div>
                  <a href="mailto:contact@cabinet-baron.fr" className="text-or hover:underline font-medium">
                    contact@cabinet-baron.fr
                  </a>
                </div>
                <div>
                  <Link href="/contact" className="btn-primary">
                    Nous contacter
                  </Link>
                </div>
                <p className="text-sm text-gray-600">
                  Vous avez également le droit de déposer une réclamation auprès de la 
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-or hover:underline ml-1">
                    CNIL
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}