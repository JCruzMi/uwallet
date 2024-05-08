"use client";
import moment from "moment";
import { useEffect, useState } from "react";

import { Movement } from "@/lib/definitions";
import { getMovements } from "@/lib/movements";
import Format from "@/utils/format";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
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
            <p className="text-sm">Withdraw</p>
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
      <div className="flex flex-col gap-4 w-full">
        <p className="animate-pulse w-full h-[92px] rounded-md bg-secondary"></p>
        <p className="animate-pulse w-full h-[92px] rounded-md bg-secondary"></p>
        <p className="animate-pulse w-full h-[92px] rounded-md bg-secondary"></p>
        <p className="animate-pulse w-full h-[92px] rounded-md bg-secondary"></p>
        <p className="animate-pulse w-full h-[92px] rounded-md bg-secondary"></p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      {movements.map((item) => (
        <div
          key={item.id}
          className="flex justify-between gap-2 bg-zinc-800/60 p-4 rounded-lg w-full"
        >
          <div>
            <p className="text-2xl font-semibold">{iconType(item.type)}</p>
            <p className="text-2xl font-semibold">{Format(item.amount)}</p>
          </div>

          <div className="flex flex-col items-end">
            {item.deposit !== "true" && (
              <div className="flex items-center gap-2 text-red-500">
                <ArrowTrendingDownIcon className="h-4 w-4" />
                <p className="text-sm font-light">{item.number_sender}</p>
              </div>
            )}
            {item.draw !== "true" && (
              <div className="flex items-center gap-2 text-green-500">
                <ArrowTrendingUpIcon className="h-4 w-4" />
                <p className="text-sm font-light">{item.number_receiver}</p>
              </div>
            )}

            <p className="text-sm font-light text-white/50">
              {moment(item.created_at).subtract(5, "hours").fromNow()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
