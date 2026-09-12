import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { selectedImages } from '../data/mockData';

import 'swiper/css';
import 'swiper/css/effect-fade';

const heroSlides = [
    {
        image: selectedImages.hero,
        subtitle: "Fashion Week Europe",
        title: "Fashion has no boundaries.",
        desc: "Discover models, fashion, creativity and opportunities from across the global fashion industry.",
    },
    {
        image: selectedImages.fashionWeek[0] || selectedImages.background, // Fallback safely
        subtitle: "Global Platform",
        title: "Elevating Global Talent.",
        desc: "Connecting the most distinctive faces with the world's leading fashion houses and campaigns.",
    },
    {
        image: typeof selectedImages.fashionWeek[1] !== 'undefined' ? selectedImages.fashionWeek[1] : selectedImages.portfolio[0],
        subtitle: "The New Standard",
        title: "The Art of Editorial.",
        desc: "Where cutting-edge style meets the uncompromising vision of international creators. Join the movement.",
    }
];

export default function HeroSlider() {
    return (
        <section className="relative w-full h-[90vh] md:h-screen lg:h-[100vh]">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                speed={1000}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full h-full"
                allowTouchMove={true}
            >
                {heroSlides.map((slide, index) => (
                    <SwiperSlide key={index} className="w-full h-full relative">

                        {/* Background Image Image */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover object-[50%_20%]"
                                fetchPriority={index === 0 ? "high" : "auto"}
                            />
                            <div className="absolute inset-0 bg-black/40" />
                        </div>

                        {/* Slide Text Content (Synced with Fade) */}
                        <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">
                            <div className="max-w-4xl">
                                <p className="text-white tracking-[0.3em] text-sm md:text-base uppercase mb-6 font-medium">
                                    {slide.subtitle}
                                </p>
                                <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 text-balance">
                                    {slide.title}
                                </h1>
                                <p className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-2xl text-balance">
                                    {slide.desc}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6">
                                    <Link
                                        to="/models"
                                        className="inline-block bg-white text-brand-black px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-gold hover:text-white transition-colors duration-300 text-center"
                                    >
                                        Explore Models
                                    </Link>
                                    <Link
                                        to="/apply"
                                        className="inline-block border border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-brand-black transition-colors duration-300 text-center"
                                    >
                                        Become a Model
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Side Text (Static over everything) */}
            <div className="absolute left-6 bottom-32 origin-bottom-left -rotate-90 hidden lg:block z-20 pointer-events-none">
                <p className="text-white/60 tracking-[0.5em] text-xs uppercase font-medium">
                    Fashion / Beauty / Culture / Talent
                </p>
            </div>

            {/* Scroll Indicator (Static) */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 z-20 pointer-events-none"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/70 to-transparent mx-auto mb-2" />
            </motion.div>
        </section>
    );
}
