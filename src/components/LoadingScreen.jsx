import { motion, AnimatePresence } from 'framer-motion';
import LogoMark from './LogoMark';

export default function LoadingScreen({ open }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-tanit-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <motion.div
            className="flex flex-col items-center gap-6 rounded-[2rem] border border-white/10 bg-white/5 px-10 py-12 shadow-soft backdrop-blur-2xl"
            initial={{ scale: 0.94, opacity: 0, y: 14 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="animate-pulseSoft">
              <LogoMark size={160} />
            </div>
            <div className="text-center">
              <div className="font-display text-4xl tracking-wide text-white">Café Tanit</div>
              <div className="mt-2 text-sm uppercase tracking-[0.35em] text-tanit-goldSoft/80">Loading the atmosphere</div>
            </div>
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((item) => (
                <motion.span
                  key={item}
                  className="h-2.5 w-2.5 rounded-full bg-tanit-gold"
                  animate={{ y: [0, -7, 0], opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: item * 0.12 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}