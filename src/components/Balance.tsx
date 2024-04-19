"use client";
import { useEffect, useState } from "react";

import { cards as getCards } from "@/lib/actions";
import { Card } from "@/lib/definitions";
import Format from "@/utils/format";

export default function SliderCards() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    getCards().then((res: any) => {
      setCards(res);
    });
  }, []);

  return (
    <p className="text-2xl font-semibold">
      {Format(cards.reduce((acc, item) => acc + item.amount, 0))}
    </p>
  );
}
