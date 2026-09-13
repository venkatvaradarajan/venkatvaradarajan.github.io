import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Research from './components/Research'
import Skills from './components/Skills'
import Footer from './components/Footer'
import SectionNav from './components/SectionNav'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <SectionNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Research />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
