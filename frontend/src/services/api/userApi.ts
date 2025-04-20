import { apiSlice } from './apiSlice';

interface UserData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  content?: {
    meta?: {
      token?: string;
    };
  };
  [key: string]: any;
}

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<AuthResponse, UserData>({
      query: (userData) => ({
        url: '/users/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation<AuthResponse, LoginData>({
      query: (loginData) => ({
        url: '/users/signin',
        method: 'POST',
        body: loginData,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
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
