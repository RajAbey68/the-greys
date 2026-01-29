import EventCard from '../components/EventCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Events() {
    return (
        <main className="min-h-screen bg-charcoal text-silver-100 pb-24">
            {/* Header */}
            <header className="px-6 pt-12 pb-8 flex flex-col items-center justify-center border-b border-white/5 sticky top-0 bg-charcoal/95 backdrop-blur-sm z-50">
                <Link href="/" className="absolute left-6 text-brushed-silver hover:text-white transition-colors">
                    <ArrowLeft size={20} strokeWidth={1} />
                </Link>
                <h1 className="text-xl font-serif tracking-[0.2em] text-white">EVENTS</h1>
                <p className="text-[10px] uppercase tracking-widest text-brushed-silver mt-2">Season 2026</p>
            </header>

            {/* Events List */}
            <div className="px-4 py-8 max-w-md mx-auto">
                <EventCard
                    date="MAR 12"
                    time="19:00"
                    image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop"
                    title="The Royal-Thomian"
                    location="SSC Grounds, Colombo"
                    description="The 147th Battle of the Blues. experience cricket's most prestigious rivalry from the exclusive Grey Horse enclosure."
                    isHighDemand={true}
                />

                <EventCard
                    date="APR 05"
                    time="20:00"
                    image="https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1000&auto=format&fit=crop"
                    title="Jazz & Scotch Night"
                    location="The Mustangs Tent"
                    description="An evening of fine single malts and live jazz, exclusively for Gold and Legendary members."
                    isHighDemand={false}
                />

                <EventCard
                    date="MAY 20"
                    time="14:00"
                    image="https://images.unsplash.com/photo-1531415074968-0129f1b21235?q=80&w=1000&auto=format&fit=crop"
                    title="Members' Lunch"
                    location="Grey Horse Lounge"
                    description="Join club legends and fellow members for our annual gourmet lunch celebrating the season's opener."
                    isHighDemand={true}
                />
            </div>

            {/* Minimal Nav Bar */}
            <nav className="fixed bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-md border-t border-white/5 py-4 px-8 flex justify-between items-center z-50">
                <Link href="/events" className="flex flex-col items-center gap-1 group">
                    <div className="h-0.5 w-6 bg-white rounded-full mb-1 group-hover:w-8 transition-all"></div>
                    <span className="text-[9px] uppercase tracking-widest text-white font-medium">Events</span>
                </Link>
                <Link href="/entertainment" className="flex flex-col items-center gap-1 group opacity-50 hover:opacity-100 transition-opacity">
                    <div className="h-0.5 w-4 bg-brushed-silver rounded-full mb-1 group-hover:w-6 transition-all"></div>
                    <span className="text-[9px] uppercase tracking-widest text-brushed-silver group-hover:text-white">Music</span>
                </Link>
                <Link href="/" className="flex flex-col items-center gap-1 group opacity-50 hover:opacity-100 transition-opacity">
                    <div className="h-0.5 w-4 bg-brushed-silver rounded-full mb-1 group-hover:w-6 transition-all"></div>
                    <span className="text-[9px] uppercase tracking-widest text-brushed-silver group-hover:text-white">Club</span>
                </Link>
            </nav>
        </main>
    );
}
