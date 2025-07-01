"use client";

import React, { useState, useEffect, useMemo } from "react";
import { LuMenu, LuX, LuChevronDown, LuPhone } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import { usePathname } from "next/navigation";
import IconWrapper from "@/components/IconWrapper/IconWrapper";

// Type definitions
export interface NavItem {
  name: string;
  href?: string;
  path?: string;
  sectionId?: string;
  current?: boolean;
  disabled?: boolean;
  children?: NavItem[];
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  description?: string;
}

export interface NavConfig {
  navigationItems: NavItem[];
  showNavigation?: boolean;
}

export interface NavProps {
  navigationConfig?: NavConfig;
  items?: NavItem[];
  navMode?: "single" | "multi";
  variant?: "standard" | "glass" | "solid" | "split";
  position?: "top" | "left";
  theme?: "light" | "dark" | "auto";
  cta?: {
    show: boolean;
    text?: string;
    href?: string;
    phoneNumber?: string;
  };
  logo?: {
    light: string;
    dark: string;
    width?: number;
    height?: number;
  };
  showThemeSwitcher?: boolean;
  mobileFullScreen?: boolean;
  transparent?: boolean;
  glassMorphism?: boolean;
  className?: string;
}

// Helper function for class conditionals
function classNames(...classes: (string | false | undefined)[]): string {
  return classes.filter((c): c is string => Boolean(c)).join(" ");
}

const ConfigurableNavigation: React.FC<NavProps> = ({
  navigationConfig,
  navMode = "multi",
  items,
  variant = "standard",
  position = "top",
  theme = "auto",
  cta = { show: false },
  logo,
  showThemeSwitcher = false,
  mobileFullScreen = false,
  transparent = false,
  glassMorphism = false,
  className = "",
}) => {
  // State management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Get navigation items from either navigationConfig or items prop
  const navigationItems = useMemo(() => {
    return navigationConfig?.navigationItems || items || [];
  }, [navigationConfig?.navigationItems, items]);
  const showNavigation = navigationConfig?.showNavigation !== false;

  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Determine theme colors
  const currentTheme = theme === "auto" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  // Function to close the mobile menu
  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (navMode !== "single") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navigationItems.forEach((item) => {
      if (item.sectionId) {
        const el = document.getElementById(item.sectionId);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [navMode, navigationItems]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.toggle(
      "smooth-scroll",
      navMode === "single"
    );
  }, [navMode]);

  // Component mounting effect
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Detect scroll for split variant
  useEffect(() => {
    if (variant !== "split" || !transparent) return;
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant, transparent]);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen && mobileFullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, mobileFullScreen]);

  // Exit early if navigation should not be shown
  if (!showNavigation) return null;

  // Component styling based on variant and position
  const getNavStyles = () => {
    // Base styles
    let styles = {
      container: "",
      wrapper: "",
      header: "",
      navItem: {
        base: "inline-flex items-center px-1 text-md font-medium",
        active: "",
        inactive: "",
        disabled: "opacity-50 cursor-not-allowed",
      },
      dropdown: {
        container: "",
        item: "",
      },
      mobileMenu: {
        container: "",
        backdrop: "",
        item: {
          base: "flex flex-col py-2 text-md font-medium",
          active: "",
          inactive: "",
        },
      },
    };

    // Apply variant styles
    switch (variant) {
      case "glass":
        styles.container = glassMorphism
          ? "backdrop-blur-md bg-card-background/70 border-b border-border-dimmed shadow-lg rounded-xl mx-auto px-6"
          : "backdrop-blur-md bg-card-background/70 border-b border-border-dimmed shadow-lg rounded-xl mx-auto px-6";
        styles.mobileMenu.container = "rounded-b-xl";
        styles.navItem.active = ["text-text-primary"].join(" ");
        styles.navItem.inactive = [
          "text-text-secondary",
          "hover:text-text-primary",
          "transition-all duration-100 ease-out", // smooth transition
          "hover:scale-105", // tiny pop
        ].join(" ");
        break;

      case "solid":
        styles.container = "bg-elements-primary-shadow";
        styles.navItem.active = "text-text-clear";
        styles.navItem.inactive =
          "text-text-clear hover:text-elements-primary-main";
        styles.mobileMenu.container = "bg-elements-primary-shadow";
        break;
      case "split":
        // Apply glassMorphism styling if enabled or when scrolled,
        // otherwise use transparent/solid background
        if (glassMorphism || scrolled) {
          styles.container =
            "backdrop-blur-md bg-black/40 transition-all duration-300 ease-in-out";
          styles.navItem.active = "text-text-primary";
          styles.navItem.inactive = [
            "text-text-clear",
            "hover:text-elements-primary-main",
            "transition-all duration-100 ease-out",
            "hover:scale-105",
          ].join(" ");
          styles.mobileMenu.container =
            "bg-card-background/80 backdrop-blur-md transition-all duration-300 ease-in-out";
        } else {
          styles.container = transparent
            ? "bg-transparent transition-all duration-300 ease-in-out"
            : "bg-neutral-dimmed-heavy transition-all duration-300 ease-in-out";
          styles.navItem.active = "text-text-clear";
          styles.navItem.inactive =
            "text-text-clear hover:text-elements-primary-main transition-all duration-100 ease-out hover:scale-105";
          styles.mobileMenu.container = "bg-elements-primary-shadow";
        }
        break;
      case "standard":
      default:
        styles.container = transparent
          ? "bg-transparent"
          : "bg-neutral-dimmed-heavy";
        styles.navItem.active = "text-elements-primary-main";
        styles.navItem.inactive =
          "text-text-clear hover:text-elements-primary-main";
        styles.mobileMenu.container = "bg-neutral-dimmed-heavy";
        break;
    }

    // Apply position styles
    if (position === "top") {
      if (variant === "glass") {
        styles.wrapper = "fixed w-full top-0 z-50 sm:px-40 sm:pt-5";
        // Add consistent height to prevent jumping
        styles.container = glassMorphism
          ? "backdrop-blur-md bg-card-background/70 border-b border-border-dimmed shadow-lg rounded-xl mx-auto px-6 min-h-[80px]" // Fixed height
          : "backdrop-blur-md bg-card-background/70 border-b border-border-dimmed shadow-lg rounded-xl mx-auto px-6 min-h-[80px]"; // Fixed height
      } else {
        styles.wrapper = "fixed w-full top-0 z-50";
        // For split variant with glassMorphism, keep the background but add min-height
        if (variant === "split" && (glassMorphism || scrolled)) {
          styles.container = styles.container + " min-h-[80px]";
        } else if (transparent) {
          styles.container =
            "bg-transparent min-h-[80px] transition-all duration-300 ease-in-out";
        } else if (styles.container === "") {
          // Only set default if no container styles were set in variant logic
          styles.container =
            "bg-neutral-dimmed-heavy min-h-[80px] transition-all duration-300 ease-in-out";
        } else {
          // Add min-height to existing container styles
          styles.container =
            styles.container +
            " min-h-[80px] transition-all duration-300 ease-in-out";
        }
      }
      // no underline for top nav
    } else {
      styles.wrapper = "fixed h-full left-0 top-0 z-50 w-64"; // Fixed width for side nav
      // no underline for side nav
    }

    return styles;
  };

  const styles = getNavStyles();

  // For split variant, divide navigation items into left and right groups
  const leftItems =
    variant === "split"
      ? navigationItems.slice(0, 2)
      : navigationItems.slice(0, Math.ceil(navigationItems.length / 2));
  const rightItems =
    variant === "split"
      ? navigationItems.slice(2, 4)
      : navigationItems.slice(Math.ceil(navigationItems.length / 2));

  // Logo component
  const LogoComponent = () => {
    if (logo) {
      const logoSrc = isDark ? logo.light : logo.dark;
      return (
        <Image
          src={logoSrc}
          alt="Logo"
          width={logo.width || 130}
          height={logo.height || 40}
        />
      );
    }

    // Fallback text logo
    return <span className="text-lg font-bold">LOGO</span>;
  };

  // CTA Button component
  const CTAButton = () => {
    if (!cta.show || variant === "split") return null;

    return (
      <Link
        href={cta.href || (cta.phoneNumber ? `tel:${cta.phoneNumber}` : "#")}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-elements-secondary-main hover:bg-elements-secondary-hover"
        onClick={closeMenu}
      >
        {cta.phoneNumber && (
          <IconWrapper icon={LuPhone} className="mr-2 h-4 w-4" />
        )}
        {cta.text || "Contact Us"}
      </Link>
    );
  };

  // Desktop nav item renderer
  const renderNavItem = (item: NavItem) => {
    const href =
      navMode === "single" && item.sectionId
        ? `#${item.sectionId}`
        : item.path || item.href || "/";
    const isActive =
      navMode === "single"
        ? activeSection === item.sectionId
        : pathname === item.path;

    if (item.disabled) {
      return (
        <span
          key={item.name}
          className={classNames(styles.navItem.base, styles.navItem.disabled)}
          aria-disabled="true"
        >
          {item.name}
        </span>
      );
    }

    if (item.children && item.children.length > 0) {
      return (
        <div key={item.name} className="relative self-center">
          <button
            className={classNames(
              styles.navItem.base,
              item.current || isActive
                ? styles.navItem.active
                : styles.navItem.inactive
            )}
            onClick={() =>
              setDropdownOpen(dropdownOpen === item.name ? null : item.name)
            }
          >
            {item.name}
            <motion.div
              animate={{ rotate: dropdownOpen === item.name ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconWrapper
                icon={LuChevronDown}
                className="px-1 w-7 h-7 text-text-tertiary"
              />
            </motion.div>
          </button>

          <AnimatePresence>
            {dropdownOpen === item.name && mounted && (
              <div className="absolute left-1/2 z-50 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-neutral-dimmed-heavy text-sm leading-6 shadow-md ring-2 ring-divider-dimmed"
                >
                  <div className="p-2">
                    {item.children.map((subItem, index) => {
                      const Icon = subItem.icon;
                      const subHref =
                        navMode === "single" && subItem.sectionId
                          ? `#${subItem.sectionId}`
                          : subItem.path || subItem.href || "/";
                      const isSubActive =
                        navMode === "single"
                          ? activeSection === subItem.sectionId
                          : pathname === subItem.path;

                      return (
                        <motion.div
                          key={subItem.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div
                            className={classNames(
                              "group relative flex gap-x-6 rounded-2xl p-4",
                              subItem.disabled
                                ? "opacity-50 cursor-not-allowed"
                                : isSubActive
                                ? "bg-neutral-shadow"
                                : "hover:bg-neutral"
                            )}
                          >
                            {Icon && (
                              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral group-hover:bg-neutral-dimmed-heavy">
                                <Icon
                                  aria-hidden="true"
                                  className="h-6 w-6 text-text-secondary"
                                />
                              </div>
                            )}
                            <div>
                              <p className="font-semibold text-text-secondary">
                                {subItem.name}
                              </p>
                              {subItem.description && (
                                <p className="mt-1 text-text-tertiary font-medium text-xs">
                                  {subItem.description}
                                </p>
                              )}
                              {!subItem.disabled && (
                                <Link
                                  href={subHref}
                                  scroll={href.startsWith("#")}
                                  prefetch={false}
                                  onClick={() => {
                                    setDropdownOpen(null);
                                    closeMenu();
                                  }}
                                  className="absolute inset-0"
                                  aria-label={subItem.name}
                                />
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link
        prefetch={false}
        key={item.name}
        href={href}
        scroll={href.startsWith("#")}
        className={classNames(
          variant === "glass" || (variant === "split" && glassMorphism)
            ? "text-md tracking-wide transition-colors font-medium"
            : styles.navItem.base,
          isActive ? styles.navItem.active : styles.navItem.inactive
        )}
        onClick={closeMenu}
      >
        {item.name}
      </Link>
    );
  };

  // Mobile nav item renderer with enhanced animations and styling
  const renderMobileNavItem = (item: NavItem, index: number) => {
    const href =
      navMode === "single" && item.sectionId
        ? `#${item.sectionId}`
        : item.path || item.href || "/";
    const isActive =
      navMode === "single"
        ? activeSection === item.sectionId
        : pathname === item.path;

    if (item.disabled) {
      return (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <span
            className={classNames(
              styles.mobileMenu.item.base,
              styles.navItem.disabled
            )}
            aria-disabled="true"
          >
            {item.name}
          </span>
        </motion.div>
      );
    }

    // Dropdowns
    if (item.children && item.children.length > 0) {
      return (
        <motion.div
          key={item.name}
          className="space-y-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <button
            className={classNames(
              "flex w-full items-center justify-between rounded-lg p-3 text-left text-md font-medium focus:outline-none transition-all duration-200",
              variant === "glass" || (variant === "split" && glassMorphism)
                ? "hover:bg-neutral/20 active:bg-neutral/30"
                : "hover:bg-neutral-dimmed active:bg-neutral-shadow",
              dropdownOpen === item.name
                ? variant === "glass" || (variant === "split" && glassMorphism)
                  ? "bg-neutral/30 text-text-primary"
                  : styles.navItem.active
                : variant === "glass" || (variant === "split" && glassMorphism)
                ? "text-text-secondary"
                : styles.navItem.inactive
            )}
            onClick={() =>
              setDropdownOpen(dropdownOpen === item.name ? null : item.name)
            }
          >
            <span className="flex items-center">
              {item.icon && (
                <item.icon className="mr-3 h-5 w-5 text-text-tertiary" />
              )}
              {item.name}
            </span>
            <motion.div
              animate={{ rotate: dropdownOpen === item.name ? 180 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <IconWrapper
                icon={LuChevronDown}
                className="px-1 w-7 h-7 text-text-tertiary"
              />
            </motion.div>
          </button>

          <AnimatePresence>
            {dropdownOpen === item.name && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div
                  className={classNames(
                    "space-y-1 ml-4 pl-4",
                    variant === "glass" ||
                      (variant === "split" && glassMorphism)
                      ? "border-l-2 border-neutral-dimmed"
                      : "border-l-2 border-neutral-dimmed"
                  )}
                >
                  {item.children.map((subItem, subIndex) => {
                    const subHref =
                      navMode === "single" && subItem.sectionId
                        ? `#${subItem.sectionId}`
                        : subItem.path || subItem.href || "/";
                    const isSubActive =
                      navMode === "single"
                        ? activeSection === subItem.sectionId
                        : pathname === subItem.path;

                    return (
                      <motion.div
                        key={subItem.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                      >
                        <Link
                          href={subHref}
                          scroll={href.startsWith("#")}
                          className={classNames(
                            "group flex items-center rounded-lg p-3 text-sm font-medium transition-all duration-200",
                            variant === "glass" ||
                              (variant === "split" && glassMorphism)
                              ? "hover:bg-neutral/20 active:bg-neutral/30 text-text-secondary hover:text-text-primary"
                              : "hover:bg-neutral-dimmed active:bg-neutral-shadow",
                            isSubActive
                              ? variant === "glass" ||
                                (variant === "split" && glassMorphism)
                                ? "bg-neutral/30 text-text-primary"
                                : styles.navItem.active
                              : variant === "glass" ||
                                (variant === "split" && glassMorphism)
                              ? "text-text-secondary"
                              : styles.navItem.inactive,
                            subItem.disabled && "opacity-50 cursor-not-allowed"
                          )}
                          onClick={closeMenu}
                        >
                          {subItem.icon && (
                            <subItem.icon className="mr-3 h-4 w-4 text-text-tertiary group-hover:text-text-secondary transition-colors" />
                          )}
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span>{subItem.name}</span>
                            </div>
                            {subItem.description && (
                              <p className="mt-1 text-xs text-text-tertiary group-hover:text-text-secondary transition-colors">
                                {subItem.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    }

    // Standard link
    return (
      <motion.div
        key={item.name}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <Link
          href={href}
          scroll={href.startsWith("#")}
          className={classNames(
            "flex items-center rounded-lg p-3 text-md font-medium transition-all duration-200",
            variant === "glass" || (variant === "split" && glassMorphism)
              ? "hover:bg-neutral/20 active:bg-neutral/30"
              : "hover:bg-neutral-dimmed active:bg-neutral-shadow",
            isActive
              ? variant === "glass" || (variant === "split" && glassMorphism)
                ? "bg-neutral/30 text-text-primary"
                : styles.navItem.active
              : variant === "glass" || (variant === "split" && glassMorphism)
              ? "text-text-secondary"
              : styles.navItem.inactive
          )}
          onClick={closeMenu}
        >
          {item.icon && (
            <item.icon className="mr-3 h-5 w-5 text-text-tertiary" />
          )}
          {item.name}
        </Link>
      </motion.div>
    );
  };

  // Mobile menu hamburger button with custom animation for glass variant
  const renderMobileMenuButton = () => {
    if (variant === "glass" || (variant === "split" && glassMorphism)) {
      return (
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-10 w-10 h-10 rounded-full hover:bg-button-hover transition-colors"
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              className="w-4 h-4 flex flex-col items-center justify-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
                className="absolute w-4 h-0.5 bg-text-secondary transform-gpu"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="absolute w-4 h-0.5 bg-text-secondary"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
                className="absolute w-4 h-0.5 bg-text-secondary transform-gpu"
              />
            </motion.div>
          </div>
        </button>
      );
    }

    return (
      <button
        className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="sr-only">
          {mobileMenuOpen ? "Close main menu" : "Open main menu"}
        </span>
        <motion.div
          animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {mobileMenuOpen ? (
            <IconWrapper icon={LuX} className="w-5 h-5 block" />
          ) : (
            <IconWrapper icon={LuMenu} className="block w-6 h-6" />
          )}
        </motion.div>
      </button>
    );
  };

  // Split nav decorative line component
  const SplitNavDecorations = () => {
    if (variant !== "split") return null;

    return (
      <>
        {/* Left decorative line */}
        <div className="hidden sm:flex flex-1 items-center justify-end pr-8">
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent to-gray-200/40"></div>
        </div>

        {/* Right decorative line */}
        <div className="hidden sm:flex flex-1 items-center justify-start pl-8">
          <div className="w-full max-w-xs h-px bg-gradient-to-l from-transparent to-gray-200/40"></div>
        </div>
      </>
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: position === "top" ? -20 : 0,
        x: position === "left" ? -20 : 0,
      }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classNames(styles.wrapper, className)}
    >
      <header className={styles.container}>
        <div className="relative">
          <div className={variant === "glass" ? "" : "px-2 sm:px-6"}>
            <div className="flex h-20 items-center justify-between w-full">
              {variant === "split" ? (
                <>
                  {/* Left nav items and decorative line */}
                  <div className="hidden sm:flex items-center flex-1">
                    <div className="flex items-center space-x-8">
                      {leftItems.map(renderNavItem)}
                    </div>
                    <div className="flex-1 flex items-center justify-end px-8">
                      <div className="w-full max-w-[200px] h-px bg-gradient-to-r from-transparent to-white/90"></div>
                    </div>
                  </div>

                  {/* Center logo */}
                  <div className="flex flex-shrink-0 items-center justify-center z-10">
                    <Link href="/" className="relative z-10">
                      <LogoComponent />
                    </Link>
                  </div>

                  {/* Right decorative line and nav items */}
                  <div className="hidden sm:flex items-center flex-1">
                    <div className="flex-1 flex items-center justify-start px-8">
                      <div className="w-full max-w-[200px] h-px bg-gradient-to-l from-transparent to-white/90"></div>
                    </div>
                    <div className="flex items-center space-x-8">
                      {rightItems.map(renderNavItem)}
                    </div>
                  </div>
                  {showThemeSwitcher && (
                    <div className="hidden sm:flex items-center ml-4">
                      <ThemeSwitcher />
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* Logo section */}
                  <div className="flex flex-shrink-0 items-center z-10">
                    <Link href="/" className="relative z-10">
                      <LogoComponent />
                    </Link>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden sm:flex sm:items-center sm:space-x-8 flex-grow justify-end">
                    <div className="flex items-center space-x-8">
                      {navigationItems.map(renderNavItem)}
                    </div>

                    {/* Desktop CTA and Theme Switcher */}
                    <div className="flex items-center gap-4">
                      {showThemeSwitcher && <ThemeSwitcher />}
                      <CTAButton />
                    </div>
                  </div>
                </>
              )}

              {/* Mobile: Menu and Action Buttons */}
              <div className="flex items-center sm:hidden space-x-3">
                {showThemeSwitcher && <ThemeSwitcher />}
                <CTAButton />
                {renderMobileMenuButton()}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={
                  mobileFullScreen ? { opacity: 0 } : { opacity: 0, height: 0 }
                }
                animate={
                  mobileFullScreen
                    ? { opacity: 1 }
                    : { opacity: 1, height: "auto" }
                }
                exit={
                  mobileFullScreen ? { opacity: 0 } : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.3 }}
                className={classNames(
                  mobileFullScreen
                    ? // pin left+right, span from just below header (h-20) down
                      "fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col"
                    : "sm:hidden",
                  styles.mobileMenu.container
                )}
                // no inline paddingTop needed any more
              >
                {/* Mobile Nav Items */}
                <div
                  className={
                    variant === "glass" ||
                    (variant === "split" && glassMorphism)
                      ? "py-8 space-y-4"
                      : "px-4 py-6 space-y-4"
                  }
                  style={
                    variant === "glass" ||
                    (variant === "split" && glassMorphism)
                      ? { overflow: "hidden" }
                      : { overflowY: "auto" }
                  }
                >
                  {navigationItems.map((item, index) =>
                    renderMobileNavItem(item, index)
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </motion.div>
  );
};

export default ConfigurableNavigation;
