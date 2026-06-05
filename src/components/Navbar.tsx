import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  links: NavLink[]
  ctaLabel: string
  ctaHref: string
}

export function Navbar({ links, ctaLabel, ctaHref }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isAnchor = ctaHref.startsWith('#')

  const handleCta = () => {
    if (isAnchor) {
      const el = document.querySelector(ctaHref)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
      style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <Link to="/" className="flex items-center gap-1 select-none">
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 28, height: 28, borderRadius: 8, border: '1.5px solid rgba(255,255,255,0.3)',
          marginRight: 6
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <polygon points="2,1 11,6 2,11" fill="white" />
          </svg>
        </span>
        <span style={{ fontFamily: 'Russo One, sans-serif', fontSize: 15, fontWeight: 700, letterSpacing: '-0.3px' }}>
          <span style={{ color: '#fff' }}>Record</span>
          <span style={{ color: '#FFD000' }}> gram</span>
        </span>
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map(link => (
          link.href.startsWith('#') ? (
            <button
              key={link.label}
              onClick={() => {
                const el = document.querySelector(link.href)
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{ color: '#9CA3AF', fontSize: 14, fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ) : (
            <Link
              key={link.label}
              to={link.href}
              style={{ color: location.pathname === link.href ? '#fff' : '#9CA3AF', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          )
        ))}
      </div>

      {/* CTA */}
      <div className="hidden md:block">
        {isAnchor ? (
          <button onClick={handleCta} style={{
            background: '#FFD000', color: '#0A0A0A', fontFamily: 'Manrope, sans-serif',
            fontWeight: 700, fontSize: 14, padding: '10px 20px', borderRadius: 100,
            border: 'none', cursor: 'pointer', whiteSpace: 'nowrap'
          }}>
            {ctaLabel}
          </button>
        ) : (
          <Link to={ctaHref} style={{
            background: '#FFD000', color: '#0A0A0A', fontFamily: 'Manrope, sans-serif',
            fontWeight: 700, fontSize: 14, padding: '10px 20px', borderRadius: 100,
            textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-block'
          }}>
            {ctaLabel}
          </Link>
        )}
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden" onClick={() => setOpen(v => !v)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 4 }}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, background: '#111',
          borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '16px 24px 24px', zIndex: 99
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {links.map(link => (
              link.href.startsWith('#') ? (
                <button
                  key={link.label}
                  onClick={() => { const el = document.querySelector(link.href); el?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }}
                  style={{ color: '#9CA3AF', fontSize: 15, fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                >
                  {link.label}
                </button>
              ) : (
                <Link key={link.label} to={link.href} onClick={() => setOpen(false)}
                  style={{ color: '#9CA3AF', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>
                  {link.label}
                </Link>
              )
            ))}
            {isAnchor ? (
              <button onClick={handleCta} style={{
                background: '#FFD000', color: '#0A0A0A', fontWeight: 700, fontSize: 14,
                padding: '12px 20px', borderRadius: 100, border: 'none', cursor: 'pointer', width: '100%'
              }}>{ctaLabel}</button>
            ) : (
              <Link to={ctaHref} onClick={() => setOpen(false)} style={{
                background: '#FFD000', color: '#0A0A0A', fontWeight: 700, fontSize: 14,
                padding: '12px 20px', borderRadius: 100, textDecoration: 'none',
                display: 'block', textAlign: 'center'
              }}>{ctaLabel}</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
