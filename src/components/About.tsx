import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section-rule">
      <div className="max-w-content mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-8">
        <h2 className="text-2xl">About</h2>
        <div className="max-w-prose space-y-5 text-ink leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
