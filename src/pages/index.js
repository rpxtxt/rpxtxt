import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      
      {/* Hero Section */}
      <section id="home" className={styles.heroSection}>
        <h1 className={styles.heroTitle}>CryCapital</h1>
        <p className={styles.heroDescription}>
          Explore insights, projects, and expertise in cryptocurrency, yield farming, decentralized finance (DeFi), and blockchain technology.
        </p>
        <div className={styles.ctaContainer}>
          <button className={styles.primaryButton}>
            Explore Projects
          </button>
          <button className={styles.secondaryButton}>
            Learn More
          </button>
        </div>
      </section>
      
      {/* About Me Section */}
      <section id="about" className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Who I Am</span>
          <h2 className={styles.sectionTitle}>About Me</h2>
        </div>
        <div className={`${styles.grid} ${styles.grid1Col}`}>
          <p className={styles.heroDescription}>
            I am a Node Operator with a passion for sharing the latest updates on cryptocurrency news, yield farming, decentralized finance (DeFi), and airdrop strategies. My mission is to help the community stay informed and take advantage of the opportunities in the fast-evolving world of crypto.
          </p>
        </div>
        <div className={`${styles.grid} ${styles.grid3Col}`} style={{ marginTop: '3rem' }}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>5+</div>
            <h3 className={styles.statTitle}>Years Experience</h3>
            <p className={styles.statDescription}>In blockchain technology</p>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>50+</div>
            <h3 className={styles.statTitle}>DeFi Projects</h3>
            <p className={styles.statDescription}>Analyzed and reviewed</p>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>100+</div>
            <h3 className={styles.statTitle}>Community Members</h3>
            <p className={styles.statDescription}>Helped with strategies</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>My Work</span>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
        </div>
        <div className={`${styles.grid} ${styles.grid3Col}`}>
          <ProjectCard
            projectNumber="1"
            title="Crypto Yield Tracker"
            description="Track crypto yields across DeFi platforms with real-time analytics and performance metrics."
            imageSrc="/images/blognextjs.png"
            tags={["DeFi", "Analytics"]}
            styles={styles}
          />
          
          <ProjectCard
            projectNumber="2"
            title="Airdrop Manager"
            description="A comprehensive tool to manage upcoming and active airdrops with notification systems."
            imageSrc="/images/airdrop-manager.png"
            tags={["Airdrops", "Tool"]}
            styles={styles}
          />

          <ProjectCard
            projectNumber="3"
            title="DeFi Strategies Blog"
            description="Insights and proven strategies for decentralized finance to maximize returns."
            imageSrc="/images/defi-strategies.png"
            tags={["Blog", "Strategies"]}
            styles={styles}
          />

          <ProjectCard
            projectNumber="4"
            title="NFT Marketplace"
            description="A marketplace for minting and trading NFTs with built-in royalty management."
            imageSrc="/images/nft-marketplace.png"
            tags={["NFT", "Marketplace"]}
            styles={styles}
          />

          <ProjectCard
            projectNumber="5"
            title="Blockchain Explorer"
            description="Explore transaction data and smart contracts across multiple blockchain networks."
            imageSrc="/images/blockchain-explorer.png"
            tags={["Explorer", "Data"]}
            styles={styles}
          />

          <ProjectCard
            projectNumber="6"
            title="Crypto Portfolio Dashboard"
            description="Manage and track your crypto portfolio with performance analysis and tax reporting."
            imageSrc="/images/crypto-portfolio.png"
            tags={["Portfolio", "Analytics"]}
            styles={styles}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Get In Touch</span>
          <h2 className={styles.sectionTitle}>Contact Me</h2>
        </div>
        <div className={styles.contactCard}>
          <p className={styles.heroDescription} style={{ marginBottom: '2rem' }}>
            Feel free to reach out to me for collaboration or inquiries related to cryptocurrency news, yield farming, DeFi, or airdrop strategies.
          </p>
          <div className={`${styles.grid} ${styles.grid2Col}`}>
            <div className={styles.contactMethod}>
              <h3 className={styles.contactTitle}>Email Me</h3>
              <a href="mailto:erpextxt@gmail.com" className={styles.contactLink}>
                erpextxt@gmail.com
                <span style={{ marginLeft: '0.25rem' }}>↗</span>
              </a>
            </div>
            <div className={styles.contactMethod}>
              <h3 className={styles.contactTitle}>Follow Me</h3>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>T</a>
                <a href="#" className={styles.socialIcon}>G</a>
                <a href="#" className={styles.socialIcon}>D</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ProjectCard component with CSS Modules
function ProjectCard({ projectNumber, title, description, imageSrc, tags, styles }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${styles.cardHover}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.cardImageContainer}>
        <div className={styles.cardBadge}>
          Project {projectNumber}
        </div>
        <img
          src={imageSrc || `/api/placeholder/400/320`}
          alt={`Project ${projectNumber}`}
          className={styles.cardImage}
        />
      </div>
      
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>
          {description}
        </p>
        
        <div className={styles.cardTags}>
          {tags && tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        
        <a href="#" className={styles.cardLink}>
          View details
          <span className={styles.cardLinkIcon}>→</span>
        </a>
      </div>
    </div>
  );
}
