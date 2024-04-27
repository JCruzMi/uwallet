import { Card as CardType } from '@/lib/definitions';
import Format from '../utils/format';
import SectionButtons from './SectionButtons';

// #region Functions (1)

export default function Card({ name, amount, number }: CardType) {
  return (
    <div className="max-w-[230px] min-w-[230px] w-full min-h-[140px] rounded-lg bg-gradient-to-r from-pink-300 to-purple-500 flex flex-col justify-between p-3 text-primary">
      <div className="text-lg">
        <div>{name}</div>
        <div>{Format(amount)}</div>
      </div>
      <SectionButtons />
    </div>
  );
}

// #endregion Functions (1)
