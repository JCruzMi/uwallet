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
            <div className="text-sm">Withdraw</div>
          </div>
        );
      case "deposit":
        return (
          <div className="flex items-center gap-2">
            <CurrencyDollarIcon className="h-5 w-5" />
            <div className="text-sm">Deposit</div>
          </div>
        );
      case "transfer":
        return (
          <div className="flex items-center gap-2">
            <PaperAirplaneIcon className="h-5 w-5" />
            <div className="text-sm">Transfer</div>
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="animate-pulse w-full h-[92px] rounded-md bg-secondary/60"></div>
        <div className="animate-pulse w-full h-[92px] rounded-md bg-secondary/60"></div>
        <div className="animate-pulse w-full h-[92px] rounded-md bg-secondary/60"></div>
        <div className="animate-pulse w-full h-[92px] rounded-md bg-secondary/60"></div>
        <div className="animate-pulse w-full h-[92px] rounded-md bg-secondary/60"></div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      {movements.length === 0 ? (
        <div className="text-center w-full flex justify-center">
          Not movements allowed
        </div>
      ) : (
        movements.map((item) => (
          <div
            key={item.id}
            className="flex justify-between gap-2 bg-background border border-input p-4 rounded-lg w-full"
          >
            <div>
              <div className="md:text-xl text-sm font-semibold">
                {iconType(item.type)}
              </div>
              <div className="md:text-xl text-sm font-semibold">
                {Format(item.amount)}
              </div>
            </div>

            <div className="flex flex-col items-end">
              {item.deposit !== "true" && (
                <div className="flex items-center gap-2 text-red-500">
                  <ArrowTrendingDownIcon className="h-4 w-4" />
                  <div className="text-sm font-light">{item.number_sender}</div>
                </div>
              )}
              {item.draw !== "true" && (
                <div className="flex items-center gap-2 text-green-500">
                  <ArrowTrendingUpIcon className="h-4 w-4" />
                  <div className="text-sm font-light">
                    {item.number_receiver}
                  </div>
                </div>
              )}

              <div className="text-sm font-light text-white/50">
                {moment(item.created_at).subtract(5, "hours").fromNow()}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
