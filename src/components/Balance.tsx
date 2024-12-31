import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";

export default function Balance({ amount, continuous, className }: any) {
  const parsedAmount =
    typeof amount === "string"
      ? parseFloat(amount.replace(/\$/g, "").replace(/\./g, "").trim())
      : amount;
  return (
    <NumberFlow
      value={parsedAmount}
      continuous={continuous}
      className={cn("text-4xl font-semibold", className)}
      prefix="$ "
    />
  );
}
