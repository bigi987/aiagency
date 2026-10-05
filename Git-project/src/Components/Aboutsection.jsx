import React from 'react'
import assets from '../assets/assets'

const Aboutsection = () => {

    const servicesData = [
  {
    title: "Advertising",
    description: "We turn bold ideas into powerful digital solutions that connect, engage.",
    icon: assets.a_icon1, 
  },
  {
    title: "Strategy",
    description: "We build solid foundations to help your brand grow and scale effectively.",
    icon: assets.a_icon2,
  },
  {
    title: "Development",
    description: "We create fast, modern, and reliable applications tailored to your needs.",
    icon: assets.a_icon3,
  },
  {
    title: "Design",
    description: "We craft intuitive UI/UX interfaces that users fall in love with.",
    icon: assets.a_icon4,
  },
];
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mb-12 text-center sm:mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
          How can <span className="text-primary">We Help?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg dark:text-slate-400">
          From strategy to execution, we provide comprehensive solutions to drive your business forward.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {servicesData.map((item, index) => (
          <div
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-7 shadow-xl shadow-primary/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/15 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-primary/40 dark:hover:shadow-primary/20"
          >

            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/20" />

            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50/80 p-3 shadow-sm transition duration-500 group-hover:scale-110 group-hover:bg-primary/15 dark:bg-slate-800/80">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-10 w-10 object-contain drop-shadow-[0_8px_16px_rgba(80,68,229,0.2)]"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-indigo-400">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-indigo-400">
              <span>Learn more</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Aboutsection;
