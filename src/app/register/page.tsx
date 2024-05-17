"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

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
      if (data.password !== data.confirmPassword) {
        return alert("Passwords do not match");
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
      }
    }
  );

  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/"
        className={"absolute right-4 hidden top-4 md:right-8 md:top-8"}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative flex items-center text-lg font-medium gap-3 w-auto">
          <Link href="/">
            <Button variant="ghost" className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  d="M32.25 26a1.25 1.25 0 1 0 0 2.5h4.5a1.25 1.25 0 1 0 0-2.5zM6 10v25.75A6.25 6.25 0 0 0 12.25 42h24.5A6.25 6.25 0 0 0 43 35.75v-17.5a6.25 6.25 0 0 0-5-6.125V10.25A4.25 4.25 0 0 0 33.75 6h-23.5a4.25 4.25 0 0 0-4.243 4zm29.5.25V12H10.25a1.75 1.75 0 1 1 0-3.5h23.5c.967 0 1.75.784 1.75 1.75m-27 4.25h28.25a3.75 3.75 0 0 1 3.75 3.75v17.5a3.75 3.75 0 0 1-3.75 3.75h-24.5a3.75 3.75 0 0 1-3.75-3.75z"
                />
              </svg>
              UWallet
            </Button>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              Esta web tiene como función demostrar los conocimientos adquiridos
              mediante la documentación oficial de Next 14 de forma empirica
            </p>
            <footer className="text-sm">Juan & Kiara</footer>
          </blockquote>
        </div>
      </div>
      <div className="p-4 lg:p-8 h-full flex items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Register your account
            </h1>
            <p className="text-sm text-muted-foreground">
              register and create a new account
            </p>
          </div>
          <form onSubmit={onSubmit} className="sm:max-w-sm">
            <label
              htmlFor="username"
              className="text-primary mb-2 block text-sm"
            >
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
              Email:
            </label>
            <Input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              className="w-full"
              placeholder="user@email.com"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}

            <label
              htmlFor="password"
              className="text-primary my-2 block text-sm"
            >
              Password:
            </label>
            <Input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              className="w-full"
              placeholder="********"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}

            <label
              htmlFor="confirmPassword"
              className="text-primary my-2 block text-sm"
            >
              Confirm Password:
            </label>
            <Input
              type="password"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Confirm Password is required",
                },
              })}
              className="w-full"
              placeholder="********"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}

            <Button className="mt-4 w-full">Continue</Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>
          <Link href="/login" className="mt-4">
            <Button className="w-full" variant={"outline"}>
              Log in
            </Button>
          </Link>

          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
