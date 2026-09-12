import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MergeFashionSection from '../components/MergeFashionSection';
import StaggeredImagesSection from '../components/StaggeredImagesSection';
import FeaturedFashionSwiper from '../components/FeaturedFashionSwiper';
import BackgroundImageSection from '../components/BackgroundImageSection';
import EditorialImageStrip from '../components/EditorialImageStrip';
import ModelDiscoveryCTA from '../components/ModelDiscoveryCTA';
import NewFacesGrid from '../components/NewFacesGrid';
import CompanyProfileSection from '../components/CompanyProfileSection';
import PartnerBrands from '../components/PartnerBrands';
import { selectedImages } from '../data/mockData';

export default function Home() {

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[90vh] md:h-screen lg:h-[100vh]">
                <img
                    src={selectedImages.hero}
                    alt="Fashion Week Europe Hero"
                    className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl"
                    >
                        <p className="text-white tracking-[0.3em] text-sm md:text-base uppercase mb-6 font-medium">
                            Fashion Week Europe
                        </p>
                        <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 text-balance">
                            Fashion has no boundaries.
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-2xl text-balance">
                            Discover models, fashion, creativity and opportunities from across the global fashion industry.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link
                                to="/models"
                                className="inline-block bg-white text-brand-black px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-gold hover:text-white transition-colors duration-300 text-center"
                            >
                                Explore Models
                            </Link>
                            <Link
                                to="/apply"
                                className="inline-block border border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-brand-black transition-colors duration-300 text-center"
                            >
                                Become a Model
                            </Link>
                        </div>
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
