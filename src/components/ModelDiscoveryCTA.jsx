import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { selectedImages } from '../data/mockData';

export default function ModelDiscoveryCTA() {
    return (
        <section className="bg-brand-charcoal text-white py-24 md:py-32 w-full">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-md aspect-[3/4] overflow-hidden"
                        >
                            <img
                                src="/images/4101434.jpg"
                                alt="Become a Model"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="max-w-xl"
                        >
                            <h2 className="font-editorial text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]">
                                THE NEXT FACE <br /> COULD BE YOURS.
                            </h2>
                            <p className="text-white/70 font-light text-lg md:text-xl leading-relaxed mb-12">
                                We are always looking for distinctive talent, fresh perspectives and individuals ready to take their place in the world of fashion.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    to="/apply"
                                    className="bg-brand-gold text-brand-black px-8 py-5 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors duration-300 text-center"
                                >
                                    Become a Model &rarr;
                                </Link>
                                <Link
                                    to="/portfolio"
                                    className="border border-white/30 text-white px-8 py-5 uppercase tracking-widest text-xs font-bold hover:border-white hover:bg-white hover:text-brand-black transition-colors duration-300 text-center"
                                >
                                    View Portfolio &rarr;
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
