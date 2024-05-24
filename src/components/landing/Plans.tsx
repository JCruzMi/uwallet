import React from "react";

export default function Plans() {
  const plans = [
    {
      name: "Easy",
      discretion:
        "All the basics for businesses that are just getting started.",
      price: {
        monthly: 29,
        annually: 29 * 12 - 199,
      },
      features: ["One project", "Your dashboard"],
    },
    {
      name: "Basic",
      discretion: "Better for growing businesses that want more customers.",
      price: {
        monthly: 59,
        annually: 59 * 12 - 100,
      },
      features: [
        "Two projects",
        "Your dashboard",
        "Components included",
        "Advanced charts",
      ],
    },
    {
      name: "Custom",
      discretion: "Advanced features for pros who need more customization.",
      price: {
        monthly: 139,
        annually: 139 * 12 - 100,
      },
      features: [
        "Unlimited projects",
        "Your dashboard",
        "+300 Components",
        "Chat support",
      ],
    },
  ];
  return (
    <div id="pricing">
      <div className="flex flex-col gap-4 text-center mt-8">
        <p className="text-2xl font-medium">Flexible plans for you</p>
        <p className="text-lg">No hidden fees!</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-8 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0 px-4">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="flex flex-col w-full max-w-sm p-12 space-y-6 bg-primary rounded-md shadow-md"
          >
            <div className="flex-shrink-0">
              <span
                className={`${plan.name == "Basic" ? "text-green-500" : ""} text-background text-4xl font-medium tracking-tight`}
              >
                {plan.price.monthly}
              </span>
              <span className="text-background/90">/month</span>
            </div>
            <div className="flex-shrink-0 pb-6 space-y-2 border-b">
              <h2 className="text-2xl font-normal text-background">
                {plan.name}
              </h2>
              <p className="text-sm text-background/90">{plan.discretion}</p>
            </div>
            <ul className="flex-1 space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-background">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex-shrink-0 pt-4">
              <button
                className={`text-background ${plan.name == "Basic" ? "bg-indigo-500 !text-white hover:bg-indigo-700" : "hover:bg-indigo-500 hover:text-white"} inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {plan.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
