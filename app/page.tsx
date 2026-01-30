
import Link from 'next/link';
import { ArrowLeft, Trophy, Calendar, MapPin, Utensils, BookOpen, Clock, Users, Music, ShoppingBag, Camera, MessageCircle, Star, MessageSquare, Smartphone, Twitter, Facebook, Instagram, Globe } from 'lucide-react';

export default function Home() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-gray-500 to-gray-600 text-black font-serif pb-24 relative selection:bg-yellow-700 selection:text-white">

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-championship-white/95 backdrop-blur-md border-b border-black/10">
                {/* Back button removed as this is now the Home page */}
                <div className="w-5"></div>
                <div className="text-center">
                    <p className="font-sans text-sm md:text-base uppercase tracking-[0.25em] text-black font-extrabold shadow-sm">147th Battle of the Blues</p>
                </div>
                <div className="w-5"></div>
            </nav>

            {/* Hero / Panoramic */}
            <header className="relative h-[70vh] w-full overflow-hidden flex items-end pb-24 group">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-slate-200">
                    <img src="/the-greys/big-match-hero.png" className="w-full h-full object-cover opacity-90 transition-transform duration-[3s] group-hover:scale-105" alt="Cricket Grounds" />
                </div>

                {/* Minimal Overlay */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-championship-white via-championship-white/80 to-transparent"></div>

                <div className="relative z-10 px-8 w-full max-w-4xl mx-auto text-center">
                    <span className="inline-block py-2 px-4 border border-black/20 rounded-full bg-white text-black font-sans text-xs md:text-sm font-bold uppercase tracking-widest mb-8 shadow-xl">Live Match Data</span>
                    <div className="flex items-center justify-center gap-8 mb-8">
                        {/* Logo */}
                        <img src="/the-greys/royal-thomian-crest.png" className="w-32 md:w-40 h-auto object-contain drop-shadow-2xl" alt="The Grey Logo" />
                        <div className="text-left">
                            <h1 className="text-7xl md:text-9xl font-serif tracking-tighter leading-none text-black drop-shadow-sm">
                                The Grey
                            </h1>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black drop-shadow-md">
                        <span className="font-black text-[#FFD700] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">147th Royal</span> <span className="font-light mx-2 text-white">&</span> <span className="font-black text-[#1E3A8A] drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)]">Thomian</span>
                    </h2>

                    {/* Schedule Strip & Join Actions */}
                    <div className="mt-8 bg-white/40 backdrop-blur-md border-t border-b border-black/10 py-6">
                        {/* Dates */}
                        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-16 font-sans text-black mb-6 px-4">

                            {/* 3-Day */}
                            <div className="text-center group relative cursor-pointer">
                                <div className="flex flex-col items-center">
                                    <span className="block text-3xl md:text-4xl font-serif font-black text-black mb-2">Mar 12–14, 2026</span>
                                    <span className="text-sm md:text-base font-bold uppercase tracking-widest text-black/80">3-Day Match • SSC Grounds</span>
                                    <div className="flex items-center gap-3 mt-4 opacity-100">
                                        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=147th+Royal+Thomian+Big+Match&dates=20260312/20260315&details=The+147th+Battle+of+the+Blues+Location:+SSC+Grounds&location=SSC+Grounds" target="_blank" className="text-xs bg-black text-white px-3 py-1.5 rounded font-bold uppercase tracking-wide hover:bg-gray-800">Google Cal</a>
                                        <a href="https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&startdt=2026-03-12T04:30:00Z&enddt=2026-03-14T12:30:00Z&subject=147th%20Royal%20Thomian&location=SSC" target="_blank" className="text-xs bg-black text-white px-3 py-1.5 rounded font-bold uppercase tracking-wide hover:bg-gray-800">Outlook</a>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block h-16 w-1 bg-black/20"></div>

                            {/* One Day */}
                            <div className="text-center group relative cursor-pointer">
                                <div className="flex flex-col items-center">
                                    <span className="block text-3xl md:text-4xl font-serif font-black text-black mb-2">Mar 28, 2026</span>
                                    <span className="text-sm md:text-base font-bold uppercase tracking-widest text-black/80">Mustangs Trophy • Day-Night</span>
                                    <div className="flex items-center gap-3 mt-4 opacity-100">
                                        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=147th+Royal+Thomian+Mustangs+Trophy&dates=20260328/20260329&details=Limited+Overs+Encounter&location=SSC+Grounds" target="_blank" className="text-xs bg-black text-white px-3 py-1.5 rounded font-bold uppercase tracking-wide hover:bg-gray-800">Google Cal</a>
                                        <a href="https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&startdt=2026-03-28T08:30:00Z&enddt=2026-03-28T18:00:00Z&subject=147th%20Mustangs%20Trophy&location=SSC" target="_blank" className="text-xs bg-black text-white px-3 py-1.5 rounded font-bold uppercase tracking-wide hover:bg-gray-800">Outlook</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Join & Harvest */}
                        <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 border-t border-black/5 pt-6 w-3/4 mx-auto">
                            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                                {/* Member Join */}
                                <button className="bg-black text-white hover:bg-gray-900 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-[0.2em] shadow-xl transition-all flex items-center gap-3 border-2 border-transparent hover:border-black transform hover:scale-105">
                                    <Users size={18} /> Become a Member
                                </button>

                                <div className="hidden md:block h-6 w-px bg-black/10"></div>

                                {/* Socials */}
                                <div className="flex items-center gap-3">
                                    <span className="text-[9px] uppercase tracking-widest text-black/50 font-bold mr-2">Connect:</span>
                                    <a href="#" className="bg-[#25D366] p-2 rounded-full text-white hover:scale-110 transition-transform shadow-sm" title="WhatsApp Group"><MessageCircle size={16} fill="currentColor" /></a>
                                    <a href="#" className="bg-[#1877F2] p-2 rounded-full text-white hover:scale-110 transition-transform shadow-sm" title="Facebook Page"><Facebook size={16} fill="currentColor" strokeWidth={0} /></a>
                                    <a href="#" className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-2 rounded-full text-white hover:scale-110 transition-transform shadow-sm" title="Instagram"><Instagram size={16} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sponsors Carousel */}
            <section className="w-full max-w-[95%] mx-auto -mt-24 relative z-30 mb-20">
                <div className="bg-gray-900 py-16 px-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col items-center justify-center text-center rounded-xl">
                    <h3 className="text-white uppercase tracking-[0.3em] text-xl md:text-3xl font-black mb-12">Official Sponsors</h3>
                    <div className="flex gap-12 md:gap-32 overflow-x-auto w-full justify-center items-center py-8 no-scrollbar">
                        <img src="/the-greys/royal-thomian-crest.png" className="h-40 md:h-64 w-auto object-contain hover:scale-110 transition-transform duration-500 filter hover:brightness-110" alt="Sponsor" />
                        <img src="/the-greys/royal-thomian-crest.png" className="h-40 md:h-64 w-auto object-contain hover:scale-110 transition-transform duration-500 filter hover:brightness-110" alt="Sponsor" />
                        <img src="/the-greys/royal-thomian-crest.png" className="h-40 md:h-64 w-auto object-contain hover:scale-110 transition-transform duration-500 filter hover:brightness-110" alt="Sponsor" />
                        <img src="/the-greys/royal-thomian-crest.png" className="h-40 md:h-64 w-auto object-contain hover:scale-110 transition-transform duration-500 filter hover:brightness-110" alt="Sponsor" />
                        <img src="/the-greys/royal-thomian-crest.png" className="h-40 md:h-64 w-auto object-contain hover:scale-110 transition-transform duration-500 filter hover:brightness-110" alt="Sponsor" />
                    </div>
                </div>
            </section>



            {/* Guest Registry */}
            {/* Match Essentials */}
            <section className="max-w-6xl mx-auto px-6 py-24 border-t border-midnight-slate/10">
                <div className="text-center mb-16">
                    <span className="text-base font-bold text-black uppercase tracking-[0.3em]">The Grey Centre</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-black font-black mt-4">Match Essentials</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                    {/* Tickets */}
                    <div className="group text-center w-[45%] md:w-64">
                        <div className="w-full h-32 mx-auto mb-4 overflow-hidden rounded-lg relative">
                            <div className="absolute inset-0 bg-midnight-slate/20 group-hover:bg-transparent transition-all z-10"></div>
                            <img src="/the-greys/tickets-landing.png" className="w-full h-full object-cover transition-all duration-500" alt="Tickets" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-black mb-3">Tickets</h3>
                        <p className="font-sans text-sm font-medium text-black/80 mb-6 px-2 leading-relaxed">Availability, Pickup Points & Ticket WhatsApp Group</p>
                        <Link href="#" className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-sm hover:bg-gray-800 transition-colors">Box Office</Link>
                    </div>

                    {/* Gallery */}
                    <div className="group text-center w-[45%] md:w-64">
                        <div className="w-full h-32 mx-auto mb-4 overflow-hidden rounded-lg relative">
                            <div className="absolute inset-0 bg-midnight-slate/20 group-hover:bg-transparent transition-all z-10"></div>
                            <img src="/the-greys/social.png" className="w-full h-full object-cover transition-all duration-500" alt="Gallery" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-black mb-3">The Gallery</h3>
                        <p className="font-sans text-sm font-medium text-black/80 mb-6 px-2 leading-relaxed">Uncurated & Unfiltered</p>
                        <Link href="/gallery" className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-sm hover:bg-gray-800 transition-colors">Upload / View</Link>
                    </div>



                    {/* History Video */}
                    <div className="group text-center w-[45%] md:w-64">
                        <div className="w-full aspect-video mx-auto mb-4 overflow-hidden rounded-lg relative shadow-lg bg-black">
                            <iframe
                                className="w-full h-full object-cover"
                                src="https://www.youtube.com/embed/d1Q3opZzslA"
                                title="History of Royal Thomian"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-black mb-3">About the Royal Thomian</h3>
                        <p className="font-sans text-sm font-medium text-black/80 mb-6 px-2 leading-relaxed">A legacy of brotherhood and rivalry since 1879</p>
                        <Link href="/history" className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-sm hover:bg-gray-800 transition-colors">Watch Story</Link>
                    </div>

                    {/* The Grey Beat (Entertainment) - Row 2 */}
                    <div className="group text-center w-[45%] md:w-64">
                        <div className="w-full h-32 mx-auto mb-4 overflow-hidden rounded-lg relative">
                            <div className="absolute inset-0 bg-midnight-slate/20 group-hover:bg-transparent transition-all z-10"></div>
                            <img src="/the-greys/freeze-band.png" className="w-full h-full object-cover transition-all duration-500" alt="Entertainment" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-black mb-3">The Grey Beat</h3>
                        <p className="font-sans text-sm font-medium text-black/80 mb-6 px-2 leading-relaxed">Links to Headline and other entertainment</p>
                        <Link href="/entertainment" className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-sm hover:bg-gray-800 transition-colors">Lineup</Link>
                    </div>

                    {/* The Grey Offers */}
                    <div className="group text-center w-[45%] md:w-64">
                        <div className="w-full h-32 mx-auto mb-4 overflow-hidden rounded-lg relative">
                            <div className="absolute inset-0 bg-midnight-slate/20 group-hover:bg-transparent transition-all z-10"></div>
                            <img src="/the-greys/grey-offers.png" className="w-full h-full object-cover transition-all duration-500" alt="Grey Offers" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-black mb-3">The Grey Offers</h3>
                        <p className="font-sans text-sm font-medium text-black/80 mb-6 px-2 leading-relaxed">Vouchers, discounts and invites for Members</p>
                        <Link href="/offers" className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-sm hover:bg-gray-800 transition-colors">View Offers</Link>
                    </div>

                    {/* Grey Merchandise - Row 2 */}
                    <div className="group text-center w-[45%] md:w-64">
                        <div className="w-full h-32 mx-auto mb-4 overflow-hidden rounded-lg relative">
                            <div className="absolute inset-0 bg-midnight-slate/20 group-hover:bg-transparent transition-all z-10"></div>
                            <img src="/the-greys/merchandise-landing-v2.png" className="w-full h-full object-cover transition-all duration-500" alt="Shop" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-black mb-3">Grey Merchandise</h3>
                        <p className="font-sans text-sm font-medium text-black/80 mb-6 px-2 leading-relaxed">Official & UNOFFICIAL Merch For Sale</p>
                        <Link href="/merchandise" className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-sm hover:bg-gray-800 transition-colors">Browse Store</Link>
                    </div>

                    {/* Grey Meet-Up */}
                    <div className="group text-center w-[45%] md:w-64">
                        <div className="w-full h-32 mx-auto mb-4 overflow-hidden rounded-lg relative">
                            <div className="absolute inset-0 bg-midnight-slate/20 group-hover:bg-transparent transition-all z-10"></div>
                            <img src="/the-greys/grey-meetups.png" className="w-full h-full object-cover transition-all duration-500" alt="Meetups" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-black mb-3">Grey Meet-Ups</h3>
                        <p className="font-sans text-sm font-medium text-black/80 mb-6 px-2 leading-relaxed">Global gatherings • Colombo, Overseas & Virtual</p>
                        <Link href="/meetups" className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-sm hover:bg-gray-800 transition-colors">Find a Meet-Up</Link>
                    </div>
                </div>

                {/* The Network */}
                <div className="bg-midnight-slate text-white p-8 mt-24 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10">
                        <h3 className="font-serif text-2xl mb-2">The Grey Network</h3>
                        <p className="font-sans text-xs text-gray-400">Connect with the community across all channels.</p>
                    </div>

                    <div className="flex gap-4 relative z-10 flex-wrap justify-center">
                        <button className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 transition-colors bg-white/5 rounded-lg">
                            <MessageSquare size={16} className="text-green-400" />
                            <div className="text-left">
                                <span className="block text-[9px] uppercase tracking-wider opacity-70">WhatsApp</span>
                                <span className="block text-xs font-bold">The Grey Group</span>
                            </div>
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 transition-colors bg-white/5 rounded-lg">
                            <Smartphone size={16} className="text-blue-400" />
                            <div className="text-left">
                                <span className="block text-[9px] uppercase tracking-wider opacity-70">Concierge</span>
                                <span className="block text-xs font-bold">Direct Chat</span>
                            </div>
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 transition-colors bg-white/5 rounded-lg">
                            <Twitter size={16} className="text-gray-400" />
                            <div className="text-left">
                                <span className="block text-[9px] uppercase tracking-wider opacity-70">Twitter</span>
                                <span className="block text-xs font-bold">Follow X</span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Guest Registry */}
            <section id="registry" className="max-w-4xl mx-auto px-8 py-16 text-center border-t border-midnight-slate/10 bg-gray-50/50">
                <h3 className="text-2xl font-serif text-black mb-6">Who is Where</h3>
                <p className="font-sans text-xs text-black/70 mb-8">If you have tickets and plans to attend other stands or events outside, and want The Grey to know - log it here.</p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <input type="text" placeholder="Search Name..." className="bg-white border border-gray-200 px-6 py-3 w-full md:w-64 text-sm font-sans focus:outline-none focus:border-midnight-slate transition-colors" />
                    <select className="bg-white border border-gray-200 px-6 py-3 w-full md:w-64 text-sm font-sans focus:outline-none focus:border-midnight-slate transition-colors text-gray-500">
                        <option>Select Tent...</option>
                        <option>Mustangs</option>
                        <option>Stallions</option>
                        <option>Royal Enclosure</option>
                        <option>OTSC</option>
                        <option>Thoroughbreds/Saddlebreds</option>
                        <option>School Tents</option>
                    </select>
                    <button className="px-8 py-3 bg-black text-royal-gold font-bold uppercase text-[10px] tracking-widest hover:bg-yellow-700 hover:text-black transition-colors w-full md:w-auto">
                        Check-in
                    </button>
                </div>
            </section>

            {/* Footer / Etiquette */}
            <section className="mt-32 border-t border-midnight-slate/10 py-16 bg-gray-50">
                <div className="max-w-2xl mx-auto px-8 text-center">
                    <BookOpen size={24} strokeWidth={1} className="mx-auto text-royal-gold mb-6" />
                    <h3 className="text-2xl font-serif text-royal-gold mb-4">Traditions & Etiquette</h3>
                    <p className="font-sans text-xs text-black leading-relaxed mb-8 max-w-lg mx-auto">
                        We kindly request all members to observe the dress code, behavior, and entry conditions of The Grey Tent. Be mindful of our responsibilities regarding internet posts, language, behavior, and reputation which are summarised here.
                    </p>
                    <Link href="#" className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-black border-b border-black hover:text-royal-gold hover:border-yellow-700 transition-colors pb-1">
                        Read Full Guide
                    </Link>
                </div>
            </section>
        </main>
    );
}
