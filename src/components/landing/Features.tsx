import Feature1 from "/public/images/phone.png";
import Image from "next/image";
import Link from "next/link";

import { CheckIcon } from "@heroicons/react/16/solid";

const Features = () => {
  return (
    <div className="px-5 lg:px-0 lg:container pt-14 sm:pt-32" id="features">
      <div className="sm:flex items-center mb-14">
        <div className="sm:w-1/2">
          <h1 className="text-info font-medium text-[24px] lg:max-w-[572px] lg:text-[42px] mb-6">
            100% Secure
          </h1>
          <Image
            src={Feature1}
            className="m-auto sm:hidden w-full h-[600px] object-cover"
            alt="Feature1"
          />
          <p className="text-primary text-[16px] lg:max-w-[500px] lg:text-[18px] mt-6 mb-6 text-balance">
            With strong security protocols, manage cards and money safely and
            without complications.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-4 text-[16px] lg:text-[18px] text-primary">
              <CheckIcon className="h-6 w-6 text-green-500" /> Lorem ipsum dolor
              sit amet
            </li>
            <li className="flex items-center gap-4 text-[16px] lg:text-[18px] text-primary">
              <CheckIcon className="h-6 w-6 text-green-500" />
              Consectetur adipiscing elit
            </li>
            <li className="flex items-start gap-4 text-[16px] lg:text-[18px] text-primary">
              <CheckIcon className="h-6 w-6 text-green-500" />
              Sed do eiusmod tempor incididunt ut labore{" "}
            </li>
          </ul>
          <Link
            className="mt-6 flex items-center gap-3 font-medium text-[#0085FF] text-[16px]"
            href="#"
          >
            Learn More
          </Link>
        </div>
        <div className="sm:w-1/2 hidden sm:block">
          <Image
            className="w-full h-[600px] object-cover"
            src={Feature1}
            alt="Feature1"
          />
        </div>
      </div>
      <div className="sm:flex sm:flex-row-reverse sm:gap-6 items-center sm:mt-20 mb-14">
        <div className="sm:w-1/2 sm:px-14">
          <h1 className="text-info font-medium text-[24px] lg:text-[42px] mb-6">
            Minimalist
          </h1>
          <Image
            src={Feature1}
            className="m-auto sm:hidden w-full h-[600px] object-cover"
            alt="Feature1"
          />
          <p className="text-primary text-[16px] lg:max-w-[500px] lg:text-[18px] mt-6 mb-6">
            With a clean design, essential functionalities. Manage cards, make
            transfers and manage finances efficiently.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-4 text-[16px] lg:text-[18px] text-primary">
              <CheckIcon className="h-6 w-6 text-green-500" />
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-4 text-[16px] lg:text-[18px] text-primary">
              <CheckIcon className="h-6 w-6 text-green-500" />
              Consectetur adipiscing elit
            </li>
            <li className="flex items-start gap-4 text-[16px] lg:text-[18px] text-primary">
              <CheckIcon className="h-6 w-6 text-green-500" />
              Sed do eiusmod tempor incididunt ut labore{" "}
            </li>
          </ul>
          <Link
            className="mt-6 flex items-center gap-3 font-medium text-[#0085FF] text-[16px]"
            href="#"
          >
            Learn More
          </Link>
        </div>
        <div className="sm:w-1/2 hidden sm:block">
          <Image
            src={Feature1}
            className="w-full h-[600px] object-cover"
            alt="Feature1"
          />
        </div>
      </div>
      <div className="sm:flex items-center sm:mt-20 sm:mb-20 mb-14">
        <div className="sm:w-1/2 sm:pr-20">
          <h1 className="text-info font-medium text-[24px] lg:text-[42px] mb-6">
            Save time
          </h1>
          <Image
            src={Feature1}
            className="m-auto sm:hidden w-full h-[600px] object-cover"
            alt="Feature1"
          />
          <p className="text-primary text-[16px] lg:max-w-[500px] lg:text-[18px] mt-6 mb-6">
            With intuitive functions they simplify financial management, saving
            time for what really matters in your.
          </p>
          <div className="flex gap-6 items-center lg:mb-8">
            <div className="w-1/2">
              <h1 className="font-medium lg:text-[32px] text-[20px]">100+</h1>
              <p className="text-[16px] lg:text[18px] text-[#5F7896]">
                Lorem ipsum dolor sit
              </p>
            </div>
            <div className="w-1/2">
              <h1 className="font-medium lg:text-[32px] text-[20px]">800+</h1>
              <p className="text-[16px] lg:text[18px] text-[#5F7896]">
                Conse adipiscing elit
              </p>
            </div>
          </div>
          <Link
            className="mt-6 flex items-center gap-3 font-medium text-[#0085FF] text-[16px]"
            href="#"
          >
            Learn More
          </Link>
        </div>
        <div className="sm:w-1/2 hidden sm:block">
          <Image
            src={Feature1}
            className="w-full h-[600px] object-cover"
            alt="Feature1"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
