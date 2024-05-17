"use server";

import Balance from "@/components/Balance";
import Navbar from "@/components/dashboard/Navbar";
import TopNavigation from "@/components/dashboard/TopNavigation";
import Movements from "@/components/Movements";
import SliderCards from "@/components/SliderCards";
import { Toaster } from "@/components/ui/toaster";

const Dashboard = async () => {
  return (
    <>
      <TopNavigation />
      <main className="flex flex-col items-center justify-between lg:px-24 p-4 py-0 w-full relative">
        <div className="z-10 max-w-5xl w-full items-start justify-start font-mono text-sm gap-4 flex flex-col relative pb-8 sm:pb-4">
          <div className="flex flex-col gap-0 py-4">
            <p className="text-sm font-light">Total Balance</p>
            <Balance />
          </div>
          <div className="flex flex-row w-full gap-4 max-h-[140px] overflow-hidden">
            <SliderCards />
          </div>
          <div className="flex justify-between w-full">
            <h1>Movements</h1>
            <h1>View all</h1>
          </div>
          <Movements />
        </div>
        <Navbar />
      </main>
      <Toaster />
    </>
  );
};

export default Dashboard;
