import { NextResponse } from "next/server";

// Mock data - in a real app this would come from USDA FoodData Central API
// USDA API docs: https://fdc.nal.usda.gov/api-guide.html
const calculateCalories = (weight: number, height: number, age: number = 30, gender: string = "male", activityLevel: string = "moderate") => {
  // Basic BMR calculation using Mifflin-St Jeor Equation
  let bmr = 0;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Activity level multipliers
  const activityMultipliers = {
    sedentary: 1.2, // Little or no exercise
    light: 1.375, // Light exercise 1-3 days/week
    moderate: 1.55, // Moderate exercise 3-5 days/week
    active: 1.725, // Hard exercise 6-7 days/week
    veryActive: 1.9, // Very hard exercise & physical job or 2x training
  };

  // Calculate TDEE (Total Daily Energy Expenditure)
  const tdee = bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers];
  
  return Math.round(tdee);
};

const calculateMacros = (calories: number, goal: string) => {
  let protein = 0;
  let carbs = 0;
  let fat = 0;

  switch (goal) {
    case "lose":
      // Higher protein, moderate fat, lower carbs for weight loss
      protein = Math.round((calories * 0.3) / 4); // 30% of calories from protein (4 cal/g)
      fat = Math.round((calories * 0.35) / 9); // 35% of calories from fat (9 cal/g)
      carbs = Math.round((calories * 0.35) / 4); // 35% of calories from carbs (4 cal/g)
      break;
    case "gain":
      // Higher carbs and protein for weight gain
      protein = Math.round((calories * 0.25) / 4); // 25% of calories from protein
      fat = Math.round((calories * 0.25) / 9); // 25% of calories from fat
      carbs = Math.round((calories * 0.5) / 4); // 50% of calories from carbs
      break;
    case "maintain":
    default:
      // Balanced macros for maintenance
      protein = Math.round((calories * 0.25) / 4); // 25% from protein
      fat = Math.round((calories * 0.3) / 9); // 30% from fat
      carbs = Math.round((calories * 0.45) / 4); // 45% from carbs
      break;
  }

  return { protein, carbs, fat };
};

export async function POST(request: Request) {
  try {
    const { weight, height, weightUnit, heightUnit, weightGoal, gender, age, activityLevel } = await request.json();

    // Convert units if needed
    let weightKg = weight;
    let heightCm = height;

    if (weightUnit === "lbs") {
      weightKg = weight * 0.453592; // Convert pounds to kg
    }

    if (heightUnit === "ft") {
      heightCm = height * 30.48; // Convert feet to cm
    }

    // Calculate daily calories based on goal
    let calorieTarget = calculateCalories(weightKg, heightCm, age, gender, activityLevel);
    
    // Adjust calories based on goal
    if (weightGoal === "lose") {
      calorieTarget -= 500; // 500 calorie deficit for weight loss
    } else if (weightGoal === "gain") {
      calorieTarget += 500; // 500 calorie surplus for weight gain
    }
    
    // Calculate macronutrients
    const macros = calculateMacros(calorieTarget, weightGoal);

    return NextResponse.json({ 
      calorieTarget,
      macros,
    });
  } catch (error) {
    console.error("Error calculating nutrition:", error);
    return NextResponse.json(
      { error: "Failed to calculate nutrition information" },
      { status: 500 }
    );
  }
} 