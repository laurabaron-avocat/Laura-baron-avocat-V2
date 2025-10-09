import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-beige text-noir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Cabinet Info */}
          <div>
            <div className="flex items-center space-x-2 md:space-x-3 mb-4">
              <img 
                src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Logo-laura-baron-maitre-avocat-bayonne.png"
                alt="Logo Maître Laura Baron"
                className="h-6 md:h-8 w-auto flex-shrink-0"
              />
              <h3 className="text-base md:text-lg font-semibold leading-tight">Cabinet Laura Baron</h3>
            </div>
            <p className="text-anthracite text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
              Avocate en dommage corporel et indemnisation des victimes
            </p>
            <div className="flex items-center space-x-2 text-xs md:text-sm text-anthracite">
              <span>Barreau de Bayonne</span>
            </div>
          </div>

          {/* Bayonne Office */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 flex items-center text-sm md:text-base">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
              Cabinet Bayonne
            </h4>
            <div className="space-y-2 text-xs md:text-sm text-anthracite">
              <a 
                href="https://www.google.com/maps/place/24+Av.+Mar%C3%A9chal+Foch,+64100+Bayonne,+France/data=!4m2!3m1!1s0xd51405ff1ec5af5:0x2a57843bc91ed1b0?sa=X&ved=1t:242&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed hover:text-or transition-colors cursor-pointer block"
              >
                24 Av. Maréchal Foch<br />64100 Bayonne, France
              </a>
              <div className="flex items-center">
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
                <a href="tel:+33750234606" className="hover:text-or transition-colors">
                  07 50 23 46 06
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
                <a href="mailto:laurabaron.avocat@gmail.com" className="hover:text-or transition-colors">
                  laurabaron.avocat@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Lundi - Jeudi : 9h - 18h</p>
                  <p>Vendredi : 9h - 17h</p>
                  <p>Samedi - Dimanche : Fermé</p>
                </div>
              </div>
            </div>
          </div>

          {/* Toulouse Interventions */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 flex items-center text-sm md:text-base">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
              Zone d'intervention
            </h4>
            <div className="space-y-2 text-xs md:text-sm text-anthracite">
              <p className="leading-relaxed font-semibold">Cabinet principal : Bayonne</p>
              <p className="leading-relaxed">• Pays Basque (Anglet, Biarritz)</p>
              <p className="leading-relaxed">• Nouvelle-Aquitaine</p>
              <p className="leading-relaxed text-gray-600 italic mt-3">Interventions possibles sur Toulouse et Occitanie</p>
              <div className="flex items-center mt-2">
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
                <a href="tel:+33750234606" className="hover:text-or transition-colors">
                  07 50 23 46 06
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Liens rapides</h4>
            <nav className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <Link href="/dommage-corporel" className="block text-anthracite hover:text-or transition-colors">
                Dommage corporel
              </Link>
              <Link href="/indemnisation-victimes" className="block text-anthracite hover:text-or transition-colors">
                Indemnisation
              </Link>
              <Link href="/ressources" className="block text-anthracite hover:text-or transition-colors">
                Ressources
              </Link>
              <Link href="/contact" className="block text-anthracite hover:text-or transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-anthracite/20 mt-6 md:mt-8 pt-6 md:pt-8">
          <div className="text-center">
            <h4 className="text-base md:text-lg font-playfair font-semibold text-anthracite mb-4 md:mb-6">
              Suivez-nous sur les réseaux sociaux
            </h4>
            <div className="flex justify-center space-x-4 md:space-x-6">
              <a
                href="https://www.facebook.com/baron.avocats"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 bg-beige hover:bg-or rounded-full flex items-center justify-center transition-colors group"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook className="w-4.5 h-4.5 md:w-6 md:h-6 text-anthracite group-hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/laura_baron_avocat/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 bg-beige hover:bg-or rounded-full flex items-center justify-center transition-colors group"
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram className="w-4.5 h-4.5 md:w-6 md:h-6 text-anthracite group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/laura-baron-a3a22b43/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 bg-beige hover:bg-or rounded-full flex items-center justify-center transition-colors group"
                aria-label="Suivez-nous sur LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5 md:w-6 md:h-6 text-anthracite group-hover:text-white" />
              </a>
              <a
                href="https://x.com/cabinet-laura-baron"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 bg-beige hover:bg-or rounded-full flex items-center justify-center transition-colors group"
                aria-label="Suivez-nous sur X"
              >
                <svg 
                  className="w-4.5 h-4.5 md:w-6 md:h-6 text-anthracite group-hover:text-white fill-current" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-anthracite/20 mt-6 md:mt-8 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-xs md:text-sm text-anthracite text-center md:text-left">
              © 2024 Cabinet Laura Baron. Tous droits réservés.
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
              <Link href="/mentions-legales" className="text-anthracite hover:text-or transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-anthracite hover:text-or transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/plan-du-site" className="text-anthracite hover:text-or transition-colors">
                Plan du site
              </Link>
            </div>
          </div>
          
          {/* WebFitYou Credit */}
          <div className="text-center mt-4 md:mt-6 pt-3 md:pt-4 border-t border-anthracite/10">
            <p className="text-xs text-anthracite">
              Site web réalisé par{' '}
              <a 
                href="https://www.webfityou.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold underline text-anthracite hover:text-or transition-colors whitespace-nowrap"
              >
                WebFitYou
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}