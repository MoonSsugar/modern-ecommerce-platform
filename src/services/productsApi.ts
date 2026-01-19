import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  id: number,
  title: string, 
  price: number,
  rating: number,
  thumbnail: string
}

interface ProductsResponse {
  products: Product[],
  total: number,
  skip: number,
  limit: number
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, void>({
      query: () => "products",
      providesTags: ["Product"]
    }),
    deleteProduct: builder.mutation<Product, number>({
      query: (id: number) => ({ url: `products/${id}`, method: "DELETE"}),
      invalidatesTags: ["Product"],
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (body) => 
        ({ url: "products/add", method: "POST", body}),
      invalidatesTags: ["Product"]
    })
  }),
});

export const { 
  useGetProductsQuery, 
  useDeleteProductMutation, 
  useAddProductMutation
} = productsApi;