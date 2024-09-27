"use client";

import React, { useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SignedContent from "./signed-content";
import UnsignedContent from "./unsigned-content";
import { useCurrentUser } from "@/hooks/use-current-user";

const UserButton = () => {
  // Explicitly typing 'user' to be either 'UserAccount' or 'null'
  const { user } = useCurrentUser();

  return (
    <Sheet>
      <SheetTrigger>
        <Avatar className="w-7 h-7">
          {/* Use user's avatar or fallback to default avatar */}
          <AvatarImage
            src={user?.avatar || "/images/default-avatar.png"}
            alt="user avatar"
          />
          <AvatarFallback>
            {/* Handle the case where firstname or surname could be null or undefined */}
            {`${user?.firstname?.charAt(0)?.toUpperCase() || "U"}${
              user?.surname?.charAt(0)?.toUpperCase() || "N"
            }`}
          </AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent>
        {/* Show signed-in content or unsigned content based on user existence */}
        {user ? <SignedContent user={user} /> : <UnsignedContent />}
      </SheetContent>
    </Sheet>
  );
};

export default UserButton;
