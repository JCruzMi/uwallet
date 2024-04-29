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

import { Button } from "./ui/Button";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import ReceiveMoneyForm from "./forms/ReceiveMoneyForm";

export default function ReceiveMoney() {
  return (
    <Drawer>
      <DrawerTrigger className="flex flex-col items-center">
      <Button>
          <CurrencyDollarIcon className="h-4 w-4" />
        </Button>
        Receive
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="w-1/4 px-1 flex justify-start flex-col items-start mx-auto">
          <DrawerTitle>Receive Money</DrawerTitle>
          <DrawerDescription>none description</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <ReceiveMoneyForm />

          <DrawerClose className="flex h-10 items-center justify-center rounded-lg bg-pink-500 px-4 text-sm font-medium text-white transition-colors hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 active:bg-pink-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 w-1/4">
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}