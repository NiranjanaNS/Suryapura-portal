export function SunMotif({
  className = "",
  rays = 16,
  color = "var(--color-marigold)",
}: {
  className?: string;
  rays?: number;
  color?: string;
}) {
  const items = Array.from({ length: rays });
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="34" fill={color} />
      {items.map((_, i) => {
        const angle = (360 / rays) * i;
        return (
          <rect
            key={i}
            x="98"
            y="8"
            width="4"
            height="26"
            rx="2"
            fill={color}
            transform={`rotate(${angle} 100 100)`}
            opacity={i % 2 === 0 ? 1 : 0.55}
          />
        );
      })}
    </svg>
  );
}

/** Illustrated portrait of the fictional Village Development Ambassador — matches the hand-illustrated brand style, not a photo of a real person */
export function LeaderPortrait({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="100" fill="var(--color-marigold)" />
      <circle cx="100" cy="100" r="100" fill="url(#leaderRing)" opacity="0.25" />
      <defs>
        <radialGradient id="leaderRing" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* shoulders / kurta */}
      <path d="M30,200 C30,150 60,122 100,122 C140,122 170,150 170,200 Z" fill="var(--color-teal-dark)" />
      <path d="M30,200 C30,150 60,122 100,122 C140,122 170,150 170,200 Z" fill="none" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="2" />
      {/* collar */}
      <path d="M82,124 L100,150 L118,124" fill="none" stroke="var(--color-marigold-soft)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* neck */}
      <rect x="88" y="100" width="24" height="26" rx="8" fill="#C98B5E" />
      {/* head */}
      <ellipse cx="100" cy="76" rx="34" ry="38" fill="#D89A6A" />
      {/* ears */}
      <ellipse cx="66" cy="78" rx="6" ry="9" fill="#D89A6A" />
      <ellipse cx="134" cy="78" rx="6" ry="9" fill="#D89A6A" />
      {/* hair */}
      <path d="M66,66 C66,38 84,24 100,24 C116,24 134,38 134,66 C134,50 122,40 100,40 C78,40 66,50 66,66 Z" fill="#2B2320" />
      {/* moustache */}
      <path d="M84,92 Q100,100 116,92 Q108,96 100,94 Q92,96 84,92 Z" fill="#2B2320" />
      {/* eyes */}
      <circle cx="86" cy="72" r="3.4" fill="#1E2A22" />
      <circle cx="114" cy="72" r="3.4" fill="#1E2A22" />
      {/* eyebrows */}
      <path d="M79,63 Q86,58 93,62" stroke="#2B2320" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M107,62 Q114,58 121,63" stroke="#2B2320" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* smile */}
      <path d="M90,86 Q100,92 110,86" stroke="#8a4a2a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* turban band accent */}
      <path d="M68,52 Q100,32 132,52" stroke="var(--color-brick)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

/** Layered village skyline used in the hero — fields, school, panchayat dome, solar poles */
export function VillageSkyline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 420" className={className} aria-hidden="true">
      {/* sky wash */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-marigold-soft)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-paper)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hillFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BFE0C9" />
          <stop offset="100%" stopColor="#9FCDAE" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="900" height="420" fill="url(#sky)" />

      {/* sun */}
      <circle cx="740" cy="90" r="46" fill="var(--color-marigold)" opacity="0.9" />

      {/* far hills */}
      <path d="M0,260 Q150,190 320,250 T650,230 T900,255 L900,420 L0,420 Z" fill="url(#hillFar)" opacity="0.6" />

      {/* fields */}
      <path d="M0,300 Q200,260 450,300 T900,290 L900,420 L0,420 Z" fill="var(--color-teal)" opacity="0.85" />
      <path d="M0,330 Q220,300 460,330 T900,320 L900,420 L0,420 Z" fill="var(--color-teal-dark)" opacity="0.7" />

      {/* field furrows */}
      {Array.from({ length: 10 }).map((_, i) => (
        <path
          key={i}
          d={`M${i * 95 - 40},420 L${i * 95 + 60},330`}
          stroke="var(--color-marigold-soft)"
          strokeWidth="2"
          opacity="0.35"
        />
      ))}

      {/* road */}
      <path d="M420,420 L470,300 L500,300 L470,420 Z" fill="#5C5245" opacity="0.85" />
      <path d="M448,420 L472,320" stroke="var(--color-marigold-soft)" strokeWidth="3" strokeDasharray="8 10" opacity="0.9" />

      {/* school block */}
      <g transform="translate(120,220)">
        <rect x="0" y="40" width="120" height="70" fill="var(--color-card)" stroke="var(--color-indigo)" strokeWidth="3" />
        <polygon points="-10,40 130,40 60,0" fill="var(--color-indigo)" />
        <rect x="20" y="60" width="18" height="24" fill="var(--color-indigo)" />
        <rect x="52" y="60" width="18" height="24" fill="var(--color-indigo)" />
        <rect x="84" y="60" width="18" height="24" fill="var(--color-indigo)" />
      </g>

      {/* panchayat dome building */}
      <g transform="translate(600,200)">
        <rect x="0" y="60" width="150" height="60" fill="var(--color-card)" stroke="var(--color-brick)" strokeWidth="3" />
        <circle cx="75" cy="45" r="26" fill="var(--color-card)" stroke="var(--color-brick)" strokeWidth="3" />
        <rect x="70" y="10" width="10" height="16" fill="var(--color-brick)" />
        {Array.from({ length: 5 }).map((_, i) => (
          <rect key={i} x={14 + i * 26} y="80" width="14" height="30" fill="var(--color-brick)" opacity="0.8" />
        ))}
      </g>

      {/* solar poles */}
      {[300, 340, 380].map((x, i) => (
        <g key={i} transform={`translate(${x},250)`}>
          <line x1="0" y1="0" x2="0" y2="60" stroke="var(--color-ink-soft)" strokeWidth="3" />
          <rect x="-14" y="-16" width="28" height="16" fill="var(--color-teal-dark)" transform="rotate(-15)" />
        </g>
      ))}
    </svg>
  );
}
