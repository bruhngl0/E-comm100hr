import { PRODUCTS_URL } from "../constants.js"
import { apiSlice } from "./apiSlice.js"

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getProducts: builder.query({
            query: ()=> ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5
        }),

        getProductDetails: builder.query({
            query: (productId) => ({
              url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 5,
          }),
    }),
})

export const { useGetProductsQuery,  useGetProductDetailsQuery} = productsApiSlice;



/* just to kinda reiterate, we have our redux store, that (Provider) wraps our react application, 
and then we have the ApiSlice, which we can think of as the parent for the rest of our ApiSlices (product, order,user), 
and then we have end points, we are not putting any specific end points in this parent but, 
we have our productsApiSlice, which is injecting end points into the main API slice.

so we dont have tp bring in our productsApi reducer in the store, because we are already taking in the parent API reducer"


then we have one end point, i.e. getProducts: and thats gonna hit the PRODUCTS_URL,
its a query so its gonna make a get request, we are then exporting that query, and then
in the home screen we are importing that query to fetch the data
*/