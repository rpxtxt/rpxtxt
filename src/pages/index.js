import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="container">
      <Header />
      
      {/* Section: Home */}
      <section id="home" style={{ padding: '2rem 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.8rem' }}>Im CryCapital</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1rem', color: '#555' }}>
          Explore insights, projects, and expertise in cryptocurrency, yield farming, decentralized finance (DeFi), and blockchain technology.
        </p>
      </section>
      
      {/* Section: About Me */}
      <section id="about" style={{ padding: '2rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>About Me</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '0.95rem', color: '#666' }}>
          I am a Node Operator with a passion for sharing the latest updates on cryptocurrency news, yield farming, decentralized finance (DeFi), and airdrop strategies. My mission is to help the community stay informed and take advantage of the opportunities in the fast-evolving world of crypto.
        </p>
      </section>

      {/* Section: Projects */}
      <section id="projects" style={{ padding: '3rem 0', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>My Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Project 1 */}
          <ProjectCard
            projectNumber="1"
            description="Crypto Yield Tracker: Track crypto yields across DeFi platforms."
            imageSrc="/images/blognextjs.png"
          />
          
          {/* Project 2 */}
          <ProjectCard
            projectNumber="2"
            description="Airdrop Manager: A tool to manage upcoming and active airdrops."
            imageSrc="/images/airdrop-manager.png"
          />

          {/* Project 3 */}
          <ProjectCard
            projectNumber="3"
            description="DeFi Strategies Blog: Insights and strategies for decentralized finance."
            imageSrc="/images/defi-strategies.png"
          />

          {/* Project 4 */}
          <ProjectCard
            projectNumber="4"
            description="NFT Marketplace: A marketplace for minting and trading NFTs."
            imageSrc="/images/nft-marketplace.png"
          />

          {/* Project 5 */}
          <ProjectCard
            projectNumber="5"
            description="Blockchain Explorer: Explore transaction data and smart contracts."
            imageSrc="/images/blockchain-explorer.png"
          />

          {/* Project 6 */}
          <ProjectCard
            projectNumber="6"
            description="Crypto Portfolio Dashboard: Manage and track your crypto portfolio."
            imageSrc="/images/crypto-portfolio.png"
          />

        </div>
      </section>

      {/* Section: Contact */}
      <section id="contact" style={{ padding: '2rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Contact Me</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem', color: '#666' }}>
          Feel free to reach out to me for collaboration or inquiries related to cryptocurrency news, yield farming, DeFi, or airdrop strategies.
        </p>
        <p style={{ fontSize: '1rem', marginTop: '1rem' }}>Email: <a href="mailto:you@example.com">erpextxt@gmail.com</a></p>
      </section>

      <Footer />
    </div>
  );
}

// ProjectCard component with centered description on responsive
function ProjectCard({ projectNumber, description, imageSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isHovered ? '0 6px 20px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '15px',
        overflow: 'hidden',
        backgroundColor: isHovered ? '#ffffff' : '#f0f0f0',
        border: '1px solid #ddd',
        height: '300px',  // Slightly increased the height to give more room
        minHeight: '300px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Deskripsi di atas gambar */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        width: '100%',
        padding: '0.8rem',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        fontSize: '0.75rem',  // Ukuran teks lebih kecil
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1',
      }}>
        {description}
      </div>

      <img
        src={imageSrc}
        alt={`Project ${projectNumber}`}
        style={{
          width: '100%',
          height: '65%',  // Adjusted to make the image slightly bigger
          objectFit: 'cover',
          borderRadius: '15px 15px 0 0',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
      />
    </div>
  );
}
