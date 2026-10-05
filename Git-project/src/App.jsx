import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Comments from './Components/Comments'
import Aboutsection from './Components/Aboutsection'
import Services from './Components/Services'

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
      <Comments/>
    </div>
  )
}

export default App
