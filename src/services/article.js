import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


// const options = {
//     method: 'GET',
//     url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//     params: {
//       url: 'https://time.com/6266679/musk-ai-open-letter/',
//       length: '3'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'af3cf53dfamsh61d2780db3beb05p13db55jsn90367eb23c7f',
//       'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//     }
//   }; 
const rapidApikey=import.meta.env.VITE_RAPID_API_ARTICLE_KEY;


export const articleApi=createApi({

    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key',rapidApikey);
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }), 
    endpoints:(builder)=>({
        getSummary:builder.query({
            query:(params)=>`summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})
//automatically an hook is created out of it

export const {useLazyGetSummaryQuery}=articleApi;

//in base url write down that api which you want to call