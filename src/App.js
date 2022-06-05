import Header from "./Components/Header";
import HeroSection from "./Components/Hero-section";
import Slider1 from "./Components/Slider1";

function App() {
  return (
    <>
    <div className="h-full relative w-full bg-[#060023]">
      
     <Header/> 
     <HeroSection/>



     <div className="px-7 z-[999999999] relative mt-[100px] pb-10 mx-auto max-w-[1600px] text-white">
     <div className=" flex items-center justify-between">
       <div className="w-[800px]">
         <div className="text-[#9F00FF] mb-3 font-[500] text-[18px]">ABOUT US</div>
         <div className="text-[34px] font-[700]">About Project</div>
       </div>
       <div className="leading-[28px] opacity-90">
       In order to facilitate universal access to the world of digital art, 0x0.art platform was created through which users can create original digital art using our AI tool, tokenize their art, print it, and authenticate physical reproductions using the Ethereum blockchain as verified assets.
       </div>
     </div>


     <div className="bg-radial-1  mt-[170px] w-full rounded-md flex items-center justify-center gap-[150px]">
        <img src="/images/nft-3.png" alt="nft" className="w-[240px] transform -translate-y-16" />
        <div className="w-[600px]">
          <div className="flex items-center gap-5">
            <img src="/images/tick.svg" alt="tick" />
            <div className="font-[700] text-[17px]">Every NFT owner will have access to create it's own artwork, using our Artificial Intelligence module, convert it to NFT and claim for relief printed version</div>
          </div>
          <div className="flex items-center gap-5 mt-[28px]">
            <img src="/images/tick.svg" alt="tick" />
            <div className="font-[700] text-[17px]">1% From Platform Fees And 1% Tokens Royalty</div>
          </div>

          <div className="flex items-center gap-5 mt-[35px]">
            <img src="/images/tick.svg" alt="tick" />
            <div className="font-[700] text-[17px]">Tickets To Virtual Gallery On Metaverse</div>
          </div>

        </div>
     </div>





     <div className=" flex items-center justify-between mt-[120px]">
       <div className="w-[800px]">
         <div className="text-[#9F00FF] mb-3 font-[500] text-[18px]">COLLECTION</div>
         <div className="text-[34px] font-[700]">Are you interested with<br/>this art?</div>
       </div>
       <div className="leading-[28px] opacity-90">
      <a href="/#" className="text-[#9F00FF] font-[600] text-[16px]">CHECK ON OPENSEA</a>
       </div>
     </div>

    <Slider1/>



      <div className="w-full mt-[100px]">
      <div className="text-[#9F00FF] mb-3 font-[500] text-[18px] text-center tracking-wide">PRODUCTS & FEATURES</div>
      <div className="text-center font-[800] text-[38px] tracking-wide">Explore The 0x0 Platform</div>
      <div className="opacity-70 mt-5 text-[17px] max-w-[500px] mx-auto text-center leading-relaxed">We offer a variety of products & services to help you create, validate, and monetize your digital art.</div>
      </div>
     


     
    </div>
    
     

















   {/* background circles */}
   <img src="/images/grad-circle.svg" alt="circle" className="absolute left-0 top-[1000px]  w-[400px]"/>


    <svg className='absolute top-[100px] right-[20%] ' width="700px" height="700px" viewBox="0 0 1136 1136" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_27_960)">
<circle cx="568" cy="568" r="168" fill="#143280"/>
</g>
<defs>
<filter id="filter0_f_27_960" x="0" y="0" width="1136" height="1136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_27_960"/>
</filter>
</defs>
</svg>



   <svg className='absolute top-0 -left-7 ' width="596" height="695" viewBox="0 0 596 695" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_27_959)">
<circle cx="28" cy="127" r="168" fill="#9F00FF" fill-opacity="0.7"/>
</g>
<defs>
<filter id="filter0_f_27_959" x="-540" y="-441" width="1136" height="1136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_27_959"/>
</filter>
</defs>
</svg>

    </div>


















{/* 



    <div className="flex items-center w-full justfiy-between gap-[200px]">
        <div className="w-[600px]">
         <div className="text-[#9F00FF] mb-3 text-[18px] leading-loose font-[600]">NEXT-GEN AI</div>
         <div className="text-[34px] font-[700]">Pretrained AI Drawing Tool</div>
         <div className="opacity-70 mt-7">An AI that has been trained to make artwork based on the language provided by the user in a specific style so that the artwork created will remain unique and indistinguishable from human artists.</div>
         <button className='flex mt-[130px] items-center gap-3 bg-white py-4 px-6 rounded-full text-[#9F00FF] font-bold text-[16px] relative'><span className='z-[999]'>MORE ABOUT AI TOOL</span> <svg width="20" className='z-[999]' height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7L19 4L16 1M1 4L19 4L1 4Z" stroke="#9F00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
             <div className="w-full absolute top-0 left-0 rounded-full h-full bg-white z-[99]"></div>
             <div className="w-full absolute -top-[3px] -left-[3px] rounded-full h-full bg-[#FFE302]"></div>
             <div className="w-full absolute -bottom-[3px] -right-[3px] rounded-full h-full bg-[#9F00FF]"></div>
             </button>
        </div>

        <div>
         <div className="font-[600] text-[17px] mb-5 text-center ">Painting of London underwater city with purple sky</div>
          <img src="/images/nft-4.png"  alt="nft" className="w-[450px]"/>
         </div>
      </div> */}

    </>
  );
}

export default App;
