import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),
        getProductsByName: builder.query({
            query: (name) => `/products/search?q=${name}`,
        }),
    }),

})


export const {useGetProductsQuery, useGetProductByIdQuery, useGetProductsByNameQuery} = products;