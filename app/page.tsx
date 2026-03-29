export default function Home() {
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
      padding: '48px',
    }}>

      {/* Login - top right */}
      <a href="/login" style={{
        position: 'fixed',
        top: '32px',
        right: '48px',
        fontSize: '10px',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.35)',
        textDecoration: 'none',
      }}>
        Log In
      </a>

      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{
          fontSize: '11px',
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
          marginBottom: '16px',
        }}>
          New York City
        </div>
        <div style={{
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: '300',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          Positive Space
        </div>
      </div>

      {/* Button */}
      <a href="/invite" style={{
        padding: '14px 48px',
        backgroundColor: '#ffffff',
        color: '#000000',
        border: 'none',
        fontSize: '10px',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        fontFamily: 'Georgia, serif',
      }}>
        Join Waitlist
      </a>

      {/* Footer */}
      <div style={{
        position: 'fixed',
        bottom: '32px',
        fontSize: '10px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.15)',
      }}>
        © 2026
      </div>

    </main>
  );
}
