import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === '/';

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/models?search=${encodeURIComponent(searchQuery.trim())}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <>
            <header
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
                    (isScrolled || !isHome || isMobileMenuOpen) ? 'bg-brand-offwhite text-brand-black shadow-sm py-4' : 'bg-transparent text-white py-6'
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="z-50 block">
                        <img
                            src="/logo.png"
                            alt="Fashion Week Europe Logo"
                            className={clsx(
                                "w-auto object-contain transition-all duration-300 transform origin-left",
                                (isScrolled || !isHome || isMobileMenuOpen)
                                    ? "h-12 md:h-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] saturate-150 brightness-90 contrast-125"
                                    : "h-16 md:h-24 drop-shadow-xl brightness-110"
                            )}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-widest">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="hover:text-brand-gold transition-colors duration-300 relative group"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center space-x-6 z-50">
                        <button onClick={() => setIsSearchOpen(true)} className="hover:text-brand-gold transition-colors focus:outline-none">
                            <Search size={20} strokeWidth={1.5} />
                        </button>
                        <Link
                            to="/apply"
                            className={clsx(
                                'text-xs tracking-widest font-medium uppercase px-5 py-2.5 border transition-all duration-300',
                                (isScrolled || !isHome || isMobileMenuOpen)
                                    ? 'border-brand-black hover:bg-brand-black hover:text-white'
                                    : 'border-white hover:bg-white hover:text-brand-black'
                            )}
                        >
                            Become a Model
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center space-x-4 z-50">
                        <button onClick={() => setIsSearchOpen(true)} className="hover:text-brand-gold transition-colors focus:outline-none">
                            <Search size={22} strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                <X size={26} strokeWidth={1.5} className="text-brand-black" />
                            ) : (
                                <Menu size={26} strokeWidth={1.5} />
                            )}
                        </button>
                    </div>
                </div >
            </header >

            {/* Mobile Menu */}
            < AnimatePresence >
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        className="fixed inset-0 z-40 bg-brand-offwhite text-brand-black flex flex-col justify-center items-center h-screen"
                    >
                        <nav className="flex flex-col items-center space-y-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                                >
                                    <Link
                                        to={link.path}
                                        className="font-editorial text-3xl uppercase tracking-widest hover:text-brand-gold transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * navLinks.length, duration: 0.5 }}
                                className="pt-8"
                            >
                                <Link
                                    to="/apply"
                                    className="text-sm tracking-widest font-medium uppercase px-8 py-3 border border-brand-black hover:bg-brand-black hover:text-white transition-all duration-300"
                                >
                                    Become a Model
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )
                }
            </AnimatePresence>

            {/* Search Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-brand-offwhite z-[60] flex items-center justify-center p-6"
                    >
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="absolute top-8 right-8 text-brand-black hover:text-brand-gold transition-colors focus:outline-none"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>

                        <form onSubmit={handleSearchSubmit} className="w-full max-w-3xl relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search models, categories, etc..."
                                autoFocus
                                className="w-full bg-transparent border-b-2 border-brand-black/20 focus:border-brand-black text-3xl md:text-5xl font-editorial pb-4 outline-none placeholder:text-brand-black/20"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 bottom-4 text-brand-black hover:text-brand-gold transition-colors"
                            >
                                <Search size={32} strokeWidth={1.5} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
