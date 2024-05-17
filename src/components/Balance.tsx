"use client";
import { useEffect, useState } from "react";

import { getCards } from "@/lib/actions";
import { Card } from "@/lib/definitions";
import Format from "@/utils/format";

export default function SliderCards() {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCards()
      .then((res: any) => {
        setCards(res);
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
    <p className="text-3xl font-semibold">
      {Format(cards.reduce((acc, item) => acc + item.amount, 0))}
    </p>
  );
}
