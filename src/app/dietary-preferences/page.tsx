"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const dietTypes = [
  {
    id: "mediterranean",
    name: "Mediterranean",
    description: "Rich in vegetables, fruits, whole grains, seafood, and olive oil",
    image: "/mediterranean.jpg",
  },
  {
    id: "low-carb",
    name: "Low-Carb",
    description: "Reduced carbohydrates, higher protein and healthy fats",
    image: "/low-carb.jpg",
  },
  {
    id: "vegetarian",
    name: "Vegetarian",
    description: "Plant-based diet excluding meat, poultry, and seafood",
    image: "/vegetarian.jpg",
  },
  {
    id: "vegan",
    name: "Vegan",
    description: "Plant-based diet excluding all animal products",
    image: "/vegan.jpg",
  },
  {
    id: "asian",
    name: "Asian",
    description: "Balanced meals with rice, vegetables, and lean proteins",
    image: "/asian.jpg",
  },
  {
    id: "keto",
    name: "Keto",
    description: "Very low carb, high fat diet that puts your body in ketosis",
    image: "/keto.jpg",
  },
];

const commonAllergies = [
  { id: "dairy", name: "Dairy" },
  { id: "eggs", name: "Eggs" },
  { id: "peanuts", name: "Peanuts" },
  { id: "tree-nuts", name: "Tree Nuts" },
  { id: "fish", name: "Fish" },
  { id: "shellfish", name: "Shellfish" },
  { id: "soy", name: "Soy" },
  { id: "wheat", name: "Wheat/Gluten" },
];

export default function DietaryPreferences() {
  const router = useRouter();
  const [selectedDiet, setSelectedDiet] = useState("");
  const [allergies, setAllergies] = useState<string[]>([]);
  const [customMeals, setCustomMeals] = useState("");

  const handleAllergiesChange = (allergyId: string) => {
    if (allergies.includes(allergyId)) {
      setAllergies(allergies.filter((id) => id !== allergyId));
    } else {
      setAllergies([...allergies, allergyId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would save the data to a database or state management
    // Navigate to the budget page
    router.push("/budget");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dietary Preferences</h1>
        <p className="text-gray-600">
          Tell us about your dietary preferences and any food allergies so we can create your perfect meal plan.
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
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Select Your Diet Type</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {dietTypes.map((diet) => (
                <label
                  key={diet.id}
                  className={`relative flex flex-col rounded-lg border cursor-pointer focus:outline-none p-4 ${
                    selectedDiet === diet.id
                      ? "bg-indigo-50 border-indigo-600"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="dietType"
                      value={diet.id}
                      checked={selectedDiet === diet.id}
                      onChange={() => setSelectedDiet(diet.id)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-900">{diet.name}</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">{diet.description}</div>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Food Allergies or Restrictions</h2>
            <p className="text-sm text-gray-500 mb-4">
              Select any allergies or foods you'd like to avoid in your meal plan.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {commonAllergies.map((allergy) => (
                <label
                  key={allergy.id}
                  className={`relative flex items-center p-3 rounded-md border ${
                    allergies.includes(allergy.id)
                      ? "bg-indigo-50 border-indigo-600"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="allergies"
                    value={allergy.id}
                    checked={allergies.includes(allergy.id)}
                    onChange={() => handleAllergiesChange(allergy.id)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-900">{allergy.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Custom Meals (Optional)</h2>
            <p className="text-sm text-gray-500 mb-4">
              Do you have any favorite meals you'd like to include in your meal plan? List them here.
            </p>
            <textarea
              name="customMeals"
              rows={3}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Ex: Pizza on Friday nights, oatmeal for breakfast"
              value={customMeals}
              onChange={(e) => setCustomMeals(e.target.value)}
            ></textarea>
            <p className="mt-2 text-xs text-gray-500">
              We'll try to incorporate these into your meal plan when possible, adjusting other meals to stay within your calorie and macronutrient goals.
            </p>
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
              disabled={!selectedDiet}
            >
              Continue to Budget
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 