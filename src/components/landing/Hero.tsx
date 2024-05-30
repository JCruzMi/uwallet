"use client";
import Link from "next/link";

import { BorderBeam } from "../magicui/border-beam";
import { Button } from "../ui/Button";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center leading-6">
      <h1 className="text-balance z-10 scroll-m-20 text-4xl sm:text-4xl md:text-5xl font-semibold tracking-tight lg:text-6xl text-center max-w-[1120px] bg-gradient-to-b to-gray-600/80 from-white inline-block text-transparent bg-clip-text">
        The Definitive Platform to Centralize and Manage your Cards
      </h1>
      <p className="text-balance z-10 mx-auto max-w-[700px] text-gray-500 md:text-lg text-center mt-2 dark:text-gray-400">
        With UWallet, simplify your financial life by centralizing all your
        debit and credit cards on a single platform. Makes transfers, deposits,
        withdrawals and payment services, all from one only place.
      </p>
      <div className="z-10 flex justify-center items-center gap-4">
        <Link href="/dashboard" className="mt-5">
          <Button
            size="sm"
            className="animate-buttonheartbeat rounded-md bg-primary text-sm font-semibold text-accent"
          >
            Get Started
          </Button>
        </Link>
        <Link href="/" target="_blank" className="mt-5">
          <Button size="sm" variant="outline">
            View Pricing
          </Button>
        </Link>
      </div>
      <div>
        <div className="relative flex max-w-6xl justify-center overflow-hidden mt-7">
          <div className="relative rounded-xl">
            <img
              src="/images/web.png"
              alt="Hero Image"
              className="block w-[1200px] rounded-[inherit] border object-contain shadow-lg dark:hidden z-10"
            />
            <img
              src="/images/web.png"
              alt="Hero Image"
              className="dark:block w-[1200px] rounded-[inherit] border object-contain shadow-lg hidden z-10"
            />

            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </div>
    </div>
  );
}
