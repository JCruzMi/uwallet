// #region Type aliases (1)
import Format from "../utils/format";

type Card = {
  name?: string;
  amount?: number;
  numWallet?: string;
  category?: string;
};

// #endregion Type aliases (1)

// #region Functions (1)

export default function Card({ name, amount, numWallet, category }: Card) {
  return (
    <div className="max-w-[230px] min-w-[230px] w-full min-h-[140px] rounded-lg bg-gradient-to-r from-pink-300 to-purple-500 flex flex-col justify-between p-4 text-primary">
      <div className="text-lg">
        <div>{name}</div>
        <div>{Format(amount)}</div>
      </div>
      <div>{numWallet}</div>
    </div>
  );
}

// #endregion Functions (1)
