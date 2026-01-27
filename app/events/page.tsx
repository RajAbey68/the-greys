'use client';

import React from 'react';
import BottomNav from '../components/BottomNav';
import FilterBar from '../components/FilterBar';
import EventCard from '../components/EventCard';

export default function EventsPage() {
    const events = [
        {
            date: "12-14 MAR",
            time: "10:00",
            // Using the newly generated hero banner here
            image: "/hero-banner.png",
            title: "147th Battle of the Blues",
            location: "SSC Grounds, Colombo",
            description: "The 147th Encounter. Three days of grit, glory, and tradition. Join the exclusive Greys pavilion for premium hospitality and the best view of the pitch.",
            isHighDemand: true,
        },
        {
            date: "21 MAR",
            time: "09:30",
            image: "/mustangs.png",
            title: "Mustangs Trophy 2026",
            location: "SSC Grounds, Colombo",
            description: "The limited overs encounter. A faster pace, a louder crowd, and the same historic rivalry. Tickets for the Mustang's Tent are strictly limited.",
            isHighDemand: true,
        },
        {
            date: "05 FEB",
            time: "19:00",
            image: "/social.png",
            title: "The Stable: Pre-Season Social",
            location: "The Grey Horse Pub, London",
            description: "Kick off the season with fellow alumni. Live screening of the 1st XI warmup matches and a Q&A with past captains.",
            isHighDemand: false,
        }
    ];

    return (
        <div className="min-h-screen bg-fleabitten text-iron pb-24">
            <FilterBar />

            <div className="px-6 pt-8 pb-4 flex justify-between items-end">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-medium text-iron">Upcoming Highlights</h2>
                <button className="text-[9px] uppercase tracking-[0.2em] text-[#BFA15F] font-bold hover:underline">View Calendar</button>
            </div>

            <main className="px-4">
                {events.map((event, index) => (
                    <EventCard key={index} {...event} />
                ))}
            </main>

            <BottomNav />
        </div>
    );
}
