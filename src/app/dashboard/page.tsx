"use server";

import Balance from "@/components/Balance";
import Navbar from "@/components/dashboard/Navbar";
import TopNavigation from "@/components/dashboard/TopNavigation";
import Movements from "@/components/Movements";
import SectionSend from "@/components/SectionSend";
import SliderCards from "@/components/SliderCards";

const Dashboard = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:px-24 p-4 w-full relative">
      <div className="z-10 max-w-5xl w-full items-start justify-start font-mono text-sm gap-4 flex flex-col relative">
        <TopNavigation />
        <div className="flex flex-col gap-0 py-4">
          <p className="text-sm font-light">Total Balance</p>
          <Balance />
        </div>
        <div className="flex flex-row w-full gap-4 max-h-[140px] overflow-hidden">
          <SliderCards />
        </div>
        <div className="flex justify-between w-full">
          <h1>Send money</h1>
          <h1>Find one</h1>
        </div>
        <SectionSend />
        <div className="flex justify-between w-full">
          <h1>Movements</h1>
          <h1>View all</h1>
        </div>
        <Movements />
      </div>
      <Navbar />
    </main>
  );
};

export default Dashboard;
