"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { sendMoney } from "@/lib/cards";

import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

export default function SendMoneyForm({
  numberSender,
  amountCard,
}: {
  numberSender: string;
  amountCard: number;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      numberSender: numberSender,
      number: "",
      amount: "",
    },
  });

  const { toast } = useToast();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (parseInt(data.amount) <= 0) {
        throw new Error("Amount must be greater than zero");
      } else if (data.number === numberSender) {
        throw new Error("Cannot send money to the same card");
      } else if (parseInt(data.amount) > amountCard) {
        throw new Error("You don't have enough money in this card");
      }

      await sendMoney(
        JSON.parse(JSON.stringify(data.numberSender)),
        JSON.parse(JSON.stringify(data.number)),
        JSON.parse(JSON.stringify(data.amount))
      );
      reset();
      toast({
        title: "Money Sent",
        description: "The money has been sent successfully",
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
        htmlFor="Number card"
        className="text-slate-500 mb-2 block text-sm"
      >
        Number card
      </label>
      <Input
        type="text"
        {...register("number", {
          required: {
            value: true,
            message: "Number card is required",
          },
        })}
        className="w-full"
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

      <Button>Send</Button>
    </form>
  );
}
