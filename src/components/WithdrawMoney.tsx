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
import { BanknotesIcon } from "@heroicons/react/24/outline";

import WithdrawMoneyForm from "./forms/WithdrawMoneyForm";
import PhoneInput from "./ui/phoneInput";

export default function WithdrawMoney({
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
      <DrawerTrigger className="flex gap-2 items-center px-1 py-2 transition-colors hover:bg-zinc-900 rounded-md text-sm w-full">
        <div className="text-sm flex items-center justify-center h-5 w-5 rounded-full bg-white bg-opacity-10 transition-colors hover:bg-opacity-15">
          <BanknotesIcon className="h-3 w-3" />
        </div>
        Withdraw
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="max-w-xs w-full px-1 flex justify-start flex-col items-center mx-auto">
          <DrawerTitle>Withdraw money</DrawerTitle>
          <DrawerDescription>{number}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <WithdrawMoneyForm number={number} amount={amount} value={value} />
          <PhoneInput setAmount={setValue} amount={value} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
