import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import FocusAreas from './components/FocusAreas'
import Profiles from './components/Profiles'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-cyan focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Projects /><FocusAreas /><Profiles /><Contact />
      </main>
      <Footer />
    </>
  )
}
