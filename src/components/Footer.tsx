import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.07)',
      background: '#0A0A0A',
      padding: '60px 24px 40px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 64, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {/* Logo + description */}
        <div style={{ flex: '1 1 240px', maxWidth: 320 }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 28, height: 28, borderRadius: 8, border: '1.5px solid rgba(255,255,255,0.25)',
            }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <polygon points="2,1 11,6 2,11" fill="white" />
              </svg>
            </span>
            <span style={{ fontFamily: 'Russo One, sans-serif', fontSize: 15, fontWeight: 700 }}>
              <span style={{ color: '#fff' }}>Record</span>
              <span style={{ color: '#FFD000' }}> gram</span>
            </span>
          </Link>
          <p style={{ color: '#4B5563', fontSize: 13, lineHeight: 1.7, margin: 0 }}>
            Социальное приложение для рекордов:<br />
            снимай видео-попытку, попадай в рейтинг,<br />
            соревнуйся с миром.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 80, flexWrap: 'wrap' }}>
          <div>
            <div style={{ color: '#6B7280', fontSize: 11, fontWeight: 700, letterSpacing: 1.2, marginBottom: 20, textTransform: 'uppercase' }}>
              Продукт
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Link to="/waitlist" style={{ color: '#D1D5DB', fontSize: 14, textDecoration: 'none' }}
                className="hover:text-white">Лист ожидания</Link>
              <a href="#how" onClick={e => { e.preventDefault(); document.querySelector('#how')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{ color: '#D1D5DB', fontSize: 14, textDecoration: 'none', cursor: 'pointer' }}>
                Как работает батл
              </a>
              <Link to="/bloggers" style={{ color: '#D1D5DB', fontSize: 14, textDecoration: 'none' }}>
                Забронировать батл
              </Link>
            </div>
          </div>

          <div>
            <div style={{ color: '#6B7280', fontSize: 11, fontWeight: 700, letterSpacing: 1.2, marginBottom: 20, textTransform: 'uppercase' }}>
              Контакт
            </div>
            <a href="mailto:creators@recordgram.com"
              style={{ color: '#D1D5DB', fontSize: 14, textDecoration: 'none' }}>
              creators@recordgram.com
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '40px auto 0', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ color: '#374151', fontSize: 12, margin: 0 }}>© 2025 Recordgram. Все права защищены.</p>
      </div>
    </footer>
  )
}
