import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className="px-10 py-20 bg-white text-black flex flex-col md:flex-row justify-between items-end gap-12">

                {/* Brand / Copyright */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold ">Mansara Books</h2>
                    <p className="text-xs opacity-50"> 2026 All Stories Reserved.</p>
                </div>

                {/* Navigation - Simple List */}
                <nav className="flex flex-col gap-1 text-sm tracking-tight">
                    <a href="#" className="hover:line-through">Catalog</a>
                    <a href="#" className="hover:line-through">Archives</a>
                    <a href="#" className="hover:line-through">Contact</a>
                </nav>

                {/* Social / Utility */}
                <div className="flex flex-col gap-1 text-sm text-right">
                    <p className="opacity-50 uppercase text-[10px] tracking-widest mb-1">Stay Connected</p>
                    <a href="#" className="hover:line-through italic">Instagram</a>
                    <a href="#" className="hover:line-through italic">Newsletter</a>
                </div>

            </footer>

        </div>
    )
}
