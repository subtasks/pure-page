import { useState } from 'react';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontFamily: 'inherit',
    outline: 'none'
  };

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
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1a1a1a' }}>MySite</div>
        <nav style={{ display: 'flex', gap: '24px' }}>
          <a href="#home" style={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: 500 }}>Home</a>
          <a href="#about" style={{ color: '#666', textDecoration: 'none' }}>About</a>
          <a href="#services" style={{ color: '#666', textDecoration: 'none' }}>Services</a>
          <a href="#contact" style={{ color: '#666', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px',
        backgroundColor: '#fff'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#1a1a1a', marginBottom: '16px', fontWeight: 600 }}>
            Simple Website
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#666', lineHeight: 1.6 }}>
            A lightweight, fast-loading page with no external fonts or CSP issues.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '80px 20px',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{
            flex: '1 1 300px',
            minHeight: '300px',
            backgroundColor: '#ddd',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888'
          }}>
            Image Placeholder
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '2rem', color: '#1a1a1a', marginBottom: '16px', fontWeight: 600 }}>About Us</h2>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.7, marginBottom: '12px' }}>
              We are a team dedicated to building fast, accessible, and lightweight web experiences. Our focus is on simplicity and performance.
            </p>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.7 }}>
              With years of experience in web development, we deliver solutions that work seamlessly across all devices and browsers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '80px 20px',
        backgroundColor: '#fff'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: '#1a1a1a', marginBottom: '40px', fontWeight: 600 }}>Our Services</h2>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { title: 'Web Design', desc: 'Beautiful, responsive designs tailored to your brand.' },
              { title: 'Development', desc: 'Fast, reliable code that scales with your business.' },
              { title: 'Consulting', desc: 'Expert advice to optimize your digital presence.' }
            ].map((service, i) => (
              <div key={i} style={{
                flex: '1 1 250px',
                maxWidth: '280px',
                padding: '32px 24px',
                backgroundColor: '#f9f9f9',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '50%',
                  margin: '0 auto 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#888'
                }}>
                  {i + 1}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#1a1a1a', marginBottom: '8px', fontWeight: 600 }}>{service.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '80px 20px',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', color: '#1a1a1a', marginBottom: '8px', fontWeight: 600, textAlign: 'center' }}>Contact Us</h2>
          <p style={{ fontSize: '1rem', color: '#666', marginBottom: '32px', textAlign: 'center' }}>
            Have a question? Send us a message.
          </p>

          {submitted ? (
            <div style={{
              padding: '24px',
              backgroundColor: '#d4edda',
              borderRadius: '8px',
              textAlign: 'center',
              color: '#155724'
            }}>
              Thank you! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ ...inputStyle, borderColor: errors.name ? '#dc3545' : '#ddd' }}
                  maxLength={100}
                />
                {errors.name && <span style={{ color: '#dc3545', fontSize: '0.85rem' }}>{errors.name}</span>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ ...inputStyle, borderColor: errors.email ? '#dc3545' : '#ddd' }}
                  maxLength={255}
                />
                {errors.email && <span style={{ color: '#dc3545', fontSize: '0.85rem' }}>{errors.email}</span>}
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical', borderColor: errors.message ? '#dc3545' : '#ddd' }}
                  maxLength={1000}
                />
                {errors.message && <span style={{ color: '#dc3545', fontSize: '0.85rem' }}>{errors.message}</span>}
              </div>
              <button
                type="submit"
                style={{
                  padding: '14px 24px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#fff',
                  backgroundColor: '#1a1a1a',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '24px',
        backgroundColor: '#1a1a1a',
        textAlign: 'center',
        color: '#999'
      }}>
        © 2024 MySite. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;