import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl:process.env.REACT_APP_BASE_URL}), 
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/users/signup', 
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});


export const { useRegisterUserMutation } = apiSlice;
