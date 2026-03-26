/** 两页标题区装饰图标，尺寸由 .page-header-icon 统一控制 */

export function YinYangIcon() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden>
      <circle cx="50" cy="50" r="48" fill="#fafafa" stroke="#2a2a2a" strokeWidth="1.5" />
      <path
        d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2 Z"
        fill="#0a0a0a"
      />
      <circle cx="50" cy="26" r="8.5" fill="#fafafa" />
      <circle cx="50" cy="74" r="8.5" fill="#0a0a0a" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <span className="page-header-emoji" aria-hidden role="img" aria-label="Moon">🌛</span>
  );
}
