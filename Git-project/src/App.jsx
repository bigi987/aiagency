import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Comments from './Components/Comments'
import Aboutsection from './Components/Aboutsection'
import Services from './Components/Services'
import Theteam from './Components/Theteam'
import Reachsection from './Components/Reachsection'

const App = () => {

  const [theme, setTheme] = React.useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#020617' 
    } else {
      document.body.style.backgroundColor = 'white'
    }
  }, [theme])



  

  return (
    <div className={theme === 'dark' ? 'dark min-h-screen pt-4 smooth-hero-gradient' : 'min-h-screen pt-4 smooth-hero-gradient'}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <Aboutsection/>
      <Services/>
      <Theteam/>
      <Reachsection/>
      <Comments/>
      <footer className="mt-20 border-t border-slate-200/60 py-10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left sm:px-10 lg:px-16">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Agency.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#home" className="hover:text-primary transition-colors">Back to top ↑</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
