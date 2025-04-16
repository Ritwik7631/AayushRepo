"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const budgetOptions = [
  {
    id: "low",
    name: "Low Budget",
    description: "Less than $50 per week for one person",
    benefits: [
      "Focus on affordable, nutritious ingredients",
      "Simple meal preparations with fewer ingredients",
      "Recommendations from budget-friendly stores",
    ],
  },
  {
    id: "medium",
    name: "Medium Budget",
    description: "$50-$100 per week for one person",
    benefits: [
      "Greater variety of ingredients and meals",
      "Includes some specialty items when on sale",
      "Balance between cost and ingredient quality",
    ],
  },
  {
    id: "no-budget",
    name: "No Budget Constraint",
    description: "More than $100 per week for one person",
    benefits: [
      "Premium ingredients and wider variety",
      "Organic and specialty options available",
      "Focus on optimal nutrition without cost constraints",
    ],
  },
];

export default function Budget() {
  const router = useRouter();
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would save the data to a database or state management
    // Navigate to the results page
    router.push("/meal-plan");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Select Your Budget</h1>
        <p className="text-gray-600">
          Choose a budget that works for you, and we'll tailor your meal plan and grocery recommendations accordingly.
        </p>
      </div>

      {/* Progress steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-indigo-600 text-white">
              ✓
            </div>
            <div className="ml-2 text-sm font-medium">Basic Info</div>
          </div>
          <div className="w-16 h-0.5 bg-indigo-200"></div>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-indigo-600 text-white">
              ✓
            </div>
            <div className="ml-2 text-sm font-medium">Location</div>
          </div>
          <div className="w-16 h-0.5 bg-indigo-200"></div>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-indigo-600 text-white">
              ✓
            </div>
            <div className="ml-2 text-sm font-medium">Diet Preferences</div>
          </div>
          <div className="w-16 h-0.5 bg-indigo-200"></div>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-indigo-600 text-white">
              4
            </div>
            <div className="ml-2 text-sm font-medium">Budget</div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {budgetOptions.map((option) => (
              <div
                key={option.id}
                className={`relative rounded-lg border p-6 cursor-pointer ${
                  selectedBudget === option.id
                    ? "bg-indigo-50 border-indigo-600"
                    : "bg-white hover:bg-gray-50"
                }`}
                onClick={() => setSelectedBudget(option.id)}
              >
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id={option.id}
                      name="budget"
                      type="radio"
                      value={option.id}
                      checked={selectedBudget === option.id}
                      onChange={() => setSelectedBudget(option.id)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor={option.id} className="font-medium text-lg text-gray-900">
                      {option.name}
                    </label>
                    <p className="text-gray-500 mt-1">{option.description}</p>
                    
                    <ul className="mt-3 space-y-1">
                      {option.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="h-4 w-4 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => router.back()}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Back
            </button>
            <button
              type="submit"
              className="ml-auto rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              disabled={!selectedBudget}
            >
              Create Meal Plan
            </button>
          </div>
        </form>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-lg font-medium mb-4">Why We Ask About Your Budget</h2>
        <p className="text-gray-600 mb-4">
          Your budget helps us create a realistic meal plan that you can follow consistently. We'll use this information to:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Identify grocery stores near you with pricing that fits your budget</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Select ingredients that provide the best nutritional value for your money</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Create meal plans that are both nutritionally balanced and financially sustainable</span>
          </li>
        </ul>
      </div>
    </div>
  );
} 