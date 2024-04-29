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
import { PlusIcon } from "@heroicons/react/16/solid";

import CreateCardForm from "./forms/CreateCardForm";

export default function CreateCard() {
  return (
    <Drawer>
      <DrawerTrigger className="min-h-[140px] bg-purple-500 px-4 text-sm font-medium text-white transition-colors hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 active:bg-purple-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 flex items-center justify-center w-[62px] rounded-lg h-full ">
        <PlusIcon className="h-6 w-6" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="w-1/4 px-1 flex justify-start flex-col items-start mx-auto">
          <DrawerTitle>Create Card</DrawerTitle>
          <DrawerDescription>none description</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <CreateCardForm />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
