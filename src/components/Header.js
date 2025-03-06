import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  // CSS styles langsung
  const headerStyle = {
    padding: '1.5rem 2rem',
    borderBottom: '1px solid #eaeaea',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const navStyle = {
    display: 'flex',
    gap: '1.5rem'
  };

  const linkStyle = {
    color: '#4a5568',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  };

  const linkHoverStyle = {
    color: '#3182ce'
  };

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        {/* Use Next.js Image component for better performance */}
        <Link href="/" style={{ display: 'block' }}>
          <Image 
            src="/crycapital.png" 
            alt="CryCapital Logo" 
            width={150}
            height={50}
            priority
            style={{ height: '48px', width: 'auto' }}
          />
        </Link>
      </div>
      
      <nav style={navStyle}>
        <Link 
          href="#home" 
          scroll={false}
          style={linkStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.color = linkHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = linkStyle.color;
          }}
        >
          Home
        </Link>
        <Link 
          href="#about" 
          scroll={false}
          style={linkStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.color = linkHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = linkStyle.color;
          }}
        >
          About
        </Link>
        <Link 
          href="#projects" 
          scroll={false}
          style={linkStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.color = linkHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = linkStyle.color;
          }}
        >
          Projects
        </Link>
        <Link 
          href="#contact" 
          scroll={false}
          style={linkStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.color = linkHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = linkStyle.color;
          }}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
