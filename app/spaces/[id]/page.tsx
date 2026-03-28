'use client';

import { notFound } from "next/navigation";

// Mock venues data (same as homepage and spaces page)
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
    description: "Spacious hotel lobby with comfortable seating and a productive atmosphere. Perfect for focused work sessions.",
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
    description: "Cozy bar with a relaxed vibe, ideal for creative work or casual meetings.",
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
    description: "Bustling coffee shop with high-speed WiFi and plenty of outlets for all-day productivity.",
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
    description: "Charming restaurant with a peaceful ambiance, great for focused work and light meals.",
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
    description: "Stunning rooftop space with panoramic views and fresh air to inspire your workday.",
  },
];

export default function VenueDetail({ params }: { params: { id: string } }) {
  const venue = venues.find((v) => v.id === parseInt(params.id));

  if (!venue) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] font-sans">
      {/* Nav - same as other pages */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-stone-800 tracking-tight">
              Positive <span style={{ color: "#C1714F" }}>Space</span>
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

      {/* Venue Hero */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{venue.name}</h1>
          <p className="text-lg">{venue.neighborhood} · {venue.type}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left column: Description and Amenities */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-stone-800 mb-4">About this space</h2>
            <p className="text-stone-600 mb-6">{venue.description}</p>
            
            <h3 className="text-xl font-semibold text-stone-800 mb-4">Amenities</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {venue.amenities.map((a) => (
                <span key={a} className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-sm">
                  {a}
                </span>
              ))}
            </div>
            
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-center gap-3 mb-6">
              <span className="text-2xl">{venue.perkEmoji}</span>
              <div>
                <p className="text-amber-800 font-medium">{venue.perk}</p>
                <p className="text-sm text-amber-700">Included with your booking</p>
              </div>
            </div>
          </div>

          {/* Right column: Booking Card */}
          <div className="bg-white rounded-2xl p-6 border border-stone-100 sticky top-20">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-stone-800">Free</span>
              <div className="flex items-center gap-1 text-sm text-stone-500">
                <span>⭐ {venue.rating}</span>
                <span>({venue.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="border-t border-b border-stone-200 py-4 mb-4">
              <p className="text-stone-600 mb-2">Available hours</p>
              <p className="font-medium text-stone-800">{venue.hours}</p>
            </div>
            
            <button
              className="w-full py-3 text-white rounded-xl font-medium transition text-sm"
              style={{ backgroundColor: "#C1714F" }}
            >
              Book now
            </button>
            <p className="text-xs text-stone-500 mt-2 text-center">No payment required</p>
          </div>
        </div>
      </div>

      {/* Footer - same as other pages */}
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
