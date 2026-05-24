import { motion } from 'framer-motion';

const particles = [
  { top: '8%', left: '10%', size: '10px', delay: 0 },
  { top: '16%', left: '82%', size: '6px', delay: 0.7 },
  { top: '28%', left: '56%', size: '8px', delay: 1.5 },
  { top: '54%', left: '18%', size: '7px', delay: 0.4 },
  { top: '62%', left: '74%', size: '10px', delay: 1.1 },
  { top: '78%', left: '42%', size: '5px', delay: 2 },
];

export default function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(224,160,80,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_20%)]" />
      {particles.map((particle) => (
        <motion.span
          key={`${particle.top}-${particle.left}`}
          className="absolute rounded-full bg-[rgba(242,215,161,0.45)] blur-[1px]"
          style={{ top: particle.top, left: particle.left, width: particle.size, height: particle.size }}
          animate={{ y: [0, -18, 0], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 6 + particle.delay, repeat: Infinity, ease: 'easeInOut', delay: particle.delay }}
        />
      ))}
      <div className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-[rgba(224,160,80,0.10)] blur-3xl animate-float" />
      <div className="absolute right-[-6rem] top-[35%] h-80 w-80 rounded-full bg-[rgba(242,215,161,0.08)] blur-3xl animate-float [animation-delay:1.5s]" />
      <div className="absolute bottom-[-8rem] left-[20%] h-72 w-72 rounded-full bg-[rgba(224,160,80,0.08)] blur-3xl animate-float [animation-delay:2.5s]" />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)] bg-[size:100%_18px] opacity-10" />
    </div>
  );
}