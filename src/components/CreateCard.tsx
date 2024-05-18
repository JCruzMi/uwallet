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
      <DrawerTrigger className="min-h-[140px] w- border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-[62px]">
        <PlusIcon className="h-6 w-6" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="max-w-sm px-1 flex justify-start flex-col items-start mx-auto">
          <DrawerTitle>Create Card</DrawerTitle>
          <DrawerDescription>
            Create a new card by entering the card name
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <CreateCardForm />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
