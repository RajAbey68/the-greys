'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Music, Mic2, PlayCircle, ExternalLink } from 'lucide-react';

export default function Entertainment() {
    return (
        <main className="min-h-screen bg-[#121212] text-white font-sans pb-24 relative selection:bg-purple-500 selection:text-white">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-[#121212]/90 backdrop-blur-md border-b border-white/5 h-20">
                <Link href="/" className="text-white hover:text-gray-300 transition-colors flex items-center gap-3 group">
                    <ArrowLeft size={24} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-sans text-xs font-bold uppercase tracking-widest hidden md:inline">The Grey</span>
                </Link>
                <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-white tracking-wide">The Lineup</p>
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">Curated Sounds</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Music size={18} className="text-white" />
                </div>
            </nav>

            {/* Hero / Headliner */}
            <div className="pt-32 pb-12 px-6 text-center max-w-4xl mx-auto border-b border-white/5">
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-[9px] font-bold uppercase tracking-widest rounded-full mb-6 border border-white/10">
                    Headlining Act
                </span>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-800 mb-4 opacity-90">
                    FREEZE
                </h1>
                <p className="font-serif italic text-xl md:text-2xl text-gray-400 mb-8">
                    Live & Unplugged • The Grey Tent
                </p>
                <div className="flex justify-center gap-4">
                    <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                        <PlayCircle size={14} /> Listen to Preview
                    </button>
                </div>
            </div>

            {/* Schedule / Lineup */}
            <section className="max-w-3xl mx-auto px-6 py-16">
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px bg-white/20 flex-1"></div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">The Run of Play</h3>
                    <div className="h-px bg-white/20 flex-1"></div>
                </div>

                <div className="space-y-4">
                    {/* Slot 1 */}
                    <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-purple-500 cursor-default">
                        <div className="text-right min-w-[60px]">
                            <span className="block text-sm font-bold text-white">11:00</span>
                            <span className="block text-[9px] text-gray-600 uppercase">AM</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-white/10">
                            <Music size={16} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                        </div>
                        <div>
                            <h4 className="text-lg font-serif text-white group-hover:text-purple-300 transition-colors">The Warm Up</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Deep House & Lounge Sessions</p>
                        </div>
                    </div>

                    {/* Slot 2 */}
                    <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-yellow-500 cursor-default">
                        <div className="text-right min-w-[60px]">
                            <span className="block text-sm font-bold text-white">01:00</span>
                            <span className="block text-[9px] text-gray-600 uppercase">PM</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-white/10">
                            <Mic2 size={16} className="text-gray-400 group-hover:text-yellow-400 transition-colors" />
                        </div>
                        <div>
                            <h4 className="text-lg font-serif text-white group-hover:text-yellow-300 transition-colors">Freeze: Set 1</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Classic Rock & Pop Anthems</p>
                        </div>
                    </div>

                    {/* Slot 3 */}
                    <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-blue-500 cursor-default">
                        <div className="text-right min-w-[60px]">
                            <span className="block text-sm font-bold text-white">03:30</span>
                            <span className="block text-[9px] text-gray-600 uppercase">PM</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-white/10">
                            <Music size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <div>
                            <h4 className="text-lg font-serif text-white group-hover:text-blue-300 transition-colors">Papare & Baila</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">The Big Match Tradition</p>
                        </div>
                    </div>

                    {/* Slot 4 */}
                    <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-red-500 cursor-default">
                        <div className="text-right min-w-[60px]">
                            <span className="block text-sm font-bold text-white">05:00</span>
                            <span className="block text-[9px] text-gray-600 uppercase">PM</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-white/10">
                            <Mic2 size={16} className="text-gray-400 group-hover:text-red-400 transition-colors" />
                        </div>
                        <div>
                            <h4 className="text-lg font-serif text-white group-hover:text-red-300 transition-colors">Freeze: Power Hour</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">High Energy Finale</p>
                        </div>
                    </div>

                    {/* Slot 5 */}
                    <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-white cursor-default">
                        <div className="text-right min-w-[60px]">
                            <span className="block text-sm font-bold text-white">07:00</span>
                            <span className="block text-[9px] text-gray-600 uppercase">PM</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-white/10">
                            <Music size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h4 className="text-lg font-serif text-white">The After Party</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">DJ Shiyam (Resident)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spotify Section */}
            <section className="px-6 pb-24">
                <div className="max-w-2xl mx-auto bg-[#1DB954] rounded-xl p-8 text-black text-center relative overflow-hidden group hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="relative z-10">
                        <p className="text-[10px] font-bold uppercase tracking-widest bg-black/20 text-white inline-block px-3 py-1 rounded-full mb-4">Official Playlist</p>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">The Grey Sounds '26</h3>
                        <p className="text-xs font-medium mb-6 opacity-80">Curated by the Class of '08. Get in the zone before you arrive.</p>
                        <div className="flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider">
                            Listen on Spotify <ExternalLink size={14} />
                        </div>
                    </div>
                    {/* Decorative Background Icon */}
                    <div className="absolute -bottom-10 -right-10 opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                        <Music size={200} />
                    </div>
                </div>
            </section>

        </main>
    );
}
