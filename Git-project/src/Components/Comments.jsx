import React from 'react'
import assets from '../assets/assets'
import SliderModule from 'react-slick'

const Slider = SliderModule.default ?? SliderModule

export const reviewsData = [
  {
    id: 1,
    name: 'Olivia Bennett',
    role: 'Founder',
    company: 'Northstar Studio',
    text: 'The team took the time to understand our goals and turned them into a clear, polished digital experience. Communication was thoughtful from start to finish.',
    rating: '★★★★★',
    photo: assets.avatar_1,
  },
  {
    id: 2,
    name: 'James Carter',
    role: 'Marketing Director',
    company: 'Brightside Co.',
    text: 'We needed a website that felt more like our brand. The process was collaborative, and the final result is easy for our team to manage.',
    rating: '★★★★★',
    photo: assets.avatar_2,
  },
  {
    id: 3,
    name: 'Amara Okafor',
    role: 'Co-founder',
    company: 'Common Ground',
    text: 'From the first conversation, the team brought practical ideas and a strong sense of design. They made a complicated project feel straightforward.',
    rating: '★★★★★',
    photo: assets.avatar_3,
  },
  {
    id: 4,
    name: 'Daniel Kim',
    role: 'Product Lead',
    company: 'Orbit Works',
    text: 'The new experience feels considered and works smoothly across devices. We appreciated the clear updates and attention to the small details.',
    rating: '★★★★★',
    photo: assets.avatar_4,
  },
  {
    id: 5,
    name: 'Daniela Kim',
    role: 'Lead',
    company: 'Cereal Works',
    text: 'The new experience feels considered and works smoothly across devices. We appreciated the clear updates and attention to the small details.',
    rating: '★★★★★',
    photo: assets.avatar_5,
  },
]

const Comments = () => {
    const sliderRef = React.useRef(null)

    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: { 
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }

  return (
    <section id="comments" className="mx-auto w-full max-w-7xl px-6 py-16 text-slate-900 sm:px-10 lg:py-20 dark:text-slate-100 animate-fade-in-up animate-on-load" aria-labelledby="comments-title">
      <div className="mx-auto w-full">
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 id="comments-title" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Honest feedback from people and companies we have partnered with.
          </p>
        </header>

        <div className="relative px-8 pb-10 sm:px-12 [&_.slick-dots]:bottom-[-32px] [&_.slick-slide]:h-auto [&_.slick-slide]:px-3 sm:[&_.slick-slide]:px-4 [&_.slick-slide>div]:h-full [&_.slick-track]:flex">
          <Slider ref={sliderRef} {...settings}>
            {reviewsData.map((item) => (
              <article className="h-full" key={item.id}>
                <div className="flex h-full min-h-[300px] flex-col justify-between rounded-[2.5rem] border border-white/80 bg-white/70 p-7 shadow-xl shadow-primary/5 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 sm:p-8 lg:p-9 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-primary/40 dark:hover:shadow-primary/20">
                  <div className="flex items-center gap-4">
                    <img src={item.photo} alt={item.name} className="size-14 shrink-0 rounded-full object-cover ring-2 ring-primary/20" />
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.name}</h3>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.role} • <span className="text-primary dark:text-indigo-400">{item.company}</span></p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.text}</p>
                    <p className="mt-4 text-sm tracking-wider text-amber-400" aria-label={item.rating.length + ' star rating'}>{item.rating}</p>
                  </div>
                </div>
              </article>
            ))}
          </Slider>
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/90 bg-white/90 text-xl font-bold text-slate-700 shadow-lg shadow-slate-200/30 backdrop-blur-md transition duration-200 hover:scale-105 hover:border-primary hover:bg-primary hover:text-white active:scale-95 dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/90 bg-white/90 text-xl font-bold text-slate-700 shadow-lg shadow-slate-200/30 backdrop-blur-md transition duration-200 hover:scale-105 hover:border-primary hover:bg-primary hover:text-white active:scale-95 dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Comments;

