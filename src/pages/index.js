import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  // CSS Object Styles
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      fontFamily: "'Inter', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    },
    section: {
      padding: '5rem 0',
      position: 'relative'
    },
    sectionLight: {
      backgroundColor: '#ffffff'
    },
    sectionDark: {
      backgroundColor: '#f8fafc',
      position: 'relative'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    sectionTag: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '500',
      marginBottom: '0.75rem'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1e293b',
      margin: '0.5rem 0'
    },
    grid: {
      display: 'grid',
      gap: '2rem'
    },
    grid1Col: {
      gridTemplateColumns: '1fr'
    },
    grid2Col: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    grid3Col: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
    },
    // Hero Section
    heroSection: {
      padding: '6rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      backgroundColor: '#f8fafc',
      borderRadius: '12px',
      margin: '2rem 0'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1.5rem'
    },
    heroDescription: {
      fontSize: '1.125rem',
      lineHeight: '1.8',
      color: '#64748b',
      maxWidth: '800px',
      margin: '0 auto 2rem'
    },
    ctaContainer: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    primaryButton: {
      padding: '0.75rem 1.5rem',
      backgroundColor: '#3b82f6',
      color: 'white',
      borderRadius: '8px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 6px rgba(59, 130, 246, 0.25)'
    },
    secondaryButton: {
      padding: '0.75rem 1.5rem',
      backgroundColor: 'white',
      color: '#3b82f6',
      borderRadius: '8px',
      fontWeight: '600',
      border: '1px solid #3b82f6',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    // Stat Cards
    statCard: {
      padding: '2rem',
      borderRadius: '12px',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    statIcon: {
      fontSize: '2.5rem',
      fontWeight: '800',
      color: '#3b82f6',
      marginBottom: '1rem'
    },
    statTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '0.5rem'
    },
    statDescription: {
      fontSize: '0.875rem',
      color: '#64748b'
    },
    // Project Cards
    card: {
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
    },
    cardImageContainer: {
      position: 'relative',
      height: '200px',
      overflow: 'hidden'
    },
    cardImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    cardBadge: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      padding: '0.5rem 0.75rem',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: 'white',
      borderRadius: '6px',
      fontSize: '0.75rem',
      fontWeight: '600',
      zIndex: 1
    },
    cardBody: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      justifyContent: 'space-between'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '0.75rem'
    },
    cardDescription: {
      fontSize: '0.875rem',
      color: '#64748b',
      marginBottom: '1.5rem',
      lineHeight: '1.6'
    },
    cardTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.5rem'
    },
    tag: {
      padding: '0.25rem 0.75rem',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
      borderRadius: '6px',
      fontSize: '0.75rem',
      fontWeight: '500'
    },
    cardLink: {
      display: 'flex',
      alignItems: 'center',
      color: '#3b82f6',
      fontSize: '0.875rem',
      fontWeight: '600',
      textDecoration: 'none',
      marginTop: 'auto'
    },
    cardLinkIcon: {
      marginLeft: '0.5rem',
      transition: 'transform 0.2s ease'
    },
    // Contact Section
    contactCard: {
      padding: '3rem',
      borderRadius: '12px',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      maxWidth: '800px',
      margin: '0 auto'
    },
    contactMethod: {
      marginBottom: '1.5rem'
    },
    contactTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '0.75rem'
    },
    contactLink: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#3b82f6',
      fontSize: '1rem',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'color 0.2s ease'
    },
    socialIcons: {
      display: 'flex',
      gap: '1rem'
    },
    socialIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#f1f5f9',
      color: '#3b82f6',
      fontSize: '1rem',
      textDecoration: 'none',
      transition: 'all 0.2s ease'
    }
  };

  return (
    <>
      <Head>
        <title>CryCapital - Cryptocurrency & DeFi Insights</title>
        <meta name="description" content="Explore insights, projects, and expertise in cryptocurrency, yield farming, decentralized finance (DeFi), and blockchain technology." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div style={styles.container}>
        <Header />
        
        {/* Hero Section */}
        <section id="home" style={styles.heroSection}>
          <h1 style={styles.heroTitle}>CryCapital</h1>
          <p style={styles.heroDescription}>
            Explore insights, projects, and expertise in cryptocurrency, yield farming, decentralized finance (DeFi), and blockchain technology.
          </p>
          <div style={styles.ctaContainer}>
            <button 
              style={styles.primaryButton}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Explore Projects
            </button>
            <button 
              style={styles.secondaryButton}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Learn More
            </button>
          </div>
        </section>
        
        {/* About Me Section */}
        <section id="about" style={{...styles.section, ...styles.sectionLight}}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>Who I Am</span>
            <h2 style={styles.sectionTitle}>About Me</h2>
          </div>
          <div style={{...styles.grid, ...styles.grid1Col}}>
            <p style={styles.heroDescription}>
              I am a Node Operator with a passion for sharing the latest updates on cryptocurrency news, yield farming, decentralized finance (DeFi), and airdrop strategies. My mission is to help the community stay informed and take advantage of the opportunities in the fast-evolving world of crypto.
            </p>
          </div>
          <div style={{...styles.grid, ...styles.grid3Col, marginTop: '3rem'}}>
            <StatCard 
              icon="5+" 
              title="Years Experience" 
              description="In blockchain technology" 
              styles={styles} 
            />
            <StatCard 
              icon="50+" 
              title="DeFi Projects" 
              description="Analyzed and reviewed" 
              styles={styles} 
            />
            <StatCard 
              icon="100+" 
              title="Community Members" 
              description="Helped with strategies" 
              styles={styles} 
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{...styles.section, ...styles.sectionDark}}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>My Work</span>
            <h2 style={styles.sectionTitle}>Featured Projects</h2>
          </div>
          <div style={{...styles.grid, ...styles.grid3Col}}>
            <ProjectCard
              projectNumber="1"
              title="Crypto Yield Tracker"
              description="Track crypto yields across DeFi platforms with real-time analytics and performance metrics."
              imageSrc="/api/placeholder/400/320"
              tags={["DeFi", "Analytics"]}
              styles={styles}
            />
            
            <ProjectCard
              projectNumber="2"
              title="Airdrop Manager"
              description="A comprehensive tool to manage upcoming and active airdrops with notification systems."
              imageSrc="/api/placeholder/400/320"
              tags={["Airdrops", "Tool"]}
              styles={styles}
            />

            <ProjectCard
              projectNumber="3"
              title="DeFi Strategies Blog"
              description="Insights and proven strategies for decentralized finance to maximize returns."
              imageSrc="/api/placeholder/400/320"
              tags={["Blog", "Strategies"]}
              styles={styles}
            />

            <ProjectCard
              projectNumber="4"
              title="NFT Marketplace"
              description="A marketplace for minting and trading NFTs with built-in royalty management."
              imageSrc="/api/placeholder/400/320"
              tags={["NFT", "Marketplace"]}
              styles={styles}
            />

            <ProjectCard
              projectNumber="5"
              title="Blockchain Explorer"
              description="Explore transaction data and smart contracts across multiple blockchain networks."
              imageSrc="/api/placeholder/400/320"
              tags={["Explorer", "Data"]}
              styles={styles}
            />

            <ProjectCard
              projectNumber="6"
              title="Crypto Portfolio Dashboard"
              description="Manage and track your crypto portfolio with performance analysis and tax reporting."
              imageSrc="/api/placeholder/400/320"
              tags={["Portfolio", "Analytics"]}
              styles={styles}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{...styles.section, ...styles.sectionLight}}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>Get In Touch</span>
            <h2 style={styles.sectionTitle}>Contact Me</h2>
          </div>
          <div style={styles.contactCard}>
            <p style={{...styles.heroDescription, marginBottom: '2rem'}}>
              Feel free to reach out to me for collaboration or inquiries related to cryptocurrency news, yield farming, DeFi, or airdrop strategies.
            </p>
            <div style={{...styles.grid, ...styles.grid2Col}}>
              <div style={styles.contactMethod}>
                <h3 style={styles.contactTitle}>Email Me</h3>
                <a 
                  href="mailto:erpextxt@gmail.com" 
                  style={styles.contactLink}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#2563eb';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#3b82f6';
                  }}
                >
                  erpextxt@gmail.com
                  <span style={{ marginLeft: '0.25rem' }}>↗</span>
                </a>
              </div>
              <div style={styles.contactMethod}>
                <h3 style={styles.contactTitle}>Follow Me</h3>
                <div style={styles.socialIcons}>
                  <SocialIcon label="Twitter" icon="T" styles={styles} />
                  <SocialIcon label="GitHub" icon="G" styles={styles} />
                  <SocialIcon label="Discord" icon="D" styles={styles} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

// StatCard Component
function StatCard({ icon, title, description, styles }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      style={{
        ...styles.statCard,
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 10px 15px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.statIcon}>{icon}</div>
      <h3 style={styles.statTitle}>{title}</h3>
      <p style={styles.statDescription}>{description}</p>
    </div>
  );
}

// ProjectCard Component
function ProjectCard({ projectNumber, title, description, imageSrc, tags, styles }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 10px 15px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.cardImageContainer}>
        <div style={styles.cardBadge}>
          Project {projectNumber}
        </div>
        <img
          src={imageSrc}
          alt={`Project ${projectNumber}`}
          style={{
            ...styles.cardImage,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>
      
      <div style={styles.cardBody}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardDescription}>
          {description}
        </p>
        
        <div style={styles.cardTags}>
          {tags && tags.map((tag, index) => (
            <span key={index} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href="#" 
          style={styles.cardLink}
          onMouseOver={(e) => {
            e.currentTarget.children[0].style.transform = 'translateX(4px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.children[0].style.transform = 'translateX(0)';
          }}
        >
          View details
          <span style={styles.cardLinkIcon}>→</span>
        </a>
      </div>
    </div>
  );
}

// SocialIcon Component
function SocialIcon({ label, icon, styles }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href="#" 
      aria-label={label}
      style={{
        ...styles.socialIcon,
        backgroundColor: isHovered ? '#3b82f6' : '#f1f5f9',
        color: isHovered ? 'white' : '#3b82f6',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
    </a>
  );
}
