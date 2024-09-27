import { UserAccount } from "@/models/user_account";

export const mockUser = {
  user_id: "123",
  firstname: "Saharat",
  surname: "Vithchataya",
  email: "vithchataya.saharat@gmail.com",
  avatar:
    "https://cdn.discordapp.com/attachments/1123591702620422167/1287856327342686309/460145833_122135394608321877_4463017043733840271_n.jpg?ex=66f3112b&is=66f1bfab&hm=42705bcfbca837df4daa4ea24c4cc7f758c05a7fd490c60debba1c0036e4bcd9&",
  date_of_birth: "2005-10-25",
};

// services/authService.ts
export const getCurrentUser = async (): Promise<UserAccount | null> => {
  // const response = await fetch("/api/current-user", {
  //   method: "GET",
  //   credentials: "include", // Include cookies if using session authentication
  // });

  // if (!response.ok) {
  //   throw new Error("User not found");
  // }

  // const data = await response.json();
  // return data.user; // Adjust according to your API response structure

  // return null;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUser); // Return the mock user data
    }, 1000); // Simulate 1 second delay
  });
};
