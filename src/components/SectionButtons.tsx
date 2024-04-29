import { Button } from "./ui/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import SendMoney from "./SendMoney";
import WithdrawMoney from "./WithdrawMoney";
import DepositMoney from "./DepositMoney";
// #region Functions (1)

export default function SectionButtons() {
  const buttonClasses = "flex flex-col items-center";

  return (
    <div className="flex justify-between w-full max-w-sm text-xs text-white">
      <SendMoney />
      <DepositMoney />
      <WithdrawMoney />
      <div className={buttonClasses}>
        <Button>
          <PlusIcon className="h-4 w-4" />
        </Button>
        Others
      </div>
    </div>
  );
}

// #endregion Functions (1)
