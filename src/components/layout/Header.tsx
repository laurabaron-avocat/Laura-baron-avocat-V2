'use client';

import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      // Fermeture avec animation
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
        setMobileDropdownOpen(null); // Reset dropdown on close
      }, 300);
    } else {
      // Ouverture
      setIsMenuOpen(true);
    }
  };

  const toggleMobileDropdown = (itemName: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === itemName ? null : itemName);
  };

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Avocate & Cabinet', href: '/avocate-cabinet' },
    {
      name: 'Dommage corporel',
      href: '/dommage-corporel',
      dropdown: [
        { name: 'Accidents de la route', href: '/accidents-route' },
        { name: 'Accidents médicaux', href: '/accidents-medicaux' },
        { name: 'Agression', href: '/agression' },
        { name: 'Accidents de la vie', href: '/accidents-vie' },
      ]
    },
    { name: 'Indemnisation', href: '/indemnisation-victimes' },
    { name: 'Ressources', href: '/ressources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Logo-laura-baron-maitre-avocat-bayonne.png"
              alt="Logo Maître Laura Baron"
              className="h-12 w-auto"
            />
            <div className="block">
              <h1 className="text-sm sm:text-lg font-semibold text-gray-900 leading-tight">Maître Laura Baron</h1>
              <p className="text-xs text-gray-600 leading-tight">Avocat Dommage Corporel Bayonne</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className="text-gray-700 hover:text-amber-600 px-2 xl:px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap inline-flex items-baseline"
                      style={{ transform: 'translateY(-7.2px)' }}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      {item.name}
                      <ChevronDown size={16} className="ml-1" style={{ transform: 'translateY(2mm)' }} />
                    </button>
                    <div
                      className="absolute left-0 top-full mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-amber-600 transition-colors border-b border-gray-100"
                      >
                        Vue d'ensemble
                      </Link>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-amber-600 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-amber-600 px-2 xl:px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+33750234606"
              className="flex items-center space-x-1 md:space-x-2 bg-amber-600 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm whitespace-nowrap"
            >
              <Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium">07 50 23 46 06</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={handleMenuToggle}
            className={`lg:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 transition-colors ${isMenuOpen ? 'burger-open' : ''}`}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className="burger-line w-5 h-0.5 bg-current block"></span>
              <span className="burger-line w-5 h-0.5 bg-current block"></span>
              <span className="burger-line w-5 h-0.5 bg-current block"></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {(isMenuOpen || isAnimating) && (
          <>
            {/* Dark overlay to block background */}
            <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />

            {/* Full screen mobile menu */}
            <div className={`lg:hidden fixed inset-0 z-50 bg-white ${isAnimating ? 'menu-slide-out' : 'menu-slide-in'} flex flex-col h-full overflow-hidden`}>
              {/* Fixed Header with close button */}
              <div className="flex-shrink-0 flex justify-between items-center p-4 border-b border-gray-100 bg-white shadow-sm">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://qncljsxdjefkimfxdzuf.supabase.co/storage/v1/object/public/images/Logo-laura-baron-maitre-avocat-bayonne.png"
                    alt="Logo Maître Laura Baron"
                    className="h-10 w-auto"
                  />
                  <div>
                    <h1 className="text-sm font-semibold text-gray-900">Maître Laura Baron</h1>
                    <p className="text-xs text-gray-600">Avocat Dommage Corporel Bayonne</p>
                  </div>
                </div>
                <button
                  onClick={handleMenuToggle}
                  className="p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100 transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Navigation menu */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <nav className="px-4 py-6">
                  <div className="space-y-2">
                    {navigation.map((item, index) => (
                      <div key={item.name} className="menu-item-stagger" style={{ animationDelay: `${index * 0.1}s` }}>
                        {item.dropdown ? (
                          <>
                            <button
                              onClick={() => toggleMobileDropdown(item.name)}
                              className="w-full flex items-center justify-between px-4 py-4 text-lg font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-xl transition-all duration-200 border border-transparent hover:border-amber-200 hover:translate-x-1 hover:shadow-sm"
                            >
                              <span>{item.name}</span>
                              <ChevronDown
                                size={20}
                                className={`transition-transform duration-200 ${
                                  mobileDropdownOpen === item.name ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            {mobileDropdownOpen === item.name && (
                              <div className="ml-4 mt-3 space-y-2 animate-fade-in">
                                <Link
                                  href={item.href}
                                  className="block px-4 py-3 text-base text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200 border border-transparent hover:border-amber-200 hover:translate-x-1"
                                  onClick={handleMenuToggle}
                                >
                                  <span className="text-amber-500 mr-2">•</span>
                                  Vue d'ensemble
                                </Link>
                                {item.dropdown.map((dropdownItem, subIndex) => (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="block px-4 py-3 text-base text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200 border border-transparent hover:border-amber-200 hover:translate-x-1"
                                    onClick={handleMenuToggle}
                                    style={{ animationDelay: `${subIndex * 0.05}s` }}
                                  >
                                    <span className="text-amber-500 mr-2">•</span>
                                    {dropdownItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="block px-4 py-4 text-lg font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-xl transition-all duration-200 border border-transparent hover:border-amber-200 hover:translate-x-1 hover:shadow-sm"
                            onClick={handleMenuToggle}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>
              </div>

              {/* Fixed Contact section at bottom */}
              <div className="flex-shrink-0 px-4 py-6 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-beige/30">
                <div className="space-y-4">
                  <a
                    href="tel:+33750234606"
                    className="flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-4 rounded-xl hover:from-amber-700 hover:to-amber-800 transform hover:scale-105 transition-all duration-200 w-full shadow-lg"
                    onClick={handleMenuToggle}
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">07 50 23 46 06</span>
                  </a>

                  <div className="text-center">
                    <p className="text-sm text-gray-700 font-medium mb-1">Cabinet à Bayonne</p>
                    <p className="text-xs text-gray-500">Consultation sur rendez-vous • Interventions sur Toulouse</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}