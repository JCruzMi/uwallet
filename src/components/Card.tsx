import { Card as CardType } from "@/lib/definitions";
import copyText from "@/utils/copyText";

import Format from "../utils/format";
import { DropdownMenuDemo } from "./DropdownMenuDemo";
import { Xenon } from "uvcanvas";

export default function Card({ name, amount, number, ismain }: CardType) {
  return (
    <div className="overflow-hidden relative transition-all border border-input hover:border-accent-foreground hover:text-accent-foreground max-w-[230px] min-w-[230px] w-full min-h-[140px] rounded-lg flex flex-col justify-between p-4 text-primary text-base">
      <Xenon className="absolute inset-0 w-full h-full z-[-1]"></Xenon>

      <div>
        <div className="flex items-center justify-between gap-4">
          <div className="line-clamp-1">{name}</div>
          <DropdownMenuDemo number={number} amount={amount} ismain={ismain} />
        </div>
        <div>{Format(amount)} </div>
      </div>
      <button
        className="gap-2 cursor-pointer xs:text-[10px] text-sm inline-flex"
        onClick={() => copyText(number)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V7q0-.425.288-.712T4 6t.713.288T5 7v13h10q.425 0 .713.288T16 21t-.288.713T15 22zm4-6V4z"
          />
        </svg>{" "}
        {number}{" "}
      </button>
    </div>
  );
}
