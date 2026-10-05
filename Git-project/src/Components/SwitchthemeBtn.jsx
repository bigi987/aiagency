import React, { useEffect } from 'react'
import assets from '../assets/assets'

const SwitchthemeBtn = ({theme, setTheme}) => {
  
  useEffect(()=> {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
  },[])

  useEffect(() => {
      if(theme === 'dark'){
        document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)

  },[theme])
  
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-slate-300 p-1.5 transition-colors hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-400"
    >
      {theme === 'dark' ? (
        <img
          src={assets.sun_icon}
          alt="Sun icon"
          className="size-5 object-contain"
        />
      ) : (
        <img
          src={assets.moon_icon}
          alt="Moon icon"
          className="size-5 object-contain"
        />
      )}
    </button>
  )
}

export default SwitchthemeBtn


