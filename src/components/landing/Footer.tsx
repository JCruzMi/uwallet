import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-4 lg:px-0 lg:container">
      <div className="flex flex-col lg:flex-row justify-between items-center py-6 gap-y-6 lg:gap-y-6">
        <p className="text-[#5F7896] text-[16px] font-medium text-center lg:text-left">
          © Copyright 2024. Your Site. All rights reserved.
        </p>
        <div className="flex items-center gap-x-14">
          <Link href="#">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
