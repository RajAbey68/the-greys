'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, ShieldCheck, Ticket, MessageCircle } from 'lucide-react';

export default function TicketPurchasePage() {
    return (
        <main className="min-h-screen bg-[#1A1A1A] text-white font-serif pb-24 relative selection:bg-silver-400 selection:text-black">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-[#1A1A1A]/90 backdrop-blur-md border-b border-white/10 h-20">
                <Link href="/" className="text-white hover:text-silver-400 transition-colors flex items-center gap-3 group">
                    <ArrowLeft size={24} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-sans text-xs font-bold uppercase tracking-widest hidden md:inline">The Grey</span>
                </Link>
                <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-white tracking-wide">Enclosure Access</p>
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-silver-400 mt-1">The Grey Tent</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Ticket size={18} className="text-white" />
                </div>
            </nav>

            {/* Header Content */}
            <div className="pt-32 pb-12 px-6 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif italic text-white mb-4">
                    Secure Your Pass
                </h1>
                <p className="font-sans text-xs md:text-sm text-silver-400 max-w-lg mx-auto leading-relaxed tracking-wide uppercase">
                    Exclusive entry to The Grey Enclosure. Limited availability for the 147th Battle of the Blues.
                </p>
            </div>

            {/* Ticket Options Grid */}
            <section className="max-w-5xl mx-auto px-6 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Day 1 Pass */}
                <div className="bg-[#2D3436] p-8 rounded-xl border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <span className="text-6xl font-serif">01</span>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-serif text-2xl text-white mb-1">Day 1 Pass</h3>
                        <p className="text-[10px] uppercase tracking-widest text-silver-400">Friday • March 13th</p>
                    </div>
                    <ul className="text-xs text-gray-400 space-y-2 mb-8 font-sans">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> Enclosure Entry (10am - 6pm)</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> Lunch Buffet Access</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> 2 Complimentary Spirits</li>
                    </ul>
                    <div className="mt-auto">
                        <span className="block text-xl font-bold text-white mb-4">LKR 15,000</span>
                        <button className="w-full py-3 bg-white/5 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm">
                            Select Pass
                        </button>
                    </div>
                </div>

                {/* Day 2 Pass */}
                <div className="bg-[#2D3436] p-8 rounded-xl border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <span className="text-6xl font-serif">02</span>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-serif text-2xl text-white mb-1">Day 2 Pass</h3>
                        <p className="text-[10px] uppercase tracking-widest text-silver-400">Saturday • March 14th</p>
                    </div>
                    <ul className="text-xs text-gray-400 space-y-2 mb-8 font-sans">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> Enclosure Entry (9am - Close)</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> Grand Lunch Buffet</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> Post-Match Party Access</li>
                    </ul>
                    <div className="mt-auto">
                        <span className="block text-xl font-bold text-white mb-4">LKR 18,000</span>
                        <button className="w-full py-3 bg-white/5 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm">
                            Select Pass
                        </button>
                    </div>
                </div>

                {/* Season Pass (Featured) */}
                <div className="bg-gradient-to-b from-[#2D3436] to-black p-8 rounded-xl border border-[#B0B3B8]/30 shadow-2xl relative overflow-hidden transform md:-translate-y-4">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#B0B3B8] to-transparent"></div>
                    <div className="mb-6 text-center">
                        <span className="inline-block px-3 py-1 bg-white text-black text-[9px] font-bold uppercase tracking-widest rounded-full mb-4">Best Value</span>
                        <h3 className="font-serif text-3xl text-white mb-1">Season Pass</h3>
                        <p className="text-[10px] uppercase tracking-widest text-silver-400">Full Access • Both Days</p>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-3 mb-8 font-sans px-4">
                        <li className="flex items-center gap-2"><StarIcon /> Priority Entry</li>
                        <li className="flex items-center gap-2"><StarIcon /> Full Hospitality Package</li>
                        <li className="flex items-center gap-2"><StarIcon /> Exclusive 'Grey' Cap Included</li>
                        <li className="flex items-center gap-2"><StarIcon /> All-Access Wristband</li>
                    </ul>
                    <div className="mt-auto text-center">
                        <span className="block text-2xl font-bold text-white mb-4">LKR 30,000</span>
                        <button className="w-full py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-[#B0B3B8] transition-colors rounded-sm shadow-lg">
                            Secure Season Pass
                        </button>
                    </div>
                </div>

            </section>

            {/* Logistics Section */}
            <section className="max-w-4xl mx-auto px-6 mb-12">
                <div className="bg-[#2D3436]/50 backdrop-blur-md p-8 rounded-xl border border-white/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-full">
                                <MapPin size={20} className="text-silver-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Wristband Pickup</h4>
                                <p className="text-xs text-gray-400">The Grey HQ, Union Place</p>
                                <p className="text-[10px] text-gray-500 mt-1">Mar 10th - 12th • 10AM - 6PM</p>
                            </div>
                        </div>

                        <div className="h-px w-full md:w-px md:h-12 bg-white/10"></div>

                        <button className="flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-green-900/20 hover:scale-105 transition-all w-full md:w-auto justify-center">
                            <MessageCircle size={20} />
                            <div className="text-left">
                                <span className="block text-[9px] uppercase tracking-wider opacity-90">Join The Grey</span>
                                <span className="block text-xs font-bold">WhatsApp Group</span>
                            </div>
                        </button>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center pb-8">
                <p className="text-[9px] text-gray-600 uppercase tracking-[0.2em]">
                    Payments Processed Securely via PayHere
                </p>
            </footer>

        </main>
    );
}

function StarIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#B0B3B8" stroke="none" className="flex-shrink-0">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
