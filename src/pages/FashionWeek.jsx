import { Link } from 'react-router-dom';
import { fashionWeeks } from '../data/mockData';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FashionWeek() {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mb-24">
                    <h1 className="font-editorial text-5xl md:text-7xl mb-8">FASHION WEEK</h1>
                    <p className="text-xl md:text-2xl text-brand-black/60 font-light text-balance leading-relaxed">
                        Fashion Week Europe brings together designers, models, creatives, brands and fashion professionals to locations across the globe.
                    </p>
                </div>

                <div className="space-y-12 md:space-y-24">
                    {fashionWeeks.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
                        >
                            <div className="w-full md:w-3/5 overflow-hidden relative group">
                                <div className="aspect-[4/3] w-full bg-brand-beige overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                                </div>
                            </div>

                            <div className="w-full md:w-2/5 flex flex-col justify-center">
                                <p className="uppercase tracking-[0.3em] text-brand-gold text-xs font-bold mb-4">{event.location}</p>
                                <h2 className="font-editorial text-4xl lg:text-5xl mb-6">{event.title}</h2>
                                <p className="text-brand-black/60 text-lg mb-10">{event.date}</p>

                                <Link to="/contact" className="group flex items-center space-x-4 uppercase tracking-widest text-xs font-bold w-fit">
                                    <span className="border-b border-brand-black pb-1">Explore Event</span>
                                    <div className="w-10 h-10 rounded-full border border-brand-black flex items-center justify-center group-hover:bg-brand-black group-hover:text-white transition-all">
                                        <ArrowRight size={16} />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
