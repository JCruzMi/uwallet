"use client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="min-h-16 p-4"
      >
        <SwiperSlide>Slide 123</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
