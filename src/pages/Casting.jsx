import { Link } from 'react-router-dom';

export default function Casting() {
    const castings = [
        { title: "OPEN CASTING", location: "Paris, France", date: "Oct 12, 2026", req: "All Categories, 18-35" },
        { title: "FASHION WEEK CASTING", location: "Milan, Italy", date: "Nov 05, 2026", req: "Runway Models, Minimum 5'9\"" },
        { title: "EDITORIAL CASTING", location: "London, UK", date: "Nov 20, 2026", req: "New Faces, Unique Features" },
        { title: "CAMPAIGN CASTING", location: "Berlin, Germany", date: "Dec 01, 2026", req: "Commercial & Editorial, All Genders" },
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-24">
                    <p className="uppercase tracking-[0.3em] text-brand-gold text-sm font-semibold mb-6">Opportunities</p>
                    <h1 className="font-editorial text-5xl md:text-7xl mb-8 leading-tight">YOUR NEXT FACE COULD BE HERE.</h1>
                    <p className="text-xl text-brand-black/60 font-light text-balance leading-relaxed">
                        Fashion Week Europe regularly holds castings for our upcoming events, editorials, and agency partners. Discover the latest opportunities below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {castings.map((c, i) => (
                        <div key={i} className="border border-brand-black/10 p-8 lg:p-12 hover:border-brand-black transition-colors group">
                            <div className="flex flex-col h-full justify-between items-start">
                                <div className="w-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="font-editorial text-3xl max-w-[200px]">{c.title}</h3>
                                        <span className="bg-brand-black text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold">Open</span>
                                    </div>
                                    <div className="space-y-4 text-sm text-brand-black/70 mb-12">
                                        <p className="flex justify-between border-b pb-2">
                                            <span className="uppercase tracking-widest font-semibold text-xs">Location</span>
                                            <span>{c.location}</span>
                                        </p>
                                        <p className="flex justify-between border-b pb-2">
                                            <span className="uppercase tracking-widest font-semibold text-xs">Date</span>
                                            <span>{c.date}</span>
                                        </p>
                                        <p className="flex justify-between border-b pb-2">
                                            <span className="uppercase tracking-widest font-semibold text-xs">Requirements</span>
                                            <span>{c.req}</span>
                                        </p>
                                    </div>
                                </div>
                                <Link to={`/contact?type=casting&model=${encodeURIComponent(c.title)}`} className="bg-brand-black text-white px-8 py-3 w-full text-center uppercase tracking-widest text-xs font-bold hover:bg-brand-gold transition-colors block mt-4">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
