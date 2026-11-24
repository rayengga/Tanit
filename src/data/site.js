const menuModules = import.meta.glob('../assets/menu/*.{jpg,jpeg,png}', { eager: true });
export const menuImages = Object.values(menuModules || {}).map((m) => m.default || m);
export const menuUrl = menuImages[0] ?? '';
export const instagramUrl = 'https://www.instagram.com/tanit__cafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
export const facebookUrl = 'https://www.facebook.com/profile.php?id=61587154905976';
export const mapsUrl = 'https://maps.app.goo.gl/7aHcdSQb7hdmLL9B7';
export const whatsappUrl = 'https://wa.me/?text=Hello%20Caf%C3%A9%20Tanit,%20I%20would%20like%20to%20book%20or%20ask%20about%20the%20menu.';

export const actionLinks = [
  {
    label: 'Menu',
    href: menuUrl,
    description: 'Open the digital menu and discover signature items.',
    icon: 'menu',
  },
  {
    label: 'Instagram',
    href: instagramUrl,
    description: 'See the latest lounge moments and featured drinks.',
    icon: 'instagram',
  },
  {
    label: 'Facebook',
    href: facebookUrl,
    description: 'Follow café updates, events, and promotions.',
    icon: 'facebook',
  },
  {
    label: 'Review us',
    href: mapsUrl,
    description: 'Get directions and visit us with one tap.',
    icon: 'map',
  },
];

export const featuredItems = [
  {
    title: 'Coffee',
    description: 'Velvety espresso, specialty lattes, and slow-brewed comfort.',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Desserts',
    description: 'Elegant sweets and indulgent pairings made for lingering evenings.',
    image:
      'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Shisha',
    description: 'A premium lounge atmosphere designed for relaxed conversations.',
    image:
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cocktails',
    description: 'Refined mixes and glowing glassware for late-night glamour.',
    image:
      'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80',
  },
];

export const openingHours = [
  { day: 'Monday', hours: '09:00 - 01:00' },
  { day: 'Tuesday', hours: '09:00 - 01:00' },
  { day: 'Wednesday', hours: '09:00 - 01:00' },
  { day: 'Thursday', hours: '09:00 - 02:00' },
  { day: 'Friday', hours: '09:00 - 03:00' },
  { day: 'Saturday', hours: '09:00 - 03:00' },
  { day: 'Sunday', hours: '09:00 - 02:00' },
];

export const socialLinks = [
  { label: 'Instagram', href: instagramUrl, icon: 'instagram' },
  { label: 'Facebook', href: facebookUrl, icon: 'facebook' },
  { label: 'Location', href: mapsUrl, icon: 'map' },
  { label: 'WhatsApp', href: whatsappUrl, icon: 'whatsapp' },
];
