import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Utensils, Wine, Coffee, Info } from 'lucide-react';

export default function FoodSpiritsPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-gray-500 to-gray-600 text-black font-serif pb-24 relative selection:bg-yellow-700 selection:text-white">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-championship-white/90 backdrop-blur-md border-b border-burnished-silver/20">
                <Link href="/" className="text-black hover:text-royal-gold transition-colors flex items-center gap-2 group">
                    <ArrowLeft size={20} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-sans text-[10px] uppercase tracking-widest hidden md:inline">Back to Match</span>
                </Link>
                <div className="text-center">
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-royal-gold font-medium">The Grey Menu</p>
                </div>
                <div className="w-5">
                    <Utensils size={20} strokeWidth={1} className="text-black" />
                </div>
            </nav>

            {/* Header */}
            <header className="pt-32 pb-12 px-6 text-center max-w-4xl mx-auto">
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center border border-black/10">
                        <Wine size={24} className="text-royal-gold" />
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-4 text-black">
                    Feast & Toast
                </h1>
                <p className="font-sans text-xs md:text-sm text-black/70 max-w-xl mx-auto leading-relaxed tracking-wide uppercase mb-10">
                    A curated selection of Sri Lankan bites, premium spirits, and beverages for The Grey Tent.
                </p>
            </header>

            {/* Content Tabs/Sections */}
            <section className="max-w-5xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Food Column */}
                <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 border border-black/5 rounded-sm shadow-xl">
                    <div className="flex items-center gap-4 mb-8 border-b border-black/10 pb-4">
                        <Utensils size={24} className="text-black" />
                        <h2 className="font-serif text-3xl text-black">The Bites</h2>
                    </div>

                    <div className="space-y-8">
                        {/* Item 1 */}
                        <div className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-serif text-lg font-bold group-hover:text-royal-gold transition-colors">Hot Butter Cuttlefish</h3>
                                <span className="font-sans text-sm font-bold">LKR 1,800</span>
                            </div>
                            <p className="font-sans text-xs text-black/60">Crispy battered cuttlefish tossed in chili butter and spring onions.</p>
                        </div>

                        {/* Item 2 */}
                        <div className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-serif text-lg font-bold group-hover:text-royal-gold transition-colors">Black Pork Curry</h3>
                                <span className="font-sans text-sm font-bold">LKR 1,500</span>
                            </div>
                            <p className="font-sans text-xs text-black/60">Slow-cooked traditional pork curry with roasted spices (Goraka).</p>
                        </div>

                        {/* Item 3 */}
                        <div className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-serif text-lg font-bold group-hover:text-royal-gold transition-colors">Devilled Chicken Wings</h3>
                                <span className="font-sans text-sm font-bold">LKR 1,400</span>
                            </div>
                            <p className="font-sans text-xs text-black/60">Spicy, sweet, and sticky wings tossed in kochchi paste.</p>
                        </div>

                        {/* Item 4 */}
                        <div className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-serif text-lg font-bold group-hover:text-royal-gold transition-colors">Mutton Rolls (3pcs)</h3>
                                <span className="font-sans text-sm font-bold">LKR 900</span>
                            </div>
                            <p className="font-sans text-xs text-black/60">The legendary short eat. Spicy mutton filling in crispy breadcrumbs.</p>
                        </div>

                        {/* Item 5 */}
                        <div className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-serif text-lg font-bold group-hover:text-royal-gold transition-colors">Roast Paan & Pol Sambol</h3>
                                <span className="font-sans text-sm font-bold">LKR 800</span>
                            </div>
                            <p className="font-sans text-xs text-black/60">Toasted bread served with fresh coconut sambol and dhal.</p>
                        </div>

                    </div>

                    <div className="mt-8 pt-6 border-t border-black/5 text-center">
                        <p className="font-sans text-[10px] uppercase tracking-widest text-black/40">Served from 11:00 AM - 6:00 PM</p>
                    </div>
                </div>

                {/* Spirits Column */}
                <div className="bg-black text-white p-8 md:p-12 border border-white/10 rounded-sm shadow-xl relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <div className="flex items-center gap-4 mb-8 border-b border-white/20 pb-4 relative z-10">
                        <Wine size={24} className="text-royal-gold" />
                        <h2 className="font-serif text-3xl text-royal-gold">The Spirits</h2>
                    </div>

                    <div className="space-y-8 relative z-10">
                        {/* Item 1 */}
                        <div className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-serif text-lg font-bold group-hover:text-royal-gold transition-colors">Old Arrack</h3>
                                <span className="font-sans text-sm font-bold text-gray-400">LKR 6,500 / btl</span>
                            </div>
                            <p className="font-sans text-xs text-gray-500">The island classic. Served with Ginger Ale or Soda.</p>
                        </div>

                        {/* Item 2 */}
                        <div className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-serif text-lg font-bold group-hover:text-royal-gold transition-colors">Rockland Dry Gin</h3>
                                <span className="font-sans text-sm font-bold text-gray-400">LKR 7,500 / btl</span>
                            </div>
                            <p className="font-sans text-xs text-gray-500">Premium local gin. Best with Tonic and a slice of lime.</p>
                        </div>

                        {/* Item 3 */}
                        <div className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-serif text-lg font-bold group-hover:text-royal-gold transition-colors">Black Label</h3>
                                <span className="font-sans text-sm font-bold text-gray-400">LKR 18,000 / btl</span>
                            </div>
                            <p className="font-sans text-xs text-gray-500">Blended Scotch Whisky (12 Years).</p>
                        </div>

                        {/* Item 4 */}
                        <div className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-serif text-lg font-bold group-hover:text-royal-gold transition-colors">Lion Lager Carousel</h3>
                                <span className="font-sans text-sm font-bold text-gray-400">LKR 4,000</span>
                            </div>
                            <p className="font-sans text-xs text-gray-500">Pitcher of 6 draught beers.</p>
                        </div>

                    </div>

                    <div className="mt-12 pt-6 border-t border-white/10 text-center relative z-10 bg-white/5 p-4 rounded-sm">
                        <div className="flex items-center justify-center gap-2 mb-2 text-royal-gold">
                            <Info size={14} />
                            <span className="font-bold text-xs uppercase tracking-widest">Corkage Policy</span>
                        </div>
                        <p className="font-sans text-[10px] text-gray-400 leading-relaxed">
                            BYOB allowed for foreign liquor only. <br />Corkage fee: LKR 2,000 per bottle.
                        </p>
                    </div>
                </div>

            </section>

            {/* Footer CTA */}
            <div className="bg-royal-gold p-12 text-center text-black">
                <Coffee size={32} className="mx-auto mb-4 text-black/80" />
                <h3 className="font-serif text-2xl mb-4">Advance Pre-Orders</h3>
                <p className="font-sans text-xs text-black/70 mb-8 max-w-lg mx-auto font-medium">
                    Beat the queue by pre-ordering your food platters and bottle service to your table.
                </p>
                <button className="bg-black text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors">
                    Download Order Form
                </button>
            </div>

        </main>
    );
}
