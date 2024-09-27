import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Header />
      
      {/* Section: Home */}
      <section id="home" style={{ padding: '2rem 0' }}>
        <h1>Im CryCapital</h1>
        <p>Explore insights, projects, and expertise in cryptocurrency, yield farming, decentralized finance (DeFi), and blockchain technology.</p>
      </section>
      
      {/* Section: About Me */}
      <section id="about" style={{ padding: '2rem 0' }}>
        <h2>About Me</h2>
        <p>
          I am a Node Operator with a passion for sharing the latest updates on cryptocurrency news, yield farming, decentralized finance (DeFi), and airdrop strategies. My mission is to help the community stay informed and take advantage of the opportunities in the fast-evolving world of crypto.
        </p>
      </section>

      {/* Section: Projects */}
      <section id="projects" style={{ padding: '2rem 0' }}>
        <h2>My Projects</h2>
        <ul>
          <li><strong>Crypto Yield Farming Dashboard:</strong> A dashboard to track yield farming opportunities across DeFi platforms.</li>
          <li><strong>Airdrop Tracker:</strong> A tool to track upcoming and active cryptocurrency airdrops.</li>
          <li><strong>DeFi Strategies Blog:</strong> A blog sharing insights and strategies for decentralized finance (DeFi) investment.</li>
        </ul>
      </section>

      {/* Section: Contact */}
      <section id="contact" style={{ padding: '2rem 0' }}>
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me for collaboration or inquiries related to cryptocurrency news, yield farming, DeFi, or airdrop strategies.
        </p>
        <p>Email: <a href="mailto:you@example.com">erpextxt@gmail.com</a></p>
      </section>

      <Footer />
    </div>
  );
}
