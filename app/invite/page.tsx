'use client';
import { useState } from 'react';
export default function Invite() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', neighborhood: '' });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setForm({ ...form, [e.target.name]: e.target.value }); };
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff', fontFamily: 'Georgia, serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 48px' }}>
      <a href="/" style={{ position: 'fixed', top: '32px', left: '48px', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>← Back</a>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '48px' }}>
              <div style={{ fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>Founding Members</div>
              <h1 style={{ fontSize: '32px', fontWeight: '300' }}>Request access to Positive Space.</h1>
            </div>
            {[['name','Full Name','Your name'],['email','Email','your@email.com'],['company','Company','Where do you work?'],['role','Role','Founder, Executive, Creative...'],['neighborhood','NYC Neighborhood','Where do you work most?']].map(([n,l,p]) => (
              <div key={n}>
                <label style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginTop: '32px', marginBottom: '4px' }}>{l}</label>
                <input name={n} placeholder={p} value={(form as any)[n]} onChange={handleChange} required={n==='name'||n==='email'} style={{ width: '100%', padding: '16px 0', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', fontSize: '14px', outline: 'none', fontFamily: 'Georgia, serif', boxSizing: 'border-box' }} />
              </div>
            ))}
            <button type="submit" style={{ width: '100%', padding: '16px', backgroundColor: '#ffffff', color: '#000000', border: 'none', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Georgia, serif', marginTop: '48px' }}>Submit Request</button>
          </form>
        ) : (
          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>We will be in touch.</div>
        )}
      </div>
      <div style={{ position: 'fixed', bottom: '32px', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.1)' }}>© 2026 Positive Space</div>
    </main>
  );
}
