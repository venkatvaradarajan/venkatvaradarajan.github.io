import CopyEmail from './CopyEmail'
import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="max-w-content mx-auto px-6 sm:px-10 pt-16 pb-20">
      <div className="hero-fade grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-10 items-start">
        <div>
          <h1 className="text-4xl sm:text-5xl leading-tight text-ink">{profile.name}</h1>
          <p className="mt-3 text-lg text-muted">
            {profile.role} &middot; {profile.location}
          </p>
          <p className="mt-6 max-w-prose text-ink text-lg leading-relaxed">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <CopyEmail />
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="no-underline text-accent hover:text-accent-dark">
              LinkedIn
            </a>
            <a href={profile.scholar} target="_blank" rel="noreferrer" className="no-underline text-accent hover:text-accent-dark">
              Google Scholar
            </a>
            <a href={profile.resumeUrl} className="no-underline text-accent hover:text-accent-dark">
              Download resume
            </a>
          </div>
        </div>

        <img
          src="/headshot.jpg"
          alt="Illustrated portrait of Venkat Varadarajan"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border border-hairline"
        />
      </div>
    </section>
  )
}
