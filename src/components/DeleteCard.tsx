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
import { MinusIcon } from "@heroicons/react/24/outline";

import DeleteCardForm from "./forms/DeleteCardForm";

export default function DeleteCard({ number }: { number: string }) {
  return (
    <Drawer>
      <DrawerTrigger className="flex gap-2 items-center px-1 py-2 transition-colors hover:bg-zinc-900 rounded-md text-sm w-full">
        <div className="text-sm flex items-center justify-center h-5 w-5 rounded-full bg-white bg-opacity-10 transition-colors hover:bg-opacity-15">
          <MinusIcon className="h-3 w-3" />
        </div>
        Delete
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="max-w-xs w-full px-1 flex justify-start flex-col items-start mx-auto">
          <DrawerTitle>Delete Card</DrawerTitle>
          <DrawerDescription>Remove a card.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <DeleteCardForm number={number} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
