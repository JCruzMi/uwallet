import Link from "next/link";

// #region Functions (1)

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mb-4 px-4">
      <div className="flex items-center gap-4 md:gap-20">
        <Link href="/">
          <div className="bg-gradient-to-r from-pink-300 to-purple-500 text-transparent bg-clip-text">
            <h1 className="font-bold text-lg">HKmoney</h1>
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
