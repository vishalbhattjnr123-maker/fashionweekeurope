import { useState } from 'react';
import { CONTACT_CONFIG } from '../config/contact';
import { selectedImages } from '../data/mockData';

export default function BecomeAModel() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const message = `Hello Fashion Week Europe,

I would like to apply as a model.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Gender: ${data.gender}
Age: ${data.age}
Location: ${data.location}
Height: ${data.height}
Bust: ${data.bust}
Waist: ${data.waist}
Hips: ${data.hips}
Eyes: ${data.eyes}
Hair: ${data.hair}
Instagram: ${data.instagram || 'None'}
Experience: ${data.experience || 'None'}

Please review my application.

Thank you.`;

        const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

        setTimeout(() => {
            window.open(whatsappUrl, "_blank");
            setIsSubmitting(false);
        }, 1500);
    };

    if (isSubmitting) {
        return (
            <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-white">
                <div className="text-center p-12 max-w-2xl bg-white border border-brand-black/10">
                    <div className="w-12 h-12 border-2 border-brand-black/10 border-t-brand-black rounded-full animate-spin mx-auto mb-8" />
                    <h2 className="font-editorial text-4xl mb-4">Preparing WhatsApp...</h2>
                    <p className="text-brand-black/60 font-light">Redirecting you to complete your application.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-32">
            {/* Top Banner Image */}
            <div className="w-full h-[50vh] md:h-[65vh] relative pt-20">
                <img loading="lazy"
                    src="/images/9744.webp"
                    alt="Become a Model"
                    className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/30 pt-20" />
            </div>

            <div className="container mx-auto px-6 max-w-4xl -mt-20 relative z-10">
                <div className="bg-white p-8 md:p-16 shadow-xl border border-black/5">

                    <div className="text-center mb-16">
                        <h1 className="font-sans font-bold text-4xl md:text-5xl tracking-normal uppercase mb-6 text-brand-black">
                            BECOME A TOP MODEL
                        </h1>
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-16 h-px bg-brand-black/30" />
                            <div className="w-2 h-2 rotate-45 bg-brand-black/40" />
                            <div className="w-16 h-px bg-brand-black/30" />
                        </div>
                        <p className="font-editorial italic text-xl text-brand-black/70 font-light text-balance max-w-2xl mx-auto leading-relaxed">
                            Join our global network of models. Please provide accurate measurements and details to complete your application.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <input required name="name" type="text" placeholder="Full Name *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />

                            <input required name="email" type="email" placeholder="Your Email *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />

                            <input required name="phone" type="tel" placeholder="Phone *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />

                            <input required name="location" type="text" placeholder="Location *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />

                            <select required name="gender" className="w-full border border-brand-black/20 p-4 font-sans text-sm text-brand-black/70 outline-none focus:border-brand-black transition-colors bg-transparent rounded-none appearance-none">
                                <option value="" disabled selected>Gender *</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </select>

                            <input required name="age" type="number" placeholder="Age *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />

                            <input required name="height" type="text" placeholder="Height (cm) *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />

                            <input required name="bust" type="text" placeholder="Bust (cm) *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />

                            <input required name="waist" type="text" placeholder="Waist (cm) *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />

                            <input required name="hips" type="text" placeholder="Hips (cm) *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />

                            <select required name="eyes" className="w-full border border-brand-black/20 p-4 font-sans text-sm text-brand-black/70 outline-none focus:border-brand-black transition-colors bg-transparent rounded-none appearance-none">
                                <option value="" disabled selected>Eyes *</option>
                                <option value="Brown">Brown</option>
                                <option value="Blue">Blue</option>
                                <option value="Green">Green</option>
                                <option value="Hazel">Hazel</option>
                            </select>

                            <select required name="hair" className="w-full border border-brand-black/20 p-4 font-sans text-sm text-brand-black/70 outline-none focus:border-brand-black transition-colors bg-transparent rounded-none appearance-none">
                                <option value="" disabled selected>Hair *</option>
                                <option value="Black">Black</option>
                                <option value="Brown">Brown</option>
                                <option value="Blonde">Blonde</option>
                                <option value="Red">Red</option>
                            </select>

                            <input name="instagram" type="text" placeholder="Instagram Handle" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />

                            <input name="experience" type="text" placeholder="Experience (Optional)" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />
                        </div>

                        <div className="pt-8 text-center">
                            <button type="submit" className="bg-brand-black text-white px-16 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-gold transition-colors block w-full md:w-auto mx-auto border border-brand-black shadow-none">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
