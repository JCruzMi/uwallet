import Link from "next/link";

import { Button } from "../ui/Button";

const Hero = () => {
  return (
    <>
      <div className="px-5 pt-4 pb-8 max-w-6xl m-auto z-20">
        <h1 className="text-info font-medium text-[32px] text-center lg:text-6xl lg:pt-11 lg:pb-6">
          La Plataforma Definitiva para Centralizar y Gestionar tus Tarjetas
        </h1>
        <p className="text-primary text-center text-[16px] lg:text-[18px] mt-6">
          Con uWallet, simplifica tu vida financiera al centralizar todas tus
          tarjetas de débito y crédito en una sola plataforma. Realiza
          transferencias, depósitos, retiros y paga servicios, todo desde un
          solo lugar.
        </p>
      </div>
      <div className="px-5 pb-0 max-w-6xl flex justify-center items-center gap-x-6 lg:gap-x-10 z-20">
        <Button className="w-auto">Try for free</Button>

        <Link href="#">
          <Button variant="outline" className="w-auto">
            View Pricing
          </Button>
        </Link>
      </div>
      <div className="w-full h-full relative flex justify-center">
        <div className="min-h-[500px] sm:min-h-[600px] md:min-h-[700px] w-full lg:min-h-[760px]">
          <div className="bg-gradient-to-t from-zinc-900/40 backdrop-blur-md w-full h-[310px] bottom-0 absolute !z-0"></div>
          <div className="flex absolute bottom-0 overflow-hidden w-full h-full blur-2xl">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 bottom-0 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.5"
              ></circle>
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#4F46E5"></stop>
                  <stop offset="1" stopColor="#E935C1" stopOpacity="0"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-12 left-4 right-4 max-w-6xl mx-auto">
          <img
            className="rounded-md w-auto h-[310px] sm:h-[410px] md:h-[510px] lg:h-[600px] !z-10"
            src="/images/web.png"
            alt="heroImage"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
