"use server";

import { Suspense } from "react";

import Balance from "@/components/Balance";
import TopNavigation from "@/components/dashboard/TopNavigation";
import Movements from "@/components/Movements";
import SliderCards from "@/components/SliderCards";
import SliderCardsLoading from "@/components/SliderCardsLoading";
import { Toaster } from "@/components/ui/toaster";
import { getCards } from "@/lib/cards";
import { Card } from "@/lib/definitions";

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
      <TopNavigation />
      <title>UWallet - Dashboard</title>
      <main className="flex flex-col items-center justify-between lg:px-24 p-4 py-0 w-full relative pt-16 relative">
        <div className="flex absolute top-0 overflow-hidden w-full h-full blur-2xl">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 -top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.5"
            ></circle>
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#4F46E5"></stop>
                <stop offset="1" stopColor="#E935C1" stopOpacity="0"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="z-10 max-w-5xl w-full items-start justify-start font-mono text-sm gap-4 flex flex-col relative pb-8 sm:pb-4">
          <div className="flex flex-col gap-0 py-4">
            <p className="text-sm font-semibold">Total Balance</p>
            <Suspense
              fallback={
                <p className="animate-pulse w-[200px] h-8 rounded-md bg-secondary/60"></p>
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
          <div className="flex justify-between w-full">
            <h2 className="font-semibold">Movements</h2>
            <p className="hover:underline transition-all cursor-pointer">
              View all
            </p>
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
            <Movements />
          </Suspense>
        </div>
        {/* <Navbar /> */}
        <Toaster />
      </main>
    </>
  );
};

export default Dashboard;
