"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { createCard } from "@/lib/cards";

import { Button } from "../ui/Button";
import { useToast } from "../ui/use-toast";
import { Input } from "../ui/input";

export default function CreateCardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const { toast } = useToast();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createCard(JSON.parse(JSON.stringify(data.name)));
      reset();
      toast({
        title: "Created Card",
        description: "The card has been created successfully",
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
      <label htmlFor="name" className="text-slate-500 mb-2 block text-sm">
        Name Card
      </label>
      <Input
        type="text"
        {...register("name", {
          required: {
            value: true,
            message: "Name is required",
          },
        })}
        className="w-full"
        placeholder="Name"
      />

      {errors.name && (
        <span className="text-red-500 text-xs">{errors.name.message}</span>
      )}

      <Button>Submit</Button>
    </form>
  );
}
