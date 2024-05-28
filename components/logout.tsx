"use client";

import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function Logout() {
  return <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>;
}
