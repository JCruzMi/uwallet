"use client";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

import { useState } from "react";
import CreateCard from "./CreateCard";

export default function SliderCardsLoading() {
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
    <>
      <div className="flex flex-col gap-4">
        <CreateCard />
      </div>
      <div className="h-fit flex flex-col gap-4 relative w-full rounded-lg">
        <div className="overflow-hidden flex flex-nowrap gap-4 rounded-lg">
          <Slider
            {...settings}
            arrows={false}
            ref={setSliderRef}
            className="items-stretch justify-items-stretch w-full flex h-full gap-4 rounded-lg"
          >
            {new Array(4).fill("_").map((index) => {
              return (
                <div
                  key={index}
                  className="animate-pulse bg-secondary/60 max-w-[230px] min-w-[230px] h-full w-full max-h-[140px] min-h-[140px] rounded-lg"
                ></div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
