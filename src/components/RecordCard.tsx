import { motion } from 'motion/react'

interface RecordCardProps {
  emoji: string
  title: string
  subtitle: string
  delay?: number
}

export function RecordCard({ emoji, title, subtitle, delay = 0 }: RecordCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      style={{
        background: '#16161E',
        borderRadius: 16,
        padding: '20px 20px',
        border: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        cursor: 'default',
      }}
    >
      <span style={{ fontSize: 28, flexShrink: 0 }}>{emoji}</span>
      <div>
        <div style={{ color: '#fff', fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{title}</div>
        <div style={{ color: '#6B7280', fontSize: 12 }}>{subtitle}</div>
      </div>
    </motion.div>
  )
}
