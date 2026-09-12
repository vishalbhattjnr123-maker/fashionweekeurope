import { motion } from 'framer-motion';

export default function EditorialQuote() {
    return (
        <section className="bg-brand-charcoal text-white py-32 md:py-48 w-full">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    <p className="uppercase tracking-[0.3em] text-brand-gold text-xs font-bold mb-10">
                        Fashion Week Europe
                    </p>

                    <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl italic leading-tight mb-12 text-balance">
                        "Fashion is not simply what we wear.<br className="hidden md:block" /> It is how we express who we are."
                    </h2>

                    <p className="text-white/60 font-light text-lg md:text-xl tracking-wide mb-12">
                        Discover talent. Create connections. Shape the future.
                    </p>

                    <div className="w-24 h-px bg-white/20" />
                </motion.div>
            </div>
        </section>
    );
}
