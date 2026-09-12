import { selectedImages } from '../data/mockData';

export default function About() {
    return (
        <div className="bg-brand-offwhite">
            {/* Hero Section */}
            <section className="relative w-full h-[70vh] flex items-center justify-center">
                <img
                    src={selectedImages.about}
                    alt="About Fashion Week Europe"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-charcoal/60 mix-blend-multiply" />

                <div className="relative z-10 text-center px-6 text-white max-w-4xl mx-auto">
                    <h1 className="font-editorial text-5xl md:text-8xl lg:text-9xl mb-6">WE MERGE FASHION.</h1>
                    <p className="text-xl md:text-2xl font-light tracking-wide opacity-90 text-balance">
                        Elevating talent and redefining the runway on a global scale.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 md:py-32 container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <div className="w-full lg:w-1/2">
                        <h2 className="uppercase tracking-[0.3em] text-brand-gold text-xs font-bold mb-6">About Us</h2>

                        <h3 className="font-editorial text-4xl md:text-5xl mb-6 leading-[1.2] text-balance">
                            Fashion Week Europe is a premier fashion and lifestyle platform.
                        </h3>

                        <p className="font-editorial text-2xl text-brand-black/80 italic mb-8 leading-snug">
                            Dedicated to showcasing emerging and established designers, models, brands, and creative talents from across the globe.
                        </p>

                        <p className="text-brand-black/60 font-light text-lg leading-relaxed mb-6">
                            We create world-class fashion experiences that connect creativity, innovation, and international opportunities under one prestigious platform.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img
                            src={selectedImages.aboutFashion}
                            alt="Editorial"
                            className="w-full h-[600px] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-brand-black text-white py-24 md:py-32">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-white/20">
                    <div className="flex flex-col items-center justify-center p-4">
                        <h4 className="font-editorial text-6xl md:text-7xl mb-4 text-brand-gold">50+</h4>
                        <p className="uppercase tracking-widest text-xs font-bold">Models</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4">
                        <h4 className="font-editorial text-6xl md:text-7xl mb-4 text-brand-gold">20+</h4>
                        <p className="uppercase tracking-widest text-xs font-bold">Cities</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4">
                        <h4 className="font-editorial text-6xl md:text-7xl mb-4 text-brand-gold">100+</h4>
                        <p className="uppercase tracking-widest text-xs font-bold">Creatives</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4">
                        <h4 className="font-editorial text-6xl md:text-7xl mb-4 text-brand-gold">25+</h4>
                        <p className="uppercase tracking-widest text-xs font-bold">Events</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
