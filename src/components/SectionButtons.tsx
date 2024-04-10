import { Button } from "./ui/Button";

// #region Functions (1)

export default function SectionButtons() {
  return (
    <div className="flex gap-2 w-full max-w-sm">
      <Button>Send</Button>
      <Button>Receive</Button>
      <Button>Withdraw</Button>
      <Button>Others</Button>
    </div>
  );
}

// #endregion Functions (1)
