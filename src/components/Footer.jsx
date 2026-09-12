import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { CONTACT_CONFIG } from '../config/contact';

export default function Footer() {
    return (
        <footer className="bg-brand-black text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    <div className="lg:col-span-1 border-b pb-8 lg:pb-0 lg:border-b-0 border-white/20">
                        <img
                            src="/logo.png"
                            alt="Fashion Week Europe Logo"
                            className="h-12 w-auto object-contain mb-6 filter drop-shadow-md brightness-110"
                        />
                        <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                            Discover models, fashion, creativity and opportunities from across the global fashion industry.
                        </p>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6 font-semibold">Navigation</h3>
                        <ul className="space-y-4 text-sm tracking-widest uppercase">
                            <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
                            <li><Link to="/models" className="hover:text-brand-gold transition-colors">Models</Link></li>
                            <li><Link to="/fashion-week" className="hover:text-brand-gold transition-colors">Fashion Week</Link></li>
                            <li><Link to="/portfolio" className="hover:text-brand-gold transition-colors">Portfolio</Link></li>
                            <li><Link to="/casting" className="hover:text-brand-gold transition-colors">Casting</Link></li>
                            <li><Link to="/about" className="hover:text-brand-gold transition-colors">About</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6 font-semibold">Social</h3>
                        <ul className="space-y-4 text-sm tracking-widest uppercase flex flex-col">
                            <a href="#" className="flex items-center space-x-3 hover:text-brand-gold transition-colors group">
                                <FaInstagram className="text-lg opacity-80 group-hover:opacity-100 transition-opacity" />
                                <span>Instagram</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 hover:text-brand-gold transition-colors group">
                                <FaFacebookF className="text-lg opacity-80 group-hover:opacity-100 transition-opacity" />
                                <span>Facebook</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 hover:text-brand-gold transition-colors group">
                                <FaYoutube className="text-lg opacity-80 group-hover:opacity-100 transition-opacity" />
                                <span>YouTube</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 hover:text-brand-gold transition-colors group">
                                <FaTiktok className="text-lg opacity-80 group-hover:opacity-100 transition-opacity" />
                                <span>TikTok</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 hover:text-brand-gold transition-colors group">
                                <FaLinkedinIn className="text-lg opacity-80 group-hover:opacity-100 transition-opacity" />
                                <span>LinkedIn</span>
                            </a>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6 font-semibold">Contact</h3>
                        <div className="flex flex-col space-y-4 mb-10">
                            <a href={`tel:${CONTACT_CONFIG.displayPhone.replace(/\s+/g, '')}`} className="text-sm tracking-wide text-white/70 hover:text-brand-gold transition-colors">
                                Call Us: {CONTACT_CONFIG.displayPhone}
                            </a>
                            <a href={`https://wa.me/${CONTACT_CONFIG.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-sm uppercase tracking-widest hover:text-brand-gold transition-colors text-white w-fit">
                                <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-4 h-4 opacity-70" onError={(e) => e.target.style.display = 'none'} />
                                <span>WhatsApp Us &rarr;</span>
                            </a>
                        </div>

                        <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6 font-semibold">Newsletter</h3>
                        <p className="text-sm text-white/70 tracking-wide mb-6">
                            Join the Fashion Week Europe world.
                        </p>
                        <form className="flex border-b border-white/30 focus-within:border-white transition-colors pb-2">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="bg-transparent border-none outline-none w-full text-sm uppercase tracking-widest placeholder-white/30"
                            />
                            <button type="submit" className="hover:text-brand-gold transition-colors ml-2">
                                <ArrowRight size={20} strokeWidth={1.5} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 tracking-widest uppercase space-y-4 md:space-y-0">
                    <p>&copy; {new Date().getFullYear()} Fashion Week Europe</p>
                    <div className="flex space-x-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
