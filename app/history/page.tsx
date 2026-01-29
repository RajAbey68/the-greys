import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Calendar, Award } from 'lucide-react';

export default function HistoryPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-gray-500 to-gray-600 text-black font-serif pb-24 relative selection:bg-yellow-700 selection:text-white">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-championship-white/90 backdrop-blur-md border-b border-burnished-silver/20">
                <Link href="/" className="text-black hover:text-royal-gold transition-colors flex items-center gap-2 group">
                    <ArrowLeft size={20} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-sans text-[10px] uppercase tracking-widest hidden md:inline">Back to Match</span>
                </Link>
                <div className="text-center">
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-royal-gold font-medium">The Legacy</p>
                </div>
                <div className="w-5">
                    <BookOpen size={20} strokeWidth={1} className="text-black" />
                </div>
            </nav>

            {/* Header */}
            <header className="pt-32 pb-12 px-6 text-center max-w-4xl mx-auto">
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center border border-black/10">
                        <Clock size={24} className="text-royal-gold" />
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-4 text-black">
                    147 Years of Rivalry
                </h1>
                <p className="font-sans text-xs md:text-sm text-black/70 max-w-xl mx-auto leading-relaxed tracking-wide uppercase mb-10">
                    The second longest uninterrupted cricket encounter in the world.
                </p>
            </header>

            {/* Video Feature */}
            <section className="max-w-5xl mx-auto px-6 mb-24">
                <div className="w-full aspect-video mx-auto mb-8 overflow-hidden rounded-sm relative shadow-2xl shadow-black/20 bg-black border border-white/10">
                    <iframe
                        className="w-full h-full object-cover"
                        src="https://www.youtube.com/embed/d1Q3opZzslA"
                        title="History of Royal Thomian"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="font-serif text-xl italic text-black/80 leading-relaxed">
                        "It is not just a match; it is a rite of passage. A celebration of a brotherhood that transcends the boundary line."
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="max-w-4xl mx-auto px-6 mb-24 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/10 -translate-x-1/2 hidden md:block"></div>

                <div className="space-y-12">

                    {/* Event 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-8 relative">
                        <div className="w-full md:w-1/2 text-center md:text-right px-4">
                            <span className="text-4xl font-serif text-royal-gold font-bold block mb-2">1879</span>
                            <h3 className="text-xl font-serif text-black">The Beginning</h3>
                            <p className="font-sans text-xs text-black/60 mt-2">
                                The first match is played at Galle Face Green. The Academy (Royal) wins by 56 runs.
                            </p>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-black border-4 border-gray-400 z-10 hidden md:block"></div>
                        <div className="w-full md:w-1/2 px-4 order-first md:order-last">
                            {/* Image placeholder or empty for layout */}
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="flex flex-col md:flex-row items-center gap-8 relative">
                        <div className="w-full md:w-1/2 px-4"></div>
                        <div className="w-4 h-4 rounded-full bg-black border-4 border-gray-400 z-10 hidden md:block"></div>
                        <div className="w-full md:w-1/2 text-center md:text-left px-4">
                            <span className="text-4xl font-serif text-royal-gold font-bold block mb-2">1880</span>
                            <h3 className="text-xl font-serif text-black">The Colour & The Crest</h3>
                            <p className="font-sans text-xs text-black/60 mt-2">
                                Introduction of the school colours. Deep Blue & Gold for Royal; Blue & Black for S. Thomas'.
                            </p>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="flex flex-col md:flex-row items-center gap-8 relative">
                        <div className="w-full md:w-1/2 text-center md:text-right px-4">
                            <span className="text-4xl font-serif text-royal-gold font-bold block mb-2">1979</span>
                            <h3 className="text-xl font-serif text-black">Centenary Match</h3>
                            <p className="font-sans text-xs text-black/60 mt-2">
                                A historic 3-day encounter celebrating 100 years. The 'Match of the Century'.
                            </p>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-black border-4 border-gray-400 z-10 hidden md:block"></div>
                        <div className="w-full md:w-1/2 px-4 order-first md:order-last"></div>
                    </div>

                    {/* Event 4 */}
                    <div className="flex flex-col md:flex-row items-center gap-8 relative">
                        <div className="w-full md:w-1/2 px-4"></div>
                        <div className="w-4 h-4 rounded-full bg-black border-4 border-gray-400 z-10 hidden md:block"></div>
                        <div className="w-full md:w-1/2 text-center md:text-left px-4">
                            <span className="text-4xl font-serif text-royal-gold font-bold block mb-2">2026</span>
                            <h3 className="text-xl font-serif text-black">The 147th Battle</h3>
                            <p className="font-sans text-xs text-black/60 mt-2">
                                The tradition continues. The Grey Tent establishes itself as the premier hospitality enclosure.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer CTA */}
            <div className="bg-white/50 backdrop-blur-md border-t border-black/5 p-12 text-center">
                <Award size={32} className="mx-auto text-royal-gold mb-4" />
                <h3 className="font-serif text-2xl mb-4">Be Part of History</h3>
                <p className="font-sans text-xs text-black/60 mb-8 max-w-lg mx-auto">
                    Join us at the 147th Battle of the Blues and write your own chapter in this legendary tale.
                </p>
                <Link href="/tickets" className="bg-black text-white hover:bg-royal-gold hover:text-black px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-colors inline-block">
                    Secure Your Place
                </Link>
            </div>

        </main>
    );
}
