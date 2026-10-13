import React from 'react'
import assets from '../assets/assets'
const Hero = () => {
  return (
    <div id="home" className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 pt-6 pb-20 sm:px-10 lg:grid-cols-3 lg:gap-10 lg:px-16">
      <div className='col-span-1 flex flex-col items-start justify-center gap-3 pt-6 pb-12 sm:pt-10 sm:pb-14 lg:col-span-3 animate-fade-in-up animate-on-load'>
        <h1 className='mt-2 max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-6xl dark:text-white'>
          Build for people
        </h1>
        <h1 className='max-w-3xl bg-gradient-to-r from-primary via-indigo-500 to-indigo-600 bg-clip-text text-4xl font-extrabold leading-[1.15] tracking-tight text-transparent sm:text-6xl dark:from-indigo-400 dark:to-indigo-200'>
          Powered by technology
        </h1>
        <p className='mt-4 max-w-xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300'>
          We combine creativity, technology and strategy to create digital solutions that move businesses forward.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/40 active:translate-y-0"
          >
            Get Started
            <img className="w-4 transition-transform duration-300 group-hover:translate-x-1" src={assets.arrow_icon} alt="" />
          </a>
          <a
            href="#services"
            className="rounded-full border border-slate-300/80 bg-white/70 px-7 py-3 text-sm font-semibold text-slate-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white hover:text-primary dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-primary/50 dark:hover:text-white"
          >
            Explore Services
          </a>
        </div>
      </div>
      
      <div className="flex w-full items-center justify-center animate-scale-in animate-on-load delay-200">
        <div className="group flex w-full flex-col items-center rounded-[2.5rem] border border-white/80 bg-white/70 px-8 py-14 shadow-2xl shadow-primary/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-primary/20 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-primary/40">
          <img className="w-64 drop-shadow-[0_20px_30px_rgba(80,68,229,0.28)] transition duration-700 group-hover:rotate-3 group-hover:scale-105 dark:brightness-110" src={assets.hero_photo1} alt="Team work" />
          <p className="mt-8 text-center text-base font-semibold tracking-wide text-slate-800 dark:text-slate-200">Team work that make you proud</p>
        </div>
      </div>
      
      <div className="flex w-full items-center justify-center animate-scale-in animate-on-load delay-400">
        <div className="group flex w-full flex-col items-center rounded-[2.5rem] border border-white/80 bg-white/70 px-8 py-14 shadow-2xl shadow-primary/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-primary/20 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-primary/40">
          <img className="w-64 drop-shadow-[0_20px_30px_rgba(80,68,229,0.28)] transition duration-700 group-hover:rotate-3 group-hover:scale-105 dark:brightness-110" src={assets.hero_photo2} alt="Trusted community" />
          <p className="mt-8 text-center text-base font-semibold tracking-wide text-slate-800 dark:text-slate-200">Trusted by 10k+ people</p>
        </div>
      </div>
      
      <div className="flex w-full items-center justify-center animate-scale-in animate-on-load delay-600">
        <div className="group flex w-full flex-col items-center rounded-[2.5rem] border border-white/80 bg-white/70 px-8 py-14 shadow-2xl shadow-primary/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-primary/20 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-primary/40">
          <img className="w-64 drop-shadow-[0_20px_30px_rgba(80,68,229,0.28)] transition duration-700 group-hover:rotate-3 group-hover:scale-105 dark:brightness-110" src={assets.hero_photo3} alt="Credibility" />
          <p className="mt-8 text-center text-base font-semibold tracking-wide text-slate-800 dark:text-slate-200">Your credibility in right hands</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
