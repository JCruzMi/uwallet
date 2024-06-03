import { ReactNode } from "react";

import TopNavigation from "@/components/dashboard/TopNavigation";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopNavigation />
      <main className="flex flex-col items-center justify-between lg:px-24 p-4 py-0 w-full relative pt-16">
        <div className="flex absolute top-0 overflow-hidden w-full h-full blur-2xl">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 -top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
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
        <div className="z-10 max-w-5xl w-full items-start justify-start font-mono text-sm gap-4 flex flex-col relative pb-8 sm:pb-4">
          {children}
        </div>
      </main>
      <Toaster />
    </>
  );
}

// #endregion Functions (1)
