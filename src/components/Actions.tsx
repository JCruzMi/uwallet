'use client';

import SendMoney from './SendMoney';
import DepositMoney from './DepositMoney';
import WithdrawMoney from './WithdrawMoney';
import UpdateCard from './UpdateCard';
import { useState } from 'react';

export default function Actions({ cards }: { cards: any }) {
  const [selectedCard, setSelectedCard] = useState(
    cards.find((card: any) => card.ismain)
  );
  const [cardsArray] = useState(() =>
    cards.map((card: any) => ({ id: card.id, name: card.name }))
  );
  if (!cards && !selectedCard) return null;

  function setCard(id: string) {
    setSelectedCard(
      cards.find((card: any) => {
        return card.id === id;
      })
    );
  }
  return (
    <div className='flex justify-between w-[300px] items-center max-w-sm'>
      <SendMoney
        numberSender={selectedCard.id}
        amountCard={selectedCard.amount}
      />
      <DepositMoney
        selectedCard={selectedCard.id}
        amount={selectedCard.amount}
        cards={cardsArray}
        setSelectedCard={setCard}
      />
      <WithdrawMoney number={selectedCard.id} amount={selectedCard.amount} />
      <UpdateCard number={selectedCard.id} />
    </div>
  );
}
