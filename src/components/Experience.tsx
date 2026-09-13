import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section-rule">
      <div className="max-w-content mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-8">
        <h2 className="text-2xl">Experience</h2>

        <ol className="space-y-8">
          {experience.map((entry) => (
            <li key={`${entry.org}-${entry.dates}`} className="relative pl-6 border-l border-hairline">
              <span
                className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent"
                aria-hidden="true"
              />
              <p className="text-sm text-muted">{entry.dates}</p>
              <h3 className="mt-1 text-lg leading-snug">{entry.title}</h3>
              <p className="text-muted">
                {entry.org} &middot; {entry.location}
              </p>
              {entry.summary && <p className="mt-2 max-w-prose text-ink leading-relaxed">{entry.summary}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
