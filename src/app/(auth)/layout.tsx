import type { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {}

export default function AuthLayout({ children }: IProps) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
