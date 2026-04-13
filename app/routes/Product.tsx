import React from 'react'
import Card from '~/components/Card'
import { products } from '~/data/products'
import { useGetProductsByNameQuery, useGetProductsQuery } from '~/services/products';

export default function Product() {
    const [input, setInput] = React.useState("");

    const { data, error, isLoading } = useGetProductsQuery("");
    const { data: searchData, error: searchError, isLoading: searchIsLoading } = useGetProductsByNameQuery(input)


 


    return (
        <div className="bg-white">
            <section className="min-h-screen py-12 px-6 sm:px-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 px-4">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-tight mb-4 md:mb-0">
                        The <br className="hidden md:block" /> Collection.
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">
                        Curated Stories for the Discerning Reader
                    </p>
                </div>
                <div className="flex justify-center mb-16">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Search by name"
                        className="border border-black px-4 py-2 w-full max-w-md"
                    />
                </div>
                {input !== "" ? (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 px-4">
                        {searchData?.products?.map((product: any) => (
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

                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 px-4">
                        {data?.products?.map((product: any) => (
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

                )}
            </section>
        </div>
    )
}
