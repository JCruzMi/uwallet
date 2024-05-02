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


import { Button } from "./ui/Button";
import DeleteCardForm from "./forms/DeleteCardForm";

export default function DeleteCard({ number }: { number: string }) {
  return (
    <Drawer>
      <DrawerTrigger className="flex flex-col items-center">
        <div className="flex items-center gap-2 p-1 text-sm">
          <Button className="!h-4 !w-4">
            <MinusIcon className="h-2 w-2" />
          </Button>
          Delete
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="w-1/4 px-1 flex justify-start flex-col items-start mx-auto">
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
