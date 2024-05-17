"use server";

import Balance from "@/components/Balance";
import Navbar from "@/components/dashboard/Navbar";
import TopNavigation from "@/components/dashboard/TopNavigation";
import Movements from "@/components/Movements";
import SliderCards from "@/components/SliderCards";

const Dashboard = async () => {
  return (
    <>
      <TopNavigation />
      <main className="flex flex-col items-center justify-between lg:px-24 p-4 py-0 w-full relative pt-16">
        <div className="z-10 max-w-5xl w-full items-start justify-start font-mono text-sm gap-4 flex flex-col relative pb-8 sm:pb-4">
          <div className="flex flex-col gap-0 py-4">
            <p className="text-sm font-semibold">Total Balance</p>
            <Balance />
          </div>
          <div className="flex flex-row w-full gap-4 max-h-[140px] overflow-hidden">
            <SliderCards />
          </div>
          <div className="flex justify-between w-full">
            <h2 className="font-semibold">Movements</h2>
            <p className="hover:underline transition-all cursor-pointer">
              View all
            </p>
          </div>
          <Movements />
        </div>
        <Navbar />
      </main>
    </>
  );
};

export default Dashboard;
