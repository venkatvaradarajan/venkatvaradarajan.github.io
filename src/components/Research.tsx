import { useState } from 'react'
import { selectedPublications, patents, academicPublications, thesis } from '../data/content'

export default function Research() {
  const [showArchive, setShowArchive] = useState(false)

  return (
    <section id="research" className="section-rule">
      <div className="max-w-content mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-8">
        <h2 className="text-2xl">Research &amp; publications</h2>

        <div>
          <h3 className="text-lg mb-3">Selected publications</h3>
          <ul className="divide-y divide-hairline mb-10">
            {selectedPublications.map((pub) => (
              <li key={pub.title} className="py-3 first:pt-0">
                <a href={pub.url} target="_blank" rel="noreferrer" className="text-ink hover:text-accent">
                  {pub.title}
                </a>
                <p className="text-muted text-sm">{pub.venue}</p>
              </li>
            ))}
          </ul>

          <h3 className="text-lg mb-3">Patents</h3>
          <p className="text-muted mb-3">15+ issued US patents. A few:</p>
          <ul className="divide-y divide-hairline mb-10">
            {patents.map((p) => (
              <li key={p.title} className="py-3 first:pt-0">
                <a href={p.url} target="_blank" rel="noreferrer" className="text-ink hover:text-accent">
                  {p.title}
                </a>
                <p className="text-muted text-sm">{p.number}</p>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setShowArchive((v) => !v)}
            className="text-accent hover:text-accent-dark underline decoration-1 underline-offset-4"
            aria-expanded={showArchive}
          >
            {showArchive ? 'Hide academic archive (2009–2015)' : 'Show academic archive (2009–2015)'}
          </button>

          {showArchive && (
            <div className="mt-6">
              <p className="mb-4">
                <a href={thesis.url} target="_blank" rel="noreferrer" className="text-ink hover:text-accent">
                  {thesis.title}
                </a>
                <br />
                <span className="text-muted text-sm">{thesis.note}</span>
              </p>
              <ul className="divide-y divide-hairline">
                {academicPublications.map((pub) => (
                  <li key={pub.title} className="py-3 first:pt-0">
                    <a href={pub.url} target="_blank" rel="noreferrer" className="text-ink hover:text-accent">
                      {pub.title}
                    </a>
                    <p className="text-muted text-sm">{pub.venue}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
