"use server";

import { Suspense } from "react";

import Balance from "@/components/Balance";
import Movements from "@/components/Movements";
import SliderCards from "@/components/SliderCards";
import SliderCardsLoading from "@/components/SliderCardsLoading";
import { getCards } from "@/lib/cards";
import Link from "next/link";
import Actions from "@/components/Actions";
const Dashboard = async () => {
  const { cards, amount }: any = await getCards();

  return (
    <>
      <title>UWallet - Dashboard</title>
      <div className="flex flex-col gap-0 py-4">
        <p className="text-sm font-semibold">Total Balance</p>
        <Suspense
          fallback={
            <div className="animate-pulse w-[200px] h-8 rounded-md bg-secondary/60"></div>
          }
        >
          <Balance amount={amount} />
        </Suspense>
      </div>
      <div className="flex flex-row w-full gap-4 max-h-[140px] overflow-hidden">
        <Suspense fallback={<SliderCardsLoading />}>
          <SliderCards cards={cards} />
        </Suspense>
      </div>
      <div className="flex w-full justify-center">
        <Actions />
      </div>
      <div className="flex justify-between w-full">
        <h2 className="font-semibold">Movements</h2>
        <Link
          href="/dashboard/movements"
          className="hover:underline transition-all cursor-pointer"
        >
          View all
        </Link>
      </div>
      <Suspense
        fallback={
          <div className="flex flex-col gap-4 w-full">
            <div className="animate-pulse w-full h-[92px] rounded-md bg-secondary/60"></div>
            <div className="animate-pulse w-full h-[92px] rounded-md bg-secondary/60"></div>
            <div className="animate-pulse w-full h-[92px] rounded-md bg-secondary/60"></div>
            <div className="animate-pulse w-full h-[92px] rounded-md bg-secondary/60"></div>
            <div className="animate-pulse w-full h-[92px] rounded-md bg-secondary/60"></div>
          </div>
        }
      >
        <Movements limit={5} />
      </Suspense>
    </>
  );
};

export default Dashboard;
