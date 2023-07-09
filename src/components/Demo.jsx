import { useState,useEffect } from "react"
import {copy,linkIcon,loader,tick} from '../assets';
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article,setArticle]=useState({
    url:'',
    summary:'',  
  })
  //now we have to store the articles and then display it
  const [allarticles,setAllarticles]=useState([]);

  
  const [getSummary,{error,isFetching}]=useLazyGetSummaryQuery();


  useEffect(()=>{
    const articlesfromlocalstorage=JSON.parse(localStorage.getItem('articles'));
    if(articlesfromlocalstorage){
      setAllarticles(articlesfromlocalstorage);
    }

  },[]);

 

  const handlesubmit= async(e)=>{
    e.preventDefault(); //to stop reloading

    const {data}=await getSummary({articleUrl:article.url});

    if(data?.summary){
      const newArticle={...article,summary:data.summary};
      //article ko spread karke uske summary mein data ke summary ko daalna
      
      const updatedAllArticles=[newArticle,...allarticles]; //pushing the newarticle into allarticles array

      setArticle(newArticle);
      setAllarticles(updatedAllArticles);

      localStorage.setItem('articles',JSON.stringify(updatedAllArticles))
      
    }
   
  }

  return (
  <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
      <form action="" className="relative flex justify-center items-center" onSubmit={handlesubmit}>
        <img src={linkIcon} alt="" className="absolute left-0 my-2 ml-3 w-5" />
        <input type="url" placeholder="enter a URL" value={article.url} onChange={(e)=>{setArticle({...article,url:e.target.value})}} required className="url_input peer"></input>
        <button type="submit" className="submit-btn peer-focus:border-gray-700 peer-focus:text-gray-700 ">⬅️</button>
      </form>
      {/*Browse Url history */ }
      <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
        {allarticles.map((item,index)=>(
          <div key={`link-${index}`} onClick={()=>setArticle(item)} className="link_card">
            <div className="copy-btn">
              <img src={copy} alt="copy_icon" className="w-[40%] h-[40%] object-contain"/>
            </div>
            <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">{item.url}</p>


          </div>


        )//not using a paranthesis here,we have to return something so not use curly brace

        ) }
      </div>
    </div>
    {/*Display results */}
    <div className='my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            Well, that wasn't supposed to happen...
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                Article <span className='blue_gradient'>Summary</span>
              </h2>
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-700'>
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>

    
  </section>
    
    
  )
}

export default Demo



