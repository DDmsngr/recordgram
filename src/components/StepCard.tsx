import { motion } from 'motion/react'

interface StepCardProps {
  number: string
  title: string
  description: string
  delay?: number
}

export function StepCard({ number, title, description, delay = 0 }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      style={{
        background: '#16161E',
        borderRadius: 20,
        padding: '28px 24px',
        border: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <span style={{
        fontFamily: 'Unbounded, sans-serif',
        color: '#FFD000',
        fontSize: 28,
        fontWeight: 700,
        lineHeight: 1,
      }}>{number}</span>
      <div>
        <div style={{ color: '#fff', fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{title}</div>
        <div style={{ color: '#6B7280', fontSize: 13, lineHeight: 1.6 }}>{description}</div>
      </div>
    </motion.div>
  )
}
