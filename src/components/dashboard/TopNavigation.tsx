import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/16/solid";

import { auth, signOut } from "../../../auth";
import Avatar from "../Avatar";
import { Button } from "../ui/Button";

export default async function Navbar() {
  const session: any = await auth();
  return (
    <div className="sticky left-0 top-4 flex justify-between w-full z-10 bg-background">
      <div className="flex gap-4 flex-row">
        <Avatar letter={session?.user?.username[0]} />
        <div className="flex flex-col gap-0 h-full items-start justify-center">
          <p className="text-sm font-light">Good morning!</p>
          <p className="font-semibold">{session?.user?.email}</p>
        </div>
      </div>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button className="w-10 !p-0 flex justify-center items-center rounded-lg">
          <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
