import { ArrowUpRight, GitHub } from "./icons";

type Project = { number: string; title: string; description: string; technologies: string[]; projectUrl: string; githubUrl: string };

export function ProjectCard({ project }: { project: Project }) {
  const unavailable = (label: string, icon?: React.ReactNode) => (
    <button
      type="button"
      disabled
      aria-label={`${label} link is not available yet`}
      className="inline-flex cursor-not-allowed items-center gap-2 text-sm font-medium text-slate-600"
    >
      {icon}
      {label}
    </button>
  );
  return <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1320]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200/30 hover:shadow-2xl hover:shadow-teal-950/20 sm:p-8"><div className="absolute -right-12 -top-14 h-44 w-44 rounded-full bg-teal-400/[.07] blur-2xl transition duration-500 group-hover:bg-teal-400/[.13]" /><div className="relative"><div className="mb-12 flex items-start justify-between"><span className="font-mono text-sm text-teal-300">{project.number}</span><span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.035] text-slate-400 transition group-hover:border-teal-300/30 group-hover:text-teal-200"><ArrowUpRight className="h-5 w-5" /></span></div><h3 className="text-2xl font-semibold tracking-[-.035em] text-white">{project.title}</h3><p className="mt-3 max-w-md leading-7 text-slate-400">{project.description}</p><div className="mt-7 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-xs text-slate-300">{technology}</span>)}</div><div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">{project.projectUrl ? <a href={project.projectUrl} className="inline-flex items-center gap-2 text-sm font-medium text-teal-200 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300">View Project <ArrowUpRight className="h-4 w-4" /></a> : unavailable("View Project", <ArrowUpRight className="h-4 w-4" />)}{project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300"><GitHub className="h-4 w-4" /> GitHub</a> : unavailable("GitHub", <GitHub className="h-4 w-4" />)}</div></div></article>;
}
