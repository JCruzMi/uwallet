"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "../ui/Button";

export default function SendMoneyForm() {
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
    console.log(data);
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
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        placeholder="1000 1000 1000 1000"
      />

      <label htmlFor="amount" className="text-slate-500 mb-2 block text-sm">
        Amount
      </label>
      <input
        type="text"
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        placeholder="$ 0.00"
      />

      <Button className="w-full rounded-lg">Submit</Button>
    </form>
  );
}
