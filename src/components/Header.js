import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ padding: '1.5rem 0', borderBottom: '1px solid #eaeaea', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Ganti teks RPX dengan gambar */}
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333' }}>
        <img 
          src="/crycapital.png" 
          alt="RPX Logo" 
          style={{ height: '50px', objectFit: 'contain' }} 
        />
      </h1>
      
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="#home" scroll={false}>Home</Link>
        <Link href="#about" scroll={false}>About</Link>
        <Link href="#projects" scroll={false}>Projects</Link>
        <Link href="#contact" scroll={false}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
