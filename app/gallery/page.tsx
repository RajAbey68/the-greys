'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Camera, Upload, Heart, Share2, PlayCircle, Star, Video } from 'lucide-react';

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-black font-serif pb-24 relative selection:bg-[#FFD700] selection:text-white">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <Link href="/" className="text-black hover:text-[#FFD700] transition-colors flex items-center gap-2 group">
                    <ArrowLeft size={20} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-sans text-[10px] uppercase tracking-widest hidden md:inline">The Grey</span>
                </Link>
                <div className="text-center">
                    <p className="font-serif text-lg font-bold text-[#1E3A8A] tracking-wide">The Gallery</p>
                    <p className="font-sans text-[8px] uppercase tracking-[0.2em] text-gray-500">The Grey Enclosure</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <div className="w-1 h-1 bg-black rounded-full space-x-0.5"></div>
                    <div className="w-4 h-0.5 bg-black rounded-full"></div>
                </div>
            </nav>

            {/* Title Block */}
            <div className="pt-32 pb-8 px-6 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif italic text-black mb-2">
                    Uncurated & Unfiltered
                </h1>
                <p className="font-sans text-xs text-gray-500 uppercase tracking-wide">
                    Inside the most exclusive social enclosure.
                </p>
            </div>

            {/* Top of the Gallery (Live Reel) */}
            <section className="px-6 mb-8">
                <div className="flex justify-between items-end mb-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A]">Top of the Gallery</h3>
                    <a href="#" className="text-[10px] text-gray-400 hover:text-black transition-colors">See All</a>
                </div>

                <div className="w-full aspect-[4/3] md:aspect-video rounded-xl overflow-hidden relative shadow-xl group cursor-pointer">
                    <div className="absolute top-4 right-4 z-20">
                        <Star size={16} className="text-white fill-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 z-20">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-[8px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm mb-2 inline-block border border-white/10">Featured Post</span>
                        <h2 className="text-white font-serif text-xl md:text-2xl mb-1">The Grey: Opening Hour</h2>
                        <p className="text-white/70 text-[10px] font-sans">By Membership No. 402 • 45m ago</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10"></div>
                    <img src="/the-greys/social.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" alt="Featured" />
                </div>
            </section>

            {/* Structured Masonry Grid */}
            <section className="px-4 md:px-6 mb-24">
                <div className="columns-2 gap-4 space-y-4">

                    {/* Item 1 - Video Style */}
                    <div className="break-inside-avoid relative rounded-xl overflow-hidden group mb-4">
                        <div className="absolute top-2 right-2 z-20">
                            <Video size={12} className="text-white" />
                        </div>
                        <img src="/the-greys/royal-thomian-walkout.jpg" className="w-full aspect-[3/4] object-cover" alt="Vibe" />
                        <div className="p-3 bg-gray-100">
                            <h4 className="font-bold text-xs text-black mb-1">Lounge Vibe</h4>
                            <div className="flex items-center gap-1 text-[9px] text-gray-500">
                                <Heart size={10} className="fill-gray-400 text-gray-400" /> 89
                            </div>
                        </div>
                    </div>

                    {/* Item 2 - Tall Photo */}
                    <div className="break-inside-avoid relative rounded-xl overflow-hidden group mb-4">
                        <img src="/the-greys/merchandise-landing-v2.png" className="w-full aspect-[3/4] object-cover" alt="Style" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                            <h4 className="font-bold text-xs text-white">Best Seats in the House</h4>
                        </div>
                    </div>


                    {/* Item 3 - Video */}
                    <div className="break-inside-avoid relative rounded-xl overflow-hidden group mb-4">
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <PlayCircle size={16} className="text-white fill-white" />
                            </div>
                        </div>
                        <img src="/the-greys/royal-thomian-flags.png" className="w-full aspect-[3/4] object-cover" alt="Flags" />
                        <div className="p-3 bg-gray-100">
                            <h4 className="font-bold text-xs text-black">The Arrival</h4>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="break-inside-avoid relative rounded-xl overflow-hidden group mb-4">
                        <img src="/the-greys/royal-thomian-crest.png" className="w-full aspect-[3/4] object-cover bg-black p-4" alt="Legacy" />
                        <div className="p-3 bg-gray-100">
                            <h4 className="font-bold text-xs text-black">Legacy Displayed</h4>
                        </div>
                    </div>

                    {/* Item 5 */}
                    <div className="break-inside-avoid relative rounded-xl overflow-hidden group mb-4">
                        <img src="/the-greys/grey-meetups.png" className="w-full aspect-[3/4] object-cover" alt="Class of 08" />
                        <div className="p-3 bg-gray-100">
                            <h4 className="font-bold text-xs text-black">Class of '08 Circle</h4>
                        </div>
                    </div>

                    {/* Item 6 */}
                    <div className="break-inside-avoid relative rounded-xl overflow-hidden group mb-4">
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <PlayCircle size={16} className="text-white fill-white" />
                            </div>
                        </div>
                        <img src="/the-greys/freeze-band.png" className="w-full aspect-[3/4] object-cover" alt="Party" />
                        <div className="p-3 bg-gray-100">
                            <h4 className="font-bold text-xs text-black">Enclosure Celebrations</h4>
                        </div>
                    </div>


                </div>
            </section>

            {/* Floating Upload Button / Fixed Bottom */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/80 to-transparent z-40 pointer-events-none flex justify-center pb-8">
                <button
                    className="pointer-events-auto bg-gradient-to-r from-[#1E3A8A] to-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform"
                    onClick={() => alert("Upload feature coming soon!")}
                >
                    <Upload size={14} /> Upload Your Moment
                </button>
            </div>

        </main>
    );
}
