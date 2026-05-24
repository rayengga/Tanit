import { motion } from 'framer-motion';
import { MessageCircleMore } from 'lucide-react';
import { whatsappUrl } from '../data/site';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-tanit-gold/40 bg-[#0d0d0d]/85 text-tanit-gold shadow-glow backdrop-blur-xl transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-tanit-gold/60 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.45 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
    >
      <MessageCircleMore className="h-7 w-7" />
    </motion.a>
  );
}