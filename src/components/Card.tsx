import { Card as CardType } from '@/lib/definitions';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Format from '../utils/format';
import SectionButtons from './SectionButtons';

// #region Functions (1)

export default function Card({ name, amount, number}: CardType) {
  return (
    <div className="max-w-[230px] min-w-[230px] w-full min-h-[140px] rounded-lg bg-gradient-to-r from-pink-300 to-purple-500 flex flex-col justify-between p-3 text-primary">
      <div>
        <div className='flex items-center justify-between'>
          <div>{name}</div>
          <EllipsisHorizontalIcon className="h-4 w-4 cursor-pointer" />
        </div>
        <div className='text-base'>{Format(amount)}</div>
        <div>{number}</div>
      </div>
      <SectionButtons numberSender={number} amountCard={amount}/>
    </div>
  );
}

// #endregion Functions (1)
