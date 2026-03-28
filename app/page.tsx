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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] font-sans">
      {/* Nav */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-stone-800 tracking-tight">
              Positive <span className="text-terracotta-500" style={{color: '#C1714F'}}>Space</span>
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

      {/* Hero */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-amber-50 text-amber-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-amber-200">
            🗽 Now available across NYC
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 leading-tight mb-6">
            Work anywhere in NYC,<br />
            <span style={{color: '#C1714F'}}>completely free.</span>
          </h1>
          <p className="text-xl text-stone-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a co-working spot at NYC&apos;s best hotels, cafes, bars, and restaurants.
            Free for users — venues welcome you with perks to get you in the door.
          </p>

          {/* Search Bar */}
          <div className="bg-white border border-stone-200 rounded-2xl shadow-lg p-2 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-stone-50 rounded-xl">
              <span className="text-stone-400">📍</span>
              <input
                type="text"
                placeholder="Neighborhood (e.g. SoHo, Williamsburg)"
                className="bg-transparent flex-1 text-stone-700 placeholder-stone-400 outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-stone-50 rounded-xl md:w-40">
              <span className="text-stone-400">🕐</span>
              <input
                type="text"
                placeholder="Any time"
                className="bg-transparent flex-1 text-stone-700 placeholder-stone-400 outline-none text-sm"
              />
            </div>
            <button
              className="px-8 py-3 text-white rounded-xl font-medium transition text-sm"
              style={{backgroundColor: '#C1714F'}}
            >
              Find a space
            </button>
          </div>

          {/* Quick filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {["☕ Coffee Shop", "🏨 Hotel Lobby", "🍺 Bar", "🍽️ Restaurant", "🌿 Rooftop"].map((tag) => (
              <button
                key={tag}
                className="text-sm text-stone-600 bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-full transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 text-center mb-12">How Positive Space works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: "🔍", title: "Find a space", desc: "Browse venues by neighborhood, vibe, or amenities. Every spot is free to book." },
              { emoji: "🎁", title: "Claim your perk", desc: "Each venue offers a welcome gift — free coffee, a bagel, cold brew, and more." },
              { emoji: "💼", title: "Work & enjoy", desc: "Show up, get settled, enjoy your perk. Venues love having you — explore their menu too." },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <div className="text-4xl mb-4">{step.emoji}</div>
                <h3 className="font-semibold text-stone-800 mb-2">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-stone-800">Featured spaces</h2>
            <a href="/spaces" className="text-sm font-medium hover:underline" style={{color: '#C1714F'}}>
              View all →
            </a>
          </div>
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
                  <div className="absolute top-3 right-3 bg-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm" style={{color: '#C1714F'}}>
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
      </section>

      {/* For Venues CTA */}
      <section className="py-16 px-4" style={{backgroundColor: '#F5EDE7'}}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Own a venue? Turn empty daytime hours into revenue.</h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            List your space for free. Remote workers book it, show up, and become paying customers.
            Hotels, bars, coffee shops, and restaurants across NYC are already growing their daytime revenue.
          </p>
          <a
            href="/vendor"
            className="inline-block text-white px-8 py-4 rounded-full font-medium text-sm transition hover:opacity-90"
            style={{backgroundColor: '#C1714F'}}
          >
            List your space — it&apos;s free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-400 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="text-white font-bold text-lg mb-2">Positive Space</div>
            <p className="text-sm max-w-xs leading-relaxed">
              Free co-working spots at NYC&apos;s best venues. Work anywhere, enjoy perks, support local businesses.
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

