'use client';

import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle signup logic (e.g., API call)
    console.log("Signup submitted:", formData);
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
            <a href="/vendor" className="hover:text-stone-900 transition">List Your Space</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="/login" className="text-sm text-stone-600 hover:text-stone-900 transition">Log in</a>
          </div>
        </div>
      </nav>

      {/* Signup Form */}
      <div className="max-w-md mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-stone-800 mb-2 text-center">Create your account</h1>
        <p className="text-stone-500 mb-8 text-center">Sign up free and start booking spaces today.</p>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border border-stone-100">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#C1714F] focus:outline-none"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#C1714F] focus:outline-none"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#C1714F] focus:outline-none"
              required
              minLength={8}
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 text-white rounded-xl font-medium transition text-sm"
            style={{ backgroundColor: "#C1714F" }}
          >
            Sign up free
          </button>
        </form>
        
        <p className="text-sm text-stone-500 mt-4 text-center">
          Already have an account? <a href="/login" className="text-[#C1714F] hover:underline">Log in</a>
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-400 py-12 px-4 mt-auto">
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
