import { Software } from "@/models/product";

// services/authService.ts
export const getSoftwareProductLimit = async (
  limit: number
): Promise<Software[] | null> => {
  const response = await fetch(
    `http://localhost:8000/api/software?limit=${limit}`,
    {
      method: "GET",
      credentials: "include", // Include cookies if using session authentication
    }
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data: Software[] = await response.json();
  return data; // Adjust according to your API response structure
};
