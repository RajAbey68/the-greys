'use client';

import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js'; // Ensure you have @supabase/supabase-js installed

// -- MOCK SUPABASE CLIENT (Replace with your actual env vars) --
// const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// --- COMPONENT: Live Inventory ---
const LiveInventory = () => {
    const [ticketsRemaining, setTicketsRemaining] = useState<number | null>(null);

    useEffect(() => {
        // Mocking a database fetch from Supabase
        const fetchInventory = async () => {
            await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate lag
            setTicketsRemaining(Math.floor(Math.random() * 25) + 5);
        };
        fetchInventory();
    }, []);

    return (
        <div className="bg-blue-roan border border-slate-700 p-4 rounded-lg mb-8 flex justify-between items-center shadow-xl">
            <span className="text-dapple uppercase tracking-widest text-xs font-semibold">Live Inventory</span>
            <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-400"></span>
                </span>
                <span className="text-fleabitten font-mono text-lg">
                    {ticketsRemaining !== null ? `${ticketsRemaining} Tickets Left` : 'Checking...'}
                </span>
            </div>
        </div>
    );
};

// --- COMPONENT: Ticket Purchase Form ---
const TicketForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        nicNumber: '',
        dob: '',
    });
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const validateAge = (birthDate: string) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age >= 18;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Age Logic Check
        if (!validateAge(formData.dob)) {
            setError("Admission restricted: You must be 18 or older to purchase tickets.");
            return;
        }

        setStatus('submitting');

        // Supabase Logic (Stubbed)
        // const { error } = await supabase.from('ticket_sales').insert([formData]);
        await new Promise(r => setTimeout(r, 1500)); // Simulated API call

        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className="text-center p-10 border border-slate-600 rounded-lg">
                <h2 className="text-2xl text-white mb-4 italic">Welcome to The Grays.</h2>
                <p className="text-slate-400">Your registration is complete. A digital pass will be sent to your NIC linked email.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">Full Name</label>
                <input
                    required
                    type="text"
                    className="w-full bg-iron border border-slate-700 text-fleabitten p-3 rounded focus:outline-none focus:border-rose-grey transition-colors"
                    placeholder="e.g. Julian Vane"
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
            </div>

            <div>
                <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">NIC Number</label>
                <input
                    required
                    type="text"
                    className="w-full bg-iron border border-slate-700 text-fleabitten p-3 rounded focus:outline-none focus:border-rose-grey transition-colors"
                    placeholder="Enter ID Number"
                    onChange={(e) => setFormData({ ...formData, nicNumber: e.target.value })}
                />
            </div>

            <div>
                <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">Date of Birth</label>
                <input
                    required
                    type="date"
                    className="w-full bg-iron border border-slate-700 text-fleabitten p-3 rounded focus:outline-none focus:border-rose-grey transition-colors"
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                />
            </div>

            {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-rose-grey text-iron font-bold uppercase tracking-widest hover:bg-white transition-all disabled:opacity-50"
            >
                {status === 'submitting' ? 'Processing...' : 'Secure Ticket'}
            </button>
        </form>
    );
};

// --- MAIN PAGE ---
export default function TicketPurchasePage() {
    return (
        <div className="min-h-screen bg-iron text-slate-200 selection:bg-rose-grey selection:text-white px-6 py-12 flex flex-col items-center">
            <header className="mb-12 text-center">
                <h1 className="text-5xl font-serif text-fleabitten tracking-tighter mb-2">THE GRAYS</h1>
                <p className="text-rose-grey italic tracking-widest uppercase text-[10px]">Hospitality & Private Membership</p>
            </header>

            <main className="max-w-md w-full">
                <LiveInventory />
                <section className="bg-blue-roan p-8 rounded-xl shadow-2xl border border-slate-800">
                    <h2 className="text-xl text-fleabitten mb-6 font-light">Ticket Registration</h2>
                    <TicketForm />
                </section>
            </main>

            <footer className="mt-20 opacity-30 text-[10px] uppercase tracking-[0.3em]">
                Strictly 18+  •  Exclusive Access
            </footer>
        </div>
    );
}
