import React, { useState } from 'react'
import assets from '../assets/assets'
import SwitchthemeBtn from './SwitchthemeBtn'

const Navbar = ({ theme, setTheme }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false) 

  const LandingPage = () =>{
      const homeSection = document.getElementById('home')
      const aboutSection = document.getElementById('about')
      const servicesSection = document.getElementById('services')
      const contactSection = document.getElementById('contact')
      const CommentsSection = document.getElementById('comments')
  }

  return (
    <>
      <nav className="mx-auto flex w-[95%] max-w-7xl items-center justify-between sticky top-4 z-50 rounded-full border border-slate-200/80 bg-white/70 px-4 py-3 shadow-lg shadow-slate-200/25 ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 hover:border-slate-300 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20 dark:ring-white/5 dark:hover:border-white/20 dark:hover:shadow-black/35 sm:px-8 lg:px-10 animate-fade-in-down animate-on-load">
        <a href="#home" aria-label="Homepage" className="transition-transform duration-300 hover:scale-105 hover:opacity-90">
          <img src={theme === 'dark' ? assets.marketing_icon : assets.logo_dark} className="w-28 sm:w-32 drop-shadow-sm" alt="Logo" />
        </a>

        <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#home" className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-slate-100/80 hover:text-primary dark:hover:bg-slate-800/60 dark:hover:text-white">Home</a>
          <a href="#about" className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-slate-100/80 hover:text-primary dark:hover:bg-slate-800/60 dark:hover:text-white">About</a>
          <a href="#services" className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-slate-100/80 hover:text-primary dark:hover:bg-slate-800/60 dark:hover:text-white">Services</a>
          <a href="#team" className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-slate-100/80 hover:text-primary dark:hover:bg-slate-800/60 dark:hover:text-white">Team</a>
          <a href="#contact" className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-slate-100/80 hover:text-primary dark:hover:bg-slate-800/60 dark:hover:text-white">Contact</a>
          <a href="#comments" className="rounded-full px-4 py-2 transition-all duration-300 hover:bg-slate-100/80 hover:text-primary dark:hover:bg-slate-800/60 dark:hover:text-white">Reviews</a>
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>
             <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="Menu" onClick={() => setSidebarOpen(true)} className='w-8 cursor-pointer p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors sm:hidden'/>
             <SwitchthemeBtn theme={theme} setTheme={setTheme}/>
          <a href="#contact" className="group hidden items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/40 active:translate-y-0 sm:flex">
            Contact Us <img className="w-4 transition-transform duration-300 group-hover:translate-x-1" src={assets.arrow_icon} alt="" />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div className={`fixed inset-0 z-[60] bg-black/30 transition-opacity duration-300 sm:hidden ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)}></div>

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 bottom-0 z-[70] w-64 bg-primary text-white shadow-2xl transition-transform duration-300 sm:hidden flex flex-col pt-20 px-10 gap-6 text-lg font-medium ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <img src={assets.close_icon} alt='Close-icon' className='absolute right-6 top-6 w-5 cursor-pointer invert brightness-0' onClick={() => setSidebarOpen(false)} />
        <a href="#home" onClick={() => setSidebarOpen(false)} className="hover:text-white/80 transition-colors">Home</a>
        <a href="#about" onClick={() => setSidebarOpen(false)} className="hover:text-white/80 transition-colors">About</a>
        <a href="#services" onClick={() => setSidebarOpen(false)} className="hover:text-white/80 transition-colors">Services</a>
        <a href="#team" onClick={() => setSidebarOpen(false)} className="hover:text-white/80 transition-colors">Team</a>
        <a href="#contact" onClick={() => setSidebarOpen(false)} className="hover:text-white/80 transition-colors">Contact us</a>
        <a href="#comments" onClick={() => setSidebarOpen(false)} className="hover:text-white/80 transition-colors">Reviews</a>
      </div>
    </>
  )
}

export default Navbar
