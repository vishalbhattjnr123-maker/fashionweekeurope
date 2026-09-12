import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { selectedImages } from '../data/mockData';

const stripImages = [
    { id: 1, src: selectedImages.strip[0], type: 'large-portrait', aspect: 'aspect-[3/4]', flex: 'flex-[0_0_80%] md:flex-[0_0_25%]' },
    { id: 2, src: selectedImages.strip[1], type: 'small-portrait', aspect: 'aspect-[3/5]', flex: 'flex-[0_0_60%] md:flex-[0_0_15%]', mt: 'md:mt-16' },
    { id: 3, src: selectedImages.strip[2], type: 'wide', aspect: 'aspect-[4/3] md:aspect-[16/9]', flex: 'flex-[0_0_90%] md:flex-[0_0_35%]' },
    { id: 4, src: selectedImages.strip[3], type: 'portrait', aspect: 'aspect-[4/5]', flex: 'flex-[0_0_70%] md:flex-[0_0_20%]', mt: 'md:mt-8' },
    { id: 5, src: selectedImages.strip[4], type: 'large-portrait', aspect: 'aspect-[3/4]', flex: 'flex-[0_0_80%] md:flex-[0_0_25%]' },
];

export default function EditorialImageStrip() {
    return (
        <section className="bg-brand-offwhite py-24 md:py-32 w-full overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <h3 className="uppercase tracking-[0.3em] text-xs font-bold text-brand-black/50 text-center">
                    Editorial Gallery
                </h3>
            </div>

            {/* Scrollable strip container */}
            <div className="w-full pl-6 md:px-6">
                <div className="flex flex-row overflow-x-auto gap-4 md:gap-8 no-scrollbar snap-x snap-mandatory pr-6 md:pr-0 items-start">
                    {stripImages.map((img, i) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`relative ${img.flex} ${img.mt || ''} snap-center shrink-0 group overflow-hidden bg-brand-charcoal cursor-pointer`}
                        >
                            <Link to="/portfolio" className="block w-full h-full">
                                <div className={`${img.aspect} w-full overflow-hidden relative`}>
                                    <img
                                        src={img.src}
                                        alt={`Editorial strip ${img.id}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <span className="text-white text-[10px] uppercase tracking-widest flex items-center space-x-2 border border-white/50 bg-black/20 backdrop-blur-sm px-4 py-2">
                                            <span>View</span>
                                            <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
