"use client";
import React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

import DepositMoneyForm from "./forms/DepositMoneyForm";

export default function DepositMoney({
  number,
  amount,
}: {
  number: string;
  amount: number;
}) {
  return (
    <Drawer>
      <DrawerTrigger className="flex gap-2 items-center px-1 py-2 transition-colors hover:bg-zinc-900 rounded-md text-sm w-full">
        <div className="text-sm flex items-center justify-center h-5 w-5 rounded-full bg-white bg-opacity-10 transition-colors hover:bg-opacity-15">
          <CurrencyDollarIcon className="h-3 w-3" />
        </div>
        Deposit
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="max-w-sm px-1 flex justify-start flex-col items-start mx-auto">
          <DrawerTitle>Deposit Money</DrawerTitle>
          <DrawerDescription>Put money on your card.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <DepositMoneyForm number={number} amount={amount} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
