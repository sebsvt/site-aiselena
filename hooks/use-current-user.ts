"use client";
import { useEffect, useState } from "react";
import { getCurrentUser } from "@/services/auth-service"; // Adjust the import as needed
import { UserAccount } from "@/models/user_account";

export const useCurrentUser = () => {
  const [user, setUser] = useState<null | UserAccount>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser(); // Fetch current user
        setUser(currentUser); // Set user data if exists
      } catch (err) {
        console.log(err);
        setError("Failed to load user data");
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchUser(); // Call the function to fetch user
  }, []);

  return { user, loading, error }; // Return user data, loading state, and error
};
