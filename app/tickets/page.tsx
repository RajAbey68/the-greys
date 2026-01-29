'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, MapPin, Clock, ShieldCheck, Ticket } from 'lucide-react';

export default function TicketPurchasePage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-gray-500 to-gray-600 text-black font-serif pb-24 relative selection:bg-yellow-700 selection:text-white">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-championship-white/90 backdrop-blur-md border-b border-burnished-silver/20">
                <Link href="/" className="text-black hover:text-royal-gold transition-colors flex items-center gap-2 group">
                    <ArrowLeft size={20} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-sans text-[10px] uppercase tracking-widest hidden md:inline">Back to Match</span>
                </Link>
                <div className="text-center">
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-royal-gold font-medium">The Grey Box Office</p>
                </div>
                <div className="w-5"></div>
            </nav>

            {/* Header Content */}
            <div className="pt-32 pb-12 px-6 text-center max-w-4xl mx-auto">
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center border border-black/10">
                        <Ticket size={24} className="text-royal-gold" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-serif tracking-tighter mb-4 text-black">
                    Secure Your Pass
                </h1>
                <p className="font-sans text-xs md:text-sm text-black/70 max-w-2xl mx-auto leading-relaxed tracking-wide uppercase">
                    Official Tickets for The 147th Battle of the Blues • Mustangs Trophy • The Grey Tent
                </p>
            </div>

            {/* Pricing Table Section */}
            <section className="max-w-4xl mx-auto px-6 mb-16">
                <div className="bg-white/80 backdrop-blur-sm shadow-2xl shadow-black/5 rounded-sm overflow-hidden border border-black/5 overflow-x-auto">

                    {/* Table Header */}
                    <div className="grid grid-cols-12 bg-black text-royal-gold py-4 px-6 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-royal-gold/20 min-w-[600px] md:min-w-0">
                        <div className="col-span-6 md:col-span-5">Enclosure / Tent</div>
                        <div className="col-span-3 md:col-span-3 text-center">Price (LKR)</div>
                        <div className="col-span-3 md:col-span-4 text-right">Availability</div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-black/5 font-sans text-xs text-black">
                        {/* Mustangs */}
                        <div className="grid grid-cols-12 py-5 px-6 items-center hover:bg-black/5 transition-colors group">
                            <div className="col-span-6 md:col-span-5 font-serif text-lg group-hover:text-royal-gold transition-colors">
                                Mustangs Trophy
                                <span className="block font-sans text-[9px] text-gray-500 uppercase tracking-wider mt-1">Limited Overs • Day Night</span>
                            </div>
                            <div className="col-span-3 md:col-span-3 text-center font-bold text-gray-700">5,000</div>
                            <div className="col-span-3 md:col-span-4 text-right">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[9px] font-bold uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Available
                                </span>
                            </div>
                        </div>

                        {/* Royal Enclosure */}
                        <div className="grid grid-cols-12 py-5 px-6 items-center hover:bg-black/5 transition-colors group">
                            <div className="col-span-6 md:col-span-5 font-serif text-lg group-hover:text-royal-gold transition-colors">
                                Royal Enclosure
                                <span className="block font-sans text-[9px] text-gray-500 uppercase tracking-wider mt-1">3-Day Match • Main Stand</span>
                            </div>
                            <div className="col-span-3 md:col-span-3 text-center font-bold text-gray-700">12,500</div>
                            <div className="col-span-3 md:col-span-4 text-right">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-700 text-[9px] font-bold uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Low Stock
                                </span>
                            </div>
                        </div>

                        {/* The Grey Tent */}
                        <div className="grid grid-cols-12 py-5 px-6 items-center bg-royal-gold/5 border-l-4 border-royal-gold hover:bg-royal-gold/10 transition-colors group">
                            <div className="col-span-6 md:col-span-5 font-serif text-lg group-hover:text-royal-gold transition-colors">
                                The Grey Tent
                                <span className="block font-sans text-[9px] text-gray-500 uppercase tracking-wider mt-1">Exclusive Members Only • All Days</span>
                            </div>
                            <div className="col-span-3 md:col-span-3 text-center font-bold text-gray-700">Members</div>
                            <div className="col-span-3 md:col-span-4 text-right">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-[9px] font-bold uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Apply Now
                                </span>
                            </div>
                        </div>

                        {/* Stallions */}
                        <div className="grid grid-cols-12 py-5 px-6 items-center hover:bg-black/5 transition-colors opacity-60">
                            <div className="col-span-6 md:col-span-5 font-serif text-lg">
                                Stallions
                                <span className="block font-sans text-[9px] text-gray-500 uppercase tracking-wider mt-1">Standard Entry</span>
                            </div>
                            <div className="col-span-3 md:col-span-3 text-center font-bold text-gray-700">3,500</div>
                            <div className="col-span-3 md:col-span-4 text-right">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-[9px] font-bold uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Sold Out
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Purchase CTA */}
                    <div className="bg-gray-50 p-8 text-center border-t border-black/5">
                        <p className="font-serif text-xl mb-2">Need to reverse a ticket or have a question?</p>
                        <p className="font-sans text-[10px] text-gray-500 uppercase tracking-widest mb-6">Direct concierge service available via WhatsApp</p>

                        <a href="https://wa.me/94770000000?text=Currently%20interested%20in%20tickets%20for%20The%20Greys"
                            target="_blank"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl shadow-green-900/10">
                            <MessageCircle size={20} fill="currentColor" />
                            <span className="font-bold uppercase tracking-widest text-xs">Chat with Box Office</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Info Grid */}
            <section className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/40 backdrop-blur-md p-6 border border-white/20 text-center rounded-sm">
                    <MapPin size={24} className="mx-auto text-royal-gold mb-3" />
                    <h3 className="font-serif text-lg mb-2">Pickup Point</h3>
                    <p className="text-xs text-black/70 leading-relaxed">
                        The Grey HQ<br />
                        Union Place, Colombo 02<br />
                        <span className="text-[10px] opacity-50 mt-1 block">Google Maps Pin Available</span>
                    </p>
                </div>

                <div className="bg-white/40 backdrop-blur-md p-6 border border-white/20 text-center rounded-sm">
                    <Clock size={24} className="mx-auto text-royal-gold mb-3" />
                    <h3 className="font-serif text-lg mb-2">Collection Times</h3>
                    <p className="text-xs text-black/70 leading-relaxed">
                        Mon - Fri: 10:00 AM - 6:00 PM<br />
                        Weekends: 10:00 AM - 2:00 PM<br />
                        <span className="text-[10px] opacity-50 mt-1 block">Valid ID Required</span>
                    </p>
                </div>

                <div className="bg-white/40 backdrop-blur-md p-6 border border-white/20 text-center rounded-sm">
                    <ShieldCheck size={24} className="mx-auto text-royal-gold mb-3" />
                    <h3 className="font-serif text-lg mb-2">Verification</h3>
                    <p className="text-xs text-black/70 leading-relaxed">
                        Tickets are non-transferable.<br />
                        NIC / Passport check at gate.<br />
                        <span className="text-[10px] opacity-50 mt-1 block">Strictly No Resale</span>
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="absolute bottom-8 w-full text-center">
                <p className="text-[9px] text-black/20 uppercase tracking-[0.2em] font-light">
                    The Greys Official Portal • Payments Secured
                </p>
            </footer>

        </main>
    );
}
