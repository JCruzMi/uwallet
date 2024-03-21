"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

export default function Slider() {
  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className="p-4"
      breakpoints={{
        425: {
          slidesPerView: 1.5,
        },
        640: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 3.5,
        },
        1024: {
          slidesPerView: 4.5,
        },
      }}
    >
      {
        Array.from({ length: 5 }).map((item, index) => 
        <SwiperSlide key={index}>
          <Card amount={index} category="" name=""/>
        </SwiperSlide>
        )
      }
    </Swiper>
  );
};