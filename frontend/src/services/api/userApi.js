import { apiSlice } from './apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/users/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: '/users/signin',
        method: 'POST',
        body: loginData,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("check",data?.content?.meta?.token);
          document.cookie = `token=${data?.content?.meta?.token}; path=/;`;
          console.log(data); 
        } catch (error) {
          console.error('Failed to login:', error);
        }
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = userApi;
