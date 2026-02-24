import React from 'react';
import { Link } from 'react-router';
import { products } from '~/data/products';

export default function Cart() {
    // Mock cart data
    const cart = [
        { ...products[0], quantity: 1 },
        { ...products[1], quantity: 2 },
    ];

    const subtotal = cart.reduce((acc, item) => acc + (item.numericPrice * item.quantity), 0);

    return (
        <div className="bg-white text-black min-h-screen">
            <section className="max-w-7xl mx-auto px-10 py-20">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-20">
                    Your <br /> Selection.
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-12">
                        {cart.map((item) => (
                            <div key={item.id} className="group flex flex-col sm:flex-row gap-10 pb-12 border-b border-black/5 items-start">
                                <div className="w-40 h-56 flex-shrink-0 bg-gray-50 border border-black/10 overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                                </div>
                                <div className="flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                                        <button className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-red-600 transition">
                                            [ Remove ]
                                        </button>
                                    </div>
                                    <p className="text-xs uppercase tracking-widest opacity-40 mb-8">{item.author}</p>

                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center border border-black/10">
                                            <button className="px-4 py-2 hover:bg-black/5 transition text-lg">&minus;</button>
                                            <span className="px-6 py-2 border-x border-black/10 font-bold text-sm">{item.quantity}</span>
                                            <button className="px-4 py-2 hover:bg-black/5 transition text-lg">+</button>
                                        </div>
                                        <span className="text-lg font-bold">Rs. {item.numericPrice * item.quantity}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Section */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-10 border border-black p-10 space-y-10">
                            <h2 className="text-2xl font-bold tracking-tight uppercase">Summary</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="opacity-50 uppercase tracking-widest">Subtotal</span>
                                    <span className="font-bold">Rs. {subtotal}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="opacity-50 uppercase tracking-widest">Shipping</span>
                                    <span className="font-bold uppercase tracking-widest">Comp.</span>
                                </div>
                                <div className="h-px bg-black/10 my-6"></div>
                                <div className="flex justify-between items-baseline">
                                    <span className="text-lg font-bold uppercase tracking-widest text-black">Total</span>
                                    <span className="text-3xl font-bold">Rs. {subtotal}</span>
                                </div>
                            </div>

                            <Link
                                to="/checkout"
                                className="block w-full text-center py-5 bg-black text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-gray-800 transition shadow-xl"
                            >
                                Proceed to Checkout
                            </Link>

                            <p className="text-[10px] text-center opacity-40 uppercase tracking-widest">
                                Secure transaction guaranteed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
