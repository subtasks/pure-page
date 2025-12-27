const Index = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
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
    </div>
  );
};

export default Index;
