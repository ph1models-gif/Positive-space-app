'use client';

import { useState } from "react";

export default function Vendor() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    neighborhood: "",
    amenities: "",
    perk: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit to backend
    console.log("Vendor listing submitted:", formData);
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
            <a href="/vendor" className="hover:text-stone-900 transition font-medium">Vendor Portal</a>
            <a href="/investors" className="hover:text-stone-900 transition">Investors</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="/dashboard" className="text-sm text-stone-600 hover:text-stone-900 transition">Dashboard</a>
            <a href="/login" className="text-sm bg-stone-800 text-white px-4 py-2 rounded-full hover:bg-stone-700 transition">
              Sign In
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-stone-800 mb-4 text-center">Partner with Positive Space</h1>
        <p className="text-stone-500 mb-12 text-center max-w-xl mx-auto">
          Attract premium professionals to your venue during daytime hours. Boost revenue with curated experiences.
        </p>

        <div className="bg-white rounded-2xl p-8 border border-stone-100 mb-12">
          <h2 className="text-2xl font-bold text-stone-800 mb-6">Why partner?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-center p-6 border border-stone-200 rounded-xl">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold text-stone-800 mb-2">Increase Revenue</h3>
              <p className="text-stone-600">Turn empty daytime hours into paying customers.</p>
            </div>
            <div className="text-center p-6 border border-stone-200 rounded-xl">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-semibold text-stone-800 mb-2">Premium Clientele</h3>
              <p className="text-stone-600">Attract discerning professionals who value quality.</p>
            </div>
            <div className="text-center p-6 border border-stone-200 rounded-xl">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="font-semibold text-stone-800 mb-2">Proven Results</h3>
              <p className="text-stone-600">Venues see 30%+ daytime revenue increase.</p>
            </div>
            <div className="text-center p-6 border border-stone-200 rounded-xl">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-semibold text-stone-800 mb-2">Easy Partnership</h3>
              <p className="text-stone-600">No contracts, no fees—just great guests.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-stone-100">
          <h2 className="text-2xl font-bold text-stone-800 mb-6">List Your Space</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Venue Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#C1714F] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Type</label>
              <input
                type="text"
                name="type"
                placeholder="Hotel Lobby, Coffee Shop, Rooftop..."
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#C1714F] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Neighborhood</label>
              <input
                type="text"
                name="neighborhood"
                placeholder="Midtown, SoHo, Williamsburg..."
                value={formData.neighborhood}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#C1714F] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#C1714F] focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-stone-700 mb-2">Amenities (comma separated)</label>
            <textarea
              name="amenities"
              value={formData.amenities}
              onChange={handleChange}
              placeholder="WiFi, Outlets, Views, Quiet..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#C1714F] focus:outline-none"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-stone-700 mb-2">Curated Welcome Experience</label>
            <textarea
              name="perk"
              value={formData.perk}
              onChange={handleChange}
              placeholder="Exclusive lunch service, Curated coffee tasting..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#C1714F] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-8 py-4 text-white rounded-xl font-bold text-lg transition"
            style={{ backgroundColor: "#C1714F" }}
          >
            Submit Your Space
          </button>
        </form>
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
                <a href="/invite" className="hover:text-white transition">Request Invitation</a>
              </div>
            </div>
            <div>
              <div className="text-white font-medium mb-3">For Venues</div>
              <div className="flex flex-col gap-2">
                <a href="/vendor" className="hover:text-white transition font-medium">Partner with Us</a>
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
