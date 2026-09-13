import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="section-rule">
      <div className="max-w-content mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-8">
        <h2 className="text-2xl">Education</h2>
        <div className="divide-y divide-hairline">
          {education.map((ed) => (
            <div key={ed.school} className="py-5 first:pt-0">
              <p className="text-lg leading-snug">{ed.degree}</p>
              {ed.detail && <p className="text-ink mt-1">{ed.detail}</p>}
              <p className="text-muted text-sm mt-1">
                {ed.school} &middot; {ed.dates}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
