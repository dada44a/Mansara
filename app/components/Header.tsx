import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-20 shadow-md bg-white z-50 sticky top-0 px-6 sm:px-10 flex justify-between items-center transition-all duration-300">
      <Link to="/" className="font-bold text-xl uppercase tracking-[0.3em] hover:opacity-70 transition-opacity">
        Mansara
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10 items-center text-[10px] font-bold uppercase tracking-[0.2em]">
        <Link to="/" className="hover:opacity-50 transition border-b border-transparent hover:border-black pb-1">Home</Link>
        <Link to="/products" className="hover:opacity-50 transition border-b border-transparent hover:border-black pb-1">Library</Link>
        <Link to="/contact" className="hover:opacity-50 transition border-b border-transparent hover:border-black pb-1">Philosophy</Link>
        <Link to="/cart" className="relative hover:opacity-50 transition pb-1">
          Archive
        </Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center gap-6 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1.5 focus:outline-none z-[60]"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-12 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center gap-8 text-2xl font-bold uppercase tracking-[0.4em]">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:opacity-50 transition">Home</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="hover:opacity-50 transition">Library</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:opacity-50 transition">Philosophy</Link>
          <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="relative hover:opacity-50 transition">
            Archive
          </Link>
        </nav>

        <button
          onClick={() => setIsMenuOpen(false)}
          className="mt-20 text-[10px] uppercase tracking-[0.5em] opacity-40 hover:opacity-100 transition"
        >
          [ Close ]
        </button>
      </div>
    </header>
  );
}

