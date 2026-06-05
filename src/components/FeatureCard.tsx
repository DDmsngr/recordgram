import { motion } from 'motion/react'
import { type ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  gradient?: string
  delay?: number
}

const DEFAULT_GRADIENT = 'linear-gradient(137deg, #FFD000 0%, #FF9D3C 100%)'

export function FeatureCard({ icon, title, description, gradient = DEFAULT_GRADIENT, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      style={{ position: 'relative', width: '100%' }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: gradient,
        filter: 'blur(40px)',
        opacity: 0.25,
        borderRadius: 24,
        pointerEvents: 'none',
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
      }}>
        <div style={{ fontSize: 26 }}>{icon}</div>
        <div>
          <div style={{ color: '#fff', fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{title}</div>
          <div style={{ color: '#6B7280', fontSize: 13, lineHeight: 1.65 }}>{description}</div>
        </div>
      </div>
    </motion.div>
  )
}
