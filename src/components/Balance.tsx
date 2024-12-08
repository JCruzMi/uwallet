import NumberFlow from "@number-flow/react";

export default function Balance({ amount }: any) {
  const parsedAmount =
    typeof amount === "string"
      ? parseFloat(amount.replace(/\$/g, "").replace(/\./g, "").trim())
      : amount;
  return (
    <NumberFlow
      value={parsedAmount}
      continuous={true}
      className="text-4xl font-semibold"
      prefix="$ "
    />
  );
}
