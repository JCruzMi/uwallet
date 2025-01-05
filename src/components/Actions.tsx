import { BookDown, BookUp, FolderPen, HandCoins } from "lucide-react";

export default function Actions() {
  return (
    <div className="flex justify-between w-[300px] items-center max-w-sm">
      <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
        <div className="rounded-full bg-background h-14 w-14 flex flex-col justify-center items-center">
          <BookUp />
        </div>
        Send
      </div>
      <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
        <div className="rounded-full bg-background h-14 w-14 flex flex-col justify-center items-center">
          <BookDown />
        </div>
        Deposit
      </div>
      <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
        <div className="rounded-full bg-background h-14 w-14 flex flex-col justify-center items-center">
          <HandCoins />
        </div>
        Withdraw
      </div>
      <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
        <div className="rounded-full bg-background h-14 w-14 flex flex-col justify-center items-center">
          <FolderPen />
        </div>
        Rename
      </div>
    </div>
  );
}
