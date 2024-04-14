// #region Type aliases (3)

export type Card = {
  id: string;
  amount: number;
  name: string;
  number: string;
  user_id: string;
};
export type Cards = {
  cards: Card[];
};
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

// #endregion Type aliases (3)
