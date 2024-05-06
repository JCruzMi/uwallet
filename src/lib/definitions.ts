import Movements from "@/components/Movements";

// #region Type aliases (5)

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
export type Movement = {
  created_at: string | number | Date;
  id: string;
  amount: number;
  number_sender: string;
  number_receiver: string;
  user_id_sender: string;
  user_id_receiver: string;
};
export type Movements = {
  movements: Movement[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

// #endregion Type aliases (5)
