"use client";

import { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { useAuth } from "@/lib/hooks/useAuth";

type UserPreferences = {
  height: string;
  weight: string;
  heightUnit: "cm" | "ft";
  weightUnit: "kg" | "lbs";
  weightGoal: "lose" | "maintain" | "gain";
  location: string;
  dietType: string;
  allergies: string[];
  budget: "low" | "medium" | "no-budget";
  customMeals: string;
};

type MealPlanType = {
  mealPlan: Record<string, any>;
  dailyNutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
};

type GroceryStoreType = {
  id: number;
  name: string;
  distance: string;
  totalCost: string;
  address: string;
  image?: string;
};

type GroceryListType = {
  groceryList: Array<{
    category: string;
    items: Array<{
      name: string;
      amount: string;
      price: string;
      aisle: string;
      checked: boolean;
    }>;
  }>;
  totalCost: string;
};

type AppContextType = {
  userPreferences: UserPreferences;
  setUserPreferences: (preferences: Partial<UserPreferences>) => void;
  mealPlan: MealPlanType | null;
  setMealPlan: (mealPlan: MealPlanType | null) => void;
  groceryStores: GroceryStoreType[];
  setGroceryStores: (stores: GroceryStoreType[]) => void;
  selectedStore: GroceryStoreType | null;
  setSelectedStore: (store: GroceryStoreType | null) => void;
  groceryList: GroceryListType | null;
  setGroceryList: (list: GroceryListType | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  saveToDatabase: () => Promise<void>;
  fetchFromDatabase: () => Promise<void>;
};

const defaultUserPreferences: UserPreferences = {
  height: "",
  weight: "",
  heightUnit: "cm",
  weightUnit: "kg",
  weightGoal: "lose",
  location: "",
  dietType: "",
  allergies: [],
  budget: "medium",
  customMeals: "",
};

export const AppContext = createContext<AppContextType>({
  userPreferences: defaultUserPreferences,
  setUserPreferences: () => {},
  mealPlan: null,
  setMealPlan: () => {},
  groceryStores: [],
  setGroceryStores: () => {},
  selectedStore: null,
  setSelectedStore: () => {},
  groceryList: null,
  setGroceryList: () => {},
  isLoading: false,
  setIsLoading: () => {},
  saveToDatabase: async () => {},
  fetchFromDatabase: async () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [userPreferences, setUserPreferencesState] = useState<UserPreferences>(defaultUserPreferences);
  const [mealPlan, setMealPlanState] = useState<MealPlanType | null>(null);
  const [groceryStores, setGroceryStoresState] = useState<GroceryStoreType[]>([]);
  const [selectedStore, setSelectedStoreState] = useState<GroceryStoreType | null>(null);
  const [groceryList, setGroceryListState] = useState<GroceryListType | null>(null);
  const [isLoading, setIsLoadingState] = useState(false);

  // Update user preferences
  const setUserPreferences = (preferences: Partial<UserPreferences>) => {
    setUserPreferencesState((prev) => ({ ...prev, ...preferences }));
  };

  // Set meal plan
  const setMealPlan = (newMealPlan: MealPlanType | null) => {
    setMealPlanState(newMealPlan);
  };

  // Set grocery stores
  const setGroceryStores = (stores: GroceryStoreType[]) => {
    setGroceryStoresState(stores);
    if (stores.length > 0 && !selectedStore) {
      setSelectedStore(stores[0]);
    }
  };

  // Set selected store
  const setSelectedStore = (store: GroceryStoreType | null) => {
    setSelectedStoreState(store);
  };

  // Set grocery list
  const setGroceryList = (list: GroceryListType | null) => {
    setGroceryListState(list);
  };

  // Set loading state
  const setIsLoading = (loading: boolean) => {
    setIsLoadingState(loading);
  };

  // Save data to a database (in a real app, this would use Firebase)
  const saveToDatabase = async () => {
    // In a real app, this would save data to Firebase
    if (!user) return;
    
    try {
      setIsLoading(true);
      
      // Mock implementation - in a real app, you would use Firebase
      console.log("Saving user data to database for user:", user.uid);
      
      // Simulate a delay for the mock implementation
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      setIsLoading(false);
    } catch (error) {
      console.error("Error saving data:", error);
      setIsLoading(false);
    }
  };

  // Fetch data from a database (in a real app, this would use Firebase)
  const fetchFromDatabase = async () => {
    // In a real app, this would fetch data from Firebase
    if (!user) return;
    
    try {
      setIsLoading(true);
      
      // Mock implementation - in a real app, you would use Firebase
      console.log("Fetching user data from database for user:", user.uid);
      
      // Simulate a delay for the mock implementation
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  // When user changes, fetch their data
  useEffect(() => {
    if (user) {
      fetchFromDatabase();
    }
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        userPreferences,
        setUserPreferences,
        mealPlan,
        setMealPlan,
        groceryStores,
        setGroceryStores,
        selectedStore,
        setSelectedStore,
        groceryList,
        setGroceryList,
        isLoading,
        setIsLoading,
        saveToDatabase,
        fetchFromDatabase,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext); 