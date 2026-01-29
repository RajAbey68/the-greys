import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Camera, Upload, Heart, Share2, PlayCircle } from 'lucide-react';

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-gray-500 to-gray-600 text-black font-serif pb-24 relative selection:bg-yellow-700 selection:text-white">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-championship-white/90 backdrop-blur-md border-b border-burnished-silver/20">
                <Link href="/" className="text-black hover:text-royal-gold transition-colors flex items-center gap-2 group">
                    <ArrowLeft size={20} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-sans text-[10px] uppercase tracking-widest hidden md:inline">Back to Match</span>
                </Link>
                <div className="text-center">
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-royal-gold font-medium">The Gallery</p>
                </div>
                <div className="w-5"></div>
            </nav>

            {/* Header */}
            <header className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto relative z-10">
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center border border-black/10">
                        <Camera size={24} className="text-royal-gold" />
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-6 text-black">
                    Moments that Matter
                </h1>
                <p className="font-sans text-xs md:text-sm text-black/70 max-w-xl mx-auto leading-relaxed tracking-wide uppercase mb-10">
                    Uncurated. Unfiltered. The spirit of the Royal-Thomian captured by The Greys.
                </p>

                <button className="bg-black text-royal-gold hover:bg-gray-900 px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-xl flex items-center gap-2 mx-auto">
                    <Upload size={14} /> Upload Your Photo
                </button>
            </header>

            {/* Masonry Grid */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">

                    {/* Featured Video Card */}
                    <div className="break-inside-avoid relative group rounded-sm overflow-hidden shadow-2xl shadow-black/10 bg-black">
                        <div className="aspect-[9/16] relative opactiy-90">
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <PlayCircle size={48} className="text-white/80 group-hover:text-royal-gold transition-colors" />
                            </div>
                            <img src="/the-greys/royal-thomian-walkout.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" alt="Video Cover" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="text-white font-serif text-xl italic">"The Walkout"</h3>
                            <p className="text-royal-gold text-[9px] uppercase tracking-widest mt-1">Video • 2025 Highlights</p>
                        </div>
                    </div>

                    {/* Photo Card 1 */}
                    <div className="break-inside-avoid relative group rounded-sm overflow-hidden shadow-lg bg-white">
                        <img src="/the-greys/social.png" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Social" />
                        <div className="p-4 bg-white">
                            <div className="flex justify-between items-center">
                                <p className="text-[10px] uppercase tracking-widest text-black/50">Mustangs Tent</p>
                                <div className="flex gap-3 text-black/40">
                                    <Heart size={14} className="hover:text-red-500 cursor-pointer transition-colors" />
                                    <Share2 size={14} className="hover:text-black cursor-pointer transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Photo Card 2 (Crest) */}
                    <div className="break-inside-avoid relative group rounded-sm overflow-hidden shadow-lg bg-white p-8 flex items-center justify-center aspect-square">
                        <img src="/the-greys/royal-thomian-crest.png" className="w-2/3 h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500" alt="Crest" />
                    </div>

                    {/* Photo Card 3 */}
                    <div className="break-inside-avoid relative group rounded-sm overflow-hidden shadow-lg bg-white">
                        <img src="/the-greys/grey-meetups.png" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Meetups" />
                        <div className="p-4 bg-white">
                            <div className="flex justify-between items-center">
                                <p className="text-[10px] uppercase tracking-widest text-black/50">Post-Match Fix</p>
                            </div>
                        </div>
                    </div>

                    {/* Photo Card 4 (Merch) */}
                    <div className="break-inside-avoid relative group rounded-sm overflow-hidden shadow-lg bg-white">
                        <img src="/the-greys/merchandise-landing-v2.png" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Merch" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-[10px] uppercase tracking-widest">Official Kit</span>
                        </div>
                    </div>

                    {/* Photo Card 5 */}
                    <div className="break-inside-avoid relative group rounded-sm overflow-hidden shadow-lg bg-white">
                        <img src="/the-greys/food-spirits.png" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Food" />
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-black text-royal-gold py-16 text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="font-serif text-3xl mb-4">Have photos from the 146th?</h2>
                    <p className="font-sans text-xs text-white/60 mb-8 max-w-lg mx-auto">
                        Share your best moments with the community. We'll feature the best snaps on our Instagram and right here.
                    </p>
                    <button className="border border-royal-gold/30 hover:bg-royal-gold hover:text-black text-royal-gold px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all">
                        Submit for Review
                    </button>
                </div>
            </section>

        </main>
    );
}
