"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { withdrawMoney } from "@/lib/cards";

import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import Balance from "../Balance";

export default function WithdrawMoneyForm({
  number,
  amount,
  value,
}: {
  number: string;
  amount: number;
  value: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      number: number,
      value: "",
    },
  });

  const { toast } = useToast();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (parseInt(value) <= 0) {
        throw new Error("Amount must be greater than zero");
      } else if (parseInt(value) > amount) {
        throw new Error("You don't have enough money in this card");
      }

      await withdrawMoney(data.number.toString(), parseInt(value));
      reset();
      toast({
        title: "Money Withdrawn",
        description: "The money has been successfully withdrawn",
        variant: "success",
      });
    } catch (error: string | any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "error",
      });
    }
  });

  return (
    <form onSubmit={onSubmit} className="max-w-xs w-full">
      <label
        htmlFor="amount"
        className="text-slate-500 mb-2 block text-sm text-center"
      >
        Withdrawal amount
      </label>
      <div className="relative text-gray-500 text-lg items-center w-full flex flex-col truncate max-w-xs divide-y-[1px] divide-gray-500">
        <Balance amount={value} />
        <div className="flex items-center justify-center flex-col w-full py-2">
          <p>Your new balance</p>
          <Balance amount={amount - parseInt(value)} className="text-sm" />
        </div>
      </div>

      {errors.value && (
        <span className="text-red-500 text-xs">{errors.value.message}</span>
      )}

      <Button
        variant="default"
        disabled={
          amount === 0 || amount < parseInt(value) || parseInt(value) <= 0
        }
      >
        Withdraw
      </Button>
    </form>
  );
}
