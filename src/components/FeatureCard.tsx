import { motion } from 'motion/react'
import { type ReactNode, useRef, useState } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  gradient?: string
  delay?: number
}

const DEFAULT_GRADIENT = 'linear-gradient(137deg, #FFD000 0%, #FF9D3C 100%)'

export function FeatureCard({ icon, title, description, gradient = DEFAULT_GRADIENT, delay = 0 }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0, inside: false })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, inside: true })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse(m => ({ ...m, inside: false }))}
      style={{ position: 'relative', width: '100%', cursor: 'default' }}
    >
      {/* Static glow behind card */}
      <div style={{
        position: 'absolute', inset: 0,
        background: gradient,
        filter: 'blur(40px)',
        opacity: mouse.inside ? 0.35 : 0.2,
        borderRadius: 24,
        pointerEvents: 'none',
        transition: 'opacity 0.3s ease',
      }} />

      {/* Card */}
      <div style={{
        position: 'relative',
        borderRadius: 20,
        padding: '24px 22px',
        border: '1.5px solid transparent',
        background: `linear-gradient(#14141C, #14141C) padding-box, ${gradient} border-box`,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        height: '100%',
        overflow: 'hidden',
      }}>
        {/* Mouse-tracking inner glow */}
        {mouse.inside && (
          <div style={{
            position: 'absolute',
            left: mouse.x - 80,
            top: mouse.y - 80,
            width: 160,
            height: 160,
            background: `radial-gradient(circle, rgba(255,208,0,0.15) 0%, transparent 70%)`,
            pointerEvents: 'none',
            borderRadius: '50%',
            transition: 'opacity 0.2s ease',
          }} />
        )}

        <div style={{ fontSize: 24, position: 'relative', zIndex: 1 }}>{icon}</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#fff', fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{title}</div>
          <div style={{ color: '#6B7280', fontSize: 13, lineHeight: 1.65 }}>{description}</div>
        </div>
      </div>
    </motion.div>
  )
}
