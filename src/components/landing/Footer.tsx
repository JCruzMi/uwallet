"use client";
import { useForm } from "react-hook-form";

import { toast } from "@/components/ui/use-toast";

import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { Toaster } from "../ui/toaster";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    toast({
      title: "Success",
      description: `${data.email} You have successfully subscribed to our newsletter.`,
      variant: "success",
    });

    reset();
  };
  return (
    <>
      <footer className="border-t dark:bg-black">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2">
            <div className="border-b   py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
              <div className="mt-8 space-y-4 lg:mt-0">
                <div>
                  <h2 className="text-2xl font-medium">
                    This is a fake newsletter title
                  </h2>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col border rounded-xl p-4 gap-3 mt-6 w-full"
                >
                  <Input
                    {...register("email", { required: true })}
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Register For Newsletter</Button>
                </form>
              </div>
            </div>

            <div className="py-8 lg:py-16 lg:pe-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <p className="font-medium">Personal Github</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="https://github.com/JCruzMi"
                        target="_blank"
                        className="transition hover:opacity-75"
                      >
                        {" "}
                        Juan{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/KiaraLuz"
                        target="_blank"
                        className="  transition hover:opacity-75"
                      >
                        {" "}
                        Kiara{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium ">Project Github</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="https://github.com/JCruzMi/uwallet"
                        className="  transition hover:opacity-75"
                        target="_blank"
                      >
                        {" "}
                        UWallet repository{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t   pt-8">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <a
                      href="/"
                      target="_blank"
                      className="transition hover:opacity-75"
                    >
                      Terms & Conditions{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      target="_blank"
                      className="transition hover:opacity-75"
                    >
                      Privacy Policy{" "}
                    </a>
                  </li>
                </ul>

                <p className="mt-8 text-xs  ">
                  &copy; 2024. SomeCompany LLC. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Toaster />
    </>
  );
}
