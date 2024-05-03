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
import { BanknotesIcon } from "@heroicons/react/24/outline";

import WithdrawMoneyForm from "./forms/WithdrawMoney";

export default function WithdrawMoney({ number, amount}: { number: string, amount: number}) {
  return (
    <Drawer>
      <DrawerTrigger className="flex gap-2 items-center p-1 text-sm">
        <div className="text-sm flex items-center justify-center h-5 w-5 rounded-full bg-white bg-opacity-10 transition-colors hover:bg-opacity-15">
          <BanknotesIcon className="h-3 w-3" />
        </div>
        Withdraw
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="w-1/4 px-1 flex justify-start flex-col items-start mx-auto">
          <DrawerTitle>Withdraw Money</DrawerTitle>
          <DrawerDescription>Have your money from the card at your hand</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <WithdrawMoneyForm number={number} amount={amount} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
