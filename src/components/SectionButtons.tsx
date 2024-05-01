import DeleteCard from "./DeleteCard";
import DepositMoney from "./DepositMoney";
import SendMoney from "./SendMoney";
import WithdrawMoney from "./WithdrawMoney";

// #region Functions (1)

export default function SectionButtons({
  numberSender,
  amountCard,
}: {
  numberSender: string;
  amountCard: number;
}) {
  return (
    <div className="flex justify-center w-full max-w-sm text-xs text-white gap-4">
      <SendMoney numberSender={numberSender} amountCard={amountCard} />
      <DepositMoney />
      <WithdrawMoney />
    </div>
  );
}

// #endregion Functions (1)
