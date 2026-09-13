import { skills } from '../data/content'

const groups: { label: string; items: string[] }[] = [
  { label: 'Languages', items: skills.languages },
  { label: 'Technical', items: skills.technical },
  { label: 'Cloud', items: skills.cloud },
]

export default function Skills() {
  return (
    <section id="skills" className="section-rule">
      <div className="max-w-content mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-8">
        <h2 className="text-2xl">Skills</h2>
        <div className="space-y-5">
          {groups.map((group) => (
            <div key={group.label} className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4">
              <p className="text-muted">{group.label}</p>
              <p className="text-ink">{group.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
