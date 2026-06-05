import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Navbar } from '../components/Navbar'
import { PhoneMockup } from '../components/PhoneMockup'
import { StepCard } from '../components/StepCard'
import { RecordCard } from '../components/RecordCard'
import { Footer } from '../components/Footer'

const navLinks = [
  { label: 'Как это работает', href: '#how' },
  { label: 'Рекорды', href: '#records' },
  { label: 'Для блогеров', href: '/bloggers' },
]

const steps = [
  { number: '01', title: 'Сними попытку', description: 'Выбери рекорд и запиши свою видео-попытку прямо в приложении.' },
  { number: '02', title: 'Загрузи видео', description: 'Твоя попытка становится частью челленджа за секунды.' },
  { number: '03', title: 'Попади в рейтинг', description: 'Результат сразу встаёт в лидерборд — среди друзей и всего мира.' },
  { number: '04', title: 'Поделись результатом', description: 'Брось вызов друзьям и смотри, кто сможет тебя побить.' },
]

const records = [
  { emoji: '🧘', title: 'Планка на время', subtitle: 'Кто простоит дольше' },
  { emoji: '💪', title: 'Отжимания за 60 секунд', subtitle: 'Максимум повторов' },
  { emoji: '⚡', title: 'Скорость реакции', subtitle: 'Минимальное время' },
  { emoji: '🗣️', title: 'Прочитать фразу быстро', subtitle: 'Скороговорка на время' },
  { emoji: '🎯', title: 'Необычные задания', subtitle: 'Челленджи от сообщества' },
  { emoji: '🤹', title: 'Жонглирование', subtitle: 'Дольше всех без падения' },
]

const referralSteps = [
  { number: '01', title: 'Оставь email', description: 'Встань в лист ожидания на ранний доступ.' },
  { number: '02', title: 'Получи личную ссылку', description: 'Мы создадим персональную реферальную ссылку.' },
  { number: '03', title: 'Пригласи друзей', description: 'Поделись ссылкой — каждый друг приближает твой доступ.' },
  { number: '04', title: 'Поднимись в очереди', description: 'Чем больше друзей — тем выше ты в списке ожидания.' },
]

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [ref, setRef] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const refParam = params.get('ref')
    const utmSource = params.get('utm_source')
    if (refParam) { setRef(refParam); localStorage.setItem('rg_ref', refParam) }
    if (utmSource) localStorage.setItem('rg_utm_source', utmSource)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const entry = { email, country, name, ref, ts: Date.now() }
    const existing = JSON.parse(localStorage.getItem('rg_waitlist') || '[]')
    existing.push(entry)
    localStorage.setItem('rg_waitlist', JSON.stringify(existing))
    setSubmitted(true)
  }

  const sectionStyle = { padding: '80px 24px', maxWidth: 1100, margin: '0 auto', width: '100%' }

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A' }}>
      <Navbar links={navLinks} ctaLabel="Получить доступ" ctaHref="#form" />

      {/* HERO */}
      <section style={{ padding: '120px 24px 80px', maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px', maxWidth: 560 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'rgba(255,208,0,0.1)', border: '1px solid rgba(255,208,0,0.25)',
                borderRadius: 100, padding: '5px 13px', marginBottom: 28,
                boxShadow: '0 0 0 1px rgba(255,208,0,0.3), 0 0 16px rgba(255,208,0,0.4), 0 0 40px rgba(255,208,0,0.15)',
              }}>
                <span style={{ color: '#FFD000', fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>РАННИЙ ДОСТУП · IOS</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'Exo 2, sans-serif', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1px', margin: '0 0 20px' }}
            >
              <span style={{ color: '#fff' }}>Побей рекорд.</span><br />
              <span style={{ color: '#FFD000' }}>Попади в рейтинг.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.7, margin: '0 0 32px' }}
            >
              Recordgram — приложение, где ты снимаешь видео-попытку, соревнуешься с друзьями и поднимаешься в рейтинге.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}
            >
              <button
                onClick={() => document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: '#FFD000', color: '#0A0A0A', fontWeight: 700, fontSize: 15, padding: '13px 28px', borderRadius: 100, border: 'none', cursor: 'pointer' }}
              >
                Встать в очередь
              </button>
              <button
                onClick={() => document.querySelector('#how')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: 'transparent', color: '#fff', fontWeight: 600, fontSize: 15, padding: '13px 24px', borderRadius: 100, border: '1.5px solid rgba(255,255,255,0.2)', cursor: 'pointer' }}
              >
                Как это работает
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ color: '#4B5563', fontSize: 13 }}
            >
              12 784 попыток снято на этой неделе.
            </motion.p>
            {ref && (
              <p style={{ color: '#FFD000', fontSize: 12, marginTop: 8 }}>Тебя пригласил: @{ref}</p>
            )}
          </div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}
          >
            <PhoneMockup variant="waitlist" />
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={sectionStyle}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Badge label="4 ПРОСТЫХ ШАГА" />
          <h2 style={{ fontFamily: 'Exo 2, sans-serif', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, margin: '12px 0 40px', color: '#fff' }}>
            Как это работает
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {steps.map((s, i) => <StepCard key={s.number} {...s} delay={i * 0.08} />)}
        </div>
      </section>

      {/* RECORDS */}
      <section id="records" style={sectionStyle}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Badge label="ПРИМЕРЫ РЕКОРДОВ" />
          <h2 style={{ fontFamily: 'Exo 2, sans-serif', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, margin: '12px 0 8px', color: '#fff' }}>
            Что можно побить
          </h2>
          <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 36 }}>
            От спортивных до неожиданных — рекордом может стать что угодно.
          </p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
          {records.map((r, i) => <RecordCard key={r.title} {...r} delay={i * 0.06} />)}
        </div>
      </section>

      {/* REFERRAL */}
      <section style={sectionStyle}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 style={{ fontFamily: 'Exo 2, sans-serif', fontSize: 'clamp(22px, 4vw, 38px)', fontWeight: 800, margin: '0 0 40px', color: '#fff' }}>
            Поднимайся в очереди быстрее
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {referralSteps.map((s, i) => <StepCard key={s.number} {...s} delay={i * 0.08} />)}
        </div>
      </section>

      {/* FORM */}
      <section id="form" style={{ ...sectionStyle, paddingBottom: 120 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <Badge label="ЛИСТ ОЖИДАНИЯ" />
          <h2 style={{ fontFamily: 'Exo 2, sans-serif', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, margin: '12px 0 8px', color: '#fff' }}>
            Встать в очередь
          </h2>
          <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 32 }}>Открытый ранний доступ.</p>

          <div style={{
            background: '#16161E', borderRadius: 24, padding: '32px 28px',
            border: '1px solid rgba(255,255,255,0.07)',
          }}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                style={{ padding: '20px 0', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>🎉</div>
                <div style={{ color: '#fff', fontSize: 20, fontWeight: 800, fontFamily: 'Exo 2, sans-serif', marginBottom: 8 }}>
                  Ты в очереди!
                </div>
                <div style={{ color: '#FFD000', fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Твоя позиция: #247</div>
                <div style={{ color: '#6B7280', fontSize: 13 }}>
                  Мы пришлём письмо, когда откроется доступ.
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ textAlign: 'left' }}>
                  <label style={labelStyle}>Email *</label>
                  <input required type="email" placeholder="you@mail.com" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <label style={labelStyle}>Страна *</label>
                  <input required placeholder="Россия" value={country} onChange={e => setCountry(e.target.value)} style={inputStyle} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <label style={labelStyle}>Имя <span style={{ color: '#4B5563', fontWeight: 400 }}>(необязательно)</span></label>
                  <input placeholder="Как тебя зовут?" value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
                </div>
                <button type="submit" style={{
                  background: '#FFD000', color: '#0A0A0A', fontWeight: 700, fontSize: 15,
                  padding: '14px', borderRadius: 100, border: 'none', cursor: 'pointer', marginTop: 4,
                  fontFamily: 'Manrope, sans-serif',
                }}>
                  Встать в очередь
                </button>
                <p style={{ color: '#4B5563', fontSize: 12, margin: 0 }}>
                  Это прототип — данные сохраняются только в этом браузере. Никакого спама.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

function Badge({ label }: { label: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center',
      background: 'rgba(255,208,0,0.1)', border: '1px solid rgba(255,208,0,0.25)',
      borderRadius: 100, padding: '5px 13px', marginBottom: 4,
      boxShadow: '0 0 0 1px rgba(255,208,0,0.3), 0 0 16px rgba(255,208,0,0.4), 0 0 40px rgba(255,208,0,0.15)',
    }}>
      <span style={{ color: '#FFD000', fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{label}</span>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block', color: '#9CA3AF', fontSize: 13, fontWeight: 600, marginBottom: 8,
}

const inputStyle: React.CSSProperties = {
  width: '100%', background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 12, padding: '13px 16px', color: '#fff', fontSize: 14,
  fontFamily: 'Manrope, sans-serif', outline: 'none', boxSizing: 'border-box',
}
