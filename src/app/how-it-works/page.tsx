import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          How FitGrocery Works
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Our personalized approach helps you achieve your health goals with meal plans tailored to your preferences and budget.
        </p>
      </div>

      {/* Feature sections */}
      <div className="space-y-24">
        {/* Section 1: Personalized Meal Plans */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <div className="bg-indigo-100 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center font-medium text-indigo-600">
                [Meal Plan Illustration]
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Personalized Meal Plans</h2>
            <p className="text-lg text-gray-600 mb-6">
              We create custom meal plans based on your physical metrics, weight goals, dietary preferences, and food allergies. Whether you want to lose weight, maintain, or gain muscle, our meal plans are designed to help you succeed.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-600">
                  Calorie-controlled meals based on your physical metrics
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-600">
                  Multiple diet options including Mediterranean, Low-Carb, Vegetarian, and more
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-600">
                  Accommodates food allergies and personal preferences
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Local Grocery Recommendations */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0 lg:order-2">
            <div className="bg-indigo-100 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center font-medium text-indigo-600">
                [Store Recommendations Illustration]
              </div>
            </div>
          </div>
          <div className="lg:order-1">
            <h2 className="text-3xl font-bold mb-6">Local Grocery Recommendations</h2>
            <p className="text-lg text-gray-600 mb-6">
              We take the guesswork out of grocery shopping by finding the best local stores that fit your budget. Get location-specific pricing information and store recommendations based on your meal plan.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-600">
                  Find stores near you with the best prices for your ingredients
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-600">
                  Compare total grocery costs across different stores
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-600">
                  Get aisle information for efficient shopping
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Budget-Friendly Options */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <div className="bg-indigo-100 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center font-medium text-indigo-600">
                [Budget Options Illustration]
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Budget-Friendly Options</h2>
            <p className="text-lg text-gray-600 mb-6">
              We understand that healthy eating needs to fit your budget. Choose from various budget options and we'll adjust your meal plan and grocery recommendations accordingly.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-600">
                  Low budget option (less than $50/week per person)
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-600">
                  Medium budget option ($50-100/week per person)
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-600">
                  Flexible options that don't compromise nutrition
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Process steps */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get Started in 4 Simple Steps
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Create Your Profile</h3>
            <p className="text-gray-600">
              Enter your weight, height, and fitness goals so we can calculate your optimal nutrition plan.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Select Your Preferences</h3>
            <p className="text-gray-600">
              Choose your diet type, food allergies, and budget constraints to customize your experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Review Your Meal Plan</h3>
            <p className="text-gray-600">
              Get a personalized weekly meal plan with nutritional information that matches your goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold mb-2">Shop With Confidence</h3>
            <p className="text-gray-600">
              Use our grocery recommendations to buy exactly what you need at the best prices in your area.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your diet?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join thousands of users who have improved their health with personalized meal plans that fit their budget.
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
  );
} 