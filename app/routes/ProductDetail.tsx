import React from 'react';
import { useParams, Link } from 'react-router';
import { products } from '~/data/products';

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="h-screen flex items-center justify-center bg-white text-black p-10">
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-4 tracking-tighter">404</h1>
                    <p className="uppercase tracking-widest opacity-50 mb-8 text-sm">Story Not Found</p>
                    <Link to="/products" className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition">Back to Library</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white text-black min-h-screen">
            <section className="max-w-4xl mx-auto px-6 py-12 md:py-24">

                {/* Back Link - Minimal */}
                <Link to="/products" className="text-[10px] uppercase tracking-widest opacity-30 hover:opacity-100 transition inline-block mb-12">
                    &larr; Return to Library
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Image - Focused */}
                    <div className="aspect-[3/4] overflow-hidden bg-gray-50 border border-black/5 p-4 transition-all duration-700 hover:shadow-2xl">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section - Simplified */}
                    <div className="flex flex-col space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-2">
                                {product.title}
                            </h1>
                            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">
                                By {product.author}
                            </p>
                        </div>

                        <p className="text-sm leading-relaxed opacity-70 max-w-sm italic">
                            {product.description}
                        </p>

                        <div className="pt-6 border-t border-black/5 flex items-center justify-between">
                            <span className="text-2xl font-bold tracking-tight">{product.price}</span>
                            <button
                                className="px-8 py-4 bg-black text-white uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-gray-800 transition"
                            >
                                Add to Archive
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
