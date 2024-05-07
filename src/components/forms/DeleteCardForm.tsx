"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "../ui/Button";
import { deleteCard } from "@/lib/cards";

export default function DeleteCardForm({ number }: { number: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      number: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    let obj = {
      number: data.number.toString(),
    };
    deleteCard(obj.number.toString()); 
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
            validCard: (value) => {
              if (value !== number) {
                return "Card number does not match";
              }
              return true;
            }
          }
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

      <Button className="w-full rounded-lg">Submit</Button>
    </form>
  );
}
