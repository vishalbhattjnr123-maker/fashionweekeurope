import { motion } from 'framer-motion';

export default function AboutAndEvents() {
    return (
        <section className="bg-brand-offwhite text-brand-black py-24 md:py-32 w-full border-t border-brand-black/10">
            <div className="container mx-auto px-6">

                {/* About Us & Company Profile */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="uppercase tracking-[0.3em] text-sm mb-6 font-bold text-brand-gold">About Us</h2>
                        <p className="font-editorial text-3xl md:text-5xl leading-relaxed mb-8">
                            Fashion Week Europe is a premier fashion and lifestyle platform dedicated to showcasing emerging and established designers, models, brands, and creative talents from across the globe.
                        </p>
                        <p className="text-brand-black/70 font-light text-lg leading-relaxed">
                            We create world-class fashion experiences that connect creativity, innovation, and international opportunities under one prestigious platform.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="uppercase tracking-[0.3em] text-sm mb-6 font-bold text-brand-gold">Company Profile</h2>
                        <p className="text-brand-black/80 font-light text-lg leading-relaxed mb-6">
                            Fashion Week Europe specializes in fashion events, runway productions, model management, brand promotions, talent development, and international fashion collaborations.
                        </p>
                        <p className="text-brand-black/80 font-light text-lg leading-relaxed">
                            With a commitment to excellence and global standards, we provide a professional platform for designers, models, influencers, and fashion businesses to gain visibility, expand networks, and achieve international recognition.
                        </p>
                    </motion.div>
                </div>

                {/* Services & Upcoming Events */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 pt-20 border-t border-brand-black/10">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/3"
                    >
                        <h2 className="uppercase tracking-[0.3em] text-sm mb-8 font-bold text-brand-gold">Our Services</h2>
                        <ul className="space-y-4">
                            {[
                                "International Fashion Week Productions",
                                "Runway & Model Management",
                                "Brand Promotion & Marketing",
                                "Fashion Photography & Media Coverage",
                                "Designer & Talent Showcases",
                                "Sponsorship & Partnership Opportunities"
                            ].map((service, i) => (
                                <li key={i} className="flex items-center gap-4 text-brand-black/80 font-medium">
                                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-2/3"
                    >
                        <h2 className="uppercase tracking-[0.3em] text-sm mb-8 font-bold text-brand-gold">Upcoming Event</h2>
                        <h3 className="font-editorial text-4xl md:text-5xl leading-tight mb-8">
                            Fashion Week Europe 2026 brings together renowned designers, international models, luxury brands, media professionals, and fashion enthusiasts for an exclusive showcase of innovation, style, and creativity.
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-black/70 font-light leading-relaxed text-lg">
                            <p>
                                The event series is scheduled across Istanbul (Türkiye), Sofia (Bulgaria), and Greece, offering participants international exposure, high-profile networking opportunities, and a world-class runway experience.
                            </p>
                            <p>
                                Our events are proudly supported by collaborations with one of the world's leading automobile brands as a Title Sponsor, adding prestige, global visibility, and premium brand association. Fashion Week Europe serves as a gateway for designers, models, and fashion businesses to connect with international markets.
                            </p>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
