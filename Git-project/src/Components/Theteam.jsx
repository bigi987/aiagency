const teamMembers = [
  {
    name: 'John Doe',
    title: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&h=800&q=85',
  },
  {
    name: 'Haley Carter',
    title: 'Ads Manager',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=640&h=800&q=85',
  },
  {
    name: 'Jessica Morgan',
    title: 'Vice President',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=640&h=800&q=85',
  },
  {
    name: 'Megan Brooks',
    title: 'Performance Marketing Manager',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&h=800&q=85',
  },
  {
    name: 'Sarah Johnson',
    title: 'Social Media Manager',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=640&h=800&q=85',
  },
  {
    name: 'David Lee',
    title: 'Content Marketing Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=640&h=800&q=85',
  },
  {
    name: 'Darius Garland',
    title: 'Success Manager',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=640&h=800&q=85',
  },
  {
    name: 'Emily Parker',
    title: 'Content Marketer',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
  }
]

export default function Theteam() {
  return (
    <section id="team" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 animate-fade-in-up animate-on-load">
      <div className="mb-12 text-center sm:mb-16">
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
          Meet the Team
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          A passionate team of digital experts dedicated to your brand’s success and technological innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((item, index) => (
          <article
            key={item.name}
            className={`group flex min-h-[96px] min-w-0 items-center gap-4 rounded-2xl border border-white/80 bg-white/70 px-5 py-4 shadow-lg shadow-primary/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-primary/40 dark:hover:bg-slate-900/80 animate-scale-in animate-on-load delay-${((index % 4) + 1) * 200}`}
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="size-14 shrink-0 rounded-full object-cover ring-2 ring-primary/20 transition duration-300 group-hover:scale-105 group-hover:ring-primary"
            />
            <div className="min-w-0">
              <h3 className="truncate text-base font-bold text-slate-800 transition-colors group-hover:text-primary dark:text-slate-100 dark:group-hover:text-indigo-300">{item.name}</h3>
              <p className="mt-0.5 truncate text-xs font-medium text-slate-500 dark:text-slate-400">{item.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
