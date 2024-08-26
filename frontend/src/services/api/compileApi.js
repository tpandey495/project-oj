import { apiSlice } from './apiSlice';

export const compileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    codeRun: builder.mutation({
      query: (code) => ({
        url: 'problems/run',
        method: 'POST',
        body: code,
      }),
    }),
  }),
});

export const { useCodeRunMutation } = compileApi;
