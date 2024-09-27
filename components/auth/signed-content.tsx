"use client";

import React from "react";
import {
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

import { UserAccount } from "@/models/user_account";
import UserMenuItemList from "./menu-item";

const SignedContent = ({ user }: { user: UserAccount }) => {
  return (
    <>
      <SheetHeader>
        <SheetTitle>
          Hello, {user.firstname} {user.surname}
        </SheetTitle>
        <SheetDescription>Make everything possible here</SheetDescription>
      </SheetHeader>
      <div className="my-4">
        <UserMenuItemList user={user} />
      </div>
      <SheetFooter></SheetFooter>
    </>
  );
};

export default SignedContent;
