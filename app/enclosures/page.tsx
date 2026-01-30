import Link from 'next/link';
import { ArrowLeft, Trophy, Users, Music, Utensils } from 'lucide-react';

export default function Enclosures() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-gray-500 to-gray-600 text-black font-serif pb-24 relative selection:bg-yellow-700 selection:text-white">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-championship-white/90 backdrop-blur-md border-b border-burnished-silver/20">
                <Link href="/" className="text-black hover:text-royal-gold transition-colors flex items-center gap-2 group">
                    <ArrowLeft size={20} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-sans text-[10px] uppercase tracking-widest hidden md:inline">Back to Match</span>
                </Link>
                <div className="text-center">
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-royal-gold font-medium">The Enclosures</p>
                </div>
                <div className="w-5"></div>
            </nav>

            <section className="max-w-6xl mx-auto px-6 py-32 relative z-20">
                <div className="text-center mb-16">
                    <span className="text-[10px] text-royal-gold uppercase tracking-[0.2em]">The Grey Centre</span>
                    <h2 className="text-4xl font-serif text-royal-gold mt-2">The Enclosures</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Mustangs Tent */}
                    <div className="bg-white/80 backdrop-blur-sm p-8 border border-black/5 hover:border-black/20 transition-all group shadow-2xl shadow-black/5 rounded-sm">
                        <div className="mb-6 h-48 overflow-hidden relative rounded-sm">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10"></div>
                            <img src="/the-grey/royal-thomian-walkout.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Mustangs" />
                        </div>
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-serif text-black group-hover:text-royal-gold transition-colors">The Mustangs</h3>
                            <span className="bg-black text-royal-gold text-[9px] uppercase tracking-widest px-2 py-1">Exclusive</span>
                        </div>
                        <p className="font-sans text-xs text-black/80 leading-relaxed mb-6 font-medium">
                            The traditional heart of the alumni. A distinguished gathering known for its strict dress code and heritage.
                        </p>
                        <div className="flex gap-2 text-[10px] text-royal-gold uppercase tracking-wider">
                            <span className="flex items-center gap-1"><Users size={12} /> Alumni</span>
                        </div>
                    </div>

                    {/* Stallions Tent */}
                    <div className="bg-white/80 backdrop-blur-sm p-8 border border-black/5 hover:border-black/20 transition-all group shadow-2xl shadow-black/5 rounded-sm">
                        <div className="mb-6 h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden rounded-sm">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100"></div>
                            <Trophy className="text-gray-300 relative z-10" size={48} strokeWidth={1} />
                        </div>
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-serif text-black group-hover:text-royal-gold transition-colors">The Stallions</h3>
                            <span className="bg-gray-200 text-black text-[9px] uppercase tracking-widest px-2 py-1">Alumni</span>
                        </div>
                        <p className="font-sans text-xs text-black/80 leading-relaxed mb-6 font-medium">
                            A spirited enclosure bridging the gap between formality and fun.
                        </p>
                    </div>

                    {/* Royal Enclosure */}
                    <div className="bg-white/80 backdrop-blur-sm p-8 border border-black/5 hover:border-black/20 transition-all group shadow-2xl shadow-black/5 rounded-sm">
                        <div className="mb-6 h-48 overflow-hidden relative rounded-sm">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10"></div>
                            <img src="/the-grey/royal-thomian-flags-formal.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Royal Enclosure" />
                        </div>
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-serif text-black group-hover:text-royal-gold transition-colors">Royal Enclosure</h3>
                            <span className="bg-black text-royal-gold text-[9px] uppercase tracking-widest px-2 py-1">VIP</span>
                        </div>
                        <p className="font-sans text-xs text-black/80 leading-relaxed mb-6 font-medium">
                            Immerse yourself in glorious tradition with afternoon tea and champagne service. The unparalleled view of the pitch meeting world-class hospitality.
                        </p>
                        <div className="flex gap-2 text-[10px] text-gray-500 uppercase tracking-wider">
                            <span className="flex items-center gap-1"><Utensils size={12} /> Dining</span>
                        </div>
                    </div>

                    {/* OTSC Tent */}
                    <div className="bg-white/80 backdrop-blur-sm p-8 border border-black/5 hover:border-black/20 transition-all group shadow-2xl shadow-black/5 rounded-sm">
                        <div className="mb-6 h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden rounded-sm">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="font-serif text-6xl font-bold">STC</span>
                            </div>
                            <Music className="text-gray-300 relative z-10" size={48} strokeWidth={1} />
                        </div>
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-serif text-black group-hover:text-royal-gold transition-colors">OTSC Tent</h3>
                            <span className="border border-black/10 text-black text-[9px] uppercase tracking-widest px-2 py-1">Old Thomians</span>
                        </div>
                        <p className="font-sans text-xs text-black/70 leading-relaxed mb-6 font-light">
                            Located on the Grand Stand upper floor. Famous for its 'Double Decker' setup and electric atmosphere driven by live bands.
                        </p>
                    </div>

                    {/* Thoroughbreds & Saddlebreds */}
                    <div className="bg-white/80 backdrop-blur-sm p-8 border border-black/5 hover:border-black/20 transition-all group shadow-2xl shadow-black/5 rounded-sm">
                        <div className="mb-6 h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden rounded-sm">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200 to-transparent opacity-50"></div>
                            <Users className="text-gray-300 relative z-10" size={48} strokeWidth={1} />
                        </div>
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-serif text-black group-hover:text-royal-gold transition-colors">Thoroughbreds</h3>
                            <span className="bg-gray-100 text-black text-[9px] uppercase tracking-widest px-2 py-1">Friendly</span>
                        </div>
                        <p className="font-sans text-xs text-black/70 leading-relaxed mb-6 font-light">
                            Thoroughbreds & Saddlebreds. Friendly high-energy party tents featuring non-stop baila and action.
                        </p>
                    </div>

                    {/* Boys & General */}
                    <div className="bg-white/80 backdrop-blur-sm p-8 border border-black/5 hover:border-black/20 transition-all group shadow-2xl shadow-black/5 rounded-sm">
                        <div className="mb-6 h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden rounded-sm">
                            <div className="absolute inset-0 bg-slate-200">
                                <img src="/the-grey/big-match-hero.png" className="w-full h-full object-cover grayscale opacity-50" key="stands" alt="Stands" />
                            </div>
                        </div>
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-serif text-black group-hover:text-royal-gold transition-colors">School Tents</h3>
                            <span className="border border-black/10 text-black text-[9px] uppercase tracking-widest px-2 py-1">Students</span>
                        </div>
                        <p className="font-sans text-xs text-black/80 leading-relaxed mb-6 font-medium">
                            The student & grass embankment experience.
                        </p>
                        <button className="w-full py-2 border border-black/20 text-black text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors">
                            Register Student ID
                        </button>
                    </div>

                </div>

            </section>
        </main>
    );
}
