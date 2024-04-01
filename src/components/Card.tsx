// #region Type aliases (1)

type Card = {
  amount?: number;
  name?: string;
  category?: string;
};

// #endregion Type aliases (1)

// #region Functions (1)

export default function Card({ amount, name, category }: Card) {
  return (
    <div className="max-w-[230px] min-w-[230px] w-full min-h-[140px] rounded-lg bg-gradient-to-r from-pink-300 to-purple-500"></div>
  );
}

// #endregion Functions (1)
