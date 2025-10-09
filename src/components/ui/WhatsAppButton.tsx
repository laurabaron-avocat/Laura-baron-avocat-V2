'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

interface WhatsAppButtonProps {
  pageType?: 'home' | 'contact' | 'expertise' | 'article' | 'about';
}

export default function WhatsAppButton({ pageType = 'home' }: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '33750234606'; // Format international sans le +

  const getMessages = () => {
    const messages = {
      home: {
        message: "Bonjour Maître Baron, je souhaiterais obtenir des informations sur l'indemnisation suite à un accident. Pourriez-vous m'aider ?",
        call: "Appel depuis la page d'accueil"
      },
      contact: {
        message: "Bonjour Maître Baron, je souhaiterais prendre rendez-vous pour une consultation en dommage corporel. Quelles sont vos disponibilités ?",
        call: "Demande de rendez-vous"
      },
      expertise: {
        message: "Bonjour Maître Baron, j'ai besoin de votre expertise en dommage corporel. Pouvez-vous m'accompagner dans ma démarche d'indemnisation ?",
        call: "Demande d'expertise juridique"
      },
      article: {
        message: "Bonjour Maître Baron, j'ai lu votre article sur le dommage corporel et j'aimerais avoir des conseils personnalisés pour ma situation. Pouvez-vous m'aider ?",
        call: "Suite à la lecture d'un article"
      },
      about: {
        message: "Bonjour Maître Baron, après avoir consulté votre présentation, je souhaiterais faire appel à vos services. Pouvons-nous échanger ?",
        call: "Prise de contact après présentation"
      }
    };
    return messages[pageType];
  };

  const { message, call } = getMessages();
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const phoneUrl = `tel:+${phoneNumber}`;

  return (
    <>
      {/* Bouton principal flottant */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <div className="relative">
          {/* Menu déroulant */}
          {isOpen && (
            <div className="absolute bottom-12 md:bottom-16 right-0 bg-white rounded-lg shadow-lg border border-gray-200 p-3 md:p-4 w-56 md:w-64 animate-fade-in">
              <div className="text-center mb-4">
                <h3 className="font-semibold text-anthracite mb-1 text-sm md:text-base">Contactez Maître Baron</h3>
                <p className="text-xs text-gray-600">Réponse rapide garantie</p>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 md:space-x-3 w-full p-2 md:p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-medium text-xs md:text-sm">WhatsApp</div>
                    <div className="text-xs opacity-90">Message instantané</div>
                  </div>
                </a>
                
                <a
                  href={phoneUrl}
                  className="flex items-center space-x-2 md:space-x-3 w-full p-2 md:p-3 bg-or hover:bg-yellow-600 text-noir rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-medium text-xs md:text-sm">Appeler</div>
                    <div className="text-xs opacity-75">07 50 23 46 06</div>
                  </div>
                </a>
              </div>
              
              <div className="text-center mt-2 md:mt-3">
                <p className="text-xs text-gray-500">
                  Consultation confidentielle • Réponse sous 2h
                </p>
              </div>
            </div>
          )}
          
          {/* Bouton principal */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
            aria-label="Contacter par WhatsApp ou téléphone"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          {/* Indicateur de notification */}
          <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Overlay pour fermer le menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}