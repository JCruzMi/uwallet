"use client";
import { useEffect, useState } from "react";

import { Movement } from "@/lib/definitions";
import { getMovements } from "@/lib/movements";
import Format from "@/utils/format";
import {
  BanknotesIcon,
  CurrencyDollarIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export default function Movements() {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMovements()
      .then((res: any) => {
        setMovements(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const iconType = (type: string) => {
    switch (type) {
      case "draw":
        return (
          <div className="flex items-center gap-2">
            <BanknotesIcon className="h-5 w-5" />
            <p className="text-sm">Draw</p>
          </div>
        );
      case "deposit":
        return (
          <div className="flex items-center gap-2">
            <CurrencyDollarIcon className="h-5 w-5" />
            <p className="text-sm">Deposit</p>
          </div>
        );
      case "transfer":
        return (
          <div className="flex items-center gap-2">
            <PaperAirplaneIcon className="h-5 w-5" />
            <p className="text-sm">Transfer</p>
          </div>
        );
    }
  };

  if (loading) {
    return (
      <p className="animate-pulse w-[200px] h-8 rounded-md bg-secondary"></p>
    );
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      {movements.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-2 bg-zinc-800 p-4 rounded-lg w-full"
        >
          <p></p>
          <p className="text-2xl font-semibold">{iconType(item.type)}</p>
          <p className="text-2xl font-semibold">{Format(item.amount)}</p>
          {item.deposit !== "true" && (
            <p className="text-sm font-light">{item.number_sender}</p>
          )}
          {item.draw !== "true" && (
            <p className="text-sm font-light">{item.number_receiver}</p>
          )}

          <p className="text-sm font-light">
            {new Date(item.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
