"use client";

import { HeroUIProvider } from "@heroui/system";

export default function HeroClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  );
}
