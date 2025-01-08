import { BookDown, BookUp, FolderPen, HandCoins } from "lucide-react";
import SendMoney from "./SendMoney";
import { Drawer } from "vaul";
import DepositMoney from "./DepositMoney";
import WithdrawMoney from "./WithdrawMoney";
import UpdateCard from "./UpdateCard";

export default function Actions({
  number,
  amount,
}: {
  number: string;
  amount: number;
}) {
  return (
    <div className="flex justify-between w-[300px] items-center max-w-sm">
      <SendMoney numberSender={number} amountCard={amount} />
      <DepositMoney number={number} amount={amount} />
      <WithdrawMoney number={number} amount={amount} />
      <UpdateCard number={number} />
    </div>
  );
}
