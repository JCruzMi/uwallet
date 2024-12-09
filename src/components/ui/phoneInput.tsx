import React from "react";
import { Button } from "./Button";
import { BackspaceIcon } from "@heroicons/react/16/solid";

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, "-", 0, "del"];

export default function PhoneInput({
  setAmount,
  amount,
}: {
  setAmount: Function;
  amount: string;
}) {
  const handleInput = (e: number | string) => {
    if (e === "del") {
      if (amount.length >= 2) {
        setAmount(amount.slice(0, -1));
      } else {
        setAmount("0");
      }
    } else {
      setAmount(parseInt(amount + e).toString());
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
      {digits.map((digit) => (
        <Button
          key={digit}
          variant={"secondary"}
          onClick={() => handleInput(digit)}
          disabled={digit === "-"}
        >
          {digit === "del" ? (
            <BackspaceIcon className="h-4 w-4" />
          ) : digit === "-" ? (
            ""
          ) : (
            digit
          )}
        </Button>
      ))}
    </div>
  );
}
