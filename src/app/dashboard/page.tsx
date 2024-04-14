"use client";
import { useEffect, useState } from "react";

import CreateCard from "@/components/CreateCard";
import Navbar from "@/components/dashboard/Navbar";
import TopNavigation from "@/components/dashboard/TopNavigation";
import SectionButtons from "@/components/SectionButtons";
import SectionSend from "@/components/SectionSend";
import SliderCards from "@/components/SliderCards";
import { cards as getCards } from "@/lib/actions";
import { Card } from "@/lib/definitions";

const Dashboard = () => {
  const [cards, setCards] = useState<Card[]>();

  useEffect(() => {
    getCards().then((res: any) => {
      setCards(res);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:px-24 p-4 w-full relative">
      <div className="z-10 max-w-5xl w-full items-start justify-start font-mono text-sm gap-4 flex flex-col relative">
        {/* <TopNavigation /> */}
        <div className="flex flex-col gap-0 py-4">
          <p className="text-sm font-light">Total Balance</p>
          <p className="text-2xl font-semibold">$ 7.000.000</p>
        </div>
        <div className="flex flex-row w-full gap-4 overflow-x-hidden">
          <div className="flex flex-col gap-4">
            <CreateCard />
          </div>
          {cards?.length ? <SliderCards cards={cards} /> : null}
        </div>
        <SectionButtons />
        <div className="flex justify-between w-full">
          <h1>Send money</h1>
          <h1>Find one</h1>
        </div>
        <SectionSend />
        <div className="flex justify-between w-full">
          <h1>Movements</h1>
          <h1>View all</h1>
        </div>
      </div>
      <Navbar />
    </main>
  );
};

export default Dashboard;
