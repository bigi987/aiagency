import React from 'react'
import assets from '../assets/assets'
const Hero = () => {
  return (
    <div id="home" className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 pt-6 pb-20 sm:px-10 lg:grid-cols-3 lg:gap-10 lg:px-16">
      <div className='col-span-1 flex flex-col items-start justify-center gap-3 pt-6 pb-12 sm:pt-10 sm:pb-14 lg:col-span-3'>
        <h1 className='max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-6xl dark:text-white'>
          Build for people
        </h1>
        <h1 className='max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-6xl'>
          Powered by technology
        </h1>
        <p className='mt-4 max-w-xl text-base font-normal leading-relaxed text-slate-500 sm:text-lg dark:text-slate-400'>
          We combine creativity, technology and strategy to create digital solutions that move businesses forward.
        </p>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="group flex w-full flex-col items-center rounded-[2.5rem] border border-white/80 bg-white/70 px-8 py-14 shadow-2xl shadow-primary/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-primary/20 dark:border-white/10 dark:bg-slate-900/60">
          <img className="w-64 drop-shadow-[0_20px_30px_rgba(80,68,229,0.28)] transition duration-700 group-hover:rotate-6 group-hover:scale-105 dark:brightness-125" src={assets.hero_photo1} alt="Global connection" />
          <p className="mt-8 text-center text-base font-semibold tracking-wide text-slate-700 dark:text-slate-200">Team work that make you proud</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="group flex w-full flex-col items-center rounded-[2.5rem] border border-white/80 bg-white/70 px-8 py-14 shadow-2xl shadow-primary/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-primary/20 dark:border-white/10 dark:bg-slate-900/60">
          <img className="w-64 drop-shadow-[0_20px_30px_rgba(80,68,229,0.28)] transition duration-700 group-hover:rotate-6 group-hover:scale-105 dark:brightness-125" src={assets.hero_photo2} alt="Global connection" />
          <p className="mt-8 text-center text-base font-semibold tracking-wide text-slate-700 dark:text-slate-200">Trusted by 10k+ people</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="group flex w-full flex-col items-center rounded-[2.5rem] border border-white/80 bg-white/70 px-8 py-14 shadow-2xl shadow-primary/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-primary/20 dark:border-white/10 dark:bg-slate-900/60">
          <img className="w-64 drop-shadow-[0_20px_30px_rgba(80,68,229,0.28)] transition duration-700 group-hover:rotate-6 group-hover:scale-105 dark:brightness-125" src={assets.hero_photo3} alt="Global connection" />
          <p className="mt-8 text-center text-base font-semibold tracking-wide text-slate-700 dark:text-slate-200">Your credibility in right hands </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
