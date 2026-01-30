import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Globe, Video, Calendar } from 'lucide-react';

export default function MeetupsPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-gray-500 to-gray-600 text-black font-serif pb-24 relative selection:bg-yellow-700 selection:text-white">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-championship-white/90 backdrop-blur-md border-b border-burnished-silver/20">
                <Link href="/" className="text-black hover:text-royal-gold transition-colors flex items-center gap-2 group">
                    <ArrowLeft size={20} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-sans text-[10px] uppercase tracking-widest hidden md:inline">Back to Match</span>
                </Link>
                <div className="text-center">
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-royal-gold font-medium">Global Gatherings</p>
                </div>
                <div className="w-5">
                    <Globe size={20} strokeWidth={1} className="text-black" />
                </div>
            </nav>

            {/* Header */}
            <header className="pt-32 pb-12 px-6 text-center max-w-4xl mx-auto">
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center border border-black/10">
                        <MapPin size={24} className="text-royal-gold" />
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-4 text-black">
                    The Grey Global
                </h1>
                <p className="font-sans text-xs md:text-sm text-black/70 max-w-xl mx-auto leading-relaxed tracking-wide uppercase mb-10">
                    From Colombo to London, Sydney to Dubai. Join the brotherhood wherever you are.
                </p>
            </header>

            {/* Hero Image */}
            <section className="max-w-6xl mx-auto px-6 mb-16">
                <div className="w-full h-64 md:h-96 rounded-sm overflow-hidden relative shadow-2xl shadow-black/20">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    {/* Using the Meetups image we generated */}
                    <img src="/the-greys/grey-meetups.png" className="w-full h-full object-cover" alt="Global Community" />
                    <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                        <h2 className="font-serif text-3xl">Colombo HQ</h2>
                        <p className="font-sans text-xs opacity-80">The epicenter of the action. SSC Grounds.</p>
                    </div>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="max-w-6xl mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Location 1: London */}
                    <div className="bg-white/60 backdrop-blur-md p-8 border border-black/5 rounded-sm hover:shadow-xl transition-shadow group">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="font-serif text-2xl text-black group-hover:text-royal-gold transition-colors">London</h3>
                            <span className="bg-black/5 text-black text-[9px] font-bold px-2 py-1 uppercase tracking-wider">Confirmed</span>
                        </div>
                        <div className="space-y-4 font-sans text-xs text-black/70">
                            <div className="flex items-center gap-3">
                                <Calendar size={14} className="text-black" />
                                <span>March 14, 2026 • 10:00 AM GMT</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={14} className="text-black" />
                                <span>The Cricketers, Kennington</span>
                            </div>
                        </div>
                        <button className="mt-6 w-full py-3 border border-black/10 text-black text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                            RSVP UK
                        </button>
                    </div>

                    {/* Location 2: Melbourne */}
                    <div className="bg-white/60 backdrop-blur-md p-8 border border-black/5 rounded-sm hover:shadow-xl transition-shadow group">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="font-serif text-2xl text-black group-hover:text-royal-gold transition-colors">Melbourne</h3>
                            <span className="bg-black/5 text-black text-[9px] font-bold px-2 py-1 uppercase tracking-wider">Confirmed</span>
                        </div>
                        <div className="space-y-4 font-sans text-xs text-black/70">
                            <div className="flex items-center gap-3">
                                <Calendar size={14} className="text-black" />
                                <span>March 14, 2026 • 6:00 PM AEDT</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={14} className="text-black" />
                                <span>The Duke of Wellington</span>
                            </div>
                        </div>
                        <button className="mt-6 w-full py-3 border border-black/10 text-black text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                            RSVP AUS
                        </button>
                    </div>

                    {/* Location 3: Dubai */}
                    <div className="bg-white/60 backdrop-blur-md p-8 border border-black/5 rounded-sm hover:shadow-xl transition-shadow group">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="font-serif text-2xl text-black group-hover:text-royal-gold transition-colors">Dubai</h3>
                            <span className="bg-yellow-100 text-yellow-800 text-[9px] font-bold px-2 py-1 uppercase tracking-wider">Tentative</span>
                        </div>
                        <div className="space-y-4 font-sans text-xs text-black/70">
                            <div className="flex items-center gap-3">
                                <Calendar size={14} className="text-black" />
                                <span>March 13, 2026 • 2:00 PM GST</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={14} className="text-black" />
                                <span>Barasti Beach Bar</span>
                            </div>
                        </div>
                        <button className="mt-6 w-full py-3 border border-black/10 text-black text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                            Join Waitlist
                        </button>
                    </div>

                </div>
            </section>

            {/* Virtual Stream */}
            <section className="max-w-4xl mx-auto px-6 mb-24">
                <div className="bg-black text-white p-12 rounded-sm text-center border-t-4 border-royal-gold relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 text-red-500 bg-red-500/10 px-3 py-1 rounded-full mb-4 animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            <span className="text-[9px] font-bold uppercase tracking-widest">Live Stream</span>
                        </div>
                        <h3 className="font-serif text-3xl mb-4">Can't make it to a hub?</h3>
                        <p className="font-sans text-xs text-gray-400 mb-8 max-w-lg mx-auto">
                            Join the official The Grey Virtual Watch Party on Zoom. Banter, commentary, and drinks from your living room.
                        </p>
                        <button className="bg-white text-black hover:bg-royal-gold hover:text-black hover:border-royal-gold px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-2 mx-auto">
                            <Video size={14} /> Get Zoom Link
                        </button>
                    </div>
                </div>
            </section>

        </main>
    );
}
