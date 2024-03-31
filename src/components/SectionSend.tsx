"use client";
import Avatar from "./Avatar";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SectionSend() {
  return (
    <Swiper
      slidesPerView={5.5}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className="p-4"
      breakpoints={{
        425: {
          slidesPerView: 6.5,
        },
        640: {
          slidesPerView: 10.5,
        },
        768: {
          slidesPerView: 12.5,
        },
        1024: {
          slidesPerView: 15.5,
        },
      }}
    >
      {
        Array.from({ length: 20 }).map((item, index) => 
          <SwiperSlide key={index}>
            <Avatar />
          </SwiperSlide>
        )
      }
    </Swiper>


  )
}