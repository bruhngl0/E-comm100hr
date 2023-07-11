import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants.js';

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'Order', 'User'],
    endpoints: (builder)=> ({})
})


// there's a concept in redux called slices which is a way to organise a state, 
//so its a collection of reducers and actions that are related to each other
// we can have multiple slices in our application and each slice can have its own state

//since we are working with the backend API we are gonna have a rootAPI slice and the we will extend that
//with the further slices, i.e. product API slices, Orders API slices, Users API slice, so for now we just have set up
//the base API slice down, this slice is gonna be the parent to other API slices


// {createSlice function is used when we are not dealing with the asynchronous requests, eg cart state. etc,}
// since we are dealing with the backend API we will use {createApi}, it works a bit differently

// [tagTypes] ----  are used to define the type of data that we are fetching from API

//endpoints----  we dont have to mannualy fetch our data, ie -  try catch with the fetch API
//inside it or axios for the crud requests and so on, we can do it all through the builder, the syntax of it 
//might be confusing at first but once, its done you'll see its very easy to make those requests

//now add this apiSlice to the store