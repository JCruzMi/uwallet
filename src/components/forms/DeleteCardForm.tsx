"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { deleteCard } from "@/lib/cards";

import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

export default function DeleteCardForm({ number }: { number: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      number: "",
    },
  });

  const { toast } = useToast();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (data.number !== number) {
        throw new Error("Card number does not match");
      }

      await deleteCard(JSON.parse(JSON.stringify(data.number)));
      reset();
      toast({
        title: "Deleted Card",
        description: "The card has been deleted succesfully",
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
          validate: {
            validCard: (value) => {
              if (value !== number) {
                return "Card number does not match";
              }
              return true;
            },
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

      <Button>Submit</Button>
    </form>
  );
}
