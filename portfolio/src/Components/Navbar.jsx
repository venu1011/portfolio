import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../constants'; // Adjust path if needed
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setActiveLink(href); // manually highlight
    }
    setIsMobileMenuOpen(false);
  };

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      for (const item of NAVIGATION_LINKS) {
        const el = document.querySelector(item.href);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveLink(item.href);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='fixed left-0 right-0 z-50 lg:top-4'>
      {/* Desktop Nav */}
      <div className='mx-auto hidden max-w-xl items-center justify-between rounded-full border border-white/30
        px-6 py-2 backdrop-blur-lg lg:flex'>
        
        {/* Logo + Links */}
        <div className='flex items-center gap-8'>
          <a href="/" className='uppercase font-semibold text-white'>S Venu</a>

          <ul className="flex items-center gap-6">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`text-sm hover:text-stone-300 transition ${
                    activeLink === item.href ? 'text-white font-semibold' : ''
                  }`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className='py-2 px-4 backdrop-blur-md lg:hidden'>
        <div className='flex items-center justify-between'>
          <a href='/' className='uppercase font-semibold text-white'>S Venu</a>

          <button
            className='focus:outline-none'
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? (
              <RiCloseLine className='h-6 w-6' />
            ) : (
              <RiMenu3Line className='h-6 w-6' />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <ul className="my-4 ml-2 flex flex-col gap-4 border-t border-white/20 pt-4">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`block text-lg text-white ${
                    activeLink === item.href ? 'font-semibold underline' : ''
                  }`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

