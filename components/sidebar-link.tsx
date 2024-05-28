"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  href: string;
  mobile?: boolean;
}

export function SidebarLink({ href, mobile = false, children }: IProps) {
  const pathname = usePathname();

  return (
    <>
      {mobile ? (
        <Link
          className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${
            pathname === href
              ? "bg-muted text-foreground"
              : "text-muted-foreground"
          }`}
          href={href}
        >
          {children}
        </Link>
      ) : (
        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
            pathname === href
              ? "bg-muted text-primary"
              : "text-muted-foreground"
          }`}
          href={href}
        >
          {children}
        </Link>
      )}
    </>
  );
}
