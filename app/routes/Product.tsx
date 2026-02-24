import React from 'react'
import Card from '~/components/Card'
import { products } from '~/data/products'

export default function Product() {
    return (
        <div className="bg-white">
            <section className="min-h-screen p-5 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 px-5">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                        The <br /> Collection.
                    </h2>
                    <p className="text-xs uppercase tracking-[0.3em] opacity-40 mt-4 md:mt-0">
                        Curated Stories for the Discerning Reader
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 p-5">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            author={product.author}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}
