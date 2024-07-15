import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/products",
      }),
      providesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (id: string) => ({
        method: "GET",
        url: `/product/${id}`,
      }),
      providesTags: ["product"],
    }),
    addAProduct: builder.mutation({
      query: (newProduct) => ({
        method: "POST",
        url: `/product`,
        body: newProduct,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, updateProduct }) => ({
        method: "PUT",
        url: `/product/${id}`,
        body: updateProduct,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        method: "DELETE",
        url: `/product/${id}`,
      }),
      invalidatesTags: ["product"],
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
  useAddAProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = baseApi;
