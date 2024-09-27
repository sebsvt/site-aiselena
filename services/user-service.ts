import { UserAccount } from "@/models/user_account";
import { mockUser } from "./auth-service";

export const getUserProfile = async (
  username: string
): Promise<UserAccount | null> => {
  // You could simulate fetching a user profile by username
  if (username === "Saharat") {
    return mockUser;
  }
  return null; // In a real app, this would fetch from an API.
};
