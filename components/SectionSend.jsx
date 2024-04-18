"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

import { useState } from "react";

import Avatar from "./Avatar";

export default function SectionSend() {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    dots: false,
    className: "slider variable-width",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    pauseOnHover: true,
    variableWidth: true,
  };
  return (
    <Slider
      {...settings}
      arrows={false}
      ref={setSliderRef}
      className="items-stretch justify-items-stretch w-full flex h-full gap-4 rounded-lg"
    >
      {Array.from({ length: 20 }).map((item, index) => (
        <Avatar key={index} imgAvatar="" />
      ))}
    </Slider>
  );
}
