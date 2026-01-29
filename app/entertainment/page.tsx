import Link from 'next/link';
import { ArrowLeft, ExternalLink, Instagram, Music, Video } from 'lucide-react';

export default function Entertainment() {
    return (
        <main className="min-h-screen bg-charcoal text-silver-100 pb-24 font-sans">
            {/* Header */}
            <header className="px-6 pt-12 pb-8 flex flex-col items-center justify-center border-b border-white/5 sticky top-0 bg-charcoal/95 backdrop-blur-sm z-50">
                <Link href="/" className="absolute left-6 text-brushed-silver hover:text-white transition-colors">
                    <ArrowLeft size={20} strokeWidth={1} />
                </Link>
                <h1 className="text-xl font-serif tracking-[0.2em] text-white uppercase text-center">The Grey Beat 2026</h1>
                <p className="text-[10px] uppercase tracking-widest text-[#BFA15F] mt-2 font-medium">Featuring FREEZE</p>
            </header>

            {/* Intro Hero */}
            <section className="px-8 py-12 border-b border-white/5">
                <h2 className="text-3xl font-serif text-white mb-6 leading-tight">
                    Concrete & <span className="text-[#BFA15F]">Gold</span>.
                </h2>
                <p className="text-sm font-light text-silver-300 leading-relaxed max-w-md">
                    Where the raw texture of Brutalist design meets the electric Blue and Gold. We aren't just watching the game; we’re setting the tempo. Check out the latest from the band that’s chilling the pitch and heating up the tents.
                </p>
                <div className="flex flex-col gap-4 mt-10">
                    <a href="https://freeze.lk/gallery" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-brushed-silver/30 px-6 py-4 hover:bg-white hover:text-charcoal transition-all group">
                        <span className="uppercase tracking-[0.2em] text-[10px] font-bold">View The Gallery</span>
                        <ExternalLink size={14} className="text-brushed-silver group-hover:text-charcoal transition-colors" />
                    </a>
                </div>
            </section>

            {/* The 1879 Rhythm */}
            <section className="px-8 py-12 border-b border-white/5 bg-slate-grey/20">
                <div className="flex items-center gap-3 mb-6">
                    <Music size={16} className="text-[#BFA15F]" />
                    <h3 className="uppercase tracking-[0.25em] text-xs font-bold text-silver-200">The 1879 Rhythm</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-rose-grey/10 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-rose-grey/20 mix-blend-overlay"></div>
                        <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=500&auto=format&fit=crop" alt="Band" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
                        <span className="relative z-10 text-[9px] uppercase tracking-widest bg-black/50 px-2 py-1 backdrop-blur-sm">Live Set</span>
                    </div>
                    <div className="aspect-square bg-rose-grey/10 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-rose-grey/20 mix-blend-overlay"></div>
                        <img src="https://images.unsplash.com/photo-1459749411177-0473ef716175?q=80&w=500&auto=format&fit=crop" alt="Band" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
                        <span className="relative z-10 text-[9px] uppercase tracking-widest bg-black/50 px-2 py-1 backdrop-blur-sm">Anthems</span>
                    </div>
                </div>
            </section>

            {/* Mustangs & Melodies */}
            <section className="px-8 py-12 border-b border-white/5 scale-[0.98] opacity-80 hover:scale-100 hover:opacity-100 transition-all duration-700">
                <div className="flex items-center gap-3 mb-6 justify-end text-right">
                    <h3 className="uppercase tracking-[0.25em] text-xs font-bold text-silver-200">Mustangs & Melodies</h3>
                    <Video size={16} className="text-[#BFA15F]" />
                </div>
                <a href="#" className="block aspect-video bg-charcoal border border-brushed-silver/20 relative overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md">
                            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000" />
                </a>
                <p className="mt-4 text-[10px] text-silver-400 text-right uppercase tracking-widest">Tent Party Highlights • Official Video</p>
            </section>

            {/* The Slip Cordon (Gossip & Humor) */}
            <section className="bg-rose-grey text-charcoal px-8 py-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <h1 className="text-9xl font-serif font-bold tracking-tighter">1879</h1>
                </div>

                <h2 className="text-3xl font-serif mb-2 relative z-10">The Slip Cordon</h2>
                <p className="text-xs uppercase tracking-widest font-bold mb-10 opacity-70 relative z-10">Gossip & Humor Feed</p>

                <div className="space-y-6 relative z-10">
                    <div className="bg-white/80 backdrop-blur-md p-6 border-l-2 border-charcoal shadow-xl">
                        <div className="flex items-center gap-2 mb-3 opacity-60">
                            <Instagram size={14} />
                            <span className="text-[9px] uppercase tracking-widest font-bold">The Googly • Just Now</span>
                        </div>
                        <p className="font-serif italic text-lg leading-relaxed mb-4">"Heard the new bowler might be faster than the lunch buffet line. Don't blink."</p>
                        <div className="h-px w-full bg-charcoal/10"></div>
                        <div className="flex gap-4 mt-3">
                            <span className="text-[10px] uppercase font-bold text-charcoal/50">#GreyHumor</span>
                            <span className="text-[10px] uppercase font-bold text-charcoal/50">#BigMatch</span>
                        </div>
                    </div>

                    <a href="https://freeze.lk/booking" className="block bg-charcoal text-white p-6 text-center hover:bg-black transition-colors shadow-2xl">
                        <h3 className="font-serif text-xl mb-2">Book the Vibe</h3>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-silver-400">Direct Booking for Freeze</p>
                    </a>
                </div>
            </section>

            {/* Minimal Nav Bar - Duplicate from Events for consistency */}
            <nav className="fixed bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-md border-t border-white/5 py-4 px-8 flex justify-between items-center z-50">
                <Link href="/events" className="flex flex-col items-center gap-1 group opacity-50 hover:opacity-100 transition-opacity">
                    <div className="h-0.5 w-4 bg-brushed-silver rounded-full mb-1 group-hover:w-6 transition-all"></div>
                    <span className="text-[9px] uppercase tracking-widest text-brushed-silver group-hover:text-white">Events</span>
                </Link>
                <Link href="/entertainment" className="flex flex-col items-center gap-1 group">
                    <div className="h-0.5 w-6 bg-white rounded-full mb-1 group-hover:w-8 transition-all"></div>
                    <span className="text-[9px] uppercase tracking-widest text-white font-medium">Music</span>
                </Link>
                <Link href="/" className="flex flex-col items-center gap-1 group opacity-50 hover:opacity-100 transition-opacity">
                    <div className="h-0.5 w-4 bg-brushed-silver rounded-full mb-1 group-hover:w-6 transition-all"></div>
                    <span className="text-[9px] uppercase tracking-widest text-brushed-silver group-hover:text-white">Club</span>
                </Link>
            </nav>
        </main>
    );
}
