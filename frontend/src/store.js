import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice.js';



const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
   
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;


//apiSlice ka reducer laane ke liye we have used apiSlice.reducerPath ---- because we are just brininging in the reducer.
