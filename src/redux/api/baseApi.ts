import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/products",
      }),
    }),
    getProductById: builder.query({
      query: (id: string) => ({
        method: "GET",
        url: `/product/${id}`,
      }),
      providesTags: ["products"],
    }),
    getBenefits: builder.query({
      query: () => ({
        method: "GET",
        url: "/benefits",
      }),
    }),
    getImages: builder.query({
      query: () => ({
        method: "GET",
        url: "/benefits/images",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetBenefitsQuery,
  useGetImagesQuery,
} = baseApi;
