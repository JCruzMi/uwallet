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
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    createCard(JSON.parse(JSON.stringify(data.name)));
  });
  return (
    <form onSubmit={onSubmit} className="w-1/4">
      <label htmlFor="name" className="text-slate-500 mb-2 block text-sm">
        Name Card
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

      <Button>Submit</Button>
    </form>
  );
}
