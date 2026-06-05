interface PhoneMockupProps {
  variant?: 'waitlist' | 'bloggers'
}

export function PhoneMockup({ variant = 'waitlist' }: PhoneMockupProps) {
  return (
    <div style={{
      width: 240, height: 490,
      background: 'linear-gradient(160deg, #1E1E2E 0%, #0F0F1A 100%)',
      borderRadius: 40,
      border: '2px solid rgba(255,255,255,0.12)',
      boxShadow: '0 60px 100px rgba(0,0,0,0.7), 0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0,
      transform: 'rotate(6deg)',
      transition: 'transform 0.3s ease',
    }}>
      {/* Screen shine */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 5,
      }} />

      {/* Notch */}
      <div style={{
        position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
        width: 76, height: 20, background: '#050508', borderRadius: 10, zIndex: 10,
      }} />

      {/* Record / Live badge */}
      <div style={{
        position: 'absolute', top: 48, left: 16, zIndex: 10,
        display: 'flex', alignItems: 'center', gap: 6,
        background: '#EF4444', borderRadius: 100, padding: '5px 11px',
      }}>
        <div style={{ width: 6, height: 6, background: '#fff', borderRadius: '50%', animation: 'pulse 1.5s infinite' }} />
        <span style={{ color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>
          {variant === 'waitlist' ? 'ЗАПИСЬ' : 'БАТЛ В ЭФИРЕ'}
        </span>
      </div>

      {/* BG glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 40% 30%, rgba(255,208,0,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Bottom content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 0 16px' }}>
        {variant === 'waitlist' ? (
          <>
            <div style={{
              margin: '0 12px 8px', padding: '10px 12px',
              background: 'rgba(255,255,255,0.06)', borderRadius: 14,
              display: 'flex', alignItems: 'center', gap: 10,
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFD000, #FF9D3C)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <span style={{ color: '#0A0A0A', fontWeight: 800, fontSize: 13 }}>P</span>
              </div>
              <div>
                <div style={{ color: '#fff', fontSize: 12, fontWeight: 600 }}>Планка на время</div>
                <div style={{ color: '#9CA3AF', fontSize: 11 }}>Твоя попытка · 02:51</div>
              </div>
            </div>
            <div style={{ margin: '0 12px', padding: '10px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: 14, border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ color: '#6B7280', fontSize: 10, fontWeight: 700, letterSpacing: 0.8, marginBottom: 8 }}>РЕЙТИНГ СРЕДИ ДРУЗЕЙ</div>
              {[
                { pos: 1, name: '@max_fit', time: '4:02', gold: true },
                { pos: 2, name: '@dariya', time: '3:30', gold: false },
                { pos: 3, name: '@you', time: '2:51', gold: true },
              ].map(row => (
                <div key={row.pos} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#6B7280', fontSize: 11, width: 12 }}>{row.pos}</span>
                    <span style={{ color: '#D1D5DB', fontSize: 12 }}>{row.name}</span>
                  </div>
                  <span style={{ color: row.gold ? '#FFD000' : '#9CA3AF', fontSize: 12, fontWeight: 700 }}>{row.time}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div style={{
              margin: '0 12px 8px', padding: '10px 12px',
              background: 'rgba(255,255,255,0.06)', borderRadius: 14,
              display: 'flex', alignItems: 'center', gap: 10,
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFD000, #FF9D3C)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <span style={{ color: '#0A0A0A', fontWeight: 800, fontSize: 13 }}>A</span>
              </div>
              <div>
                <div style={{ color: '#fff', fontSize: 12, fontWeight: 600 }}>Батл с @alex.run</div>
                <div style={{ color: '#9CA3AF', fontSize: 11 }}>Планка на время · 8 421 попытка</div>
              </div>
            </div>
            <div style={{ margin: '0 12px', padding: '10px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: 14, border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ color: '#6B7280', fontSize: 10, fontWeight: 700, letterSpacing: 0.8, marginBottom: 8 }}>ЛИДЕРБОРД БАТЛА</div>
              {[
                { pos: 1, name: '@nastya_fit', time: '5:12', gold: true },
                { pos: 2, name: '@dmitry_run', time: '4:47', gold: false },
                { pos: 3, name: '@masha', time: '4:01', gold: true },
              ].map(row => (
                <div key={row.pos} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#6B7280', fontSize: 11, width: 12 }}>{row.pos}</span>
                    <span style={{ color: '#D1D5DB', fontSize: 12 }}>{row.name}</span>
                  </div>
                  <span style={{ color: row.gold ? '#FFD000' : '#9CA3AF', fontSize: 12, fontWeight: 700 }}>{row.time}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
