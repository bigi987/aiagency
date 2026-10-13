const Reachsinfo = [
  { label: 'Your name', type: 'text', placeholder: 'Enter your name', icon: 'user' },
  { label: 'Email id', type: 'email', placeholder: 'Enter your email', icon: 'email' },
  { label: 'Message', type: 'textarea', placeholder: 'Enter your message' }
]

function Reachsection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 animate-fade-in-up animate-on-load" aria-labelledby="contact-title">
      <div className="mx-auto w-full max-w-3xl rounded-[2.5rem] border border-white/80 bg-white/70 p-8 shadow-2xl shadow-primary/10 backdrop-blur-xl sm:p-12 lg:p-14 dark:border-white/10 dark:bg-slate-900/60">
        <header className="mx-auto max-w-md text-center">
          <h2 id="contact-title" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Reach out to Us
          </h2>
          <p className="mx-auto mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Ready to grow your brand? Let’s connect and build something exceptional together.
          </p>
        </header>

        <form
          className="mx-auto mt-10 grid w-full max-w-xl grid-cols-1 gap-5 sm:grid-cols-2"
          onSubmit={(event) => event.preventDefault()}
        >
          {Reachsinfo.map((item, index) => {
            const fieldId = `contact-field-${index}`

            return (
              <div key={item.label} className={item.type === 'textarea' ? 'sm:col-span-2' : ''}>
                <label htmlFor={fieldId} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {item.label}
                </label>
                {item.type === 'textarea' ? (
                  <textarea
                    id={fieldId}
                    name="message"
                    placeholder={item.placeholder}
                    rows={4}
                    className="block w-full resize-y rounded-2xl border border-slate-200/90 bg-white/90 p-3.5 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-slate-800/80 dark:text-white dark:placeholder:text-slate-500"
                  />
                ) : (
                  <div className="relative">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                    >
                      {item.icon === 'user' ? (
                        <>
                          <circle cx="12" cy="8" r="3.25" />
                          <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
                        </>
                      ) : (
                        <>
                          <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
                          <path d="m4.5 7 7.5 6 7.5-6" />
                        </>
                      )}
                    </svg>
                    <input
                      id={fieldId}
                      name={item.icon}
                      type={item.type}
                      placeholder={item.placeholder}
                      className="block h-11 w-full rounded-2xl border border-slate-200/90 bg-white/90 pl-10 pr-3.5 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-slate-800/80 dark:text-white dark:placeholder:text-slate-500"
                    />
                  </div>
                )}
              </div>
            )
          })}
          <div className="mt-2 sm:col-span-2">
            <button
              type="submit"
              className="group inline-flex w-full sm:w-auto h-11 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/40 active:translate-y-0"
            >
              Submit Message
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3.5 10h12m0 0-4.5-4.5M15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Reachsection;
