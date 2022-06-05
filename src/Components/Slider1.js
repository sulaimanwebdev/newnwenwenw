import React, {useRef, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const Slider1 = () => {

    
let navigationPrevRef = React.useRef(null);
let navigationNextRef = React.useRef(null);
const [slidPrevsBtn, setSlidPrevsBtn] = React.useState(false);
const [slidNextBtn, setSlidNextBtn] = React.useState(true);




  return (
    <>
      <div className='z-[99999999999] w-full main-slider mt-[100px]'>
         <Swiper 
        
         slidesPerView={4}
         spaceBetween={30}
         onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl =
                navigationPrevRef.current;
              swiper.params.navigation.nextEl =
                navigationNextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
         modules={[Navigation]} className="mySwiper w-full h-full">
       
        <SwiperSlide className="bg-[#221B47] rounded-2xl px-5 w-fit">
            <img src="/images/slider-image-1.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>

        <SwiperSlide className="bg-[#221B47] rounded-2xl px-5 w-fit">
            <img src="/images/slider-image-2.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


        <SwiperSlide className="bg-[#221B47] rounded-2xl px-5 w-fit">
            <img src="/images/slider-image-3.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


        <SwiperSlide className="bg-[#221B47] rounded-2xl px-5 w-fit">
            <img src="/images/slider-image-4.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


        <SwiperSlide className="bg-[#221B47] rounded-2xl px-5 w-fit">
            <img src="/images/slider-image-5.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl object-cover h-[220px] w-[220px]'/>
            <div className='text-white font-[600] text-[18px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>

        <SwiperSlide className="bg-[#221B47] rounded-2xl px-5 w-fit">
            <img src="/images/slider-image-1.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>

        <SwiperSlide className="bg-[#221B47] rounded-2xl px-5 w-fit">
            <img src="/images/slider-image-2.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


        <SwiperSlide className="bg-[#221B47] rounded-2xl px-5 w-fit">
            <img src="/images/slider-image-3.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


        <SwiperSlide className="bg-[#221B47] rounded-2xl px-5 w-fit">
            <img src="/images/slider-image-4.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>


        <SwiperSlide className="bg-[#221B47] rounded-2xl px-5 w-fit">
            <img src="/images/slider-image-5.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl object-cover h-[220px] w-[220px]'/>
            <div className='text-white font-[600] text-[18px]'>The 0x0.Art NFT #17</div>
            <a href="/#" className="opacity-70 mt-2 mb-5 text-[15px] flex items-center gap-2"><div>at OPENSEA</div> <img src="/images/right.svg" alt="arrow" /></a>
        </SwiperSlide>

        
      </Swiper>

      <div className="flex items-center justify-center gap-6 mt-10">
                <button
                  className="w-[50px] h-[50px] rounded-xl flex items-center justify-center bg-[#3E3576]"
                  
                  ref={navigationPrevRef}
                >
                  <img src="/images/left.svg"/>
                </button>
                <button
                  className="w-[50px] h-[50px] rounded-xl flex items-center justify-center bg-[#3E3576]"
                  
                  ref={navigationNextRef}
                >
                  <img src="/images/right.svg"/>

                </button>
              </div>
         </div>
    </>
  )
}

export default Slider1