export const metadata = { title: "Projects | Armand Sarsale" };

const projects = [
  {
    id: 1,
    name: "Study Planner",
    description:
      "A simple planner for organizing classes, assignments, and upcoming deadlines.",
  },
  {
    id: 2,
    name: "Weather Dashboard",
    description:
      "A dashboard concept that makes local weather conditions easy to check at a glance.",
  },
  {
    id: 3,
    name: "Personal Portfolio",
    description:
      "A responsive website introducing me and showcasing the projects I build.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-8 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
        Selected work
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Projects
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
        A few ideas and builds from my journey learning computer science.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-emerald-400/40"
          >
            <h2 className="text-xl font-semibold text-white">
              {project.name}
            </h2>
            <p className="mt-3 leading-7 text-zinc-400">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
