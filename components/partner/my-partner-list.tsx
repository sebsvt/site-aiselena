import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Avatar } from "@/components/ui/avatar";
// import { PlusCircleIcon, EnvelopeIcon } from "@radix-ui/react-icons"; // Icons for sidebar

// Mock data for partner accounts
const partnerAccounts = [
  {
    id: 1,
    name: "Tech Innovations Ltd.",
    role: "Admin",
    avatarUrl: "https://via.placeholder.com/150?text=TI",
  },
  {
    id: 2,
    name: "Future Enterprises",
    role: "Manager",
    avatarUrl: "https://via.placeholder.com/150?text=FE",
  },
  {
    id: 3,
    name: "Startup Ventures",
    role: "Member",
    avatarUrl: "https://via.placeholder.com/150?text=SV",
  },
];

const MyPartnerList = () => {
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Search partner accounts..." />
      <CommandList>
        {partnerAccounts.length > 0 ? (
          <CommandGroup heading="Partner Accounts">
            {partnerAccounts.map((partner) => (
              <CommandItem
                key={partner.id}
                className="py-4 flex gap-4 items-center"
              >
                <Avatar className="w-10 h-10">
                  <img
                    className="rounded-full"
                    src={partner.avatarUrl}
                    alt={`Avatar of ${partner.name}`}
                  />
                </Avatar>
                <div>
                  <span className="block">{partner.name}</span>
                  <span className="text-sm text-gray-500">{partner.role}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        ) : (
          <CommandEmpty>No partner accounts found.</CommandEmpty>
        )}
      </CommandList>
    </Command>
  );
};

export default MyPartnerList;
