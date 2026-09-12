export default function PartnerBrands() {
    const brands = [
        "VOGUE", "HARPER'S BAZAAR", "GQ", "BALENCIAGA", "PRADA", "GUCCI", "SAINT LAURENT", "ELLE"
    ];

    return (
        <section className="bg-brand-black text-white/50 py-12 md:py-16 overflow-hidden border-y border-white/10">

            {/* Infinite scrolling marquee effect */}
            <div className="relative w-full overflow-hidden flex whitespace-nowrap">
                {/* We duplicate the array to create a seamless looping effect */}
                <div className="animate-marquee-infinite flex space-x-16 md:space-x-32 items-center px-16">
                    {[...brands, ...brands, ...brands].map((brand, i) => (
                        <span key={i} className="font-editorial text-2xl md:text-4xl tracking-wider hover:text-white transition-colors duration-300 cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
