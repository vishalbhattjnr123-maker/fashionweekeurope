import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import ModelCard from '../components/ModelCard';
import { models } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

import { useLocation } from 'react-router-dom';

const categories = ['ALL', 'WOMEN', 'MEN', 'NEW FACES', 'EDITORIAL', 'RUNWAY'];

export default function Models() {
    const [activeCategory, setActiveCategory] = useState('ALL');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search')?.toLowerCase() || '';

    let filteredModels = activeCategory === 'ALL'
        ? models
        : models.filter(m => m.category.toUpperCase() === activeCategory || m.type.toUpperCase() === activeCategory);

    if (searchQuery) {
        filteredModels = filteredModels.filter(m =>
            m.name.toLowerCase().includes(searchQuery) ||
            m.category.toLowerCase().includes(searchQuery) ||
            m.type.toLowerCase().includes(searchQuery)
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h1 className="font-editorial text-5xl md:text-7xl mb-6">Models</h1>
                    <p className="text-xl text-brand-black/60 font-light text-balance">
                        Discover the faces of Fashion Week Europe. An exclusive curation of international talent.
                    </p>
                </div>

                {/* Filters Top Bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-brand-black/10 pb-6 gap-6">

                    {/* Desktop Categories */}
                    <div className="hidden lg:flex space-x-8">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={clsx(
                                    "uppercase tracking-widest text-xs font-semibold pb-1 transition-all",
                                    activeCategory === cat
                                        ? "text-brand-black border-b-2 border-brand-black"
                                        : "text-brand-black/40 hover:text-brand-black"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Category Dropdown Substitute */}
                    <div className="lg:hidden w-full overflow-x-auto no-scrollbar">
                        <div className="flex space-x-6 min-w-max">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={clsx(
                                        "uppercase tracking-widest text-xs font-semibold pb-2 transition-all",
                                        activeCategory === cat
                                            ? "text-brand-black border-b-2 border-brand-black"
                                            : "text-brand-black/40"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => setIsFilterOpen(true)}
                        className="flex items-center space-x-2 text-sm uppercase tracking-widest font-semibold hover:text-brand-gold transition-colors"
                    >
                        <Filter size={16} />
                        <span>Advanced Filters</span>
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <AnimatePresence>
                        {filteredModels.map((model, index) => (
                            <ModelCard key={model.id} model={model} index={index} />
                        ))}
                    </AnimatePresence>
                </div>

                {filteredModels.length === 0 && (
                    <div className="text-center py-24">
                        <p className="text-xl text-brand-black/50">No models found for this category.</p>
                    </div>
                )}
            </div>

            {/* Advanced Filter Drawer */}
            <AnimatePresence>
                {isFilterOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsFilterOpen(false)}
                            className="fixed inset-0 bg-brand-charcoal/40 z-50 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.4 }}
                            className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 shadow-2xl p-8 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <h3 className="font-editorial text-3xl">Filters</h3>
                                <button onClick={() => setIsFilterOpen(false)} className="hover:text-brand-gold transition-colors">
                                    <X size={28} strokeWidth={1} />
                                </button>
                            </div>

                            <div className="flex-grow space-y-10 overflow-y-auto pr-4">
                                {/* Dummy Filter Groups */}
                                <div>
                                    <h4 className="uppercase tracking-widest text-xs font-bold mb-4 border-b pb-2">Location</h4>
                                    <div className="space-y-3">
                                        {['Paris', 'Milan', 'London', 'New York'].map(opt => (
                                            <label key={opt} className="flex items-center space-x-3 cursor-pointer">
                                                <input type="checkbox" className="accent-brand-black w-4 h-4" />
                                                <span className="text-sm">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="uppercase tracking-widest text-xs font-bold mb-4 border-b pb-2">Height</h4>
                                    <div className="space-y-3">
                                        {['5\'8" - 5\'10"', '5\'11" - 6\'0"', '6\'1"+'].map(opt => (
                                            <label key={opt} className="flex items-center space-x-3 cursor-pointer">
                                                <input type="checkbox" className="accent-brand-black w-4 h-4" />
                                                <span className="text-sm">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="uppercase tracking-widest text-xs font-bold mb-4 border-b pb-2">Experience</h4>
                                    <div className="space-y-3">
                                        {['New Face', 'Editorial', 'Campaigns', 'Runway'].map(opt => (
                                            <label key={opt} className="flex items-center space-x-3 cursor-pointer">
                                                <input type="checkbox" className="accent-brand-black w-4 h-4" />
                                                <span className="text-sm">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 mt-auto flex gap-4">
                                <button
                                    onClick={() => setIsFilterOpen(false)}
                                    className="flex-1 border border-brand-black py-4 uppercase tracking-widest text-xs font-semibold hover:bg-brand-black hover:text-white transition-colors"
                                >
                                    Clear All
                                </button>
                                <button
                                    onClick={() => setIsFilterOpen(false)}
                                    className="flex-1 bg-brand-black py-4 text-white uppercase tracking-widest text-xs font-semibold hover:bg-brand-gold transition-colors"
                                >
                                    Apply
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </div>
    );
}
