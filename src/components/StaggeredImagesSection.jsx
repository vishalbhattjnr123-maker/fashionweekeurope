import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { selectedImages } from '../data/mockData';

export default function StaggeredImagesSection() {
    return (
        <section className="bg-brand-offwhite py-24 md:py-32 w-full overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Image 01 - Large Portrait */}
                    <div className="w-full md:w-[40%]">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className="w-full aspect-[4/5] bg-brand-charcoal overflow-hidden group"
                        >
                            <img
                                src={selectedImages.staggered1}
                                alt="Editorial Portrait"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>

                    {/* Center Text */}
                    <div className="w-full md:w-[30%] flex flex-col justify-center items-center text-center px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="font-editorial text-4xl lg:text-5xl leading-tight mb-6">
                                EVERY FACE <br /> HAS A STORY.
                            </h2>
                            <p className="text-brand-black/60 font-light text-base lg:text-lg mb-8 leading-relaxed max-w-sm mx-auto">
                                Behind every image is an individual story, a distinct perspective and a talent waiting to be discovered.
                            </p>
                            <Link
                                to="/models"
                                className="group flex items-center justify-center space-x-3 uppercase tracking-widest text-[#a0a0a0] hover:text-brand-black text-xs font-bold transition-colors"
                            >
                                <span>Discover Our Models</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image 02 - Slightly smaller, staggered down */}
                    <div className="w-full md:w-[30%] md:pt-32">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="w-full aspect-[3/4] bg-brand-charcoal overflow-hidden group ml-auto"
                        >
                            <img
                                src={selectedImages.staggered2}
                                alt="New Generation Model"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
