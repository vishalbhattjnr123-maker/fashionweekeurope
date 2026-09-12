import { useParams, Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import { models } from '../data/mockData';
import { CONTACT_CONFIG } from '../config/contact';

export default function ModelProfile() {
    const { id } = useParams();
    const model = models.find(m => m.id === parseInt(id)) || models[0];

    return (
        <div className="bg-white min-h-screen">
            {/* Split Hero */}
            <div className="flex flex-col lg:flex-row min-h-[90vh]">
                {/* Left: Image */}
                <div className="lg:w-1/2 relative h-[60vh] lg:h-auto">
                    <img
                        src={model.image}
                        alt={model.name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* Right: Info */}
                <div className="lg:w-1/2 flex flex-col justify-center px-6 py-20 lg:p-24 bg-brand-offwhite">
                    <div className="max-w-xl">
                        <p className="uppercase tracking-[0.2em] text-xs font-bold text-brand-black/50 mb-4">{model.type} Model</p>
                        <h1 className="font-editorial text-5xl md:text-7xl mb-4">{model.name}</h1>
                        <p className="text-xl text-brand-black/60 font-light mb-12">{model.location}</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 mb-16 border-y border-brand-black/10 py-12 text-sm">
                            <div>
                                <p className="uppercase tracking-widest text-[#a0a0a0] text-[10px] font-bold mb-1">Height</p>
                                <p>{model.height}</p>
                            </div>
                            <div>
                                <p className="uppercase tracking-widest text-[#a0a0a0] text-[10px] font-bold mb-1">Bust</p>
                                <p>{model.bust}</p>
                            </div>
                            <div>
                                <p className="uppercase tracking-widest text-[#a0a0a0] text-[10px] font-bold mb-1">Waist</p>
                                <p>{model.waist}</p>
                            </div>
                            <div>
                                <p className="uppercase tracking-widest text-[#a0a0a0] text-[10px] font-bold mb-1">Hips</p>
                                <p>{model.hips}</p>
                            </div>
                            <div>
                                <p className="uppercase tracking-widest text-[#a0a0a0] text-[10px] font-bold mb-1">Hair</p>
                                <p>{model.hair}</p>
                            </div>
                            <div>
                                <p className="uppercase tracking-widest text-[#a0a0a0] text-[10px] font-bold mb-1">Eyes</p>
                                <p>{model.eyes}</p>
                            </div>
                            <div>
                                <p className="uppercase tracking-widest text-[#a0a0a0] text-[10px] font-bold mb-1">Shoes</p>
                                <p>{model.shoes}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to={`/contact?type=booking&model=${encodeURIComponent(model.name)}`}
                                className="bg-brand-black text-white px-8 py-4 text-center uppercase tracking-widest text-xs font-bold hover:bg-brand-gold transition-colors"
                            >
                                Book This Model
                            </Link>
                            <a
                                href={`https://wa.me/${CONTACT_CONFIG.whatsapp}`} target="_blank" rel="noreferrer"
                                className="border border-brand-black px-8 py-4 text-center uppercase tracking-widest text-xs font-bold hover:bg-brand-black hover:text-white transition-colors flex justify-center items-center gap-2"
                            >
                                <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-4 h-4 opacity-70" onError={(e) => e.target.style.display = 'none'} /> WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* About & Experience */}
            <div className="container mx-auto px-6 py-24 md:py-32">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
                    <div className="md:w-1/3">
                        <h2 className="font-editorial text-4xl mb-6">About</h2>
                        <p className="text-brand-black/70 font-light leading-relaxed mb-6">
                            {model.name} has quickly established a strong presence in the international fashion scene.
                            Known for distinct versatility and editorial flair, they bring a unique energy to every campaign.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="uppercase tracking-widest text-xs font-bold hover:text-brand-gold">Instagram</a>
                            <a href="#" className="uppercase tracking-widest text-xs font-bold hover:text-brand-gold">Models.com</a>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="font-editorial text-4xl mb-8">Experience</h2>
                        <ul className="space-y-6">
                            <li className="border-b border-brand-black/10 pb-6 flex justify-between items-end">
                                <div>
                                    <p className="uppercase tracking-widest text-xs font-bold mb-2 text-brand-gold">Runway</p>
                                    <p className="text-xl">{model.experience}</p>
                                </div>
                                <p className="text-brand-black/50 text-sm">2026</p>
                            </li>
                            <li className="border-b border-brand-black/10 pb-6 flex justify-between items-end">
                                <div>
                                    <p className="uppercase tracking-widest text-xs font-bold mb-2 text-brand-gold">Campaigns</p>
                                    <p className="text-xl">Global FW26 Collection</p>
                                </div>
                                <p className="text-brand-black/50 text-sm">2025</p>
                            </li>
                            <li className="border-b border-brand-black/10 pb-6 flex justify-between items-end">
                                <div>
                                    <p className="uppercase tracking-widest text-xs font-bold mb-2 text-brand-gold">Editorials</p>
                                    <p className="text-xl">The New Standard</p>
                                </div>
                                <p className="text-brand-black/50 text-sm">2025</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            {model.gallery && model.gallery.length > 0 && (
                <div className="bg-brand-charcoal text-white py-24 md:py-32">
                    <div className="container mx-auto px-6">
                        <h2 className="font-editorial text-4xl mb-16 text-center">Portfolio</h2>

                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                            {model.gallery.map((img, i) => (
                                <div key={i} className="break-inside-avoid relative overflow-hidden group">
                                    <img
                                        src={img}
                                        alt={`Portfolio ${i + 1}`}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <span className="text-white text-xs uppercase tracking-widest border border-white px-4 py-2">View</span>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate images to make it look full if only one exists */}
                            {model.gallery.length < 4 && model.gallery.map((img, i) => (
                                <div key={i + 'dup'} className="break-inside-avoid relative overflow-hidden group">
                                    <img
                                        src={img}
                                        alt={`Portfolio ${i + 1}`}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 grayscale"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
