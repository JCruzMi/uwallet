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

export default function DeleteCard() {
  return (
    <Drawer>
      <DrawerTrigger className="flex flex-col items-center">
        <Button>
          <MinusIcon className="h-4 w-4" />
        </Button>
        Delete
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="w-1/4 px-1 flex justify-start flex-col items-start mx-auto">
          <DrawerTitle>Delete Card</DrawerTitle>
          <DrawerDescription>none description</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <DeleteCardForm />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
