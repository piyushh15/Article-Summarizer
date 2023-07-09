import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center  flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className='w-28 object-contain'></img>
        <button type="button" 
        onClick={()=>{window.open("")}}
        className='black_btn'>Github</button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='bg-gradient-to-r from-slate-900 to-blue-500 bg-clip-text text-transparent'> OpenAi GPT-4</span>
       

      </h1>
      <h2 className="desc">
        simplify your reading with summize,an
         open-source article summarizer that transfroms lengthy articles
          into clear and concise summaries
      </h2>

    </header> 
  )
}

export default Hero