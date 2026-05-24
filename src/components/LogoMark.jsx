import logoImage from '../assets/tanit-logo.png';

export default function LogoMark({ className = '', size = 140 }) {
  return (
    <img
      src={logoImage}
      width={size}
      height={size}
      className={className}
      alt="Café Tanit logo"
      loading="eager"
      decoding="async"
    />
  );
}