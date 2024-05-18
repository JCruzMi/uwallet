"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { authenticate } from "@/lib/actions";
import AuthLayout from "@/components/auth/layout";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    authenticate({
      email: data.email,
      password: data.password,
    });
  });

  return (
    <AuthLayout>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Log in your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to Log in your account
        </p>
      </div>
      <form onSubmit={onSubmit} className="sm:max-w-sm">
        <label htmlFor="email" className="text-primary mb-2 block text-sm">
          Email
        </label>
        <Input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          placeholder="user@email.com"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
        <label htmlFor="password" className="text-primary my-2 block text-sm">
          Password
        </label>
        <Input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          placeholder="******"
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
        <Button>Continue</Button>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>
      <Link href="/register">
        <Button variant={"outline"}>Register</Button>
      </Link>
    </AuthLayout>
  );
}
