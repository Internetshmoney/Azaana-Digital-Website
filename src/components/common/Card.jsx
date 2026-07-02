export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-[1.5rem] border border-deep/10 bg-white/58 shadow-card backdrop-blur ${className}`}>
      {children}
    </div>
  );
}
