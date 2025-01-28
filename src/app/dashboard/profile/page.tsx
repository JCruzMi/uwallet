"use client";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AdjustmentsHorizontalIcon,
  ChartBarIcon,
  CreditCardIcon,
  LockClosedIcon,
  StarIcon,
  TrashIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Profile() {
  const { data: user } = useSession();
  const session: any = user?.user;
  return (
    <div className="flex justify-start items-center flex-wrap px-4 pt-5 gap-4 w-full">
      <div className="flex flex-col gap-3 w-full">
        <div className="w-full">
          <h2 className="my-5 scroll-m-20 border-b pb-2 w-full text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            My Profile
          </h2>
          <div className="flex flex-col gap-6">
            <div className="bg-background relative w-full h-20 flex flex-col items-center">
              <div className="absolute flex flex-col items-center top-1/2">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={session?.username ?? ""}
                    alt={session?.username ?? ""}
                  />
                  <AvatarFallback className="text-3xl">
                    {session?.username[0]}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-gray-200">
                  {session?.username}
                </h3>
                <p className="text-sm text-gray-500">{session?.email}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-16">
              <div className="w-auto bg-muted p-4 rounded-md flex items-center gap-4">
                <UserCircleIcon className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Edit Profile</h1>
                  <p className="font-light">Update your profile</p>
                </div>
              </div>
              <div className="w-auto bg-muted p-4 rounded-md flex items-center gap-4">
                <StarIcon className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Favorites</h1>
                  <p className="font-light">Manage your favorites</p>
                </div>
              </div>
              <div className="w-auto bg-muted p-4 rounded-md flex items-center gap-4">
                <CreditCardIcon className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Config Card</h1>
                  <p className="font-light">Manage the use of your cards</p>
                </div>
              </div>
              <div className="w-auto bg-muted p-4 rounded-md flex items-center gap-4">
                <ChartBarIcon className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Chart of Accounts</h1>
                  <p className="font-light">View your chart of accounts</p>
                </div>
              </div>
              <div className="w-auto bg-muted p-4 rounded-md flex items-center gap-4">
                <LockClosedIcon className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Change Password</h1>
                  <p className="font-light">Change your password</p>
                </div>
              </div>
              <div className="w-auto bg-muted p-4 rounded-md flex items-center gap-4">
                <AdjustmentsHorizontalIcon className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Settings</h1>
                  <p className="font-light">Manage your settings</p>
                </div>
              </div>
              <div className="w-auto bg-red-900 p-4 rounded-md flex items-center gap-4">
                <TrashIcon className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Delete Account</h1>
                  <p className="font-light">Delete your account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
