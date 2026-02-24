import React, { useState } from 'react';
import { Link } from 'react-router';

export default function Checkout() {
    const [isOrdered, setIsOrdered] = useState(false);
    const subtotal = 1300; // Static subtotal based on mock cart

    if (isOrdered) {
        return (
            <div className="bg-white text-black min-h-screen flex items-center justify-center p-10">
                <div className="max-w-md text-center">
                    <div className="mb-10 text-8xl">✓</div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Archive Updated.</h1>
                    <p className="text-sm uppercase tracking-widest opacity-50 mb-12 leading-relaxed">
                        Your request has been processed. The selected stories will reach your sanctuary shortly.
                    </p>
                    <Link
                        to="/products"
                        className="inline-block px-12 py-5 bg-black text-white text-xs uppercase tracking-widest font-bold hover:bg-gray-800 transition shadow-xl"
                    >
                        Back to Library
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white text-black min-h-screen">
            <section className="max-w-7xl mx-auto px-10 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Checkout Form */}
                    <div className="space-y-20">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                            Shipping <br /> Details.
                        </h1>

                        <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); setIsOrdered(true); }}>
                            <div className="grid grid-cols-1 gap-12">
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">FullName / Identity</label>
                                    <input required type="text" className="w-full border-b border-black/20 focus:border-black outline-none pb-4 text-xl tracking-tight transition" placeholder="Laxman Adhikari" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">Sanctuary Address</label>
                                    <input required type="text" className="w-full border-b border-black/20 focus:border-black outline-none pb-4 text-xl tracking-tight transition" placeholder="Kathmandu, Nepal" />
                                </div>
                                <div className="grid grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">Contact Channel</label>
                                        <input required type="email" className="w-full border-b border-black/20 focus:border-black outline-none pb-4 text-xl tracking-tight transition" placeholder="name@domain.com" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">Passkey / Zip</label>
                                        <input required type="text" className="w-full border-b border-black/20 focus:border-black outline-none pb-4 text-xl tracking-tight transition" placeholder="44600" />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-6 bg-black text-white text-xs uppercase tracking-[0.4em] font-bold hover:bg-gray-800 transition transform active:scale-[0.98] shadow-2xl"
                            >
                                Confirm Selection &bull; Rs. {subtotal}
                            </button>
                        </form>
                    </div>

                    {/* Order Review - Minimalism */}
                    <div className="hidden lg:block">
                        <div className="sticky top-10 flex flex-col h-fit space-y-12 p-10 bg-gray-50/50 border border-black/5">
                            <h2 className="text-xs uppercase tracking-widest font-bold opacity-40">Order Review</h2>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-bold">Marphin <span className="opacity-40 font-normal ml-2">x1</span></span>
                                    <span className="opacity-60 italic">Rs. 300</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-bold">Bahurupi <span className="opacity-40 font-normal ml-2">x2</span></span>
                                    <span className="opacity-60 italic">Rs. 1000</span>
                                </div>
                            </div>
                            <div className="h-px bg-black/10"></div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Final Amount</span>
                                <span className="text-4xl font-bold tracking-tighter">Rs. {subtotal}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
