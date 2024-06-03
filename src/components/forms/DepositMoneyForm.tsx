"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { depositMoney } from "@/lib/cards";

import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

export default function DepositMoneyForm({
  number,
  amount,
}: {
  number: string;
  amount: number;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      number: number,
      amount: "",
    },
  });

  const { toast } = useToast();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (parseInt(data.amount) <= 0) {
        throw new Error("Amount must be greater than zero");
      }

      await depositMoney(data.number.toString(), parseInt(data.amount));
      reset();
      toast({
        title: "Deposited Money",
        description: "The money has been successfully deposited",
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
      <label htmlFor="amount" className="text-slate-500 mb-2 block text-sm">
        Amount
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
          $
        </span>
        <Input
          type="number"
          {...register("amount", {
            required: "Amount is required",
            valueAsNumber: true,
          })}
          className="pl-10 w-full"
          placeholder="0"
        />
      </div>

      {errors.amount && (
        <span className="text-red-500 text-xs">{errors.amount.message}</span>
      )}

      <Button>Deposit</Button>
    </form>
  );
}
