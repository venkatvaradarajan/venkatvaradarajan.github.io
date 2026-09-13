import CopyEmail from './CopyEmail'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer id="contact" className="section-rule">
      <div className="max-w-content mx-auto px-6 sm:px-10 py-16">
        <h2 className="text-2xl mb-4">Contact</h2>
        <p className="max-w-prose text-ink leading-relaxed mb-6">
          The best way to reach me is by email. I'm also on LinkedIn.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-12">
          <CopyEmail />
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="no-underline text-accent hover:text-accent-dark">
            LinkedIn
          </a>
          <a href={profile.scholar} target="_blank" rel="noreferrer" className="no-underline text-accent hover:text-accent-dark">
            Google Scholar
          </a>
          <a href={profile.resumeUrl} className="no-underline text-accent hover:text-accent-dark">
            Resume
          </a>
        </div>
        <div className="flex flex-wrap">
          <p className="italic text-muted text-sm leading-relaxed">
            No AI agents were harmed in making this page. 
          </p>
        </div>
        <p className="text-muted text-sm">&copy; {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  )
}
