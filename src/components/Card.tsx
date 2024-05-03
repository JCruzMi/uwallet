import { Card as CardType } from "@/lib/definitions";

import Format from "../utils/format";
import { DropdownMenuDemo } from "./DropdownMenuDemo";

// #region Functions (1)

export default function Card({ name, amount, number }: CardType) {
  return (
    <div className="max-w-[230px] min-w-[230px] w-full min-h-[140px] rounded-lg bg-gradient-to-r from-pink-300 to-purple-500 flex flex-col justify-between p-4 text-primary text-base">
      <div>
        <div className="flex items-center justify-between">
          <div>{name}</div>
          <DropdownMenuDemo number={number} amount={amount} />
        </div>
        <div>{Format(amount)}</div>
      </div>
      <div>{number}</div>
    </div>
  );
}

// #endregion Functions (1)
