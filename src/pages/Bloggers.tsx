import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Navbar } from '../components/Navbar'
import { PhoneMockup } from '../components/PhoneMockup'
import { StepCard } from '../components/StepCard'
import { FeatureCard } from '../components/FeatureCard'
import { Footer } from '../components/Footer'
import { Star, Users, User, DollarSign, Zap, TrendingUp } from 'lucide-react'

const navLinks = [
  { label: 'Как работает батл', href: '#how' },
  { label: 'Выгоды', href: '#benefits' },
  { label: 'Лист ожидания', href: '/waitlist' },
]

const battleSteps = [
  { number: '01', title: 'Выбери формат батла', description: 'Планка, отжимания, скорость — любой формат.' },
  { number: '02', title: 'Получи личную ссылку', description: 'Твоя аудитория переходит по ней и участвует.' },
  { number: '03', title: 'Подписчики снимают попытки', description: 'Участвуют в твоём батле и соревнуются друг с другом.' },
  { number: '04', title: 'Лидерборд батла растёт', description: 'Всё больше участников — всё выше охват.' },
]

const benefits = [
  { icon: <Star size={22} strokeWidth={2} color="#FFD000" />, title: 'Новый формат контента', description: 'Не пост, а интерактив: аудитория участвует, а не пролистывает.' },
  { icon: <Users size={22} strokeWidth={2} color="#FFD000" />, title: 'Глубокая вовлечённость', description: 'Подписчики возвращаются, чтобы подняться в твоём лидерборде.' },
  { icon: <User size={22} strokeWidth={2} color="#FFD000" />, title: 'Именной батл', description: 'Батл носит твоё имя — это узнаваемый формат и личный бренд.' },
  { icon: <DollarSign size={22} strokeWidth={2} color="#FFD000" />, title: 'Монетизация с реальных действий', description: 'Доход не за просмотры, а за реальные действия пользователей.' },
  { icon: <Zap size={22} strokeWidth={2} color="#FFD000" />, title: 'Статус раннего партнёра', description: 'Первая волна получает приоритет, поддержку и лучшие условия.' },
  { icon: <TrendingUp size={22} strokeWidth={2} color="#FFD000" />, title: 'Растущая аудитория', description: 'Каждая попытка подписчика — это новый виток охвата для тебя.' },
]

const goldGradient = 'linear-gradient(137deg, #FFD000 0%, #FF9D3C 100%)'

export function Bloggers() {
  const [form, setForm] = useState({ name: '', country: '', platform: '', followers: '', contact: '', idea: '' })
  const [submitted, setSubmitted] = useState(false)
  const [ref, setRef] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const refParam = params.get('ref')
    if (refParam) { setRef(refParam); localStorage.setItem('rg_blogger_ref', refParam) }
    const utmSource = params.get('utm_source')
    if (utmSource) localStorage.setItem('rg_blogger_utm', utmSource)
  }, [])

  const handleChange = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const entry = { ...form, ref, ts: Date.now() }
    const existing = JSON.parse(localStorage.getItem('rg_bloggers') || '[]')
    existing.push(entry)
    localStorage.setItem('rg_bloggers', JSON.stringify(existing))
    setSubmitted(true)
  }

  const sectionStyle = { padding: '80px 24px', maxWidth: 1100, margin: '0 auto', width: '100%' }

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A' }}>
      <Navbar links={navLinks} ctaLabel="Забронировать батл" ctaHref="#form" />

      {/* HERO */}
      <section style={{ padding: '120px 24px 80px', maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px', maxWidth: 560 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'rgba(255,208,0,0.1)', border: '1px solid rgba(255,208,0,0.2)',
                borderRadius: 100, padding: '5px 13px', marginBottom: 28,
              }}>
                <span style={{ color: '#FFD000', fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>ПЕРВАЯ ВОЛНА КРЕАТОРОВ · IOS</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'Russo One, sans-serif', fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1px', margin: '0 0 20px' }}
            >
              <span style={{ color: '#fff' }}>Запусти свой </span>
              <span style={{ color: '#FFD000' }}>батл</span>
              <span style={{ color: '#fff' }}> в Recordgram</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.7, margin: '0 0 32px' }}
            >
              Твои подписчики не просто смотрят тебя — они соревнуются с тобой и пытаются побить твой результат.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
            >
              <button
                onClick={() => document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: '#FFD000', color: '#0A0A0A', fontWeight: 700, fontSize: 15, padding: '13px 28px', borderRadius: 100, border: 'none', cursor: 'pointer' }}
              >
                Забронировать батл
              </button>
              <button
                onClick={() => document.querySelector('#how')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: 'transparent', color: '#fff', fontWeight: 600, fontSize: 15, padding: '13px 24px', borderRadius: 100, border: '1.5px solid rgba(255,255,255,0.2)', cursor: 'pointer' }}
              >
                Как это работает
              </button>
            </motion.div>
            {ref && <p style={{ color: '#FFD000', fontSize: 12, marginTop: 16 }}>Реферал: @{ref}</p>}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}
          >
            <PhoneMockup variant="bloggers" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={sectionStyle}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{
            background: '#16161E', borderRadius: 20, padding: '24px 28px',
            border: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', gap: 20, alignItems: 'flex-start', maxWidth: 720,
          }}>
            <div style={{
              width: 44, height: 44, background: 'rgba(255,208,0,0.12)', borderRadius: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ color: '#FFD000', fontSize: 18 }}>≡</span>
            </div>
            <div>
              <div style={{ color: '#fff', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Что такое Recordgram</div>
              <div style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.7 }}>
                Recordgram — приложение, где люди снимают видео-попытки побить рекорды, попадают в лидерборды и соревнуются с друзьями, креаторами и людьми по всему миру. Каждая попытка — это видео, каждый рекорд — это вызов.
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* HOW BATTLE WORKS */}
      <section id="how" style={sectionStyle}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Badge label="4 ШАГА" />
          <h2 style={{ fontFamily: 'Russo One, sans-serif', fontSize: 'clamp(22px, 4vw, 38px)', fontWeight: 800, margin: '12px 0 8px', color: '#fff' }}>
            Как работает батл креатора
          </h2>
          <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 36 }}>От идеи до растущего лидерборда — за пару минут.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {battleSteps.map((s, i) => <StepCard key={s.number} {...s} delay={i * 0.08} />)}
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" style={sectionStyle}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Badge label="ЗАЧЕМ ЭТО КРЕАТОРУ" />
          <h2 style={{ fontFamily: 'Russo One, sans-serif', fontSize: 'clamp(22px, 4vw, 38px)', fontWeight: 800, margin: '12px 0 36px', color: '#fff' }}>
            Выгоды для блогера
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {benefits.map((b, i) => (
            <FeatureCard key={b.title} icon={b.icon} title={b.title} description={b.description} gradient={goldGradient} delay={i * 0.07} />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section style={sectionStyle}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{
            background: '#16161E', borderRadius: 20, padding: '36px 40px',
            border: '1px solid rgba(255,255,255,0.07)', marginBottom: 20,
            display: 'flex', justifyContent: 'center',
          }}>
            <div style={{ display: 'flex', gap: 0, width: '100%', maxWidth: 640 }}>
              {[
                { value: '50 слотов', label: 'в мире, в первой волне', color: '#FFD000' },
                { value: '8–10', label: 'креаторов на страну', color: '#fff' },
                { value: '14 дней', label: 'и приём закрываем', color: '#EF4444' },
              ].map((stat, i) => (
                <div key={stat.value} style={{
                  flex: '1 1 0', textAlign: 'center', padding: '0 24px',
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}>
                  <div style={{ fontFamily: 'Russo One, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: stat.color, marginBottom: 8 }}>
                    {stat.value}
                  </div>
                  <div style={{ color: '#6B7280', fontSize: 13 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)',
            borderRadius: 100, padding: '6px 14px',
          }}>
            <span style={{ color: '#EF4444', fontSize: 12, fontWeight: 700 }}>⚠ Приём закрываем через 14 дней</span>
          </div>
        </motion.div>
      </section>

      {/* FORM */}
      <section id="form" style={{ ...sectionStyle, paddingBottom: 80 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <Badge label="ЗАЯВКА В ПЕРВУЮ ВОЛНУ" />
            <h2 style={{ fontFamily: 'Russo One, sans-serif', fontSize: 'clamp(22px, 4vw, 38px)', fontWeight: 800, margin: '12px 0 8px', color: '#fff' }}>
              Забронировать батл
            </h2>
            <p style={{ color: '#6B7280', fontSize: 14 }}>
              Заполни заявку — мы свяжемся с подходящими креаторами в течение 14 дней.
            </p>
          </div>

          <div style={{ background: '#16161E', borderRadius: 24, padding: '32px 28px', border: '1px solid rgba(255,255,255,0.07)' }}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                style={{ padding: '20px 0', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>🎉</div>
                <div style={{ color: '#fff', fontSize: 20, fontWeight: 800, fontFamily: 'Russo One, sans-serif', marginBottom: 8 }}>
                  Заявка принята!
                </div>
                <div style={{ color: '#9CA3AF', fontSize: 14 }}>Мы свяжемся с тобой в течение 14 дней.</div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ textAlign: 'left' }}>
                  <label style={labelStyle}>Имя / ник *</label>
                  <input required placeholder="Алекс / @alex.run" value={form.name} onChange={e => handleChange('name', e.target.value)} style={inputStyle} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div style={{ textAlign: 'left' }}>
                    <label style={labelStyle}>Страна *</label>
                    <input required placeholder="Россия" value={form.country} onChange={e => handleChange('country', e.target.value)} style={inputStyle} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <label style={labelStyle}>Основная площадка *</label>
                    <select required value={form.platform} onChange={e => handleChange('platform', e.target.value)} style={selectStyle}>
                      <option value="">Выберите...</option>
                      <option>YouTube</option>
                      <option>TikTok</option>
                      <option>Instagram</option>
                      <option>VK</option>
                      <option>Twitch</option>
                      <option>Другое</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div style={{ textAlign: 'left' }}>
                    <label style={labelStyle}>Подписчиков *</label>
                    <select required value={form.followers} onChange={e => handleChange('followers', e.target.value)} style={selectStyle}>
                      <option value="">Выберите...</option>
                      <option>до 10k</option>
                      <option>10k–50k</option>
                      <option>50k–200k</option>
                      <option>200k–1M</option>
                      <option>1M+</option>
                    </select>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <label style={labelStyle}>Контакт Telegram / email *</label>
                    <input required placeholder="@alex или alex@mail.com" value={form.contact} onChange={e => handleChange('contact', e.target.value)} style={inputStyle} />
                  </div>
                </div>

                <div style={{ textAlign: 'left' }}>
                  <label style={labelStyle}>Идея батла <span style={{ color: '#4B5563', fontWeight: 400 }}>(необязательно)</span></label>
                  <textarea
                    placeholder={'Например: «Планка на максимальное время» или «Скорость произнесения скороговорки».'}
                    value={form.idea}
                    onChange={e => handleChange('idea', e.target.value)}
                    rows={3}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                  <p style={{ color: '#4B5563', fontSize: 12, marginTop: 6 }}>Необязательно — но помогает нам быстрее подобрать формат.</p>
                </div>

                <button type="submit" style={{
                  background: '#FFD000', color: '#0A0A0A', fontWeight: 700, fontSize: 15,
                  padding: '14px', borderRadius: 100, border: 'none', cursor: 'pointer', marginTop: 4,
                  fontFamily: 'Manrope, sans-serif',
                }}>
                  Отправить заявку
                </button>
                <p style={{ color: '#4B5563', fontSize: 12, margin: 0 }}>
                  Отправляя заявку, ты соглашаешься, что мы свяжемся с тобой по указанному контакту. Это прототип — данные сохраняются только в этом браузере.
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
      background: 'rgba(255,208,0,0.1)', border: '1px solid rgba(255,208,0,0.2)',
      borderRadius: 100, padding: '5px 13px', marginBottom: 4,
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

const selectStyle: React.CSSProperties = {
  ...inputStyle, appearance: 'none', cursor: 'pointer',
}
