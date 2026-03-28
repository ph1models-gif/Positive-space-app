'use client';

import { useState } from "react";

const venues = [
  {
    id: 1,
    name: "The Lobby at The Arlo",
    neighborhood: "Midtown",
    type: "Hotel Lobby",
    price: 0,
    perk: "Free drip coffee on arrival",
    perkEmoji: "☕",
    hours: "7am – 6pm",
    rating: 4.8,
    reviews: 124,
    amenities: ["WiFi", "Outlets", "Coffee", "Quiet"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 2,
    name: "Dusk Bar & Lounge",
    neighborhood: "Williamsburg",
    type: "Bar",
    price: 0,
    perk: "Free bagel with cream cheese",
    perkEmoji: "🥯",
    hours: "9am – 4pm",
    rating: 4.6,
    reviews: 89,
    amenities: ["WiFi", "Outlets", "Food", "Chill Vibe"],
    image: "https://images.unsplash.com/photo-1543007631-283050bb3e8c?w=800&q=80",
  },
  {
    id: 3,
    name: "Grounds & Co.",
    neighborhood: "SoHo",
    type: "Coffee Shop",
    price: 0,
    perk: "Free donut with any purchase",
    perkEmoji: "🍩",
    hours: "7am – 5pm",
    rating: 4.9,
    reviews: 203,
    amenities: ["WiFi", "Outlets", "Coffee", "Fast WiFi"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
  },
  {
    id: 4,
    name: "Maison West",
    neighborhood: "West Village",
    type: "Restaurant",
    price: 0,
    perk: "Half-price lunch special",
    perkEmoji: "🥗",
    hours: "10am – 3pm",
    rating: 4.7,
    reviews: 67,
    amenities: ["WiFi", "Outlets", "Food", "Peaceful"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id: 5,
    name: "Skyline Studio",
    neighborhood: "LIC",
    type: "Rooftop",
    price: 0,
    perk: "Free cold brew on arrival",
    perkEmoji: "🧋",
    hours: "8am – 7pm",
    rating: 4.9,
    reviews: 156,
    amenities: ["WiFi", "Outlets", "Views", "Fresh Air"],
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
  },
];

export default function Spaces() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF8F5] font-sans">
      {/* Nav - same as homepage */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-stone-800 tracking-tight">
              Positive <span className="text-terracotta-500" style={{color: "#C1714F"}}>Space</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-stone-600">
            <a href="/spaces" className="hover:text-stone-900 transition">Browse Spaces</a>
            <a href="/vendor" className="hover:text-stone-900 transition">List Your Space</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="/login" className="text-sm text-stone-600 hover:text-stone-900 transition">Log in</a>
            <a href="/signup" className="text-sm bg-stone-800 text-white px-4 py-2 rounded-full hover:bg-stone-700 transition">
              Sign up free
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Filter sidebar - hidden on mobile, toggleable */}
        <aside className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-64 shrink-0`}>
          <div className="bg-white rounded-2xl p-6 border border-stone-100 sticky top-20">
            <h2 className="text-lg font-bold text-stone-800 mb-6">Filters</h2>
            
            {/* Neighborhood */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-stone-700 mb-3">Neighborhood</h3>
              <div className="space-y-2">
                {["Midtown", "Williamsburg", "SoHo", "West Village", "LIC"].map((hood) => (
                  <label key={hood} className="flex items-center gap-2 text-sm text-stone-600">
                    <input type="checkbox" className="rounded text-[#C1714F]" />
                    {hood}
                  </label>
                ))}
              </div>
            </div>

            {/* Type */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-stone-700 mb-3">Type</h3>
              <div className="space-y-2">
                {["Hotel Lobby", "Bar", "Coffee Shop", "Restaurant", "Rooftop"].map((type) => (
                  <label key={type} className="flex items-center gap-2 text-sm text-stone-600">
                    <input type="checkbox" className="rounded text-[#C1714F]" />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-sm font-semibold text-stone-700 mb-3">Amenities</h3>
              <div className="space-y-2">
                {["WiFi", "Outlets", "Coffee", "Quiet", "Food", "Chill Vibe", "Fast WiFi", "Peaceful", "Views", "Fresh Air"].map((amenity) => (
                  <label key={amenity} className="flex items-center gap-2 text-sm text-stone-600">
                    <input type="checkbox" className="rounded text-[#C1714F]" />
                    {amenity}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Venue grid */}
        <div className="flex-1">
          {/* Mobile filter toggle */}
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden w-full mb-4 px-4 py-3 bg-white rounded-xl border border-stone-200 flex items-center justify-between text-sm text-stone-700"
          >
            <span>Filters</span>
            <span>{showFilters ? "▲" : "▼"}</span>
          </button>

          <h1 className="text-3xl font-bold text-stone-800 mb-8">Browse Spaces</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue) => (
              <a key={venue.id} href={`/spaces/${venue.id}`} className="group bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white text-stone-700 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
                    {venue.type}
                  </div>
                  <div className="absolute top-3 right-3 bg-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm" style={{color: "#C1714F"}}>
                    FREE
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-stone-800 group-hover:text-stone-600 transition">{venue.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-stone-500 ml-2 shrink-0">
                      <span>⭐</span>
                      <span>{venue.rating}</span>
                      <span>({venue.reviews})</span>
                    </div>
                  </div>
                  <p className="text-sm text-stone-500 mb-3">{venue.neighborhood} · {venue.hours}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {venue.amenities.map((a) => (
                      <span key={a} className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">{a}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">
                    <span className="text-lg">{venue.perkEmoji}</span>
                    <span className="text-xs text-amber-800 font-medium">{venue.perk}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - same as homepage */}
      <footer className="bg-stone-800 text-stone-400 py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="text-white font-bold text-lg mb-2">Positive Space</div>
            <p className="text-sm max-w-xs leading-relaxed">
              Free co-working spots at NYC's best venues. Work anywhere, enjoy perks, support local businesses.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div>
              <div className="text-white font-medium mb-3">For Workers</div>
              <div className="flex flex-col gap-2">
                <a href="/spaces" className="hover:text-white transition">Browse Spaces</a>
                <a href="/signup" className="hover:text-white transition">Sign Up Free</a>
                <a href="/dashboard" className="hover:text-white transition">My Bookings</a>
              </div>
            </div>
            <div>
              <div className="text-white font-medium mb-3">For Venues</div>
              <div className="flex flex-col gap-2">
                <a href="/vendor" className="hover:text-white transition">List Your Space</a>
                <a href="/proposal" className="hover:text-white transition">Investor Info</a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-stone-700 text-sm text-center">
          © 2026 Positive Space. Made with ❤️ in NYC.
        </div>
      </footer>
    </main>
  );
}
