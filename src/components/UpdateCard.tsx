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
import { FolderPen } from "lucide-react";

export default function UpdateCard({ number }: { number: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="flex gap-2 items-center px-1 py-2 transition-colors  rounded-md text-sm">
        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
          <div className="rounded-full bg-background h-14 w-14 flex flex-col justify-center items-center">
            <FolderPen />
          </div>
          Rename
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="max-w-xs w-full px-1 flex justify-start flex-col items-start mx-auto">
          <DrawerTitle>Update Card</DrawerTitle>
          <DrawerDescription>Modify the name of the card.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <UpdateCardForm number={number} closeDrawer={() => setOpen(false)} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
