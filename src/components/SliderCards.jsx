"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Card from "./Card";
import { useState } from "react";

export default function SliderCards() {
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
    <div className="h-fit flex flex-col gap-4 relative w-full rounded-lg">
      <div className="overflow-hidden flex flex-nowrap gap-4 rounded-lg">
        <Slider
          {...settings}
          arrows={false}
          ref={setSliderRef}
          className="items-stretch justify-items-stretch w-full flex h-full gap-4 rounded-lg"
        >
          {Array.from({ length: 5 }).map((item, index) => (
            <Card key={index} amount={index} category="" name="" />
          ))}
        </Slider>
      </div>
    </div>
  );
}
