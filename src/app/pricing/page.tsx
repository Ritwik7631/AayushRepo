import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    href: "/get-started?plan=basic",
    price: { monthly: "$4.99", annually: "$49.99" },
    description: "Perfect for individuals getting started with meal planning.",
    features: [
      "Personalized meal plans based on dietary preferences",
      "Weekly grocery lists",
      "Basic store recommendations",
      "Calorie and macronutrient tracking",
      "7-day free trial",
    ],
    mostPopular: false,
  },
  {
    name: "Premium",
    id: "tier-premium",
    href: "/get-started?plan=premium",
    price: { monthly: "$9.99", annually: "$99.99" },
    description: "Ideal for individuals serious about nutrition and saving money on groceries.",
    features: [
      "Everything in Basic",
      "Advanced store comparison with pricing",
      "Aisle location information",
      "Custom meal preferences",
      "Email support",
      "Meal plan customization",
      "7-day free trial",
    ],
    mostPopular: true,
  },
  {
    name: "Family",
    id: "tier-family",
    href: "/get-started?plan=family",
    price: { monthly: "$19.99", annually: "$199.99" },
    description: "For families looking to plan meals and grocery shopping together.",
    features: [
      "Everything in Premium",
      "Meal plans for up to 5 family members",
      "Family budget optimization",
      "Shared grocery lists",
      "Preference management for all members",
      "Priority support",
      "7-day free trial",
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for every budget
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose a plan that works for you. All plans include a 7-day free trial.
          </p>
        </div>

        {/* Toggle annual/monthly */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-gray-100">
            <div className="rounded-full bg-indigo-600 text-white py-1 px-4">Monthly</div>
            <div className="py-1 px-4 text-gray-700">Annual (Save 20%)</div>
          </div>
        </div>

        {/* Pricing tiers */}
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "ring-2 ring-indigo-600"
                  : "ring-1 ring-gray-200",
                "rounded-3xl p-8"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                  "text-lg font-semibold leading-8"
                )}
              >
                {tier.name}
              </h3>
              {tier.mostPopular && (
                <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-600 px-3 py-1 text-sm font-semibold text-white">
                  Most popular
                </p>
              )}
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                Start free trial
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="mx-auto mt-24 max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            <div className="pt-6">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                What happens after my free trial?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                After your 7-day free trial, you'll be charged the plan price shown above. You can cancel anytime before the trial ends.
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Can I change my plan later?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                How accurate are the store prices?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We strive to provide the most accurate pricing information possible. Prices are updated regularly, but may vary slightly from in-store prices due to sales, promotions, or regional differences.
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Can I cancel my subscription?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Yes, you can cancel your subscription at any time. After cancellation, you'll have access to the service until the end of your current billing period.
              </dd>
            </div>
          </dl>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your diet?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start your free trial today and see how FitGrocery can help you eat healthier within your budget.
          </p>
          <Link 
            href="/get-started"
            className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get Started For Free
          </Link>
          <p className="mt-4 text-sm text-gray-500">7-day free trial, no credit card required</p>
        </div>
      </div>
    </div>
  );
} 