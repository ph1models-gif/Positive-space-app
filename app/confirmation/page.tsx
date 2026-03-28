'use client';

import { useState } from "react";

export default function Confirmation() {
  const [booking, setBooking] = useState({
    venue: "The Lobby at The Arlo",
    neighborhood: "Midtown",
    date: "2026-03-30",
    time: "10:00 AM - 2:00 PM",
    perk: "Curated coffee tasting experience",
  });

  const addToCalendar = () => {
    // TODO: Generate .ics file or open calendar
    alert("Add to calendar link would open here");
  };

  const shareBooking = () => {
    // TODO: Share via social/email
    alert("Share booking link copied");
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] font-sans">
      {/* Nav */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-stone-800 tracking-tight">
              Positive <span style={{ color: "#C1714F" }}>Space</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-stone-600">
            <a href="/spaces" className="hover:text-stone-900 transition">Browse Spaces</a>
            <a href="/dashboard" className="hover:text-stone-900 transition">Dashboard</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="/dashboard" className="text-sm text-stone-600 hover:text-stone-900 transition">Dashboard</a>
            <button className="text-sm bg-stone-800 text-white px-4 py-2 rounded-full hover:bg-stone-700 transition">
              Log out
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Booking Confirmed!
          </div>
          <h1 className="text-4xl font-bold text-stone-800 mb-4">You're all set</h1>
          <p className="text-stone-600 text-lg">Your exclusive workspace is reserved.</p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-lg">
          <h2 className="text-2xl font-bold text-stone-800 mb-6">{booking.venue}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-sm text-stone-500 mb-1">Location</p>
              <p className="font-medium">{booking.neighborhood}</p>
            </div>
            <div>
              <p className="text-sm text-stone-500 mb-1">Date & Time</p>
              <p className="font-medium">{booking.date} · {booking.time}</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-amber-800 mb-2">Your Exclusive Welcome</h3>
            <p className="text-amber-700">{booking.perk}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={addToCalendar}
              className="flex-1 bg-[#C1714F] text-white py-4 px-6 rounded-xl font-medium transition hover:opacity-90"
            >
              Add to Calendar
            </button>
            <button
              onClick={shareBooking}
              className="flex-1 bg-stone-800 text-white py-4 px-6 rounded-xl font-medium transition hover:bg-stone-700"
            >
              Share Booking
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-600 mb-4">Manage all your bookings anytime.</p>
          <a href="/dashboard" className="inline-block bg-[#C1714F] text-white px-8 py-3 rounded-xl font-medium transition">
            Go to Dashboard
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-400 py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="text-white font-bold text-lg mb-2">Positive Space</div>
            <p className="text-sm max-w-xs leading-relaxed">
              Exclusive co-working experiences for select professionals.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div>
              <div className="text-white font-medium mb-3">For Workers</div>
              <div className="flex flex-col gap-2">
                <a href="/spaces" className="hover:text-white transition">Browse Spaces</a>
                <a href="/dashboard" className="hover:text-white transition">Dashboard</a>
              </div>
            </div>
            <div>
              <div className="text-white font-medium mb-3">For Venues</div>
              <div className="flex flex-col gap-2">
                <a href="/vendor" className="hover:text-white transition">Partner with Us</a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-stone-700 text-sm text-center">
          © 2026 Positive Space. Invite-only.
        </div>
      </footer>
    </main>
  );
}
