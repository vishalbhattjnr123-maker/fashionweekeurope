import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CONTACT_CONFIG } from '../config/contact';
import { selectedImages } from '../data/mockData';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [searchParams] = useSearchParams();

    const type = searchParams.get('type') || 'contact';
    const prefilledModel = searchParams.get('model') || '';

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        let message = '';

        if (type === 'booking') {
            message = `Hello Fashion Week Europe,

I would like to enquire about booking a model.

Model: ${data.model}
Name: ${data.name}
Company: ${data.company || 'N/A'}
Email: ${data.email}
Phone: ${data.phone}
Project Type: ${data.project_type}
Event Date: ${data.event_date}
Location: ${data.location}

Message:
${data.message}`;
        } else if (type === 'casting') {
            message = `Hello Fashion Week Europe,

I am interested in the following casting:

Casting: ${data.casting}

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.location}
Age: ${data.age}
Height: ${data.height}
Experience: ${data.experience || 'None'}

Message:
${data.message}`;
        } else if (type === 'partnership') {
            message = `Hello Fashion Week Europe,

I am interested in a sponsorship / partnership opportunity.

Company: ${data.company}
Contact Person: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Website: ${data.website || 'N/A'}
Partnership Type: ${data.partnership_type}

Message:
${data.message}`;
        } else {
            message = `Hello Fashion Week Europe,

I would like to make an enquiry.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}

Message:
${data.message}

Thank you.`;
        }

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
                    <p className="text-brand-black/60 font-light">Redirecting you to complete your message.</p>
                </div>
            </div>
        );
    }

    const titleMap = {
        booking: 'MODEL BOOKING ENQUIRY',
        casting: 'CASTING APPLICATION',
        partnership: 'PARTNERSHIP ENQUIRY',
        contact: 'GET IN TOUCH'
    };

    const subtitleMap = {
        booking: 'Please provide the details of your shoot or campaign and we will get back to you.',
        casting: 'Submit your details to apply for an open casting call. Best of luck.',
        partnership: 'We partner with leading global brands. Tell us about your company.',
        contact: 'Have a question? Fill out the form below and we will route it to the correct department.'
    };

    return (
        <div className="bg-white min-h-screen pb-32">
            {/* Top Banner Image */}
            <div className="w-full h-[50vh] md:h-[65vh] relative pt-20">
                <img
                    src={selectedImages.contact}
                    alt="Contact"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30 pt-20" />
            </div>

            <div className="container mx-auto px-6 max-w-3xl -mt-20 relative z-10">
                <div className="bg-white p-8 md:p-16 shadow-xl border border-black/5">

                    <div className="text-center mb-16">
                        <h1 className="font-sans font-bold text-3xl md:text-4xl tracking-normal uppercase mb-6 text-brand-black">
                            {titleMap[type] || 'GET IN TOUCH'}
                        </h1>
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-16 h-px bg-brand-black/30" />
                            <div className="w-2 h-2 rotate-45 bg-brand-black/40" />
                            <div className="w-16 h-px bg-brand-black/30" />
                        </div>
                        <p className="font-editorial italic text-xl text-brand-black/70 font-light max-w-xl mx-auto leading-relaxed">
                            {subtitleMap[type] || 'We would love to hear from you.'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {type === 'booking' && (
                            <div className="flex flex-col gap-2 p-4 bg-brand-gold/5 mb-6">
                                <label className="font-editorial italic text-brand-gold text-lg">Requested Model</label>
                                <input required name="model" type="text" readOnly defaultValue={prefilledModel} className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors bg-white/50" />
                            </div>
                        )}
                        {type === 'casting' && (
                            <div className="flex flex-col gap-2 p-4 bg-brand-black/5 mb-6">
                                <label className="font-editorial italic text-brand-black text-lg">Selected Casting</label>
                                <input required name="casting" type="text" readOnly defaultValue={prefilledModel} className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors bg-white/50" />
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {type === 'partnership' && (
                                <input required name="company" type="text" placeholder="Company Name *" className="md:col-span-2 w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />
                            )}

                            <input required name="name" type="text" placeholder={type === 'partnership' ? 'Contact Person *' : 'Name *'} className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />

                            {type === 'booking' && (
                                <input name="company" type="text" placeholder="Company" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />
                            )}

                            <input required name="email" type="email" placeholder="Email *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />

                            <input required name="phone" type="tel" placeholder="Phone *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />

                            {type === 'casting' && (
                                <>
                                    <input required name="location" type="text" placeholder="Location *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />
                                    <input required name="age" type="number" placeholder="Age *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />
                                    <input required name="height" type="text" placeholder="Height (cm) *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />
                                    <input name="experience" type="text" placeholder="Experience" className="md:col-span-2 w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />
                                </>
                            )}

                            {type === 'partnership' && (
                                <>
                                    <input name="website" type="text" placeholder="Website URL" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />
                                    <select required name="partnership_type" className="w-full border border-brand-black/20 p-4 font-sans text-sm text-brand-black/70 outline-none focus:border-brand-black transition-colors bg-transparent rounded-none appearance-none">
                                        <option value="" disabled selected>Partnership Type *</option>
                                        <option value="Sponsor">Event Sponsor</option>
                                        <option value="Brand Partner">Brand Partner</option>
                                        <option value="Media Partner">Media / Press Partner</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </>
                            )}
                        </div>

                        {type === 'booking' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                <input required name="project_type" type="text" placeholder="Project Type (e.g. Editorial) *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />
                                <input required name="event_date" type="text" placeholder="Event Date *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />
                                <input required name="location" type="text" placeholder="Location *" className="md:col-span-2 w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />
                            </div>
                        )}

                        {!['booking', 'casting', 'partnership'].includes(type) && (
                            <div className="pt-2">
                                <input required name="subject" type="text" placeholder="Subject *" className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors" />
                            </div>
                        )}

                        <div className="pt-2">
                            <textarea
                                required={type !== 'casting'}
                                name="message"
                                rows="4"
                                placeholder={type === 'booking' ? 'Project Description *' : type === 'casting' ? 'Extra Message / Notes' : 'Your Message *'}
                                className="w-full border border-brand-black/20 p-4 font-sans text-sm outline-none focus:border-brand-black transition-colors resize-none"
                            />
                        </div>

                        <div className="pt-8 text-center">
                            <button type="submit" className="bg-brand-black text-white px-16 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-gold transition-colors block w-full mx-auto border border-brand-black shadow-none">
                                SUBMIT ON WHATSAPP
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
