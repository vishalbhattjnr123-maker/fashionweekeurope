import { Link } from 'react-router-dom';
import { portfolio } from '../data/mockData';
import { motion } from 'framer-motion';

export default function Portfolio() {
    return (
        <div className="bg-brand-offwhite min-h-screen pb-24">
            {/* Hero Banner */}
            <div className="w-full h-[50vh] md:h-[65vh] relative mb-16 lg:mb-24">
                <img loading="lazy"
                    src="/images/183436.webp"
                    alt="Portfolio"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply flex flex-col justify-center items-center" />

                <div className="absolute inset-0 flex items-center justify-center pt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-editorial text-5xl md:text-7xl lg:text-8xl text-white tracking-wide"
                    >
                        PORTFOLIO
                    </motion.h1>
                </div>
            </div>

            <div className="container mx-auto px-6">

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
                    {portfolio.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="break-inside-avoid"
                        >
                            <Link to={`/portfolio/${item.id}`} className="group block relative overflow-hidden bg-brand-charcoal">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 bg-gradient-to-t from-black/80 via-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white">
                                    <p className="uppercase tracking-widest text-[10px] font-bold text-brand-gold mb-2">{item.category} • {item.year}</p>
                                    <h3 className="font-editorial text-2xl lg:text-3xl mb-4">{item.title}</h3>
                                    <span className="text-xs uppercase tracking-widest flex items-center space-x-2 border-b border-white/30 w-fit pb-1 hover:border-white transition-colors">
                                        View Project &rarr;
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                    {/* duplicate more items for a masonary look */}
                    {portfolio.map((item, index) => (
                        <motion.div
                            key={`dup-${item.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="break-inside-avoid"
                        >
                            <Link to={`/portfolio/${item.id}`} className="group block relative overflow-hidden bg-brand-charcoal">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 bg-gradient-to-t from-black/80 via-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white">
                                    <p className="uppercase tracking-widest text-[10px] font-bold text-brand-gold mb-2">{item.category} • {item.year}</p>
                                    <h3 className="font-editorial text-2xl lg:text-3xl mb-4">{item.title} (Edit)</h3>
                                    <span className="text-xs uppercase tracking-widest flex items-center space-x-2 border-b border-white/30 w-fit pb-1 hover:border-white transition-colors">
                                        View Project &rarr;
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
