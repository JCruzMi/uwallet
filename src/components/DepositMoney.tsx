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

import DepositMoneyForm from "./forms/DepositMoneyForm";
import PhoneInput from "./ui/phoneInput";
import { BookDown } from "lucide-react";

export default function DepositMoney({
  number,
  amount,
}: {
  number: string;
  amount: number;
}) {
  const [value, setValue] = React.useState("0");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setValue("0");
  }, [open]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="flex gap-2 items-center px-1 py-2 transition-colors rounded-md text-sm">
        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
          <div className="rounded-full bg-background h-14 w-14 flex flex-col justify-center items-center">
            <BookDown />
          </div>
          Deposit
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="max-w-xs w-full px-1 flex justify-start flex-col items-center mx-auto">
          <DrawerTitle>Deposit Money</DrawerTitle>
          <DrawerDescription>{number}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <DepositMoneyForm
            number={number}
            amount={amount}
            value={value}
            closeDrawer={() => setOpen(false)}
          />
          <PhoneInput setAmount={setValue} amount={value} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
