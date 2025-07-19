"use client";

import { ThemeProvider as Provider } from "next-themes";
import { ReactNode } from "react";

// Define a custom ThemeProvider component.
export function ThemeProvider({
  children,
  defaultTheme = "dark",
}: {
  children: ReactNode;
  defaultTheme?: string;
}) {
  return (
    <Provider
      defaultTheme={defaultTheme} // Default to dark mode
      attribute="class" // Apply theme using CSS classes
      enableSystem={false} // Disable system theme detection
    >
      {children}{" "}
      {/* Render the children components wrapped within the ThemeProvider. */}
    </Provider>
  );
}
