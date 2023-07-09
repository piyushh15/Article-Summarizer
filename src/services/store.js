import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store=configureStore({
    reducer:{
        [articleApi.reducerPath]:articleApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(articleApi.middleware)
    

})

//assume store or state as as a cake and reducre helps to get splice of tha cake 
//middleware helps to do something with the state before we get it 

//add articleApi.middleware in concat