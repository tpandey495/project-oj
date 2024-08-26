import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.REACT_APP_BASE_URL, 
    prepareHeaders: (headers) => {
      const token = Cookies.get('token');
      console.log(token);
      if (token) {
        headers.set('authorization',token);
      }
      return headers;
    },
  }),
  endpoints: () => ({}), 
});
