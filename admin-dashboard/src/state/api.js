// createApi() - This function is used to create an API slice. It takes an object as an argument that defines the endpoints and their configurations for the API.
// fetchBaseQuery() - This function is used as the base for all requests made with the API slice. It handles the logic for making HTTP requests to the API and returns the response.
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "commonUnit";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transactions"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
      // query: () => "client/customers",
      // providesTags: ["Customers"],
    }),
  }),
});

// useGetUserQuery IT IS COMING FROM GET USER WE JUST ADD PREFIXES (use) AND SUFFIIXES (Query) WITH IT
export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
} = api;
