import { Calendar, Home, MessageSquare, User, Music } from 'lucide-react';
import Link from 'next/link';

export default function BottomNav() {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-iron/10 px-6 py-4 flex justify-between items-end z-50 pb-8">
            <Link href="/" className="flex flex-col items-center gap-1 text-iron opacity-60 hover:opacity-100 transition-opacity group">
                <Home size={20} className="stroke-[1.5]" />
                <span className="text-[10px] tracking-widest uppercase font-medium">Home</span>
            </Link>

            <Link href="/events" className="flex flex-col items-center gap-1 text-iron">
                <Calendar size={20} className="stroke-[2] fill-iron/10" />
                <span className="text-[10px] tracking-widest uppercase font-bold text-iron">Events</span>
            </Link>

            <div className="relative -top-5">
                <button className="h-14 w-14 rounded-full bg-iron flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <span className="text-3xl font-light text-white pb-1">+</span>
                </button>
            </div>

            <Link href="/entertainment" className="flex flex-col items-center gap-1 text-iron opacity-60 hover:opacity-100 transition-opacity group">
                <Music size={20} className="stroke-[1.5]" />
                <span className="text-[10px] tracking-widest uppercase font-medium">Bands</span>
            </Link>

            <button className="flex flex-col items-center gap-1 text-iron opacity-60 hover:opacity-100 transition-opacity group">
                <User size={20} className="stroke-[1.5]" />
                <span className="text-[10px] tracking-widest uppercase font-medium">Profile</span>
            </button>
        </div>
    );
}
