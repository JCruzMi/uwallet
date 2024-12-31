"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { createCard } from "@/lib/cards";

import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { Tranquiluxe } from "uvcanvas";

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

  const [name, setName] = React.useState("");

  return (
    <form onSubmit={onSubmit} className="max-w-xs w-full flex flex-col gap-4">
      <div className="overflow-hidden relative h-[140px] w-full rounded-lg">
        <div className="absolute inset-0 w-full h-full z-[-1]">
          <Tranquiluxe />
        </div>
        <div className="flex flex-col justify-between h-full p-4">
          <div className="flex flex-col">
            <div className="line-clamp-1">{name ? name : "Name Card"}</div>
            <div>$ 0</div>
          </div>
          <div>XXXX XXXX XXXX XXXX</div>
        </div>
      </div>
      <div>
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
          onChange={(e) => setName(e.target.value)}
        />

        {errors.name && (
          <span className="text-red-500 text-xs">{errors.name.message}</span>
        )}

        <Button>Create</Button>
      </div>
    </form>
  );
}
