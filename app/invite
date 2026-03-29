'use client';

import { useState } from 'react';

export default function Invite() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    neighborhood: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    width: '100%',
    padding: '16px 0',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
    color: '#ffffff',
    fontSize: '14px',
    letterSpacing: '0.05em',
    outline: 'none',
    fontFamily: 'Georgia, serif',
    boxSizing: 'border-box' as const,
  };

  const labelStyle = {
    fontSize: '9px',
    letterSpacing: '0.3em',
    textTransform: 'uppercase' as const,
    color: 'rgba(255,255,255,0.3)',
    display: 'block',
    marginBottom: '4px',
    marginTop: '32px',
  };

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 48px',
    }}>

      {/* Back */}
      <a href="/" style={{
        position: 'fixed',
        top: '32px',
        left: '48px',
        fontSize: '10px',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.25)',
        textDecoration: 'none',
      }}>
        ← Back
      </a>

      <div style={{ width: '100%', maxWidth: '400px' }}>

        {!submitted ? (
          <>
            {/* Heading */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{
                fontSize: '9px',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '16px',
              }}>
                Founding Members
              </div>
              <h1 style={{
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: '300',
                letterSpacing: '-0.01em',
                lineHeight: '1.2',
              }}>
                Request access to<br />Positive Space.
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <label style={labelStyle}>Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <label style={labelStyle}>Email</label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <label style={labelStyle}>Company / Project</label>
              <input
                name="company"
                type="text"
                placeholder="Where do you work?"
                value={form.company}
                onChange={handleChange}
                style={inputStyle}
              />

              <label style={labelStyle}>Role</label>
              <input
                name="role"
                type="text"
                placeholder="Founder, Executive, Creative..."
                value={form.role}
                onChange={handleChange}
                style={inputStyle}
              />

              <label style={labelStyle}>NYC Neighborhood</label>
              <input
                name="neighborhood"
                type="text"
                placeholder="Where do you work most?"
                value={form.neighborhood}
                onChange={handleChange}
                style={inputStyle}
              />

              <button type="submit" style={{
                width: '100%',
                padding: '16px',
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Georgia, serif',
                marginTop: '48px',
              }}>
                Submit Request
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '11px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '24px',
            }}>
              Request received
            </div>
            <p style={{
              fontSize: '16px',
              fontWeight: '300',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.6)',
            }}>
              We&apos;ll be in touch.
            </p>
          </div>
        )}
      </div>

      <div style={{
        position: 'fixed',
        bottom: '32px',
        fontSize: '10px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.1)',
      }}>
        © 2026 Positive Space
      </div>

    </main>
  );
}
