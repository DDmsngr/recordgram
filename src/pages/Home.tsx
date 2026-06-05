import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const navLinks = [
  { label: 'Для блогеров', href: '/bloggers' },
  { label: 'Войти в очередь', href: '/waitlist' },
]

export function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A' }}>
      <Navbar links={navLinks} ctaLabel="Получить доступ" ctaHref="/waitlist" />

      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px 60px',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'fixed', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 600, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,208,0,0.06) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, width: '100%', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,208,0,0.1)', border: '1px solid rgba(255,208,0,0.25)',
              borderRadius: 100, padding: '6px 14px', marginBottom: 32,
            }}>
              <span style={{ color: '#FFD000', fontSize: 11, fontWeight: 700, letterSpacing: 1.2 }}>
                RECORDGRAM · AI · IOS
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'Exo 2, sans-serif',
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-1px',
              margin: '0 0 24px',
            }}
          >
            <span style={{ color: '#fff' }}>Побей рекорд.</span><br />
            <span style={{ color: '#FFD000' }}>Попади в рейтинг.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: '0 auto 48px' }}
          >
            Recordgram — социальное приложение, где люди снимают видео-попытки побить рекорды,
            попадают в лидерборды и соревнуются с друзьями, блогерами и людьми по всему миру.
          </motion.p>

          {/* Two cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
              maxWidth: 680,
              margin: '0 auto',
            }}
          >
            {/* For bloggers */}
            <div style={{
              background: '#16161E',
              borderRadius: 20,
              padding: '28px 28px 24px',
              border: '1px solid rgba(255,255,255,0.08)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <div style={{ color: '#FFD000', fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>ДЛЯ БЛОГЕРОВ</div>
              <div>
                <div style={{ color: '#fff', fontSize: 20, fontWeight: 800, marginBottom: 8, fontFamily: 'Exo 2, sans-serif', lineHeight: 1.2 }}>
                  Запусти свой батл
                </div>
                <div style={{ color: '#6B7280', fontSize: 13, lineHeight: 1.65 }}>
                  Твои подписчики не просто смотрят — они соревнуются с тобой. Забронируй слот в первой волне креаторов.
                </div>
              </div>
              <Link to="/bloggers" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: '#FFD000', color: '#0A0A0A',
                fontWeight: 700, fontSize: 14, padding: '11px 20px',
                borderRadius: 100, textDecoration: 'none', width: 'fit-content',
              }}>
                Стать креатором →
              </Link>
            </div>

            {/* For all */}
            <div style={{
              background: '#16161E',
              borderRadius: 20,
              padding: '28px 28px 24px',
              border: '1px solid rgba(255,255,255,0.08)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <div style={{ color: '#FFD000', fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>ДЛЯ ВСЕХ</div>
              <div>
                <div style={{ color: '#fff', fontSize: 20, fontWeight: 800, marginBottom: 8, fontFamily: 'Exo 2, sans-serif', lineHeight: 1.2 }}>
                  Лист ожидания
                </div>
                <div style={{ color: '#6B7280', fontSize: 13, lineHeight: 1.65 }}>
                  Снимай видео-попытку, соревнуйся с друзьями и поднимайся в рейтинге. Получи ранний доступ.
                </div>
              </div>
              <Link to="/waitlist" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'transparent', color: '#fff',
                fontWeight: 700, fontSize: 14, padding: '11px 20px',
                borderRadius: 100, textDecoration: 'none', width: 'fit-content',
                border: '1.5px solid rgba(255,255,255,0.2)',
              }}>
                В лист ожидания →
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
