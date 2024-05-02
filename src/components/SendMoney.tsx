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
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import SendMoneyForm from "./forms/SendMoneyForm";
import { Button } from "./ui/Button";

export default function SendMoney({
  numberSender,
  amountCard,
}: {
  numberSender: string;
  amountCard: number;
}) {
  return (
    <Drawer>
      <DrawerTrigger className="flex flex-col items-center">
        <Button className="!p-0">
          <PaperAirplaneIcon className="h-4 w-4" />
        </Button>
        Send
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="w-1/4 px-1 flex justify-start flex-col items-start mx-auto">
          <DrawerTitle>Send Money</DrawerTitle>
          <DrawerDescription>Transfer money to another card.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <SendMoneyForm numberSender={numberSender} amountCard={amountCard} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
