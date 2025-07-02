import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IconType } from "react-icons";
import {
  LuHouse,
  LuInfo,
  LuFile,
  LuCalendarDays,
  LuPhone,
  LuUtensilsCrossed,
  LuMapPin,
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
        name: "About",
        path: "/about",
        sectionId: "about",
        current: pathname === "/about",
        icon: LuInfo,
      },
      {
        name: "Catering",
        path: "/catering",
        sectionId: "catering",
        current: pathname === "/catering",
        icon: LuUtensilsCrossed,
      },
      {
        name: "Menu",
        path: "/menu",
        sectionId: "menu",
        current: pathname === "/menu",
        icon: LuUtensilsCrossed,
      },
      {
        name: "Find Us",
        path: "/find-us",
        sectionId: "find-us",
        current: pathname === "/find-us",
        icon: LuMapPin,
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
    { name: "About", path: "/about", current: false },
    { name: "Catering", path: "/catering", current: false },
    { name: "Menu", path: "/menu", current: false },
    { name: "Find Us", path: "/find-us", current: false },
  ],
  showNavigation: true,
};

export const minimalistNavigation: {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} = {
  navigationItems: [
    { name: "About", path: "/about", current: false },
    { name: "Catering", path: "/catering", current: false },
    { name: "Menu", path: "/menu", current: false },
    { name: "Find Us", path: "/find-us", current: false },
  ],
  showNavigation: true,
};

export const fullNavigation: {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} = {
  navigationItems: [
    { name: "About", path: "/about", current: false },
    { name: "Catering", path: "/catering", current: false },
    { name: "Menu", path: "/menu", current: false },
    { name: "Find Us", path: "/find-us", current: false },
  ],
  showNavigation: true,
};
