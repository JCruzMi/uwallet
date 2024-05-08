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

import ReceiveMoneyForm from "./forms/ReceiveMoneyForm";
import { Button } from "./ui/Button";

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
        <DrawerHeader className="max-w-sm px-1 flex justify-start flex-col items-start mx-auto">
          <DrawerTitle>Receive Money</DrawerTitle>
          <DrawerDescription>none description</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <ReceiveMoneyForm />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
