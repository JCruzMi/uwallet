"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { withdrawMoney } from "@/lib/cards";

import { Button } from "../ui/Button";

export default function WithdrawMoneyForm({
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

  const onSubmit = handleSubmit(async (data) => {
    let obj = {
      number: data.number.toString(),
      amount: parseInt(data.amount),
    };
    withdrawMoney(obj.number, obj.amount);
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="w-1/4">
      <label htmlFor="amount" className="text-slate-500 mb-2 block text-sm">
        Amount
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
          $
        </span>
        <input
          type="text"
          {...register("amount", {
            required: "Amount is required",
            validate: {
              validAmount: (value) => {
                if (parseInt(value) <= 0) {
                  return "Amount must be greater than zero";
                }
                if (parseInt(value) > amount) {
                  return "You don't have enough money in this card";
                }
                return true;
              },
            },
          })}
          className="p-3 pl-10 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
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
