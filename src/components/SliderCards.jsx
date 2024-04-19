"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

import { useEffect, useState } from "react";
import Card from "./Card";
import { cards as getCards } from "@/lib/actions";
import CreateCard from "./CreateCard";

export default function SliderCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then((res) => {
      setCards(res);
    });
  }, []);
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
            {cards?.map((item, index) => (
              <Card
                key={item.id + index}
                name={item.name}
                amount={item.amount}
                number={item.number}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
