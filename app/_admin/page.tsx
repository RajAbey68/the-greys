'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Trophy, Users, Upload, LogOut, Loader2 } from 'lucide-react';

export default function AdminPage() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        };
        checkUser();

        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setUser(session?.user ?? null);
            }
        );

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const handleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/the-grey/admin`,
            },
        });
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-championship-white flex items-center justify-center">
                <Loader2 className="animate-spin text-midnight-slate" size={48} />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-championship-white flex flex-col items-center justify-center p-8">
                <div className="bg-white p-12 rounded-lg shadow-xl border border-midnight-slate/10 text-center max-w-md w-full">
                    <Trophy size={48} className="text-royal-gold mx-auto mb-6" strokeWidth={1} />
                    <h1 className="text-3xl font-serif text-midnight-slate mb-4">The Grey Admin</h1>
                    <p className="font-sans text-gray-500 mb-8">Restricted Access. Please authenticate to continue.</p>
                    <button
                        onClick={handleLogin}
                        className="w-full py-4 bg-midnight-slate text-white font-sans uppercase tracking-[0.2em] hover:bg-burnished-silver transition-colors flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z" /></svg>
                        Sign in with Google
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 font-serif">
            {/* Admin Header */}
            <header className="bg-midnight-slate text-white p-6 shadow-lg">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Trophy size={24} className="text-royal-gold" />
                        <h1 className="text-xl tracking-widest uppercase">Admin Console</h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-xs font-sans text-gray-400">Logged in as {user.email}</span>
                        <button onClick={handleLogout} className="flex items-center gap-2 text-sm hover:text-royal-gold transition-colors">
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Dashboard */}
            <div className="max-w-6xl mx-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Photo Uploads Card */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-50 text-blue-900 rounded-full">
                                <Upload size={24} />
                            </div>
                            <h2 className="text-xl">Gallery Uploads</h2>
                        </div>
                        <p className="text-sm text-gray-500 mb-6 font-sans">Manage and curate photos uploaded by the community.</p>
                        <button className="w-full py-2 border border-blue-900 text-blue-900 uppercase text-xs tracking-widest hover:bg-blue-900 hover:text-white transition-colors">
                            Check Queue
                        </button>
                    </div>

                    {/* Members Card */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-green-50 text-green-900 rounded-full">
                                <Users size={24} />
                            </div>
                            <h2 className="text-xl">Members</h2>
                        </div>
                        <p className="text-sm text-gray-500 mb-6 font-sans">View registered guest lists and check-ins.</p>
                        <button className="w-full py-2 border border-green-900 text-green-900 uppercase text-xs tracking-widest hover:bg-green-900 hover:text-white transition-colors">
                            View Registry
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
