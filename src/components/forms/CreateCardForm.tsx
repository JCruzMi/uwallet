"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { createCard } from "@/lib/cards";

import { Button } from "../ui/Button";

export default function CreateCardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    let obj = {
      name: data.name.toString(),
      number: data.number.toString(),
    };
    createCard(obj.name.toString(), obj.number.toString());
  });
  return (
    <form onSubmit={onSubmit} className="w-1/4">
      <label htmlFor="name" className="text-slate-500 mb-2 block text-sm">
        Name
      </label>
      <input
        type="text"
        {...register("name", {
          required: {
            value: true,
            message: "Name is required",
          },
        })}
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        placeholder="Name"
      />

      {errors.name && (
        <span className="text-red-500 text-xs">{errors.name.message}</span>
      )}

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

      <Button className="w-full rounded-lg">Submit</Button>
    </form>
  );
}
