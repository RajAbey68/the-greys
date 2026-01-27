import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-iron p-24 text-fleabitten">
            <h1 className="text-6xl font-serif mb-8 text-fleabitten tracking-tighter">THE GRAYS</h1>
            <p className="text-rose-grey italic tracking-widest uppercase text-xs mb-12">Hospitality & Private Membership</p>
            <Link href="/events" className="px-8 py-3 bg-rose-grey text-iron uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-colors">
                Enter
            </Link>
        </main>
    );
}
