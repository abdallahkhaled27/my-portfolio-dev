import Link from "next/link";
import type { Project } from "../data/projects";
import { ArrowUpRight, GitHub } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  const category = project.slug === "airline-graph-rag-assistant" ? "Data & graph retrieval" : project.slug === "football-ai-assistant" ? "Applied AI" : "Software engineering";
  return (
    <article className="project-card group flex min-w-0 flex-col rounded-xl border border-white/10 bg-[#0d131c] p-6 sm:p-8">
      <p className="eyebrow mb-7">{category}</p>
      <h3 className="text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl"><Link href={`/projects/${project.slug}`} className="project-title-link">{project.title}</Link></h3>
      <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">{project.description}</p>
      <ul aria-label="Technologies" className="mb-8 mt-6 flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="tech-label">{technology}</li>)}</ul>
      <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-5">
        <Link href={`/projects/${project.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm text-teal-200">Explore project <ArrowUpRight className="h-4 w-4" /></Link>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label={`${project.title} on GitHub`}><GitHub className="h-5 w-5" /></a>
      </div>
    </article>
  );
}
