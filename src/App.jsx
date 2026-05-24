import { useEffect, useState } from 'react';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LoadingScreen from './components/LoadingScreen';
import heroImage from './assets/image.png';
import {
  ActionLinksSection,
  FooterSection,
  HeroSection,
} from './components/Sections';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-white antialiased selection:bg-tanit-gold selection:text-black"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <LoadingScreen open={loading} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(5,5,128,0.55),rgba(5,5,128,0.25)),radial-gradient(circle_at_20%_20%,rgba(224,96,80,0.35),transparent_45%)]" />

      <main className="relative z-10">
        <HeroSection />
      </main>

      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
}