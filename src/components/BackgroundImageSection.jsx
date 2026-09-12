import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { selectedImages } from '../data/mockData';

export default function BackgroundImageSection() {
    return (
        <section className="relative w-full h-[75vh] md:h-[70vh] lg:h-[85vh] overflow-hidden group">
            {/* Background Image with subtle parallax/zoom */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-out lg:group-hover:scale-110"
                style={{ backgroundImage: `url(${selectedImages.background})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-colors duration-[3s]" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl w-full"
                >
                    <p className="uppercase tracking-[0.3em] text-white/80 text-xs font-bold mb-8">
                        Fashion Week Europe
                    </p>

                    <h2 className="font-editorial text-4xl md:text-5xl lg:text-7xl text-white mb-4 leading-[1.1] uppercase">
                        Fashion is not <br className="hidden md:block" /> simply what we wear.
                    </h2>
                    <p className="font-editorial text-3xl md:text-5xl lg:text-6xl text-brand-gold italic mb-10 leading-[1.1]">
                        "It is how we express who we are."
                    </p>

                    <p className="text-white/80 font-light text-base md:text-lg tracking-wide mb-12">
                        Discover talent. Create connections. Shape the future.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                            to="/fashion-week"
                            className="border border-white text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-brand-black transition-colors duration-300"
                        >
                            Explore Fashion Week
                        </Link>
                        <Link
                            to="/apply"
                            className="bg-brand-black/50 backdrop-blur-sm border border-transparent text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-brand-black hover:border-white transition-all duration-300"
                        >
                            Become a Model
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
