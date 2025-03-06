import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">CryCapital</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Explore insights, projects, and expertise in cryptocurrency, yield farming, decentralized finance (DeFi), and blockchain technology.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg">
              Explore Projects
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      {/* About Me Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Who I Am</span>
            <h2 className="text-3xl font-bold mt-2">About Me</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            I am a Node Operator with a passion for sharing the latest updates on cryptocurrency news, yield farming, decentralized finance (DeFi), and airdrop strategies. My mission is to help the community stay informed and take advantage of the opportunities in the fast-evolving world of crypto.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">5+</span>
              </div>
              <h3 className="font-semibold mb-1">Years Experience</h3>
              <p className="text-gray-600 text-sm">In blockchain technology</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">50+</span>
              </div>
              <h3 className="font-semibold mb-1">DeFi Projects</h3>
              <p className="text-gray-600 text-sm">Analyzed and reviewed</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">100+</span>
              </div>
              <h3 className="font-semibold mb-1">Community Members</h3>
              <p className="text-gray-600 text-sm">Helped with strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">My Work</span>
            <h2 className="text-3xl font-bold mt-2">Featured Projects</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              projectNumber="1"
              title="Crypto Yield Tracker"
              description="Track crypto yields across DeFi platforms with real-time analytics and performance metrics."
              imageSrc="/images/blognextjs.png"
              tags={["DeFi", "Analytics"]}
            />
            
            <ProjectCard
              projectNumber="2"
              title="Airdrop Manager"
              description="A comprehensive tool to manage upcoming and active airdrops with notification systems."
              imageSrc="/images/airdrop-manager.png"
              tags={["Airdrops", "Tool"]}
            />

            <ProjectCard
              projectNumber="3"
              title="DeFi Strategies Blog"
              description="Insights and proven strategies for decentralized finance to maximize returns."
              imageSrc="/images/defi-strategies.png"
              tags={["Blog", "Strategies"]}
            />

            <ProjectCard
              projectNumber="4"
              title="NFT Marketplace"
              description="A marketplace for minting and trading NFTs with built-in royalty management."
              imageSrc="/images/nft-marketplace.png"
              tags={["NFT", "Marketplace"]}
            />

            <ProjectCard
              projectNumber="5"
              title="Blockchain Explorer"
              description="Explore transaction data and smart contracts across multiple blockchain networks."
              imageSrc="/images/blockchain-explorer.png"
              tags={["Explorer", "Data"]}
            />

            <ProjectCard
              projectNumber="6"
              title="Crypto Portfolio Dashboard"
              description="Manage and track your crypto portfolio with performance analysis and tax reporting."
              imageSrc="/images/crypto-portfolio.png"
              tags={["Portfolio", "Analytics"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl font-bold mt-2">Contact Me</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-8 mx-4 md:mx-0">
            <p className="text-lg text-gray-700 text-center mb-8">
              Feel free to reach out to me for collaboration or inquiries related to cryptocurrency news, yield farming, DeFi, or airdrop strategies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3">Email Me</h3>
                <a href="mailto:erpextxt@gmail.com" className="text-blue-600 hover:underline flex items-center justify-center">
                  erpextxt@gmail.com
                  <ArrowUpRight size={16} className="ml-1" />
                </a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3">Follow Me</h3>
                <div className="flex justify-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
                    T
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
                    G
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
                    D
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Enhanced ProjectCard component
function ProjectCard({ projectNumber, title, description, imageSrc, tags }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 h-full ${isHovered ? 'shadow-xl transform -translate-y-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc || `/api/placeholder/400/320`}
          alt={`Project ${projectNumber}`}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
          Project {projectNumber}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags && tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <button className={`text-blue-600 text-sm font-semibold flex items-center transition-all duration-300 ${isHovered ? 'text-blue-800' : ''}`}>
          View details
          <ArrowUpRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
