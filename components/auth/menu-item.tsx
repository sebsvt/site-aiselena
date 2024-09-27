"use client";

import React from "react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "../ui/button";
import { BellIcon, BriefcaseBusinessIcon, Settings2, User } from "lucide-react";
import { UserAccount } from "@/models/user_account";
import Link from "next/link";

const UserMenuItemList = ({ user }: { user: UserAccount }) => {
  return (
    <Command>
      <CommandList>
        <CommandGroup heading="Account">
          <CommandItem className="flex items-center py-3 gap-2">
            <Link
              href={`/u/${user.user_id}`}
              className="flex items-center gap-2"
            >
              <User size={"16"} /> Profile
            </Link>
          </CommandItem>
          <CommandItem className="flex items-center py-3 gap-2">
            <Link href={"/"} className="flex items-center gap-2">
              <BellIcon size={"16"} />
              Notification
            </Link>
          </CommandItem>
          <CommandItem className="flex items-center py-3 gap-2">
            <Link href={""} className="flex items-center gap-2">
              <Settings2 size={"16"} />
              Settings
            </Link>
          </CommandItem>
          <CommandItem className="flex items-center py-3 gap-2">
            <Link href={"/my-partner/"} className="flex items-center gap-2">
              <BriefcaseBusinessIcon size={"16"} />
              Partner Account
            </Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup>
          <Button className="mt-2 w-full" variant={"destructive"}>
            Logout
          </Button>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default UserMenuItemList;
