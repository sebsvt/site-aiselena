import React from "react";
import {
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import Link from "next/link";

const UnsignedContent = () => {
  return (
    <>
      <SheetHeader>
        <SheetTitle>Account</SheetTitle>
        <SheetDescription>Make everything possible here</SheetDescription>
      </SheetHeader>
      <div className="my-4">
        <p className="text-sm">You are not logged in. </p>
        <Link href={"/sign-in"} className="text-blue-600 text-sm">
          Click here to sign in.
        </Link>
      </div>
      <SheetFooter>
        <SheetClose asChild></SheetClose>
      </SheetFooter>
    </>
  );
};

export default UnsignedContent;
