import { motion } from 'framer-motion';

export default function AgencyServices() {
    const services = [
        {
            number: '01',
            title: 'Talent Management',
            desc: 'Nurturing distinctive faces and building sustainable, long-term careers in the global fashion industry.'
        },
        {
            number: '02',
            title: 'Creative Direction',
            desc: 'Collaborating with high-end houses to develop cohesive, striking editorial campaigns.'
        },
        {
            number: '03',
            title: 'Global Casting',
            desc: 'Connecting our diverse board of models with the most prestigious shows in Paris, Milan and London.'
        }
    ];

    return (
        <section className="bg-brand-offwhite text-brand-black py-24 md:py-32 w-full border-t border-brand-black/10">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <p className="uppercase tracking-[0.3em] text-sm mb-6 font-bold">What We Do</p>
                        <h2 className="font-editorial text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
                            BEYOND REPRESENTATION.
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-1/3"
                    >
                        <p className="text-brand-black/70 font-light text-lg">
                            We operate at the intersection of emerging talent and luxury fashion, offering a comprehensive suite of services tailored to elevate the next generation of creatives.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, borderTopColor: "rgba(0,0,0,0)" }}
                            whileInView={{ opacity: 1, borderTopColor: "rgba(5,5,5,1)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="border-t border-brand-black pt-8"
                        >
                            <p className="font-editorial text-4xl mb-6 text-brand-gold">{service.number}</p>
                            <h3 className="uppercase tracking-widest text-lg font-bold mb-4">{service.title}</h3>
                            <p className="text-brand-black/60 font-light leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
