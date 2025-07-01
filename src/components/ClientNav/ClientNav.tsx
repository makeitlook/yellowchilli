"use client";

import ConfigurableNavigation, {
  NavItem,
} from "@/components/Navbar/ConfigurableNav/ConfigurableNav";
import { useNavigationConfig, NavigationItem } from "@/config/navigation";
import { SVGProps } from "react";

// Convert NavigationItem[] to NavItem[]
function convertNavigationItems(items: NavigationItem[]): NavItem[] {
  return items.map((item) => {
    const convertedIcon = item.icon
      ? (item.icon as unknown as React.FC<React.SVGProps<SVGSVGElement>>)
      : undefined;

    return {
      name: item.name,
      sectionId: item.sectionId,
      path: item.path,
      current: item.current,
      disabled: item.disabled,
      icon: convertedIcon,
      description: item.description,
      children: item.children
        ? convertNavigationItems(item.children)
        : undefined,
    };
  });
}

export default function ClientNav() {
  const { navigationItems, showNavigation } = useNavigationConfig();
  const convertedItems = convertNavigationItems(navigationItems);

  return (
    <ConfigurableNavigation
      navigationConfig={{
        navigationItems: convertedItems,
        showNavigation,
      }}
      navMode="single"
      transparent={true}
      glassMorphism={false}
      showThemeSwitcher={false}
      logo={{
        light: "/images/logo.svg",
        dark: "/images/logo.svg",
        width: 130,
        height: 40,
      }}
      mobileFullScreen={true}
      cta={{
        show: false,
        text: "Get in Touch",
        href: "/contact",
      }}
    />
  );
}
