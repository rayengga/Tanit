import { motion } from 'framer-motion';
import { ExternalLink, Facebook, Instagram, MapPin, Menu, Sparkles, Star, Wifi } from 'lucide-react';
import LogoMark from './LogoMark';
import {
  actionLinks,
  socialLinks,
  menuUrl,
} from '../data/site';

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.09,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function SectionShell({ eyebrow, title, description, children, id, compact = false }) {
  return (
    <motion.section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-5 ${compact ? 'py-14 sm:py-16' : 'py-20 sm:py-24'}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className="mb-10 max-w-2xl">
        {eyebrow ? <motion.p variants={childVariants} className="text-xs font-semibold uppercase tracking-[0.35em] text-tanit-goldSoft/80">{eyebrow}</motion.p> : null}
        <motion.h2 variants={childVariants} className="mt-3 font-display text-4xl leading-none text-white sm:text-5xl">{title}</motion.h2>
        {description ? <motion.p variants={childVariants} className="mt-4 text-sm leading-7 text-white/68 sm:text-base">{description}</motion.p> : null}
      </div>
      {children}
    </motion.section>
  );
}

function IconFor({ icon, className = 'h-5 w-5' }) {
  switch (icon) {
    case 'menu':
      return <Menu className={className} />;
    case 'instagram':
      return <Instagram className={className} />;
    case 'facebook':
      return <Facebook className={className} />;
    case 'map':
      return <MapPin className={className} />;
    case 'whatsapp':
      return <Wifi className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

export function HeroSection() {
  return (
    <section className="relative min-h-[70svh] overflow-hidden">
      <div className="relative mx-auto flex min-h-[70svh] max-w-7xl flex-col px-5 pb-2 pt-4 sm:px-8 lg:px-10">
      

        <div className="flex flex-1 items-center justify-center pb-4 pt-6 sm:pt-8">
          <div className="w-full max-w-5xl">
            <motion.div
              className="action-wheel"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <div className="action-wheel-row">
                {actionLinks.slice(0, 2).map((action, index) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`action-tile ${index === 0 ? 'action-tile--tl' : 'action-tile--tr'}`}
                  >
                    <div className="action-tile__inner">
                      <IconFor icon={action.icon} className="action-tile__icon" />
                      <span className="action-tile__label">{action.label}</span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="action-wheel-row">
                {actionLinks.slice(2, 4).map((action, index) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`action-tile ${index === 0 ? 'action-tile--bl' : 'action-tile--br'}`}
                  >
                    <div className="action-tile__inner">
                      <IconFor icon={action.icon} className="action-tile__icon" />
                      <span className="action-tile__label">{action.label}</span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ActionLinksSection() {
  return (
    <SectionShell
      id="actions"
      eyebrow="Quick access"
      title="Main actions"
      description="Everything a guest needs at a glance, with large touch-friendly cards and a premium glass finish."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {actionLinks.map((action) => (
          <motion.a
            key={action.label}
            href={action.href}
            target="_blank"
            rel="noreferrer"
            variants={childVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="group relative min-h-[148px] rounded-[1.75rem] border border-white/10 bg-white/6 p-5 shadow-soft backdrop-blur-2xl transition hover:border-tanit-gold/35 hover:bg-white/10"
          >
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-tanit-gold transition group-hover:scale-105 group-hover:border-tanit-gold/30">
                  <IconFor icon={action.icon} className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-white/28 transition group-hover:text-tanit-gold" />
              </div>
              <div>
                <h3 className="font-display text-3xl text-white">{action.label}</h3>
                <p className="mt-2 max-w-xs text-sm leading-7 text-white/64">{action.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionShell>
  );
}

export function FooterSection() {
  return (
    <footer className="relative border-t border-white/10 bg-transparent">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark size={76} />
            <div>
              <div className="font-display text-3xl text-white">Café Tanit</div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/50">Designed for Café Tanit</div>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
            Good vibes, refined coffee culture, and a premium Café Resto identity built for real guests and social promotion.
          </p>
        </div>

      
      </div>
      <div className="border-t border-white/8 px-5 py-4 text-center text-xs uppercase tracking-[0.25em] text-white/42 sm:px-8 lg:px-10">
        © 2026 Café Tanit. All rights reserved.
      </div>
    </footer>
  );
}
