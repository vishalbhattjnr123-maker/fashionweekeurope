import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { selectedImages } from '../data/mockData';

export default function CompanyProfileSection() {
    const services = [
        "INTERNATIONAL FASHION WEEK PRODUCTIONS",
        "RUNWAY & MODEL MANAGEMENT",
        "BRAND PROMOTION & MARKETING",
        "FASHION PHOTOGRAPHY & MEDIA COVERAGE",
        "DESIGNER & TALENT SHOWCASES",
        "SPONSORSHIP & PARTNERSHIP OPPORTUNITIES"
    ];

    return (
        <div className="w-full bg-brand-offwhite text-brand-black flex flex-col items-center">

            {/* ================================================== */}
            {/* PART B - OUR SERVICES */}
            {/* ================================================== */}
            <section className="w-full py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <h2 className="font-editorial text-4xl md:text-5xl uppercase mb-4 tracking-tight">What We Do.</h2>
                        <p className="font-sans font-light text-lg text-brand-black/60 max-w-2xl leading-relaxed">
                            Creating opportunities across fashion, media, talent and international collaboration.
                        </p>
                    </motion.div>

                    <div className="flex flex-col w-full border-t border-brand-black/10">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative flex items-center border-b border-brand-black/10 py-8 md:py-10 cursor-pointer overflow-hidden"
                            >
                                {/* Animated Bottom Border */}
                                <div className="absolute bottom-0 left-0 h-[1px] bg-brand-black w-0 group-hover:w-full transition-all duration-[800ms] ease-in-out" />

                                {/* Content Wrapper */}
                                <div className="relative z-10 flex items-center w-full transform transition-transform duration-500 ease-out group-hover:translate-x-4">
                                    <span className="font-sans text-sm md:text-base font-semibold tracking-widest text-brand-gold mr-8 md:mr-12 transition-transform duration-500 group-hover:-translate-y-1">
                                        {'0' + (index + 1)}
                                    </span>
                                    <h3 className="font-sans text-base md:text-lg lg:text-xl font-medium tracking-[0.1em] uppercase transition-colors duration-500 text-brand-black/90">
                                        {service}
                                    </h3>
                                    <div className="ml-auto opacity-0 -translate-x-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                                        <ArrowRight className="text-brand-gold w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================== */}
            {/* PART C - UPCOMING EVENT */}
            {/* ================================================== */}
            <section className="relative w-full h-auto min-h-[90vh] flex items-center py-32 overflow-hidden group">

                {/* Background Parallax Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={selectedImages.fashionWeek?.[0] || selectedImages.background || selectedImages.hero}
                        alt="Fashion Week Europe 2026 Event"
                        className="w-full h-full object-cover object-[50%_40%] scale-100 group-hover:scale-105 transition-transform duration-[10s] ease-out"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
                </div>

                {/* Event Content Overlay */}
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <p className="uppercase tracking-[0.4em] text-xs font-bold text-white/70 mb-6">
                            Upcoming Event
                        </p>

                        <h2 className="font-editorial text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-white mb-10">
                            Fashion Week <br /> Europe 2026
                        </h2>

                        <div className="w-24 h-px bg-brand-gold mb-12" />

                        <p className="text-white/80 font-light text-xl leading-relaxed mb-16 max-w-3xl text-balance">
                            Fashion Week Europe 2026 brings together renowned designers, international models, luxury brands, media professionals, and fashion enthusiasts for an exclusive showcase of innovation, style, and creativity. The event offers unparalleled networking opportunities, global exposure, and a world-class runway experience.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mb-24">
                            <Link to="/fashion-week" className="inline-block bg-white text-brand-black px-10 py-5 uppercase tracking-widest text-xs font-bold hover:bg-brand-gold hover:text-white transition-colors duration-300 text-center">
                                Explore Event &rarr;
                            </Link>
                            <Link to="/contact?type=partnership" className="inline-block border border-white text-white px-10 py-5 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-brand-black transition-colors duration-300 text-center">
                                Become A Partner &rarr;
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Event Info Footer Row */}
                <div className="absolute bottom-0 left-0 w-full border-t border-white/20 bg-black/20 backdrop-blur-sm z-10 py-6">
                    <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-white/70 tracking-widest text-xs uppercase font-medium">
                        <span>2026</span>
                        <span className="my-2 sm:my-0">Europe</span>
                        <span>Fashion / Runway / Culture</span>
                    </div>
                </div>

            </section>
        </div>
    );
}
