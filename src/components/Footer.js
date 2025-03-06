import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';  // Mengimpor lebih banyak ikon

const Footer = () => {
  // CSS styles langsung
  const footerStyle = {
    padding: '2rem',
    borderTop: '1px solid #eaeaea',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#f9f9f9'
  };

  const copyrightStyle = {
    fontSize: '0.9rem',
    color: '#666'
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '1.2rem',
    alignItems: 'center'
  };

  const iconLinkStyle = {
    color: '#555',
    transition: 'color 0.2s ease, transform 0.2s ease',
    display: 'flex',
    alignItems: 'center'
  };

  // Function untuk handleHover
  const handleMouseOver = (e) => {
    e.currentTarget.style.color = '#3182ce';
    e.currentTarget.style.transform = 'translateY(-2px)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.color = iconLinkStyle.color;
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <footer style={footerStyle}>
      <div>
        <p style={copyrightStyle}>&copy; 2024 CryCapital. All rights reserved.</p>
        <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.5rem' }}>
          Investing in the future of decentralized finance
        </p>
      </div>
      
      <div style={socialIconsStyle}>
        <a 
          href="https://github.com/crycapital" 
          target="_blank" 
          rel="noopener noreferrer"
          style={iconLinkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>
        <a 
          href="https://twitter.com/crycapital" 
          target="_blank" 
          rel="noopener noreferrer"
          style={iconLinkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          aria-label="Twitter"
        >
          <FaTwitter size={22} />
        </a>
        <a 
          href="https://linkedin.com/company/crycapital" 
          target="_blank" 
          rel="noopener noreferrer"
          style={iconLinkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
        <a 
          href="https://instagram.com/crycapital" 
          target="_blank" 
          rel="noopener noreferrer"
          style={iconLinkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          aria-label="Instagram"
        >
          <FaInstagram size={22} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
