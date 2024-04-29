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
import { Button } from "./ui/Button";

export default function DepositMoney() {
  return (
    <Drawer>
      <DrawerTrigger className="flex flex-col items-center">
        <Button>
          <CurrencyDollarIcon className="h-4 w-4" />
        </Button>
        Deposit
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="w-1/4 px-1 flex justify-start flex-col items-start mx-auto">
          <DrawerTitle>Deposit Money</DrawerTitle>
          <DrawerDescription>none description</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <DepositMoneyForm />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
