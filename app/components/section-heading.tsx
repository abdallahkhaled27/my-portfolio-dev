export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="max-w-2xl"><p className="mb-3 font-mono text-xs font-medium uppercase tracking-[.2em] text-teal-300">{eyebrow}</p><h2 className="text-3xl font-semibold tracking-[-.045em] text-white sm:text-4xl">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>}</div>;
}
