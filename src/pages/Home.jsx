import { motion } from 'framer-motion';
import MergeFashionSection from '../components/MergeFashionSection';
import StaggeredImagesSection from '../components/StaggeredImagesSection';
import FeaturedFashionSwiper from '../components/FeaturedFashionSwiper';
import BackgroundImageSection from '../components/BackgroundImageSection';
import EditorialImageStrip from '../components/EditorialImageStrip';
import ModelDiscoveryCTA from '../components/ModelDiscoveryCTA';
import NewFacesGrid from '../components/NewFacesGrid';
import CompanyProfileSection from '../components/CompanyProfileSection';
import PartnerBrands from '../components/PartnerBrands';
import { useRef } from 'react';

export default function Home() {
    const videoRef = useRef(null);

    const handleTimeUpdate = (e) => {
        const video = e.target;
        if (video.currentTime >= 20) {
            video.currentTime = 1; // Seamless snap back
            video.play();
        }
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[90vh] md:h-screen lg:h-[100vh] overflow-hidden bg-black">

                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <video
                        ref={videoRef}
                        src="/bg.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        onTimeUpdate={handleTimeUpdate}
                        className="absolute inset-0 w-full h-full object-cover"
                    ></video>
                </div>
                <div className="absolute inset-0 bg-black/60 z-10" />

                <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl"
                    >
                        <p className="text-white/80 tracking-[0.4em] text-sm md:text-sm uppercase mb-6 font-semibold">
                            Fashion Week Europe
                        </p>
                        <h1 className="font-sans text-5xl md:text-7xl lg:text-7xl text-white font-bold leading-[1.1] mb-6 tracking-tight text-balance">
                            Fashion has no boundaries.
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl text-balance">
                            Discover models, fashion, creativity and opportunities from across the global fashion industry.
                        </p>
                    </motion.div>
                </div>

                {/* Side Text */}
                <div className="absolute left-6 bottom-32 origin-bottom-left -rotate-90 hidden lg:block">
                    <p className="text-white/60 tracking-[0.5em] text-xs uppercase font-medium">
                        Fashion / Beauty / Culture / Talent
                    </p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white/70 to-transparent mx-auto mb-2" />
                </motion.div>
            </section>

            <PartnerBrands />
            <NewFacesGrid />
            <CompanyProfileSection />

            {/* New Editorial Sections */}
            <MergeFashionSection />
            <StaggeredImagesSection />
            <FeaturedFashionSwiper />
            <BackgroundImageSection />
            <EditorialImageStrip />
            <ModelDiscoveryCTA />
        </div>
    );
}
