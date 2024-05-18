"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import AuthLayout from "@/components/auth/layout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
  });
  const router = useRouter();

  const onSubmit = handleSubmit(
    async (data: {
      password: string;
      confirmPassword: string;
      username: string;
      email: string;
    }) => {
      console.log(data);
      if (data.password !== data.confirmPassword) {
        return toast({
          title: "Error",
          description: "Passwords do not match",
          variant: "error",
        });
      }

      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        router.push("/login");
        toast({
          title: "Register",
          description: "The account has been created successfully",
          variant: "success",
        });
      }
    }
  );

  return (
    <AuthLayout>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Register your account
        </h1>
        <p className="text-sm text-muted-foreground">
          register and create a new account
        </p>
      </div>
      <form onSubmit={onSubmit} className="sm:max-w-sm">
        <label htmlFor="username" className="text-primary mb-2 block text-sm">
          Username:
        </label>
        <Input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
          className="w-full"
          placeholder="yourUser123"
        />
        {errors.username && (
          <span className="text-red-500 text-xs">
            {errors.username.message}
          </span>
        )}
        <label htmlFor="email" className="text-primary my-2 block text-sm">
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
        <label
          htmlFor="confirmPassword"
          className="text-primary my-2 block text-sm"
        >
          Confirm Password
        </label>
        <Input
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm Password is required",
            },
          })}
          placeholder="******"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-xs">
            {errors.confirmPassword.message}
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
      <Link href="/login">
        <Button variant={"outline"}>Log in</Button>
      </Link>
    </AuthLayout>
  );
}
