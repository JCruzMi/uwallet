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
          <p className="text-2xl font-semibold">{Format(item.amount)}</p>
          <p className="text-sm font-light">
            {new Date(item.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
