"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Navbar from "@/components/Navbar";
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
    <>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pt-4 mx-auto">
        <div className="w-full">
          <Navbar />
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="h-full flex justify-center items-center w-full">
            <form onSubmit={onSubmit} className="sm:max-w-sm">
              <h1 className="text-slate-200 font-bold text-4xl mb-4">
                Register
              </h1>

              <label
                htmlFor="username"
                className="text-slate-500 mb-2 block text-sm"
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

              <label
                htmlFor="email"
                className="text-slate-500 mb-2 block text-sm"
              >
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
                className="text-slate-500 mb-2 block text-sm"
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
                className="text-slate-500 mb-2 block text-sm"
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

              <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
                Register
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
