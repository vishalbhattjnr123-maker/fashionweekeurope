import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ModelCard({ model, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <Link to={`/models/${model.id}`} className="group block relative overflow-hidden bg-brand-charcoal">
                <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />

                    <div className="absolute top-4 left-4 bg-brand-offwhite text-brand-black px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                        {model.category}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div>
                            <h3 className="font-editorial text-2xl mb-1">{model.name}</h3>
                            <p className="text-xs uppercase tracking-widest opacity-80">{model.location}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-transparent group-hover:bg-white group-hover:text-brand-black transition-colors duration-300">
                            <ArrowRight size={18} strokeWidth={2} />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
