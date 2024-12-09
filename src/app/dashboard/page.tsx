"use server";

import { Suspense } from "react";

import Balance from "@/components/Balance";
import Movements from "@/components/Movements";
import SliderCards from "@/components/SliderCards";
import SliderCardsLoading from "@/components/SliderCardsLoading";
import { getCards } from "@/lib/cards";
import { Card } from "@/lib/definitions";
import Link from "next/link";

interface DashboardProps {
  // #region Properties (2)

  amount: number | string;
  cards: Card[];

  // #endregion Properties (2)
}

const Dashboard = async () => {
  const { cards, amount }: any = await getCards();

  return (
    <>
      <title>UWallet - Dashboard</title>
      <div className="flex flex-col gap-0 py-4">
        <p className="text-xs font-semibold">Total Balance</p>
        <Suspense
          fallback={
            <p className="animate-pulse w-[200px] h-8 rounded-md bg-secondary/60"></p>
          }
        >
          <Balance amount={amount} continuous />
        </Suspense>
      </div>
      <div className="flex flex-row w-full max-h-[140px] overflow-hidden gap-4">
        <Suspense fallback={<SliderCardsLoading />}>
          <SliderCards cards={cards} />
        </Suspense>
      </div>
      <div className="flex justify-between w-full">
        <h2 className="font-semibold">Movements</h2>
        <Link
          href="/dashboard/movements"
          className="text-xs font-semibold underline"
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
