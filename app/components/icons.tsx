type IconProps = { className?: string };

export function ArrowUpRight({ className = "" }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17 17 7M8 7h9v9" /></svg>;
}

export function ArrowRight({ className = "" }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function Download({ className = "" }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 18v2h16v-2" /></svg>;
}

export function GitHub({ className = "" }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 2.6a9.5 9.5 0 0 0-3 18.5c.48.09.65-.21.65-.46v-1.84c-2.65.58-3.2-1.13-3.2-1.13-.43-1.1-1.06-1.4-1.06-1.4-.87-.6.07-.6.07-.6.96.07 1.47.99 1.47.99.86 1.47 2.25 1.04 2.8.8.09-.62.34-1.04.61-1.28-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.89.98-2.56-.1-.24-.43-1.21.09-2.53 0 0 .8-.26 2.61.98A9.1 9.1 0 0 1 12 7.5c.81 0 1.63.11 2.39.32 1.82-1.24 2.61-.98 2.61-.98.52 1.32.19 2.29.1 2.53.61.67.98 1.52.98 2.56 0 3.67-2.23 4.47-4.36 4.71.34.3.65.88.65 1.77v2.63c0 .25.17.55.66.46A9.5 9.5 0 0 0 12 2.6Z" /></svg>;
}

export function LinkedIn({ className = "" }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M5.12 3.5a1.73 1.73 0 1 1 0 3.46 1.73 1.73 0 0 1 0-3.46ZM3.63 8.3h3v12.2h-3V8.3Zm4.88 0h2.87v1.67h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v7.49h-2.99v-6.64c0-1.58-.03-3.62-2.2-3.62-2.21 0-2.55 1.72-2.55 3.5v6.76H8.51V8.3Z" /></svg>;
}
