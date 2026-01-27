import { MapPin, Ticket } from 'lucide-react';

interface EventCardProps {
    date: string;
    time: string;
    image: string;
    title: string;
    location: string;
    description: string;
    isHighDemand?: boolean;
}

export default function EventCard({ date, time, image, title, location, description, isHighDemand }: EventCardProps) {
    return (
        <div className="bg-white rounded-none mb-8 overflow-hidden group border border-iron/5 shadow-xl transition-all">
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 border border-iron/10 flex items-center gap-2 shadow-lg">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-iron">
                        {date} • {time}
                    </span>
                </div>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
            </div>

            {/* Content Section */}
            <div className="p-6 relative -mt-12 bg-transparent">
                <h3 className="text-2xl font-serif text-iron mb-3 leading-tight tracking-wide">{title}</h3>

                <div className="flex items-center gap-2 mb-4 text-dapple">
                    <MapPin size={14} className="stroke-rose-grey" />
                    <span className="text-xs uppercase tracking-widest">{location}</span>
                </div>

                <p className="text-dapple text-sm font-light leading-relaxed mb-8 border-l border-iron/20 pl-4">
                    {description}
                </p>

                {/* Footer */}
                <div className="flex items-end justify-between border-t border-iron/10 pt-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-[9px] uppercase tracking-widest text-dapple">Availability</span>
                        {isHighDemand ? (
                            <div className="flex items-center gap-2">
                                <div className="h-0.5 w-12 bg-rose-grey/20 rounded-full overflow-hidden">
                                    <div className="h-full w-[80%] bg-[#BFA15F] shadow-[0_0_10px_#BFA15F]"></div>
                                </div>
                                <span className="text-[9px] text-[#BFA15F] italic font-serif">High Demand</span>
                            </div>
                        ) : (
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-8 w-8 rounded-full bg-slate-300 border-2 border-white" />
                                ))}
                                <div className="h-8 w-8 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center text-[9px] text-white">
                                    +42
                                </div>
                            </div>
                        )}
                    </div>

                    <button className="bg-rose-grey hover:bg-white text-iron px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors">
                        Register Interest
                    </button>
                </div>
            </div>
        </div>
    );
}
