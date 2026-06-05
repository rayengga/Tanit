import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function MenuGallery({ images = [], open = false, index = 0, onClose = () => {} }) {
  useEffect(() => {
    if (!open || images.length === 0) return;

    const preloadIndexes = new Set([
      index,
      (index + 1) % images.length,
      (index - 1 + images.length) % images.length,
    ]);

    const preloaders = Array.from(preloadIndexes).map((imageIndex) => {
      const image = new Image();
      image.src = images[imageIndex];
      return image;
    });

    return () => {
      preloaders.length = 0;
    };
  }, [images, index, open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            className="relative max-w-[95%] max-h-[95%] w-full"
            initial={{ scale: 0.98, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: 12, opacity: 0 }}
          >
            <div className="flex h-full flex-col items-stretch">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm text-white/80">{`${index + 1} / ${images.length}`}</div>
                <button
                  onClick={onClose}
                  className="text-white/80 px-3 py-1 rounded hover:text-white"
                  aria-label="Close gallery"
                >
                  Close
                </button>
              </div>

              <div className="relative flex items-center justify-center overflow-hidden rounded">
                <img
                  src={images[index]}
                  alt={`Menu ${index + 1}`}
                  className="max-h-[80vh] w-auto max-w-full object-contain"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />

                <button
                  onClick={(e) => { e.stopPropagation(); const next = (index - 1 + images.length) % images.length; const ev = new CustomEvent('menu-gallery-navigate', { detail: next }); window.dispatchEvent(ev); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white/80 hover:text-white"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); const next = (index + 1) % images.length; const ev = new CustomEvent('menu-gallery-navigate', { detail: next }); window.dispatchEvent(ev); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white/80 hover:text-white"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
