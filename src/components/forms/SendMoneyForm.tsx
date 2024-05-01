"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "../ui/Button";
import { sendMoney } from "@/lib/cards";

export default function SendMoneyForm({ numberSender, amountCard }: { numberSender: string; amountCard: number }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      numberSender: numberSender,
      number: "",
      amount: 0,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    let obj = {
      numberSender: numberSender.toString(),
      number: data.number.toString(),
      amount: data.amount.toString()
    };
    sendMoney(obj.numberSender.toString(), obj.number.toString(), obj.amount.toString());
  });

  const validateAmount = (value: number) => {
    if (isNaN(value)) {
      return "Invalid amount";
    }
    if (value <= 0) {
      return "Amount must be greater than zero";
    }
    if (value > amountCard) { 
      return "You don't have enough money in this card";
    }
    return true;
  };
  
  return (
    <form onSubmit={onSubmit} className="w-1/4">
      <label
        htmlFor="Number card"
        className="text-slate-500 mb-2 block text-sm"
      >
        Number card
      </label>
      <input
        type="text"
        {...register("number", {
          required: {
            value: true,
            message: "Number card is required",
          },
        })}
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        placeholder="1000 1000 1000 1000"
      />

      {errors.number && (
        <span className="text-red-500 text-xs">{errors.number.message}</span>
      )}

      <label htmlFor="amount" className="text-slate-500 mb-2 block text-sm">
        Amount
      </label>
      <input
        type="text"
        {...register("amount", {
          required: {
            value: true,
            message: "Amount is required",
          },
          validate: validateAmount
        })}
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        placeholder="$ 0.00"
        step="0.01"
      />

      {errors.amount && (
        <span className="text-red-500 text-xs">{errors.amount.message}</span>
      )}

      <Button className="w-full rounded-lg">Submit</Button>
    </form>
  );
}
