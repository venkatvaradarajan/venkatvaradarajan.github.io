import { useEffect, useState } from 'react'
import { sections } from '../data/content'

export default function SectionNav() {
  const [activeId, setActiveId] = useState<string>(sections[0].id)

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport among those currently intersecting.
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b))
          setActiveId(topMost.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Section navigation"
      className="hidden xl:flex flex-col gap-4 fixed right-10 top-1/2 -translate-y-1/2 z-10"
    >
      {sections.map((section) => {
        const isActive = section.id === activeId
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-3 no-underline"
          >
            <span
              className={`h-px transition-all ${
                isActive ? 'w-6 bg-accent' : 'w-3 bg-hairline group-hover:bg-muted'
              }`}
              aria-hidden="true"
            />
            <span
              className={`text-xs whitespace-nowrap transition-colors ${
                isActive ? 'text-accent' : 'text-muted group-hover:text-ink'
              }`}
            >
              {section.label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
