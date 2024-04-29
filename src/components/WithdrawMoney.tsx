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
import { Button } from "./ui/Button";

export default function WithdrawMoney() {
  return (
    <Drawer>
      <DrawerTrigger className="flex flex-col items-center">
        <Button>
          <BanknotesIcon className="h-4 w-4" />
        </Button>
        Withdraw
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="w-1/4 px-1 flex justify-start flex-col items-start mx-auto">
          <DrawerTitle>Withdraw Money</DrawerTitle>
          <DrawerDescription>none description</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <WithdrawMoneyForm />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
