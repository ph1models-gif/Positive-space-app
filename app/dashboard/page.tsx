'use client';

import { useState } from "react";

const mockBookings = [
  {
    id: 1,
    venue: "The Lobby at The Arlo",
    neighborhood: "Midtown",
    date: "2026-03-30",
    time: "10:00 AM - 2:00 PM",
    status: "Upcoming",
  },
  {
    id: 2,
    venue: "Skyline Studio",
    neighborhood: "LIC",
    date: "2026-03-28",
    time: "9:00 AM - 1:00 PM",
    status: "Completed",
  },
];

export default function Dashboard() {
  const [bookings, setBookings] = useState(mockBookings);

  const cancelBooking = (id: number) => {
    setBookings(bookings.filter((b) => b.id !== id));
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
            <a href="/dashboard" className="hover:text-stone-900 transition font-medium">Dashboard</a>
            <a href="/vendor" className="hover:text-stone-900 transition">Vendor Portal</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="/profile" className="text-sm text-stone-600 hover:text-stone-900 transition">Profile</a>
            <button className="text-sm bg-stone-800 text-white px-4 py-2 rounded-full hover:bg-stone-700 transition">
              Log out
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-stone-800 mb-8">Your Bookings</h1>
        
        <div className="grid gap-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-stone-800">{booking.venue}</h2>
                  <p className="text-stone-600 mb-1">{booking.neighborhood}</p>
                  <p className="text-sm text-stone-500">{booking.date} · {booking.time}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${booking.status === "Upcoming" ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"}`}>
                  {booking.status}
                </span>
              </div>
              {booking.status === "Upcoming" && (
                <button
                  onClick={() => cancelBooking(booking.id)}
                  className="mt-4 text-sm text-[#C1714F] hover:underline"
                >
                  Cancel booking
                </button>
              )}
            </div>
          ))}
        </div>

        {bookings.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-stone-800 mb-4">No bookings yet</h2>
            <p className="text-stone-600 mb-8">Book a space to get started.</p>
            <a href="/spaces" className="bg-[#C1714F] text-white px-8 py-3 rounded-xl font-medium transition">
              Browse Spaces
            </a>
          </div>
        )}
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
                <a href="/investors" className="hover:text-white transition">Investors</a>
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
