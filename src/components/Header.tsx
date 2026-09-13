import { profile, header_sections } from '../data/content'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-paper/90 backdrop-blur border-b border-hairline">
      <div className="max-w-content mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg no-underline hover:text-ink">
          Venkat Varadarajan
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          {header_sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="no-underline text-muted hover:text-ink">
              {section.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            className="no-underline text-ink border border-hairline rounded px-3 py-1.5 hover:border-accent hover:text-accent"
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>
        <div className="sm:hidden flex items-center gap-3">
          <a href={profile.resumeUrl} className="no-underline text-ink border border-hairline rounded px-3 py-1.5 text-sm">
            Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
