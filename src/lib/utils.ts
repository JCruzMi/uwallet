import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// #region Functions (2)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateCreditCard() {
  return Math.floor(1000000000000000 + Math.random() * 9000000000000000)
    .toString()
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

// #endregion Functions (2)
