'use client';

import React from 'react';
import BottomNav from '../components/BottomNav';
import { Instagram, Music, Video, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function EntertainmentPage() {
    return (
        <div className="min-h-screen bg-fleabitten text-iron pb-24">
            {/* Header */}
            <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-iron/5 px-6 py-5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-iron/5 flex items-center justify-center border border-iron/10">
                        <span className="font-serif text-iron text-lg italic">G</span>
                    </div>
                    <div>
                        <h1 className="text-[10px] uppercase tracking-[0.3em] text-iron">The Grey Beat</h1>
                        <p className="text-[9px] text-dapple uppercase tracking-widest">2026 Portal</p>
                    </div>
                </div>
            </div>

            <main className="px-4 pt-8">
                {/* Featured Band Section */}
                <section className="mb-12 relative overflow-hidden rounded-none border border-iron/5 bg-white shadow-xl group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-yellow-500/5 mix-blend-overlay z-0 pointer-events-none"></div>
                    <div className="h-48 overflow-hidden relative">
                        <img
                            src="/freeze-band.png"
                            alt="Freeze Band Concert"
                            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <span className="bg-[#BFA15F] text-iron text-[9px] font-bold px-2 py-1 uppercase tracking-widest mb-2 inline-block">Featured Artist</span>
                            <h2 className="text-3xl font-serif text-iron tracking-tight">FREEZE</h2>
                        </div>
                    </div>

                    <div className="p-6 relative z-10">
                        <p className="text-rose-grey/90 text-sm font-light leading-relaxed mb-6 border-l-2 border-[#BFA15F] pl-4">
                            Where the raw texture of Brutalist design meets the electric Blue and Gold. We aren't just watching the game; we’re setting the tempo.
                        </p>

                        <div className="grid grid-cols-1 gap-3">
                            <a href="https://freeze.lk/gallery/" target="_blank" className="flex items-center justify-between bg-rose-grey hover:bg-white text-iron px-4 py-3 transition-colors group/btn">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                                    <Music size={14} /> The 1879 Rhythm
                                </span>
                                <ExternalLink size={14} className="opacity-50 group-hover/btn:opacity-100" />
                            </a>
                            <a href="#" className="flex items-center justify-between bg-white border border-iron/10 hover:border-iron/30 text-dapple hover:text-iron px-4 py-3 transition-all">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-medium flex items-center gap-2">
                                    Grey Bookings
                                </span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* The Slip Cordon (Gossip) */}
                <div className="mb-4 flex items-end justify-between px-2">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-iron">The Slip Cordon</h3>
                    <span className="text-[9px] italic text-rose-grey/50">Gossip & Vibes</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-12">
                    <a href="https://www.instagram.com/freezebandsl/" target="_blank" className="bg-white hover:bg-white/80 border border-iron/5 shadow-sm p-4 rounded-lg flex flex-col gap-3 group transition-colors">
                        <div className="h-8 w-8 bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-full flex items-center justify-center text-white">
                            <Instagram size={16} />
                        </div>
                        <div>
                            <h4 className="text-iron font-serif text-lg leading-none mb-1">Crowd Vibe</h4>
                            <p className="text-[9px] uppercase tracking-wider text-dapple group-hover:text-iron transition-colors">Catch the moment</p>
                        </div>
                    </a>

                    <a href="https://www.tiktok.com/@freezeband" target="_blank" className="bg-white hover:bg-white/80 border border-iron/5 shadow-sm p-4 rounded-lg flex flex-col gap-3 group transition-colors">
                        <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center text-white border border-slate-700">
                            <Video size={16} />
                        </div>
                        <div>
                            <h4 className="text-iron font-serif text-lg leading-none mb-1">Behind Scenes</h4>
                            <p className="text-[9px] uppercase tracking-wider text-dapple group-hover:text-iron transition-colors">TikTok Exclusives</p>
                        </div>
                    </a>
                </div>

                {/* The Grey Anthem Hub */}
                <section className="bg-white p-6 rounded-none border border-iron/5 shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-1 w-1 rounded-full bg-red-500 animate-pulse"></div>
                        <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-iron">The Grey Anthem Hub</h3>
                    </div>
                    <p className="text-xs text-dapple font-light mb-6">
                        Check out the latest from the band that’s chilling the pitch and heating up the tents.
                    </p>
                    <div className="aspect-video bg-iron/5 rounded flex items-center justify-center border border-iron/5">
                        <span className="text-[9px] uppercase tracking-widest text-rose-grey/50">Video Feed Placeholder</span>
                    </div>
                </section>

            </main>

            <BottomNav />
        </div>
    );
}
