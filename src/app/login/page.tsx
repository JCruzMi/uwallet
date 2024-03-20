"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res: any = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(res);
    if (res.error) {
      setError(res.error);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="h-full flex justify-center items-center w-full">
          <form onSubmit={onSubmit} className="w-1/4">
            {error && (
              <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">
                {error}
              </p>
            )}

            <h1 className="text-slate-200 font-bold text-4xl mb-4">Login</h1>

            <label
              htmlFor="email"
              className="text-slate-500 mb-2 block text-sm"
            >
              Email:
            </label>
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
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
            <input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              placeholder="******"
            />

            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}

            <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
