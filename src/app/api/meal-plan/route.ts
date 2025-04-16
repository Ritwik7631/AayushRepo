import { NextResponse } from "next/server";

// Mock data - in a real app, we would use a database of recipes and ingredients
// and filter based on user preferences, allergies, etc.

// Sample meal plan data for different diet types
const dietMealPlans = {
  mediterranean: {
    breakfast: [
      {
        name: "Greek Yogurt with Honey and Walnuts",
        calories: 320,
        protein: 18,
        carbs: 35,
        fat: 12,
      },
      {
        name: "Whole Grain Toast with Avocado and Tomato",
        calories: 290,
        protein: 8,
        carbs: 30,
        fat: 15,
      },
      {
        name: "Vegetable Omelette with Feta Cheese",
        calories: 350,
        protein: 22,
        carbs: 8,
        fat: 25,
      },
    ],
    lunch: [
      {
        name: "Mediterranean Chickpea Salad",
        calories: 410,
        protein: 15,
        carbs: 45,
        fat: 18,
      },
      {
        name: "Grilled Vegetable and Hummus Wrap",
        calories: 380,
        protein: 12,
        carbs: 48,
        fat: 16,
      },
      {
        name: "Greek Salad with Grilled Chicken",
        calories: 450,
        protein: 35,
        carbs: 15,
        fat: 28,
      },
    ],
    dinner: [
      {
        name: "Baked Salmon with Roasted Vegetables",
        calories: 480,
        protein: 38,
        carbs: 22,
        fat: 25,
      },
      {
        name: "Whole Wheat Pasta with Tomatoes and Olives",
        calories: 420,
        protein: 14,
        carbs: 65,
        fat: 12,
      },
      {
        name: "Vegetable and Bean Stew with Whole Grain Bread",
        calories: 440,
        protein: 20,
        carbs: 60,
        fat: 14,
      },
    ],
    snack: [
      {
        name: "Mixed Nuts and Dried Fruit",
        calories: 200,
        protein: 6,
        carbs: 18,
        fat: 12,
      },
      {
        name: "Apple with Almond Butter",
        calories: 180,
        protein: 5,
        carbs: 20,
        fat: 10,
      },
      {
        name: "Hummus with Vegetable Sticks",
        calories: 160,
        protein: 6,
        carbs: 15,
        fat: 8,
      },
    ],
  },
  
  "low-carb": {
    breakfast: [
      {
        name: "Scrambled Eggs with Spinach and Cheese",
        calories: 310,
        protein: 22,
        carbs: 5,
        fat: 22,
      },
      {
        name: "Greek Yogurt with Berries and Nuts",
        calories: 280,
        protein: 20,
        carbs: 15,
        fat: 15,
      },
      {
        name: "Avocado and Bacon Breakfast Bowl",
        calories: 350,
        protein: 18,
        carbs: 8,
        fat: 28,
      },
    ],
    lunch: [
      {
        name: "Grilled Chicken Salad with Avocado",
        calories: 420,
        protein: 38,
        carbs: 10,
        fat: 25,
      },
      {
        name: "Tuna Salad Lettuce Wraps",
        calories: 370,
        protein: 35,
        carbs: 8,
        fat: 22,
      },
      {
        name: "Cauliflower Rice Bowl with Steak",
        calories: 440,
        protein: 35,
        carbs: 15,
        fat: 28,
      },
    ],
    dinner: [
      {
        name: "Baked Salmon with Asparagus",
        calories: 460,
        protein: 40,
        carbs: 12,
        fat: 28,
      },
      {
        name: "Zucchini Noodles with Meatballs",
        calories: 420,
        protein: 35,
        carbs: 15,
        fat: 25,
      },
      {
        name: "Grilled Steak with Mushrooms and Spinach",
        calories: 490,
        protein: 42,
        carbs: 10,
        fat: 30,
      },
    ],
    snack: [
      {
        name: "String Cheese and Almonds",
        calories: 180,
        protein: 12,
        carbs: 5,
        fat: 14,
      },
      {
        name: "Hard-Boiled Eggs",
        calories: 140,
        protein: 12,
        carbs: 1,
        fat: 10,
      },
      {
        name: "Celery with Peanut Butter",
        calories: 150,
        protein: 6,
        carbs: 8,
        fat: 12,
      },
    ],
  },
  
  vegetarian: {
    breakfast: [
      {
        name: "Overnight Oats with Fruit and Nuts",
        calories: 340,
        protein: 12,
        carbs: 45,
        fat: 12,
      },
      {
        name: "Veggie Breakfast Burrito",
        calories: 380,
        protein: 14,
        carbs: 50,
        fat: 15,
      },
      {
        name: "Smoothie Bowl with Granola",
        calories: 320,
        protein: 10,
        carbs: 55,
        fat: 8,
      },
    ],
    lunch: [
      {
        name: "Lentil Soup with Whole Grain Bread",
        calories: 410,
        protein: 18,
        carbs: 60,
        fat: 10,
      },
      {
        name: "Quinoa and Black Bean Salad",
        calories: 390,
        protein: 15,
        carbs: 55,
        fat: 12,
      },
      {
        name: "Grilled Cheese and Tomato Soup",
        calories: 450,
        protein: 16,
        carbs: 48,
        fat: 22,
      },
    ],
    dinner: [
      {
        name: "Vegetable Stir Fry with Tofu",
        calories: 420,
        protein: 22,
        carbs: 40,
        fat: 18,
      },
      {
        name: "Eggplant Parmesan with Side Salad",
        calories: 480,
        protein: 18,
        carbs: 45,
        fat: 25,
      },
      {
        name: "Bean and Vegetable Enchiladas",
        calories: 460,
        protein: 20,
        carbs: 58,
        fat: 16,
      },
    ],
    snack: [
      {
        name: "Hummus with Pita Chips",
        calories: 220,
        protein: 8,
        carbs: 28,
        fat: 10,
      },
      {
        name: "Trail Mix",
        calories: 180,
        protein: 6,
        carbs: 20,
        fat: 12,
      },
      {
        name: "Apple with Cheese Slices",
        calories: 160,
        protein: 7,
        carbs: 22,
        fat: 6,
      },
    ],
  },
  
  // Default meal plan for any other diet type
  default: {
    breakfast: [
      {
        name: "Scrambled Eggs with Toast",
        calories: 300,
        protein: 18,
        carbs: 30,
        fat: 12,
      },
      {
        name: "Oatmeal with Berries",
        calories: 280,
        protein: 8,
        carbs: 45,
        fat: 6,
      },
      {
        name: "Greek Yogurt with Granola",
        calories: 320,
        protein: 20,
        carbs: 35,
        fat: 10,
      },
    ],
    lunch: [
      {
        name: "Turkey Sandwich with Vegetables",
        calories: 400,
        protein: 25,
        carbs: 40,
        fat: 15,
      },
      {
        name: "Chicken Salad with Mixed Greens",
        calories: 380,
        protein: 30,
        carbs: 15,
        fat: 22,
      },
      {
        name: "Tuna Wrap with Side Salad",
        calories: 420,
        protein: 28,
        carbs: 35,
        fat: 18,
      },
    ],
    dinner: [
      {
        name: "Grilled Chicken with Vegetables",
        calories: 450,
        protein: 35,
        carbs: 25,
        fat: 20,
      },
      {
        name: "Baked Fish with Rice and Broccoli",
        calories: 470,
        protein: 30,
        carbs: 45,
        fat: 15,
      },
      {
        name: "Beef Stir Fry with Mixed Vegetables",
        calories: 480,
        protein: 32,
        carbs: 30,
        fat: 25,
      },
    ],
    snack: [
      {
        name: "Apple with Peanut Butter",
        calories: 200,
        protein: 7,
        carbs: 25,
        fat: 10,
      },
      {
        name: "Protein Bar",
        calories: 180,
        protein: 15,
        carbs: 20,
        fat: 5,
      },
      {
        name: "Mixed Nuts",
        calories: 170,
        protein: 6,
        carbs: 8,
        fat: 14,
      },
    ],
  },
};

// Function to check if a meal contains allergens
const containsAllergen = (meal: string, allergies: string[]) => {
  const allergenKeywords: Record<string, string[]> = {
    dairy: ["cheese", "yogurt", "milk", "cream", "butter"],
    eggs: ["egg", "omelette"],
    peanuts: ["peanut", "peanuts"],
    "tree-nuts": ["almond", "walnut", "cashew", "nut", "nuts"],
    fish: ["fish", "salmon", "tuna", "cod", "tilapia"],
    shellfish: ["shrimp", "crab", "lobster", "shellfish"],
    soy: ["soy", "tofu", "edamame"],
    wheat: ["bread", "pasta", "wheat", "gluten", "wrap", "burrito", "toast"],
  };

  for (const allergy of allergies) {
    const keywords = allergenKeywords[allergy as keyof typeof allergenKeywords] || [];
    for (const keyword of keywords) {
      if (meal.toLowerCase().includes(keyword.toLowerCase())) {
        return true;
      }
    }
  }

  return false;
};

// Function to generate a 7-day meal plan
const generateWeekMealPlan = (
  dietType: string,
  allergies: string[],
  calorieTarget: number,
  macroTargets: { protein: number; carbs: number; fat: number }
) => {
  const mealPlanData = dietMealPlans[dietType as keyof typeof dietMealPlans] || dietMealPlans.default;
  const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const weekMealPlan: Record<string, any> = {};

  // For each day of the week, select meals that fit within calorie/macro targets
  // and don't contain allergens
  weekdays.forEach((day) => {
    // Filter out meals with allergens
    const safeBreakfasts = mealPlanData.breakfast.filter(
      (meal) => !containsAllergen(meal.name, allergies)
    );
    const safeLunches = mealPlanData.lunch.filter(
      (meal) => !containsAllergen(meal.name, allergies)
    );
    const safeDinners = mealPlanData.dinner.filter(
      (meal) => !containsAllergen(meal.name, allergies)
    );
    const safeSnacks = mealPlanData.snack.filter(
      (meal) => !containsAllergen(meal.name, allergies)
    );

    // Select random meals for the day
    const breakfast = safeBreakfasts[Math.floor(Math.random() * safeBreakfasts.length)];
    const lunch = safeLunches[Math.floor(Math.random() * safeLunches.length)];
    const dinner = safeDinners[Math.floor(Math.random() * safeDinners.length)];
    const snack = safeSnacks[Math.floor(Math.random() * safeSnacks.length)];

    // In a real app, we would ensure the daily calories and macros align with targets
    // by adjusting portion sizes or selecting different meals

    weekMealPlan[day] = {
      breakfast,
      lunch,
      dinner,
      snack,
    };
  });

  return weekMealPlan;
};

export async function POST(request: Request) {
  try {
    const { dietType, allergies, calorieTarget, macros, customMeals } = await request.json();

    // Generate a week-long meal plan
    const weekMealPlan = generateWeekMealPlan(
      dietType || "default",
      allergies || [],
      calorieTarget || 2000,
      macros || { protein: 100, carbs: 250, fat: 70 }
    );

    // Calculate the average daily nutrition totals
    const dailyCalories = Object.values(weekMealPlan).reduce((sum: number, day: any) => {
      const dayCalories =
        day.breakfast.calories + day.lunch.calories + day.dinner.calories + day.snack.calories;
      return sum + dayCalories;
    }, 0) / 7;

    const dailyProtein = Object.values(weekMealPlan).reduce((sum: number, day: any) => {
      const dayProtein =
        day.breakfast.protein + day.lunch.protein + day.dinner.protein + day.snack.protein;
      return sum + dayProtein;
    }, 0) / 7;

    const dailyCarbs = Object.values(weekMealPlan).reduce((sum: number, day: any) => {
      const dayCarbs = day.breakfast.carbs + day.lunch.carbs + day.dinner.carbs + day.snack.carbs;
      return sum + dayCarbs;
    }, 0) / 7;

    const dailyFat = Object.values(weekMealPlan).reduce((sum: number, day: any) => {
      const dayFat = day.breakfast.fat + day.lunch.fat + day.dinner.fat + day.snack.fat;
      return sum + dayFat;
    }, 0) / 7;

    // In a real app, we would replace certain meals with custom meals specified by the user
    // and recalculate the nutrition totals

    return NextResponse.json({
      mealPlan: weekMealPlan,
      dailyNutrition: {
        calories: Math.round(dailyCalories),
        protein: Math.round(dailyProtein),
        carbs: Math.round(dailyCarbs),
        fat: Math.round(dailyFat),
      },
    });
  } catch (error) {
    console.error("Error generating meal plan:", error);
    return NextResponse.json(
      { error: "Failed to generate meal plan" },
      { status: 500 }
    );
  }
} 