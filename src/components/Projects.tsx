import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="section-rule">
      <div className="max-w-content mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-8">
        <h2 className="text-2xl">Projects</h2>

        <div className="divide-y divide-hairline">
          {projects.map((project) => (
            <div key={project.title} className="py-6 first:pt-0">
              <h3 className="text-lg leading-snug">{project.title}</h3>
              <p className="mt-2 max-w-prose text-ink leading-relaxed">{project.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-muted">
                    {tag}
                  </span>
                ))}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:text-accent-dark no-underline"
                  >
                    {project.linkLabel ?? 'Learn more'} &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
