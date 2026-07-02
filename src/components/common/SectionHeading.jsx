export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-ink">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-muted">{description}</p> : null}
    </div>
  );
}
