import { signOut, useSession } from "next-auth/react";

import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/16/solid";

import Avatar from "../Avatar";
import { Button } from "../ui/Button";

export default function Navbar() {
  const sesion = useSession();
  console.log(sesion);
  return (
    <div className="sticky left-0 top-4 flex justify-between w-full z-10 bg-background">
      <div className="flex gap-4 flex-row">
        <Avatar />
        <div className="flex flex-col gap-0 h-full items-start justify-center">
          <p className="text-sm font-light">Good moorning!</p>
          {/* <p className="font-semibold">{session?.user?.email}</p> */}
        </div>
      </div>

      <Button
        className="w-10 !p-0 flex justify-center items-center"
        onClick={() => signOut()}
      >
        <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
      </Button>
    </div>
  );
}
