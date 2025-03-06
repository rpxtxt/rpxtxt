import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active link based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Styles for the header
  const headerStyle = {
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: scrolled ? '0.75rem 2rem' : '1.5rem 2rem',
    borderBottom: scrolled ? '1px solid rgba(234, 234, 234, 0.8)' : '1px solid transparent',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(8px)',
    boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
    transition: 'all 0.3s ease'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1001  // Above mobile menu
  };

  const navStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    
    // Mobile menu styling for small screens
    '@media (max-width: 768px)': {
      display: mobileMenuOpen ? 'flex' : 'none',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      flexDirection: 'column',
      padding: '1.5rem',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderTop: '1px solid #eaeaea'
    }
  };

  // Base link style
  const linkBaseStyle = {
    color: '#4a5568',
    fontWeight: '500',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '0.5rem 0.25rem',
    position: 'relative',
    transition: 'color 0.2s ease'
  };

  // Function to get link style based on active state
  const getLinkStyle = (href) => {
    const isActive = activeLink === href.replace('#', '');
    
    return {
      ...linkBaseStyle,
      color: isActive ? '#3182ce' : '#4a5568',
      fontWeight: isActive ? '600' : '500',
      // Animated underline
      '::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: isActive ? '100%' : '0%',
        height: '2px',
        backgroundColor: '#3182ce',
        transition: 'width 0.3s ease'
      }
    };
  };

  // Hover states for links
  const handleLinkMouseOver = (e) => {
    e.currentTarget.style.color = '#3182ce';
  };

  const handleLinkMouseOut = (e, href) => {
    if (activeLink !== href.replace('#', '')) {
      e.currentTarget.style.color = '#4a5568';
    }
  };

  // Mobile menu toggle button style
  const mobileToggleStyle = {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      display: 'block'
    }
  };

  // Render navigation links
  const renderNavLinks = () => {
    const links = [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact' }
    ];

    return links.map((link) => (
      <Link 
        key={link.href}
        href={link.href} 
        scroll={false}
        onClick={() => {
          setActiveLink(link.href.replace('#', ''));
          setMobileMenuOpen(false);
        }}
      >
        <span
          style={getLinkStyle(link.href)}
          onMouseOver={handleLinkMouseOver}
          onMouseOut={(e) => handleLinkMouseOut(e, link.href)}
        >
          {link.label}
        </span>
      </Link>
    ));
  };

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <Link href="/" style={{ display: 'block' }}>
          <Image 
            src="/crycapital.png" 
            alt="CryCapital Logo" 
            width={150}
            height={50}
            priority
            style={{ 
              height: scrolled ? '40px' : '48px', 
              width: 'auto',
              transition: 'height 0.3s ease' 
            }}
          />
        </Link>
      </div>
      
      {/* Mobile Menu Toggle Button (hidden on desktop) */}
      <button 
        style={{
          ...mobileToggleStyle,
          display: window.innerWidth <= 768 ? 'block' : 'none'
        }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>
      
      {/* Navigation Links */}
      <nav 
        style={{
          ...navStyle,
          display: mobileMenuOpen || window.innerWidth > 768 ? 'flex' : 'none'
        }}
      >
        {renderNavLinks()}

        {/* Add a CTA button in the navbar */}
        <a 
          href="#contact" 
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3182ce',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '500',
            marginLeft: '0.5rem',
            transition: 'all 0.2s ease',
            display: 'inline-block'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#3182ce';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Get Started
        </a>
      </nav>
    </header>
  );
};

export default Header;
