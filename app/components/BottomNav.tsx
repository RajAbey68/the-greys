'use client';

import { Calendar, Home, MessageSquare, User, Music, ShoppingBag, Ticket } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-white/10 px-4 py-4 flex justify-between items-center z-50 pb-8 shadow-2xl backdrop-blur-md bg-opacity-95">
            <Link href="/" className={`flex flex-col items-center gap-2 px-2 transition-colors group ${isActive('/') ? 'text-[#FFD700]' : 'text-gray-400 hover:text-white'}`}>
                <Home size={26} className="stroke-[1.5]" />
                <span className="text-[10px] tracking-widest uppercase font-bold">Home</span>
            </Link>

            <Link href="/gallery" className={`flex flex-col items-center gap-2 px-2 transition-colors group ${isActive('/gallery') ? 'text-[#FFD700]' : 'text-gray-400 hover:text-white'}`}>
                <CameraIcon size={26} className="stroke-[1.5]" />
                <span className="text-[10px] tracking-widest uppercase font-bold">Gallery</span>
            </Link>

            <Link href="/tickets" className={`flex flex-col items-center gap-2 px-2 transition-colors group ${isActive('/tickets') ? 'text-[#FFD700]' : 'text-gray-400 hover:text-white'}`}>
                <Ticket size={26} className="stroke-[1.5]" />
                <span className="text-[10px] tracking-widest uppercase font-bold">Tickets</span>
            </Link>

            <Link href="/merchandise" className={`flex flex-col items-center gap-2 px-2 transition-colors group ${isActive('/merchandise') ? 'text-[#FFD700]' : 'text-gray-400 hover:text-white'}`}>
                <ShoppingBag size={26} className="stroke-[1.5]" />
                <span className="text-[10px] tracking-widest uppercase font-bold">Shop</span>
            </Link>

            <button className="flex flex-col items-center gap-2 px-2 text-gray-400 hover:text-white transition-colors group">
                <User size={26} className="stroke-[1.5]" />
                <span className="text-[10px] tracking-widest uppercase font-bold">Profile</span>
            </button>
        </div>
    );
}

function CameraIcon({ size, className }: { size: number, className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
    )
}
