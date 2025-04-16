"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GetStarted() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    heightUnit: "cm",
    weightUnit: "kg",
    weightGoal: "lose",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would save the data to a database or state management
    // For now, we'll just move to the next step
    if (step === 1) {
      setStep(2);
    } else {
      // Navigate to the dietary preferences page after collecting basic info
      router.push("/dietary-preferences");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Get Started with FitGrocery</h1>
        <p className="text-gray-600">
          Let's create your personalized meal plan. First, we need some basic information.
        </p>
      </div>

      {/* Progress steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-indigo-600 text-white" : "bg-gray-200"}`}>
              1
            </div>
            <div className="ml-2 text-sm font-medium">Basic Info</div>
          </div>
          <div className="w-16 h-0.5 bg-gray-200"></div>
          <div className="flex items-center">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-indigo-600 text-white" : "bg-gray-200"}`}>
              2
            </div>
            <div className="ml-2 text-sm font-medium">Location</div>
          </div>
          <div className="w-16 h-0.5 bg-gray-200"></div>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-gray-200">
              3
            </div>
            <div className="ml-2 text-sm font-medium">Diet Preferences</div>
          </div>
          <div className="w-16 h-0.5 bg-gray-200"></div>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-gray-200">
              4
            </div>
            <div className="ml-2 text-sm font-medium">Budget</div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <form onSubmit={handleSubmit}>
          {step === 1 ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Physical Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                    Height
                  </label>
                  <div className="flex">
                    <input
                      type="number"
                      id="height"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                    <select
                      name="heightUnit"
                      value={formData.heightUnit}
                      onChange={handleChange}
                      className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
                    >
                      <option value="cm">cm</option>
                      <option value="ft">ft</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                    Weight
                  </label>
                  <div className="flex">
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                    <select
                      name="weightUnit"
                      value={formData.weightUnit}
                      onChange={handleChange}
                      className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
                    >
                      <option value="kg">kg</option>
                      <option value="lbs">lbs</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="weightGoal" className="block text-sm font-medium text-gray-700 mb-1">
                  What is your weight goal?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                    <input
                      type="radio"
                      name="weightGoal"
                      value="lose"
                      checked={formData.weightGoal === "lose"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">Lose Weight</span>
                      </span>
                    </span>
                    <span
                      className={`${
                        formData.weightGoal === "lose" ? "border-indigo-600" : "border-transparent"
                      } absolute -inset-px rounded-lg border-2 pointer-events-none`}
                    ></span>
                  </label>

                  <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                    <input
                      type="radio"
                      name="weightGoal"
                      value="maintain"
                      checked={formData.weightGoal === "maintain"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">Maintain Weight</span>
                      </span>
                    </span>
                    <span
                      className={`${
                        formData.weightGoal === "maintain" ? "border-indigo-600" : "border-transparent"
                      } absolute -inset-px rounded-lg border-2 pointer-events-none`}
                    ></span>
                  </label>

                  <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                    <input
                      type="radio"
                      name="weightGoal"
                      value="gain"
                      checked={formData.weightGoal === "gain"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">Gain Weight</span>
                      </span>
                    </span>
                    <span
                      className={`${
                        formData.weightGoal === "gain" ? "border-indigo-600" : "border-transparent"
                      } absolute -inset-px rounded-lg border-2 pointer-events-none`}
                    ></span>
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Location</h2>
              <div className="mb-6">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Where are you located?
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your city or zip code"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
                <p className="mt-2 text-sm text-gray-500">
                  We use this to find grocery stores near you and provide local pricing information.
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="ml-auto rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {step === 1 ? "Next" : "Continue to Diet Preferences"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 