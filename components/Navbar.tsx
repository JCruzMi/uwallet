import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between mb-4">
      <div className="flex items-center gap-20">
        <Link href="/">
          <h1 className="font-bold text-lg">HKmoney</h1>
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
        <button className="bg-white text-black p-2 rounded-md">Log in</button>
      </Link>
    </div>
  );
}
