import Link from "next/link";

import { Button } from "./ui/Button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mb-4 px-4">
      <div className="flex items-center gap-4 md:gap-20">
        <Link href="/">
          <div className="bg-gradient-to-r from-pink-300 to-purple-500 text-transparent bg-clip-text">
            <Link href="/">
              <Button variant="ghost" className="flex gap-2 text-primary px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="currentColor"
                    d="M32.25 26a1.25 1.25 0 1 0 0 2.5h4.5a1.25 1.25 0 1 0 0-2.5zM6 10v25.75A6.25 6.25 0 0 0 12.25 42h24.5A6.25 6.25 0 0 0 43 35.75v-17.5a6.25 6.25 0 0 0-5-6.125V10.25A4.25 4.25 0 0 0 33.75 6h-23.5a4.25 4.25 0 0 0-4.243 4zm29.5.25V12H10.25a1.75 1.75 0 1 1 0-3.5h23.5c.967 0 1.75.784 1.75 1.75m-27 4.25h28.25a3.75 3.75 0 0 1 3.75 3.75v17.5a3.75 3.75 0 0 1-3.75 3.75h-24.5a3.75 3.75 0 0 1-3.75-3.75z"
                  />
                </svg>
                UWallet
              </Button>
            </Link>
          </div>
        </Link>
        <div className="flex gap-10">
          <Link href="/#services">
            <h2>Services</h2>
          </Link>
          <Link href="/#pricing">
            <h2>Pricing</h2>
          </Link>
        </div>
      </div>
      <Link href="/login">
        <button className="font-bold bg-gradient-to-r from-pink-300 to-purple-500 text-black p-2 rounded-md">
          Log in
        </button>
      </Link>
    </div>
  );
}

// #endregion Functions (1)
