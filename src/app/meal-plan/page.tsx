"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Mock data for the demo - in a real app, this would come from an API
const mockMealPlan = {
  calories: 2200,
  protein: 120,
  carbs: 220,
  fat: 70,
  meals: {
    monday: {
      breakfast: {
        name: "Greek Yogurt with Berries and Granola",
        calories: 350,
        protein: 20,
        carbs: 40,
        fat: 10,
      },
      lunch: {
        name: "Mediterranean Chicken Salad",
        calories: 450,
        protein: 35,
        carbs: 25,
        fat: 25,
      },
      dinner: {
        name: "Baked Salmon with Quinoa and Roasted Vegetables",
        calories: 550,
        protein: 40,
        carbs: 45,
        fat: 25,
      },
      snack: {
        name: "Apple with Almond Butter",
        calories: 200,
        protein: 5,
        carbs: 20,
        fat: 10,
      },
    },
    tuesday: {
      breakfast: {
        name: "Spinach and Feta Omelette with Whole Grain Toast",
        calories: 380,
        protein: 25,
        carbs: 30,
        fat: 15,
      },
      lunch: {
        name: "Turkey and Avocado Wrap with Vegetables",
        calories: 420,
        protein: 30,
        carbs: 35,
        fat: 20,
      },
      dinner: {
        name: "Grilled Chicken with Sweet Potato and Broccoli",
        calories: 520,
        protein: 40,
        carbs: 50,
        fat: 15,
      },
      snack: {
        name: "Greek Yogurt with Honey",
        calories: 180,
        protein: 15,
        carbs: 20,
        fat: 2,
      },
    },
    // Other days would follow the same pattern
  },
};

const mockStores = [
  {
    id: 1,
    name: "Albertsons",
    distance: "1.2 miles",
    totalCost: "$78.45",
    address: "123 Main St, Anytown, USA",
    image: "/albertsons.jpg",
  },
  {
    id: 2,
    name: "Walmart",
    distance: "2.5 miles",
    totalCost: "$65.20",
    address: "456 Oak Ave, Anytown, USA",
    image: "/walmart.jpg",
  },
  {
    id: 3,
    name: "Trader Joe's",
    distance: "3.8 miles",
    totalCost: "$85.75",
    address: "789 Pine Blvd, Anytown, USA",
    image: "/traderjoes.jpg",
  },
];

const mockGroceryList = [
  {
    category: "Proteins",
    items: [
      {
        name: "Chicken Breast",
        amount: "2 lbs",
        price: "$10.99",
        checked: false,
        aisle: "Meat Department - Aisle 7",
      },
      {
        name: "Salmon Fillets",
        amount: "1 lb",
        price: "$12.99",
        checked: false,
        aisle: "Seafood Counter",
      },
      {
        name: "Greek Yogurt",
        amount: "32 oz",
        price: "$5.49",
        checked: false,
        aisle: "Dairy - Aisle 4",
      },
    ],
  },
  {
    category: "Fruits & Vegetables",
    items: [
      {
        name: "Spinach",
        amount: "1 bag",
        price: "$3.99",
        checked: false,
        aisle: "Produce - Aisle 1",
      },
      {
        name: "Mixed Berries",
        amount: "1 container",
        price: "$4.99",
        checked: false,
        aisle: "Produce - Aisle 1",
      },
      {
        name: "Sweet Potatoes",
        amount: "2 lbs",
        price: "$2.99",
        checked: false,
        aisle: "Produce - Aisle 2",
      },
      {
        name: "Broccoli",
        amount: "1 bunch",
        price: "$2.49",
        checked: false,
        aisle: "Produce - Aisle 1",
      },
      {
        name: "Avocados",
        amount: "2",
        price: "$3.98",
        checked: false,
        aisle: "Produce - Aisle 2",
      },
    ],
  },
  {
    category: "Grains & Starches",
    items: [
      {
        name: "Quinoa",
        amount: "1 lb",
        price: "$5.99",
        checked: false,
        aisle: "Grains - Aisle 5",
      },
      {
        name: "Whole Grain Bread",
        amount: "1 loaf",
        price: "$3.99",
        checked: false,
        aisle: "Bakery - Aisle 9",
      },
      {
        name: "Whole Wheat Wraps",
        amount: "1 pack",
        price: "$3.49",
        checked: false,
        aisle: "Bread - Aisle 9",
      },
    ],
  },
  {
    category: "Other",
    items: [
      {
        name: "Almond Butter",
        amount: "16 oz",
        price: "$7.99",
        checked: false,
        aisle: "Spreads - Aisle 6",
      },
      {
        name: "Granola",
        amount: "12 oz",
        price: "$4.49",
        checked: false,
        aisle: "Cereal - Aisle 8",
      },
      {
        name: "Olive Oil",
        amount: "16 oz",
        price: "$8.99",
        checked: false,
        aisle: "Oils - Aisle 5",
      },
    ],
  },
];

export default function MealPlan() {
  const [selectedDay, setSelectedDay] = useState("monday");
  const [selectedStore, setSelectedStore] = useState(mockStores[0]);
  const [groceryList, setGroceryList] = useState(mockGroceryList);
  const [activeTab, setActiveTab] = useState("meal-plan");

  const toggleItemCheck = (categoryIndex: number, itemIndex: number) => {
    const updatedList = [...groceryList];
    updatedList[categoryIndex].items[itemIndex].checked = !updatedList[categoryIndex].items[itemIndex].checked;
    setGroceryList(updatedList);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Personalized Meal Plan</h1>
        <p className="text-gray-600">
          Based on your weight goals and dietary preferences, we've created a meal plan for you.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          <button
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "meal-plan"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("meal-plan")}
          >
            Meal Plan
          </button>
          <button
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "grocery-stores"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("grocery-stores")}
          >
            Grocery Stores
          </button>
          <button
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "shopping-list"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("shopping-list")}
          >
            Shopping List
          </button>
        </nav>
      </div>

      {activeTab === "meal-plan" && (
        <div>
          {/* Nutrition Summary */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Daily Nutrition Summary</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{mockMealPlan.calories}</div>
                <div className="text-sm text-gray-600">Calories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{mockMealPlan.protein}g</div>
                <div className="text-sm text-gray-600">Protein</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{mockMealPlan.carbs}g</div>
                <div className="text-sm text-gray-600">Carbs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{mockMealPlan.fat}g</div>
                <div className="text-sm text-gray-600">Fat</div>
              </div>
            </div>
          </div>

          {/* Day Selection */}
          <div className="mb-8">
            <div className="flex space-x-1 overflow-x-auto pb-2">
              {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
                <button
                  key={day}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    selectedDay === day
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Meal Plan for Selected Day */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["breakfast", "lunch", "dinner", "snack"].map((mealType) => (
              <div key={mealType} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-indigo-50 px-4 py-2 border-b">
                  <h3 className="font-medium">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h3>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">
                    {mockMealPlan.meals[selectedDay as keyof typeof mockMealPlan.meals][mealType as keyof typeof mockMealPlan.meals.monday].name}
                  </h4>
                  <div className="flex space-x-4 text-sm">
                    <div>
                      <span className="font-medium">Calories: </span>
                      {mockMealPlan.meals[selectedDay as keyof typeof mockMealPlan.meals][mealType as keyof typeof mockMealPlan.meals.monday].calories}
                    </div>
                    <div>
                      <span className="font-medium">Protein: </span>
                      {mockMealPlan.meals[selectedDay as keyof typeof mockMealPlan.meals][mealType as keyof typeof mockMealPlan.meals.monday].protein}g
                    </div>
                    <div>
                      <span className="font-medium">Carbs: </span>
                      {mockMealPlan.meals[selectedDay as keyof typeof mockMealPlan.meals][mealType as keyof typeof mockMealPlan.meals.monday].carbs}g
                    </div>
                    <div>
                      <span className="font-medium">Fat: </span>
                      {mockMealPlan.meals[selectedDay as keyof typeof mockMealPlan.meals][mealType as keyof typeof mockMealPlan.meals.monday].fat}g
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                      View Recipe →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "grocery-stores" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Nearby Grocery Stores</h2>
          <p className="text-gray-600 mb-6">
            Based on your location and budget preference, we recommend these stores for your grocery shopping.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockStores.map((store) => (
              <div 
                key={store.id} 
                className={`bg-white shadow-md rounded-lg overflow-hidden border-2 ${
                  selectedStore.id === store.id ? 'border-indigo-600' : 'border-transparent'
                }`}
                onClick={() => setSelectedStore(store)}
              >
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">{store.name}</h3>
                    <span className="text-sm text-gray-500">{store.distance}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{store.address}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-indigo-600 font-semibold">
                      Total: {store.totalCost}
                    </div>
                    <button 
                      className={`px-3 py-1 rounded-md text-sm font-medium ${
                        selectedStore.id === store.id 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setSelectedStore(store)}
                    >
                      {selectedStore.id === store.id ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">About Our Store Recommendations</h3>
            <p className="text-sm text-gray-600">
              We analyze local store prices and compare them with your meal plan ingredients to find the most budget-friendly options. 
              Prices shown are estimates based on current data and may vary slightly in-store.
            </p>
          </div>
        </div>
      )}

      {activeTab === "shopping-list" && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Your Grocery List</h2>
            <div className="text-sm">
              <span className="font-medium">Selected Store: </span>
              <span className="text-indigo-600">{selectedStore.name}</span>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden border">
            {groceryList.map((category, categoryIndex) => (
              <div key={category.category} className="border-b last:border-b-0">
                <div className="bg-gray-50 px-4 py-3 border-b">
                  <h3 className="font-medium">{category.category}</h3>
                </div>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={item.name} className="px-4 py-3 border-b last:border-b-0 flex items-center justify-between">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={() => toggleItemCheck(categoryIndex, itemIndex)}
                          className="h-5 w-5 text-indigo-600 rounded mt-0.5"
                        />
                        <div className="ml-3">
                          <div className={`font-medium ${item.checked ? 'line-through text-gray-400' : ''}`}>
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            <span className="inline-block mr-4">{item.amount}</span>
                            <span className="inline-block text-gray-400">{item.aisle}</span>
                          </div>
                        </div>
                      </div>
                      <div className="font-medium">{item.price}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="bg-gray-50 px-4 py-3 flex justify-end">
              <div className="font-semibold">
                Estimated Total: {selectedStore.totalCost}
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between">
            <button 
              type="button"
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Email List
            </button>
            <button 
              type="button"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Print List
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 