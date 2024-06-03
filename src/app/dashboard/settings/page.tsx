"use client";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export default function Settings() {
  const { data: user } = useSession();
  const session: any = user?.user;
  return (
    <div className="flex justify-start items-center flex-wrap px-4 pt-5 gap-4">
      <div className="flex flex-col gap-3 mb-[5rem] w-full max-w-[700px]">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 w-full text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          My Profile
        </h2>
        <div className="flex w-full gap-3 mt-3">
          <div className="flex flex-col gap-3 w-full">
            <p>User Name</p>
            <Input disabled defaultValue={session?.username ?? ""} />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <p>E-mail</p>
            <Input
              disabled
              defaultValue={session?.email ? session?.email : ""}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <Button variant="destructive">Delete Account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
