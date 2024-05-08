import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/16/solid";

import { auth, signOut } from "../../../auth";
import Avatar from "../Avatar";
import { Button } from "../ui/Button";

export default async function Navbar() {
  const session: any = await auth();
  return (
    <div className="sticky left-0 top-0 flex justify-between w-full z-20 bg-background md:px-0 px-4 py-4 max-w-5xl mx-auto">
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
        <Button className="!w-10 !p-0 !h-10 flex justify-center items-center">
          <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
        </Button>
      </form>
    </div>
  );
}
