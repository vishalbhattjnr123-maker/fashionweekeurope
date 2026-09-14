import { useParams } from 'react-router-dom';
import { portfolio, selectedImages } from '../data/mockData';

export default function ProjectDetail() {
    const { id } = useParams();
    const project = portfolio.find(p => p.id === parseInt(id)) || portfolio[0];

    return (
        <div className="bg-white min-h-screen">
            <div className="w-full h-[80vh] relative">
                <img loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                    <p className="uppercase tracking-[0.3em] text-sm font-bold mb-6">{project.category} • {project.year}</p>
                    <h1 className="font-editorial text-5xl md:text-8xl">{project.title}</h1>
                </div>
            </div>

            <div className="container mx-auto px-6 py-24 max-w-4xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-brand-black/10 py-12">
                    <div>
                        <p className="uppercase tracking-widest text-[#a0a0a0] text-xs font-bold mb-2">Photographer</p>
                        <p className="text-sm">Alexandre Dubois</p>
                    </div>
                    <div>
                        <p className="uppercase tracking-widest text-[#a0a0a0] text-xs font-bold mb-2">Creative Dir.</p>
                        <p className="text-sm">Sarah Jenkins</p>
                    </div>
                    <div>
                        <p className="uppercase tracking-widest text-[#a0a0a0] text-xs font-bold mb-2">Styling</p>
                        <p className="text-sm">Vogue Studio</p>
                    </div>
                    <div>
                        <p className="uppercase tracking-widest text-[#a0a0a0] text-xs font-bold mb-2">Models</p>
                        <p className="text-sm">Elena R., Marcus C.</p>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none mb-24">
                    <p className="font-light text-2xl leading-relaxed text-brand-black/80 font-editorial mb-8 text-center italic">
                        "We wanted to capture the essence of nocturnal elegance, exploring the spaces between shadow and light."
                    </p>
                    <p className="text-brand-black/60 leading-relaxed font-light">
                        This editorial piece dives into the heart of European avant-garde fashion. Bringing together distinct textures, monolithic set designs, and raw emotion to tell a story of modern luxury.
                    </p>
                </div>
            </div>

            {/* Editorial Image Sequence */}
            <div className="container mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <img loading="lazy" src={selectedImages.projectDetails[0]} alt="Detail 1" className="w-full h-[600px] object-cover" />
                    <img loading="lazy" src={selectedImages.projectDetails[1]} alt="Detail 2" className="w-full h-[600px] object-cover" />
                </div>
                <div className="mb-8 relative h-[80vh]">
                    <img loading="lazy" src={selectedImages.projectDetails[2]} alt="Detail 3" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <img loading="lazy" src={selectedImages.projectDetails[3]} alt="Detail 4" className="w-full h-auto object-cover md:col-span-1" />
                    <div className="md:col-span-2 bg-brand-offwhite flex items-center justify-center p-12">
                        <h3 className="font-editorial text-4xl leading-relaxed text-center max-w-lg">
                            Redefining boundaries through a lens of classic elegance.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
