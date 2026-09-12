import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { selectedImages } from '../data/mockData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const featuredStories = [
    {
        image: selectedImages.swiper1,
        number: "01",
        category: "Editorial",
        title: "THE ART OF PRESENCE",
        description: "Confidence, character and individuality come together to create a face the world remembers.",
    },
    {
        image: selectedImages.swiper2,
        number: "02",
        category: "Runway",
        title: "BEYOND THE RUNWAY",
        description: "Fashion is more than a moment on the catwalk. It is culture, expression and a world of endless possibilities.",
    },
    {
        image: selectedImages.swiper3,
        number: "03",
        category: "New Faces",
        title: "THE NEW GENERATION",
        description: "Fresh faces, bold perspectives and emerging talent redefining the future of fashion.",
    },
];

export default function FeaturedFashionSwiper() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const paginationRef = useRef(null);

    return (
        <section className="bg-brand-offwhite py-24 md:py-32 w-full overflow-hidden">
            <div className="container mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="uppercase tracking-[0.3em] text-xs font-bold text-brand-black/50 mb-4">
                        Our World
                    </p>
                    <h2 className="font-editorial text-5xl md:text-6xl text-brand-black mb-6">
                        FASHION IN MOTION.
                    </h2>
                    <p className="text-brand-black/60 text-lg md:text-xl font-light text-balance">
                        From intimate editorials to powerful runway moments, discover the people, stories and creativity shaping our fashion world.
                    </p>
                </motion.div>
            </div>

            <div className="w-full relative px-6 md:px-12">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, Keyboard]}
                    spaceBetween={32}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    loop={true}
                    autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    speed={800}
                    keyboard={{ enabled: true }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    pagination={{
                        el: paginationRef.current,
                        type: 'bullets',
                        clickable: true,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    }}
                    className="w-full pb-16"
                >
                    {featuredStories.map((story, index) => (
                        <SwiperSlide key={index}>
                            <div className="group block relative overflow-hidden bg-brand-charcoal h-full cursor-grab active:cursor-grabbing">
                                <div className="aspect-[4/5] overflow-hidden w-full relative">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {/* Subtle dark overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100" />

                                    {/* Content Container */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                                        {/* Top Right Number */}
                                        <div className="text-right">
                                            <span className="font-sans font-light text-xs tracking-widest opacity-80 border-b border-white/30 pb-1">
                                                {story.number} / 03
                                            </span>
                                        </div>

                                        {/* Bottom Content Animates Up */}
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                            <p className="uppercase tracking-[0.2em] text-[10px] font-bold text-brand-gold mb-3">
                                                {story.category}
                                            </p>
                                            <h3 className="font-editorial text-3xl mb-4 leading-tight">
                                                {story.title}
                                            </h3>
                                            <p className="text-sm font-light text-white/80 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                                                {story.description}
                                            </p>

                                            <Link to="/portfolio" className="inline-flex items-center space-x-2 uppercase tracking-widest text-[10px] font-bold hover:text-brand-gold transition-colors">
                                                <span className="border-b border-white/40 group-hover:border-brand-gold pb-1 transition-colors">Explore Story</span>
                                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation */}
                <div className="absolute top-1/2 -mt-16 left-0 right-0 z-10 flex justify-between pointer-events-none px-2 md:px-6">
                    <button
                        ref={prevRef}
                        className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full border border-brand-black/20 bg-white/80 backdrop-blur-sm flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all shadow-sm hover:scale-105"
                    >
                        <ArrowLeft size={20} strokeWidth={1.5} />
                    </button>
                    <button
                        ref={nextRef}
                        className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full border border-brand-black/20 bg-white/80 backdrop-blur-sm flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all shadow-sm hover:scale-105"
                    >
                        <ArrowRight size={20} strokeWidth={1.5} />
                    </button>
                </div>

            </div>

            {/* Custom Pagination */}
            <div className="flex justify-center mt-4">
                <div ref={paginationRef} className="swiper-custom-pagination flex gap-2" />
            </div>
        </section>
    );
}
