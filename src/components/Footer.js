import { FaGithub, FaTwitter } from 'react-icons/fa';  // Mengimpor ikon dari react-icons

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 CryCapital</p>
      <div>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
          <FaTwitter size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
