import { Button } from "./ui/Button";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { BanknotesIcon } from "@heroicons/react/24/outline";
// #region Functions (1)

export default function SectionButtons() {
  const buttonClasses = "flex flex-col items-center";

  return (
    <div className="flex justify-between w-full max-w-sm text-xs text-white">
      <div className={buttonClasses}>
        <Button>
          <PaperAirplaneIcon className="h-4 w-4" />
        </Button>
        Send
      </div>
      <div className={buttonClasses}>
        <Button>
          <CurrencyDollarIcon className="h-4 w-4" />
        </Button>
        Receive
      </div>
      <div className={buttonClasses}>
        <Button>
          <BanknotesIcon className="h-4 w-4" />
        </Button>
        Withdraw
      </div>
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
