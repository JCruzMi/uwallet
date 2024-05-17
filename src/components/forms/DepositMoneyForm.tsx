"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { depositMoney } from "@/lib/cards";

import { Button } from "../ui/Button";
import { useToast } from "../ui/use-toast";
import { Input } from "../ui/input";

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
      amount: "0",
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
      });
    } catch (error: string | any) {
      toast({
        title: "Error",
        description: error.message,
      });
    }
  });

  return (
    <form onSubmit={onSubmit} className="max-w-sm">
      <label htmlFor="amount" className="text-slate-500 mb-2 block text-sm">
        Amount
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
          $
        </span>
        <Input
          type="text"
          {...register("amount", {
            required: "Amount is required",
          })}
          className="pl-10 w-full"
          placeholder="0"
        />
      </div>

      {errors.amount && (
        <span className="text-red-500 text-xs">{errors.amount.message}</span>
      )}

      <Button>Submit</Button>
    </form>
  );
}
