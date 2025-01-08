'use client';

import * as React from 'react';
import { Check } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectCard({
  selectedCard,
  cards,
  setSelectedCard,
}: {
  selectedCard: string;
  cards: any;
  setSelectedCard: Function;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Select open={isOpen} onOpenChange={setIsOpen} defaultValue={selectedCard}>
      <SelectTrigger className='w-full max-w-sm'>
        <Check className='mr-2 h-4 w-4' />
        <SelectValue placeholder='Select Card' />
      </SelectTrigger>
      <SelectContent position='popper'>
        {cards.map((card: any) => (
          <SelectItem
            key={card.id}
            value={card.id}
            aria-label={`Select ${card.name} card`}
            onClick={() => setSelectedCard(card.id)}
            className='w-full'
          >
            <div className='flex items-center gap-2'>
              <span className='text-sm'>{card.id}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
