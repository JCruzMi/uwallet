import {
  HomeIcon,
  UserIcon,
  ArrowsRightLeftIcon,
  BellIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="bg-zinc-900 w-full h-12 rounded-full flex items-center justify-between p-2 sticky bottom-0 left-0 sm:hidden">
      <div className="h-10 w-10 rounded-full bg-zinc-800 flex justify-center items-center">
        <HomeIcon className="h-6 w-6 text-white" />
      </div>
      <div className="h-10 w-10 rounded-full bg-zinc-800 flex justify-center items-center">
        <ArrowsRightLeftIcon className="h-6 w-6 text-white" />
      </div>
      <div className="h-10 w-10 rounded-full bg-zinc-800 flex justify-center items-center">
        <UserIcon className="h-6 w-6 text-white" />
      </div>
      <div className="h-10 w-10 rounded-full bg-zinc-800 flex justify-center items-center">
        <BellIcon className="h-6 w-6 text-white" />
      </div>
      <div className="h-10 w-10 rounded-full bg-zinc-800 flex justify-center items-center">
        <QrCodeIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}
