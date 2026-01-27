import { Search, CalendarDays } from 'lucide-react';

export default function FilterBar() {
    const filters = ["All Events", "The Stable", "Matches", "Watch Party", "Alumni"];

    return (
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-iron/5">

            {/* Header */}
            <div className="px-6 py-5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-iron/5 flex items-center justify-center border border-iron/10">
                        <span className="font-serif text-iron text-lg italic">G</span>
                    </div>
                    <div>
                        <h1 className="text-[10px] uppercase tracking-[0.3em] text-iron">The Greys</h1>
                        <p className="text-[9px] text-dapple uppercase tracking-widest">Club Events</p>
                    </div>
                </div>
                <div className="flex gap-6 text-iron">
                    <Search size={18} className="stroke-[1.5]" />
                    <CalendarDays size={18} className="stroke-[1.5]" />
                </div>
            </div>

            {/* Filter Chips */}
            <div className="flex overflow-x-auto px-6 pb-4 gap-3 no-scrollbar mask-gradient">
                {filters.map((filter, i) => (
                    <button
                        key={filter}
                        className={`
                    whitespace-nowrap px-6 py-2.5 text-[10px] uppercase tracking-[0.15em] font-medium border transition-all
                    ${i === 0
                                ? 'bg-iron text-white border-iron'
                                : 'bg-transparent text-dapple border-iron/20 hover:border-dapple hover:text-iron'}
                `}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
}
