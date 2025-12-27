const Index = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Navigation Header */}
      <header style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e5e5',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#1a1a1a'
        }}>
          MySite
        </div>
        <nav style={{
          display: 'flex',
          gap: '24px'
        }}>
          <a href="#home" style={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: 500 }}>Home</a>
          <a href="#about" style={{ color: '#666', textDecoration: 'none' }}>About</a>
          <a href="#services" style={{ color: '#666', textDecoration: 'none' }}>Services</a>
          <a href="#contact" style={{ color: '#666', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        minHeight: 'calc(100vh - 65px)'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#1a1a1a',
            marginBottom: '16px',
            fontWeight: 600
          }}>
            Simple Website
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#666',
            lineHeight: 1.6
          }}>
            A lightweight, fast-loading page with no external fonts or CSP issues.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;