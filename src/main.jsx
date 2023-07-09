import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import {Provider} from 'react-redux'
import { store } from './services/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
)


//step1:import provider from react redux
//step2:wrap your entire application in it which is going to service our app with something known as store
//step3:create a store meaning a global state  import { configureStore } from "@reduxjs/toolkit";

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// export const store=configureStore({
//     reducer:{},
//     middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat()
//     

// })

//assume store or state as as a cake and reducre helps to get splice of tha cake 
//middleware helps to do something with the state before we get it 

//step5 create article.js
// import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// export const articleApi=createApi({
//     reducerPath:'articleApi',
// })

// step6 export it in store.js
// reducer:{
//   [articleApi.reducerPath]:articleApi.reducer
// },
// middleware:(getDefaultMiddleware)=>
//   getDefaultMiddleware().concat(articleApi.middleware)
// 

//step7 import { store } from './services/store.js'; in main.jsx
//<Provider store={store}>