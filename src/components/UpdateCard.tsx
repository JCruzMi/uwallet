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
import { CreditCardIcon } from "@heroicons/react/24/outline";
import UpdateCardForm from "./forms/UpdateCardForm";


export default function UpdateCard({ number }: { number: string }) {
  return (
    <Drawer>
      <DrawerTrigger className="flex gap-2 items-center p-1 text-sm">
        <div className="text-sm flex items-center justify-center h-5 w-5 rounded-full bg-white bg-opacity-10 transition-colors hover:bg-opacity-15">
          <CreditCardIcon className="h-3 w-3" />
        </div>
        Update
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="w-1/4 px-1 flex justify-start flex-col items-start mx-auto">
          <DrawerTitle>Update Card</DrawerTitle>
          <DrawerDescription>Modify the name of the card.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <UpdateCardForm number={number} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
