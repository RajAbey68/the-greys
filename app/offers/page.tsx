import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Tag, Gift, Percent } from 'lucide-react';

export default function OffersPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-gray-500 to-gray-600 text-black font-serif pb-24 relative selection:bg-yellow-700 selection:text-white">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-championship-white/90 backdrop-blur-md border-b border-burnished-silver/20">
                <Link href="/" className="text-black hover:text-royal-gold transition-colors flex items-center gap-2 group">
                    <ArrowLeft size={20} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-sans text-[10px] uppercase tracking-widest hidden md:inline">Back to Match</span>
                </Link>
                <div className="text-center">
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-royal-gold font-medium">Member Privileges</p>
                </div>
                <div className="w-5">
                    <Tag size={20} strokeWidth={1} className="text-black" />
                </div>
            </nav>

            {/* Header */}
            <header className="pt-32 pb-12 px-6 text-center max-w-4xl mx-auto">
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center border border-black/10">
                        <Gift size={24} className="text-royal-gold" />
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-4 text-black">
                    The Grey Offers
                </h1>
                <p className="font-sans text-xs md:text-sm text-black/70 max-w-xl mx-auto leading-relaxed tracking-wide uppercase mb-10">
                    Exclusive vouchers, partner discounts, and event invites curated for The Grey community.
                </p>
            </header>

            {/* Offers Grid */}
            <section className="max-w-5xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Offer 1 */}
                <div className="bg-white/60 backdrop-blur-md p-8 border border-black/5 rounded-sm shadow-xl flex flex-col items-center text-center group">
                    <div className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4 rounded-full">Partner Offer</div>
                    <h3 className="font-serif text-2xl mb-2 group-hover:text-royal-gold transition-colors">Uber Luxury</h3>
                    <p className="font-sans text-xs text-black/60 mb-6">30% off rides to and from SSC Grounds during match days.</p>
                    <div className="border-t border-dashed border-black/20 w-full pt-6 mt-auto">
                        <span className="font-mono text-lg font-bold tracking-widest text-black/80">GREY147</span>
                        <p className="text-[9px] uppercase tracking-wider text-black/40 mt-1">Use Code in App</p>
                    </div>
                </div>

                {/* Offer 2 */}
                <div className="bg-white/60 backdrop-blur-md p-8 border border-black/5 rounded-sm shadow-xl flex flex-col items-center text-center group">
                    <div className="bg-royal-gold text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4 rounded-full">Dining</div>
                    <h3 className="font-serif text-2xl mb-2 group-hover:text-royal-gold transition-colors">Post-Match Dinner</h3>
                    <p className="font-sans text-xs text-black/60 mb-6">Complimentary bottle of wine for tables of 4+ at The Gallery Café.</p>
                    <div className="border-t border-dashed border-black/20 w-full pt-6 mt-auto">
                        <button className="text-[10px] uppercase font-bold tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                            Claim Voucher
                        </button>
                    </div>
                </div>

            </section>

        </main>
    );
}
