import { motion } from 'framer-motion';
import { selectedImages } from '../data/mockData';

export default function NewFacesGrid() {
    const faces = selectedImages.models.slice(0, 10);

    return (
        <section className="bg-white py-24 md:py-32 w-full">
            <div className="container mx-auto px-6 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-editorial text-5xl md:text-7xl uppercase mb-6"
                >
                    NEW FACES
                </motion.h2>

                {/* Diamond Divider */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center items-center gap-2 mb-8"
                >
                    <div className="w-16 h-[1px] bg-brand-black/20" />
                    <div className="w-2 h-2 rotate-45 border border-brand-black/40" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-brand-black/60" />
                    <div className="w-2 h-2 rotate-45 border border-brand-black/40" />
                    <div className="w-16 h-[1px] bg-brand-black/20" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-2xl mx-auto text-brand-black/60 font-editorial italic text-xl md:text-2xl leading-relaxed"
                >
                    Discovering exceptional talent. A curated selection of the most striking new models ready to redefine global fashion standards.
                </motion.p>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-0">
                {faces.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: (i % 5) * 0.1 }}
                        className="w-full aspect-[4/5] overflow-hidden group relative"
                    >
                        <img
                            src={img}
                            alt={`New Face ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* Subtle Overlay on hover */}
                        <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors duration-500" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
