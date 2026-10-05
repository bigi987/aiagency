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
    <section id="comments" className="px-4 py-16 text-slate-900 sm:px-6 lg:py-24 dark:text-slate-100" aria-labelledby="comments-title">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mx-auto mb-10 max-w-[620px] text-center sm:mb-12">
          <h2 id="comments-title" className="m-0 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl dark:text-white">Our reviews</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-500 sm:text-base dark:text-slate-400">What our clients say about us</p>
        </header>
        <div className="relative px-12 pb-10 sm:px-16 [&_.slick-dots]:bottom-[-32px] [&_.slick-slide]:h-auto [&_.slick-slide]:px-3 sm:[&_.slick-slide]:px-[18px] [&_.slick-slide>div]:h-full [&_.slick-track]:flex">
          <Slider ref={sliderRef} {...settings}>
            {reviewsData.map((item) => (
              <article className="h-full" key={item.id}>
                <div className="flex h-full min-h-[320px] flex-col justify-between rounded-lg border border-slate-200/80 bg-white/85 p-7 shadow-[0_14px_38px_rgba(30,41,59,0.07)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-indigo-300/70 hover:shadow-[0_20px_44px_rgba(30,41,59,0.11)] sm:min-h-[340px] sm:p-8 lg:p-9 dark:border-slate-700/70 dark:bg-slate-900/80 dark:shadow-black/20 dark:hover:border-indigo-300/50 dark:hover:shadow-black/30">
                  <div className="flex items-center gap-[15px]">
                    <img src={item.photo} alt={item.name} className="h-14 w-14 shrink-0 rounded-full border-2 border-white object-cover shadow-[0_0_0_1px_rgba(80,68,229,0.18)] dark:border-slate-800" />
                    <div>
                      <h3 className="mb-1 text-base font-bold leading-snug text-slate-950 dark:text-white">{item.name}</h3>
                      <p className="mt-0.5 text-[13px] leading-snug text-slate-500 dark:text-slate-400">{item.role}</p>
                      <p className="mt-0.5 text-[13px] leading-snug text-slate-500 dark:text-slate-400">{item.company}</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className="m-0 text-[15px] leading-8 text-slate-600 dark:text-slate-300">{item.text}</p>
                    <p className="mt-[17px] text-[15px] leading-none text-amber-400" aria-label={item.rating.length + ' star rating'}>{item.rating}</p>
                  </div>
                </div>
              </article>
            ))}
          </Slider>
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-indigo-100 bg-white/95 text-2xl leading-none text-indigo-600 shadow-lg shadow-slate-900/10 transition duration-200 hover:scale-105 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 active:scale-95 dark:border-slate-700 dark:bg-slate-900/95 dark:text-indigo-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white dark:focus-visible:outline-indigo-300"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-indigo-100 bg-white/95 text-2xl leading-none text-indigo-600 shadow-lg shadow-slate-900/10 transition duration-200 hover:scale-105 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 active:scale-95 dark:border-slate-700 dark:bg-slate-900/95 dark:text-indigo-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white dark:focus-visible:outline-indigo-300"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Comments;

