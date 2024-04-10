import {
  ArrowsRightLeftIcon,
  BellIcon,
  HomeIcon,
  QrCodeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

// #region Functions (1)

export default function Navbar() {
  return (
    <div className="sticky bottom-4 left-0 bg-zinc-900 w-full h-auto rounded-full flex items-center justify-between p-1 sm:hidden z-10">
      <div className="h-12 w-12 rounded-full bg-zinc-800 flex justify-center items-center">
        <HomeIcon className="h-6 w-6 text-white" />
      </div>
      <div className="h-12 w-12 rounded-full bg-zinc-800 flex justify-center items-center">
        <ArrowsRightLeftIcon className="h-6 w-6 text-white" />
      </div>
      <div className="h-12 w-12 rounded-full bg-zinc-800 flex justify-center items-center">
        <UserIcon className="h-6 w-6 text-white" />
      </div>
      <div className="h-12 w-12 rounded-full bg-zinc-800 flex justify-center items-center">
        <BellIcon className="h-6 w-6 text-white" />
      </div>
      <div className="h-12 w-12 rounded-full bg-zinc-800 flex justify-center items-center">
        <QrCodeIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}

// #endregion Functions (1)
