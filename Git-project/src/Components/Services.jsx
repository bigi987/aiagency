import React from 'react'
import assets from '../assets/assets'

const ServicesData = [

  {
    title: "Mobile app marketin",
    description: "We create mobile app marketing strategies that drive downloads, engagement, and revenue for your app.",
    image: assets.services1, 
  },
  {
    title: "Dashboard management",
    description: "We create dashboard management solutions that help you track and analyze your app's performance.",
    image: assets.services2, 
  },
  {
    title: "Fitness app promotion",
    description: "We create fitness app promotion strategies that drive downloads, engagement, and revenue for your app.",
    image: assets.services3, 
  }
]

const Services = () => {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mb-12 text-center sm:mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
          Our Latest Work
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg dark:text-slate-400">
          Browse our portfolio of innovative digital projects that showcase creativity, performance, and results.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ServicesData.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/70 p-6 shadow-xl shadow-primary/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/15 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-primary/40 dark:hover:shadow-primary/20"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/20" />

            <div className="relative overflow-hidden rounded-2xl bg-indigo-50/50 p-4 dark:bg-slate-800/60">
              <img
                src={item.image}
                className="h-56 w-full rounded-xl object-cover drop-shadow-[0_12px_24px_rgba(80,68,229,0.15)] transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between pt-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-indigo-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services;
