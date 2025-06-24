import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IconType } from "react-icons";
import {
  LuHouse,
  LuInfo,
  LuFile,
  LuCalendarDays,
  LuPhone,
} from "react-icons/lu";

// Define navigation item structure
export interface NavigationItem {
  name: string;
  sectionId?: string; // For anchor-based single-page nav
  path?: string; // For route-based multi-page nav
  current: boolean;
  icon?: IconType;
  description?: string;
  children?: NavigationItem[];
  disabled?: boolean;
}

// Hook-based config (e.g. for dynamic use in app)
export function useNavigationConfig(): {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} {
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = useMemo(
    () => [
      {
        name: "",
        sectionId: "home",
        path: "/",
        current: pathname === "/",
        icon: LuHouse,
      },
      {
        name: "Menu",
        sectionId: "menu",
        path: "/menu",
        current: pathname === "/menu",
        icon: LuInfo,
      },
    ],
    [pathname]
  );

  return {
    navigationItems,
    showNavigation: true,
  };
}

// Predefined configs for different layout needs
export const mainNavigation: {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} = {
  navigationItems: [
    { name: "Home", sectionId: "home", path: "/", current: true },
    { name: "Menu", sectionId: "menu", path: "/menu", current: false },
  ],
  showNavigation: true,
};

export const minimalistNavigation: {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} = {
  navigationItems: [
    { name: "Home", sectionId: "home", path: "/", current: true },
    { name: "Menu", sectionId: "menu", path: "/menu", current: false },
  ],
  showNavigation: true,
};

export const fullNavigation: {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} = {
  navigationItems: [
    { name: "Home", sectionId: "home", path: "/", current: true },
    { name: "Menu", sectionId: "menu", path: "/menu", current: false },
  ],
  showNavigation: true,
};
