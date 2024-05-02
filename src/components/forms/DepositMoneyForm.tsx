"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "../ui/Button";
import { depositMoney } from "@/lib/cards";

export default function DepositMoneyForm({ number, amount}: { number: string, amount: number}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      number: "",
      amount: "0",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    let obj = {
      number: data.number.toString(),
      amount: data.amount.toString()
    };
    depositMoney(obj.number.toString(), obj.amount.toString()); 
    reset();
  });

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
          validate: {
            notSame: (value) => {
              if (value !== number) {
                return "Card number is not the same";
              }
            }
          },
        })}
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        placeholder="1000 1000 1000 1000"
        onChange={(e) => {
          let value = e.target.value.replace(/\D/g, "");
          value = value.slice(0, 16);
          value = value.replace(/(.{4})/g, "$1 ").trim();
          e.target.value = value;
        }}
      />

      {errors.number && (
        <span className="text-red-500 text-xs">{errors.number.message}</span>
      )}

      <label htmlFor="amount" className="text-slate-500 mb-2 block text-sm">
        Amount
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
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
              }
            }
          })}
          className="p-3 pl-10 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="0"
        />
      </div>

      {errors.amount && (
        <span className="text-red-500 text-xs">{errors.amount.message}</span>
      )}

      <Button className="w-full rounded-lg">Submit</Button>
    </form>
  );
}
