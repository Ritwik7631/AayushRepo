import { NextResponse } from "next/server";

// Mock data - in a real app, we would use a database to match meals with ingredients
// and fetch real-time pricing data from grocery store APIs

// Sample ingredient data with pricing at different stores
const ingredients = {
  "Greek Yogurt": {
    category: "Dairy",
    amount: "32 oz container",
    stores: {
      "Whole Foods": { price: "$5.99", aisle: "Dairy - Aisle 3" },
      "Trader Joe's": { price: "$4.99", aisle: "Dairy - Aisle 2" },
      "Walmart": { price: "$3.99", aisle: "Dairy - Aisle 4" },
      "Kroger": { price: "$4.49", aisle: "Dairy - Aisle 3" },
      "default": { price: "$4.50", aisle: "Dairy Section" },
    },
  },
  "Honey": {
    category: "Sweeteners",
    amount: "12 oz bottle",
    stores: {
      "Whole Foods": { price: "$6.99", aisle: "Baking - Aisle 7" },
      "Trader Joe's": { price: "$5.49", aisle: "Baking - Aisle 4" },
      "Walmart": { price: "$4.29", aisle: "Baking - Aisle 8" },
      "Kroger": { price: "$4.99", aisle: "Baking - Aisle 6" },
      "default": { price: "$5.49", aisle: "Baking Section" },
    },
  },
  "Walnuts": {
    category: "Nuts & Seeds",
    amount: "8 oz package",
    stores: {
      "Whole Foods": { price: "$7.99", aisle: "Snacks - Aisle 8" },
      "Trader Joe's": { price: "$6.49", aisle: "Snacks - Aisle 3" },
      "Walmart": { price: "$5.49", aisle: "Nuts - Aisle 9" },
      "Kroger": { price: "$5.99", aisle: "Snacks - Aisle 7" },
      "default": { price: "$6.50", aisle: "Nuts & Snacks" },
    },
  },
  "Chicken Breast": {
    category: "Proteins",
    amount: "1 lb",
    stores: {
      "Whole Foods": { price: "$8.99", aisle: "Meat Department" },
      "Trader Joe's": { price: "$7.99", aisle: "Meat Section" },
      "Walmart": { price: "$5.49", aisle: "Meat Department" },
      "Kroger": { price: "$6.49", aisle: "Meat Counter" },
      "default": { price: "$7.25", aisle: "Meat Department" },
    },
  },
  "Salmon Fillets": {
    category: "Proteins",
    amount: "1 lb",
    stores: {
      "Whole Foods": { price: "$14.99", aisle: "Seafood Counter" },
      "Trader Joe's": { price: "$12.99", aisle: "Seafood Section" },
      "Walmart": { price: "$10.99", aisle: "Seafood Department" },
      "Kroger": { price: "$12.49", aisle: "Seafood Counter" },
      "default": { price: "$12.99", aisle: "Seafood Department" },
    },
  },
  "Eggs": {
    category: "Dairy",
    amount: "1 dozen",
    stores: {
      "Whole Foods": { price: "$4.99", aisle: "Dairy - Aisle 3" },
      "Trader Joe's": { price: "$3.99", aisle: "Dairy - Aisle 2" },
      "Walmart": { price: "$2.99", aisle: "Dairy - Aisle 4" },
      "Kroger": { price: "$3.49", aisle: "Dairy - Aisle 3" },
      "default": { price: "$3.75", aisle: "Dairy Section" },
    },
  },
  "Spinach": {
    category: "Produce",
    amount: "5 oz bag",
    stores: {
      "Whole Foods": { price: "$3.99", aisle: "Produce - Section 1" },
      "Trader Joe's": { price: "$2.99", aisle: "Produce - Front" },
      "Walmart": { price: "$2.29", aisle: "Produce - Section 2" },
      "Kroger": { price: "$2.49", aisle: "Produce - Section 1" },
      "default": { price: "$2.99", aisle: "Produce Section" },
    },
  },
  "Avocado": {
    category: "Produce",
    amount: "1 each",
    stores: {
      "Whole Foods": { price: "$1.99", aisle: "Produce - Section 2" },
      "Trader Joe's": { price: "$1.69", aisle: "Produce - Front" },
      "Walmart": { price: "$1.29", aisle: "Produce - Section 1" },
      "Kroger": { price: "$1.49", aisle: "Produce - Section 2" },
      "default": { price: "$1.59", aisle: "Produce Section" },
    },
  },
  "Whole Grain Bread": {
    category: "Bakery",
    amount: "1 loaf",
    stores: {
      "Whole Foods": { price: "$4.99", aisle: "Bakery - Aisle 2" },
      "Trader Joe's": { price: "$3.99", aisle: "Bakery - Aisle 1" },
      "Walmart": { price: "$2.99", aisle: "Bakery - Aisle 12" },
      "Kroger": { price: "$3.49", aisle: "Bakery - Aisle 10" },
      "default": { price: "$3.75", aisle: "Bakery Section" },
    },
  },
  "Quinoa": {
    category: "Grains",
    amount: "16 oz bag",
    stores: {
      "Whole Foods": { price: "$6.99", aisle: "Grains - Aisle 5" },
      "Trader Joe's": { price: "$5.49", aisle: "Grains - Aisle 3" },
      "Walmart": { price: "$4.49", aisle: "Rice & Grains - Aisle 6" },
      "Kroger": { price: "$4.99", aisle: "Grains - Aisle 5" },
      "default": { price: "$5.49", aisle: "Grains Section" },
    },
  },
  "Almond Butter": {
    category: "Spreads",
    amount: "12 oz jar",
    stores: {
      "Whole Foods": { price: "$9.99", aisle: "Spreads - Aisle 6" },
      "Trader Joe's": { price: "$7.99", aisle: "Spreads - Aisle 4" },
      "Walmart": { price: "$6.99", aisle: "Spreads - Aisle 7" },
      "Kroger": { price: "$7.49", aisle: "Spreads - Aisle 6" },
      "default": { price: "$8.25", aisle: "Spreads & Condiments" },
    },
  },
};

// Sample meal-to-ingredient mapping
const mealIngredients: Record<string, string[]> = {
  "Greek Yogurt with Honey and Walnuts": ["Greek Yogurt", "Honey", "Walnuts"],
  "Whole Grain Toast with Avocado and Tomato": ["Whole Grain Bread", "Avocado", "Tomato"],
  "Vegetable Omelette with Feta Cheese": ["Eggs", "Spinach", "Feta Cheese", "Bell Pepper"],
  "Mediterranean Chickpea Salad": ["Chickpeas", "Cucumber", "Red Onion", "Olive Oil", "Lemon"],
  "Greek Salad with Grilled Chicken": ["Chicken Breast", "Tomato", "Cucumber", "Feta Cheese", "Olive Oil"],
  "Baked Salmon with Roasted Vegetables": ["Salmon Fillets", "Zucchini", "Bell Pepper", "Olive Oil"],
  "Whole Wheat Pasta with Tomatoes and Olives": ["Whole Wheat Pasta", "Tomato", "Olives", "Olive Oil"],
  "Apple with Almond Butter": ["Apple", "Almond Butter"],
  "Mixed Nuts and Dried Fruit": ["Walnuts", "Almonds", "Dried Cranberries"],
  // Default ingredient lists for generic meals
  "Scrambled Eggs": ["Eggs"],
  "Yogurt": ["Greek Yogurt"],
  "Salad": ["Lettuce", "Tomato", "Cucumber"],
  "Chicken": ["Chicken Breast"],
  "Fish": ["Salmon Fillets"],
  "Bread": ["Whole Grain Bread"],
};

// Function to generate a grocery list from a meal plan
const generateGroceryList = (mealPlan: any, storeName: string) => {
  const ingredientList: Record<string, { count: number; checked: boolean }> = {};

  // Process each day's meals to collect all needed ingredients
  Object.values(mealPlan).forEach((day: any) => {
    const meals = [day.breakfast, day.lunch, day.dinner, day.snack];
    
    meals.forEach((meal) => {
      // Get ingredient list for this meal or find the closest match
      let mealName = meal.name;
      let mealIngredientList = mealIngredients[mealName];
      
      if (!mealIngredientList) {
        // Try to find a partial match
        for (const key of Object.keys(mealIngredients)) {
          if (mealName.includes(key)) {
            mealIngredientList = mealIngredients[key];
            break;
          }
        }
        
        // If still no match, use default ingredients based on keywords
        if (!mealIngredientList) {
          for (const key of Object.keys(mealIngredients)) {
            if (key.length > 3 && mealName.toLowerCase().includes(key.toLowerCase())) {
              mealIngredientList = mealIngredients[key];
              break;
            }
          }
        }
      }
      
      // Add ingredients to the list or increment count
      if (mealIngredientList) {
        mealIngredientList.forEach((ingredient) => {
          if (ingredientList[ingredient]) {
            ingredientList[ingredient].count += 1;
          } else {
            ingredientList[ingredient] = { count: 1, checked: false };
          }
        });
      }
    });
  });

  // Organize ingredients by category
  const organizedList: Record<string, any[]> = {};
  
  for (const [ingredientName, data] of Object.entries(ingredientList)) {
    const ingredientData = ingredients[ingredientName as keyof typeof ingredients];
    
    if (ingredientData) {
      const category = ingredientData.category;
      const storeInfo = ingredientData.stores[storeName as keyof typeof ingredientData.stores] || ingredientData.stores.default;
      
      if (!organizedList[category]) {
        organizedList[category] = [];
      }
      
      organizedList[category].push({
        name: ingredientName,
        amount: ingredientData.amount,
        price: storeInfo.price,
        aisle: storeInfo.aisle,
        checked: data.checked,
      });
    }
  }
  
  // Convert the organized list to an array format
  const groceryList = Object.entries(organizedList).map(([category, items]) => ({
    category,
    items,
  }));
  
  // Calculate the total cost
  let totalCost = 0;
  groceryList.forEach((category) => {
    category.items.forEach((item) => {
      const price = parseFloat(item.price.replace('$', ''));
      totalCost += price;
    });
  });
  
  return {
    groceryList,
    totalCost: `$${totalCost.toFixed(2)}`,
  };
};

export async function POST(request: Request) {
  try {
    const { mealPlan, storeName = "default" } = await request.json();

    if (!mealPlan) {
      return NextResponse.json(
        { error: "Meal plan is required" },
        { status: 400 }
      );
    }

    const { groceryList, totalCost } = generateGroceryList(mealPlan, storeName);

    return NextResponse.json({
      groceryList,
      totalCost,
    });
  } catch (error) {
    console.error("Error generating grocery list:", error);
    return NextResponse.json(
      { error: "Failed to generate grocery list" },
      { status: 500 }
    );
  }
} 