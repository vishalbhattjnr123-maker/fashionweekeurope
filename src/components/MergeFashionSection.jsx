import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { selectedImages } from '../data/mockData';

export default function MergeFashionSection() {
    return (
        <section className="bg-brand-ivory py-24 md:py-32 w-full">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="uppercase tracking-[0.3em] text-xs font-bold text-brand-black/60 mb-6">
                                Fashion Week Europe
                            </p>

                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tighter uppercase leading-[0.95] text-brand-black mb-8">
                                We Merge Fashion <br /> With Creativity.
                            </h2>

                            {/* Decorative Divider */}
                            <div className="w-16 h-px bg-brand-gold mb-8" />

                            <p className="font-editorial text-2xl md:text-3xl italic text-brand-black/80 mb-8 leading-snug">
                                "Where creativity meets confidence, and every face has a story worth being seen."
                            </p>

                            <div className="space-y-6 text-brand-black/70 font-light text-lg leading-relaxed mb-12">
                                <p>
                                    Fashion Week Europe is a global fashion and lifestyle platform created to connect emerging talent, established models, designers, brands and creative professionals. We bring together fashion, beauty, culture and creativity to create meaningful opportunities across the international fashion landscape.
                                </p>
                                <p>
                                    From the runway to the editorial studio, from new faces to established talent, we create a space where ideas become experiences and talent becomes opportunity.
                                </p>
                            </div>

                            <Link
                                to="/about"
                                className="group inline-flex items-center space-x-3 uppercase tracking-widest text-xs font-bold text-brand-black hover:text-brand-gold transition-colors"
                            >
                                <span>Discover Our Story</span>
                                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 flex justify-end relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-full relative overflow-hidden group max-w-lg mx-auto lg:mr-0 z-10"
                        >
                            <div className="aspect-[4/5] w-full bg-brand-beige overflow-hidden">
                                <img
                                    src={selectedImages.aboutFashion}
                                    alt="We Merge Fashion"
                                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[2s] ease-out"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>

                        {/* Floating Editorial Label */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute -left-12 bottom-24 -rotate-90 origin-bottom-left hidden lg:block z-0 tracking-widest text-[#a0a0a0] font-semibold text-xs whitespace-nowrap uppercase"
                        >
                            Fashion Week Europe &nbsp;/&nbsp; Est. Global Platform
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
