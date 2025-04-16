import { NextResponse } from "next/server";

// This is mock data - in a real app you would use Google Places API or similar
// to get real store data based on location

// Sample grocery stores data
const mockStores = {
  "New York, NY": [
    {
      id: 1,
      name: "Whole Foods Market",
      distance: "0.8 miles",
      totalCost: "$97.50",
      address: "10 Columbus Circle, New York, NY 10019",
      priceLevel: "high",
      image: "/whole-foods.jpg",
    },
    {
      id: 2,
      name: "Trader Joe's",
      distance: "1.2 miles",
      totalCost: "$76.30",
      address: "675 6th Ave, New York, NY 10010",
      priceLevel: "medium",
      image: "/trader-joes.jpg",
    },
    {
      id: 3,
      name: "Aldi",
      distance: "2.5 miles",
      totalCost: "$48.75",
      address: "517 E 117th St, New York, NY 10035",
      priceLevel: "low",
      image: "/aldi.jpg",
    },
  ],
  "Los Angeles, CA": [
    {
      id: 1,
      name: "Ralphs",
      distance: "1.1 miles",
      totalCost: "$72.60",
      address: "1233 N La Brea Ave, Los Angeles, CA 90038",
      priceLevel: "medium",
      image: "/ralphs.jpg",
    },
    {
      id: 2,
      name: "Vons",
      distance: "1.8 miles",
      totalCost: "$78.25",
      address: "727 N Vine St, Los Angeles, CA 90038",
      priceLevel: "medium",
      image: "/vons.jpg",
    },
    {
      id: 3,
      name: "Food 4 Less",
      distance: "2.7 miles",
      totalCost: "$42.20",
      address: "5420 Sunset Blvd, Los Angeles, CA 90027",
      priceLevel: "low",
      image: "/food-4-less.jpg",
    },
  ],
  // Default fallback list for any location
  "default": [
    {
      id: 1,
      name: "Walmart",
      distance: "2.5 miles",
      totalCost: "$52.35",
      address: "123 Main St",
      priceLevel: "low",
      image: "/walmart.jpg",
    },
    {
      id: 2,
      name: "Kroger",
      distance: "1.8 miles",
      totalCost: "$68.40",
      address: "456 Oak Ave",
      priceLevel: "medium",
      image: "/kroger.jpg",
    },
    {
      id: 3,
      name: "Safeway",
      distance: "3.2 miles",
      totalCost: "$75.90",
      address: "789 Pine Rd",
      priceLevel: "medium",
      image: "/safeway.jpg",
    },
  ],
};

export async function GET(request: Request) {
  try {
    // Get the location from the URL parameter
    const { searchParams } = new URL(request.url);
    const location = searchParams.get("location") || "";
    const budget = searchParams.get("budget") || "medium";

    // Get stores for the specified location or default to the fallback list
    let stores = mockStores[location as keyof typeof mockStores] || mockStores.default;

    // Filter by budget if specified
    if (budget !== "all") {
      const budgetMap: Record<string, string[]> = {
        low: ["low"],
        medium: ["low", "medium"],
        high: ["low", "medium", "high"],
      };

      const allowedPriceLevels = budgetMap[budget as keyof typeof budgetMap] || ["low", "medium", "high"];
      
      stores = stores.filter(store => 
        allowedPriceLevels.includes(store.priceLevel)
      );
    }

    // In a real app, we would fetch this data from a grocery store API (Instacart, Walmart, etc.)
    // or use Google Places API to find nearby grocery stores
    return NextResponse.json({ stores });
  } catch (error) {
    console.error("Error fetching grocery stores:", error);
    return NextResponse.json(
      { error: "Failed to fetch grocery stores" },
      { status: 500 }
    );
  }
} 