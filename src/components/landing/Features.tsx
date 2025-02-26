"use client";

import {
  ClockIcon,
  LockClosedIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/20/solid";

export default function Features() {
  return (
    <div className="scroll-mt-20" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Cook faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight  dark:text-white text-gray-900 sm:text-4xl">
                A faster way to production
              </p>
              <p className="mt-6 text-lg leading-8  dark:text-gray-400 text-gray-600">
                Accelerate your development with this powerful Next.js
                boilerplate
              </p>
              <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold dark:text-gray-100 text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline dark:text-gray-400">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    name: "100% Secure.",
    description:
      "With strong security protocols, manage cards and money safely and without complications.",
    icon: LockClosedIcon,
  },
  {
    name: "Minimalist.",
    description:
      "With a clean design, essential functionalities. Manage cards, make transfers and manage finances efficiently.",
    icon: Square3Stack3DIcon,
  },
  {
    name: "Save time.",
    description:
      "With intuitive functions they simplify financial management, saving time for what really matters in your.",
    icon: ClockIcon,
  },
];
