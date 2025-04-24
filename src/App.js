import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Extra from './components/Extra/Extra'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  console.log(
    "%c👋 Hello développeur curieux !",
    "color: #61dafb; font-size: 18px; font-weight: bold;"
  )
  console.log(
    "%cTu veux voir le code ? Il est ici 👉 github.com/JawedBS",
    "color: #9ae6b4; font-size: 14px;"
  )
  console.log(
    "%cPS : chaque pixel ici a été pensé avec passion ✨",
    "color: #fbd38d; font-style: italic;"
  )
  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Extra />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
