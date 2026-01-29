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
        <div className="bg-slate-grey/40 backdrop-blur-sm rounded-none mb-8 overflow-hidden group border border-brushed-silver/20 shadow-2xl transition-all hover:border-brushed-silver/50 hover:shadow-brushed-silver/10">
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-charcoal/90 backdrop-blur-md px-4 py-2 border border-brushed-silver/30 flex items-center gap-2 shadow-lg">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brushed-silver">
                        {date} • {time}
                    </span>
                </div>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
            </div>

            {/* Content Section */}
            <div className="p-8 relative -mt-16 bg-transparent">
                <h3 className="text-3xl font-serif text-white mb-4 leading-tight tracking-wide drop-shadow-lg">{title}</h3>

                <div className="flex items-center gap-2 mb-6 text-brushed-silver">
                    <MapPin size={14} className="stroke-rose-grey" />
                    <span className="text-xs uppercase tracking-[0.15em] font-light">{location}</span>
                </div>

                <p className="text-silver-300 text-sm font-light leading-relaxed mb-8 border-l border-brushed-silver/30 pl-6">
                    {description}
                </p>

                {/* Footer */}
                <div className="flex items-end justify-between border-t border-white/5 pt-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-[9px] uppercase tracking-widest text-silver-500">Availability</span>
                        {isHighDemand ? (
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-12 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[80%] bg-[#BFA15F] shadow-[0_0_8px_#BFA15F]"></div>
                                </div>
                                <span className="text-[9px] text-[#BFA15F] italic font-serif">High Demand</span>
                            </div>
                        ) : (
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-8 w-8 rounded-full bg-slate-600 border border-charcoal" />
                                ))}
                                <div className="h-8 w-8 rounded-full bg-slate-700 border border-charcoal flex items-center justify-center text-[9px] text-white">
                                    +42
                                </div>
                            </div>
                        )}
                    </div>

                    <button className="bg-transparent border border-brushed-silver/50 hover:bg-brushed-silver hover:text-charcoal hover:border-brushed-silver text-brushed-silver px-8 py-3 text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-300">
                        Reserve
                    </button>
                </div>
            </div>
        </div>
    );
}
