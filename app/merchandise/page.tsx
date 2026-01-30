import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Tag, Star, Shirt } from 'lucide-react';

export default function MerchandisePage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-gray-500 to-gray-600 text-black font-serif pb-24 relative selection:bg-yellow-700 selection:text-white">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-championship-white/90 backdrop-blur-md border-b border-burnished-silver/20 h-20">
                <Link href="/" className="text-black hover:text-royal-gold transition-colors flex items-center gap-3 group">
                    <ArrowLeft size={24} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-sans text-xs font-bold uppercase tracking-widest hidden md:inline">Back to Match</span>
                </Link>
                <div className="text-center">
                    <p className="font-sans text-xs uppercase tracking-[0.25em] text-royal-gold font-medium">The Grey Shop</p>
                </div>
                <div className="w-10 h-10 flex items-center justify-center">
                    <ShoppingBag size={24} strokeWidth={1} className="text-black" />
                </div>
            </nav>

            {/* Header */}
            <header className="pt-32 pb-12 px-6 text-center max-w-4xl mx-auto">
                <div className="mb-6 flex justify-center">
                    {/* Using the new Merch Image as a subtle backing or visual element could be cool, but for now a clean icon */}
                    <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center border border-black/10">
                        <Shirt size={24} className="text-royal-gold" />
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-4 text-black">
                    Wear The Colours
                </h1>
                <p className="font-sans text-xs md:text-sm text-black/70 max-w-xl mx-auto leading-relaxed tracking-wide uppercase mb-10">
                    Official 147th Battle of the Blues Merchandise & Exclusive Grey Tent Kit.
                </p>
            </header>

            {/* Hero Image / Collection Feature using the generated image */}
            <section className="max-w-6xl mx-auto px-6 mb-16">
                <div className="relative w-full h-[50vh] md:h-[60vh] rounded-sm overflow-hidden shadow-2xl shadow-black/20 group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                    <img src="/the-greys/merchandise-landing-v2.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="New Collection" />

                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 text-white">
                        <span className="bg-royal-gold text-black text-[9px] font-bold uppercase tracking-widest px-3 py-1 mb-3 inline-block">New Arrival</span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-2 text-white drop-shadow-md">The 147th Collection</h2>
                        <p className="font-sans text-xs text-white/90 max-w-md mb-6 drop-shadow-sm">
                            Featuring the Limited Edition 'Grey Horse' Polo and Heritage Caps.
                        </p>
                        <button className="bg-white text-black hover:bg-royal-gold transition-colors px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                            Shop Collection
                        </button>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="max-w-6xl mx-auto px-6 mb-24">
                <div className="flex items-center justify-between mb-8 border-b border-black/10 pb-4">
                    <h3 className="font-serif text-2xl text-black">Featured Items</h3>
                    <div className="flex gap-4 text-[10px] font-sans uppercase tracking-wider text-black/60">
                        <span className="text-black border-b border-black pb-1 cursor-pointer">All</span>
                        <span className="hover:text-black cursor-pointer">Jerseys</span>
                        <span className="hover:text-black cursor-pointer">Caps</span>
                        <span className="hover:text-black cursor-pointer">Souvenirs</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Product 1 */}
                    <div className="group cursor-pointer">
                        <div className="aspect-square bg-white rounded-sm mb-4 relative overflow-hidden border border-black/5">
                            <div className="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider z-10">Best Seller</div>
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-500">
                                {/* Placeholder for Product Image */}
                                <Shirt size={64} strokeWidth={0.5} />
                            </div>
                        </div>
                        <h4 className="font-serif text-lg text-black group-hover:text-royal-gold transition-colors">The Grey Polo</h4>
                        <p className="text-[10px] text-black/50 uppercase tracking-widest mb-2">Mens • L / XL / XXL</p>
                        <p className="font-sans font-bold text-sm">LKR 4,500</p>
                    </div>

                    {/* Product 2 */}
                    <div className="group cursor-pointer">
                        <div className="aspect-square bg-white rounded-sm mb-4 relative overflow-hidden border border-black/5">
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-500">
                                <Star size={64} strokeWidth={0.5} />
                            </div>
                        </div>
                        <h4 className="font-serif text-lg text-black group-hover:text-royal-gold transition-colors">Heritage Cap</h4>
                        <p className="text-[10px] text-black/50 uppercase tracking-widest mb-2">Unisex • Navy/Gold</p>
                        <p className="font-sans font-bold text-sm">LKR 2,800</p>
                    </div>

                    {/* Product 3 */}
                    <div className="group cursor-pointer">
                        <div className="aspect-square bg-white rounded-sm mb-4 relative overflow-hidden border border-black/5">
                            <div className="absolute top-3 left-3 bg-black text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider z-10">Pre-Order</div>
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-500">
                                <Tag size={64} strokeWidth={0.5} />
                            </div>
                        </div>
                        <h4 className="font-serif text-lg text-black group-hover:text-royal-gold transition-colors">147th Flag</h4>
                        <p className="text-[10px] text-black/50 uppercase tracking-widest mb-2">Premium Silk • 5ft</p>
                        <p className="font-sans font-bold text-sm">LKR 1,500</p>
                    </div>

                    {/* Product 4 */}
                    <div className="group cursor-pointer">
                        <div className="aspect-square bg-white rounded-sm mb-4 relative overflow-hidden border border-black/5">
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-500">
                                <ShoppingBag size={64} strokeWidth={0.5} />
                            </div>
                        </div>
                        <h4 className="font-serif text-lg text-black group-hover:text-royal-gold transition-colors">Supporter Pack</h4>
                        <p className="text-[10px] text-black/50 uppercase tracking-widest mb-2">T-shirt + Band + Whistle</p>
                        <p className="font-sans font-bold text-sm">LKR 6,000</p>
                    </div>

                </div>
            </section>

            {/* Footer CTA */}
            <div className="bg-black text-white p-12 text-center border-t border-royal-gold/20">
                <h3 className="font-serif text-2xl mb-4">Bulk Orders & Customization</h3>
                <p className="font-sans text-xs text-gray-400 mb-8 max-w-lg mx-auto">
                    Ordering for a batch or whole tent? Contact our sales team for custom printing and bulk discounts.
                </p>
                <button className="bg-royal-gold text-black px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                    Contact Wholesale
                </button>
            </div>

        </main>
    );
}
