'use client';

import { useState, useEffect } from 'react';
import { Cookie, Settings, X, Check } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Toujours activé
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Délai pour éviter l'affichage immédiat
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // Charger les préférences sauvegardées
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      loadCookies(savedPreferences);
    }
  }, []);

  const loadCookies = (prefs: typeof preferences) => {
    // Charger Google Analytics si accepté
    if (prefs.analytics) {
      // Ici vous pouvez ajouter le code Google Analytics
      console.log('Analytics cookies loaded');
    }
    
    // Charger les cookies marketing si acceptés
    if (prefs.marketing) {
      // Ici vous pouvez ajouter les pixels de tracking marketing
      console.log('Marketing cookies loaded');
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    loadCookies(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptEssentialOnly = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(essentialOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(essentialOnly));
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    loadCookies(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'essential') return; // Ne peut pas être désactivé
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-or shadow-2xl">
        <div className="max-w-7xl mx-auto p-4 md:p-6">
          {!showSettings ? (
            /* Banner principal */
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="flex items-start space-x-4 flex-1">
                <div className="bg-or p-2 rounded-full flex-shrink-0">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-playfair font-semibold text-anthracite mb-2">
                    Respect de votre vie privée
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                    analyser le trafic et personnaliser le contenu. Vous pouvez choisir 
                    d'accepter tous les cookies ou personnaliser vos préférences.
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    En savoir plus dans notre{' '}
                    <Link href="/politique-confidentialite" className="text-or hover:underline">
                      politique de confidentialité
                    </Link>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <Settings className="w-4 h-4" />
                  <span>Personnaliser</span>
                </button>
                <button
                  onClick={acceptEssentialOnly}
                  className="px-4 py-2 border border-anthracite text-anthracite rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Essentiel uniquement
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 bg-or text-noir rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          ) : (
            /* Panneau de paramètres */
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-playfair font-semibold text-anthracite">
                  Paramètres des cookies
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-4">
                {/* Cookies essentiels */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-anthracite">Cookies essentiels</h4>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Obligatoire
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés. 
                      Ils incluent la sécurité, la navigation et les préférences de base.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Cookies analytiques */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-anthracite mb-2">Cookies analytiques</h4>
                    <p className="text-sm text-gray-700">
                      Ces cookies nous aident à comprendre comment vous utilisez notre site 
                      pour l'améliorer (Google Analytics, mesures d'audience).
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.analytics 
                          ? 'bg-or justify-end' 
                          : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full mx-1" />
                    </button>
                  </div>
                </div>
                
                {/* Cookies marketing */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-anthracite mb-2">Cookies marketing</h4>
                    <p className="text-sm text-gray-700">
                      Ces cookies permettent de personnaliser les publicités et le contenu 
                      en fonction de vos intérêts et de votre navigation.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.marketing 
                          ? 'bg-or justify-end' 
                          : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full mx-1" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t border-gray-200">
                <button
                  onClick={acceptEssentialOnly}
                  className="px-6 py-2 border border-anthracite text-anthracite rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Essentiel uniquement
                </button>
                <button
                  onClick={savePreferences}
                  className="px-6 py-2 bg-or text-noir rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium"
                >
                  Enregistrer mes préférences
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-anthracite text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}