"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { LuMenu, LuX, LuChevronDown } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import { usePathname } from "next/navigation";
import IconWrapper from "@/components/IconWrapper/IconWrapper";
import { BookNowCTA } from "@/components/Button/BookNowCTA";

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

function classNames(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const ConfigurableNavigation: React.FC<NavProps> = ({
  navigationConfig,
  navMode = "multi",
  items,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme } = useTheme();

  const navigationItems = useMemo(() => {
    return navigationConfig?.navigationItems || items || [];
  }, [navigationConfig?.navigationItems, items]);
  const showNavigation = navigationConfig?.showNavigation !== false;

  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const scrollPosition = useRef(0);

  const currentTheme = theme === "auto" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

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
      {
        threshold: 0.3,
        rootMargin: "-50% 0px -50% 0px",
      }
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
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (glassMorphism || transparent) {
      const onScroll = () => setScrolled(window.scrollY > 10);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [glassMorphism, transparent]);

  // Prevent body scroll when mobile menu is open and restore on close
  useEffect(() => {
    if (mobileMenuOpen) {
      scrollPosition.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      const y = Math.abs(parseInt(document.body.style.top || "0", 10));
      document.body.style.top = "";
      window.scrollTo(0, y);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [mobileMenuOpen]);

  if (!showNavigation) return null;

  const containerBase =
    glassMorphism || scrolled
      ? "backdrop-blur-md bg-black/40"
      : transparent
      ? "bg-transparent "
      : "bg-neutral-dimmed-heavy";

  const leftItems = navigationItems.slice(0, 2);
  const rightItems = navigationItems.slice(2, 4);

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
    return <span className="text-lg font-bold">LOGO</span>;
  };

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
          className="inline-flex items-center px-1 text-md font-medium opacity-50 cursor-not-allowed"
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
              "inline-flex items-center px-1 pb-1 text-md font-medium border-b-2",
              isActive
                ? glassMorphism || scrolled
                  ? "text-text-primary border-text-primary"
                  : "text-text-clear border-text-clear"
                : classNames(
                    glassMorphism || scrolled
                      ? "text-text-clear hover:text-text-primary transition-all duration-100 ease-out hover:scale-105"
                      : "text-text-clear hover:text-elements-secondary-main",
                    "border-transparent"
                  )
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
                                  scroll={subHref.startsWith("#")}
                                  prefetch={false}
                                  onClick={() => {
                                    setDropdownOpen(null);
                                    if (navMode === "single" && subItem.sectionId) {
                                      setActiveSection(subItem.sectionId);
                                    }
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
          "inline-flex items-center px-1 pb-1 text-md font-medium border-b-2",
          isActive
            ? glassMorphism || scrolled
              ? "text-text-primary border-text-primary"
              : "text-text-clear border-text-clear"
            : classNames(
                glassMorphism || scrolled
                  ? "text-text-clear hover:text-text-primary transition-all duration-100 ease-out hover:scale-105"
                  : "text-text-clear hover:text-elements-secondary-main",
                "border-transparent"
              )
        )}
        onClick={() => {
          if (navMode === "single" && item.sectionId) {
            setActiveSection(item.sectionId);
          }
          closeMenu();
        }}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <>
      {/* Main Navigation Header */}
      <motion.div
        initial={{
          opacity: 0,
          y: position === "top" ? -20 : 0,
          x: position === "left" ? -20 : 0,
        }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classNames(
          position === "top"
            ? "fixed w-full top-0 z-50"
            : "fixed h-full left-0 top-0 z-50 w-64",
          className
        )}
      >
        <header
          className={classNames(
            containerBase,
            "min-h-[80px] transition-all duration-300 ease-in-out"
          )}
        >
          <div className="relative px-2 sm:px-6">
            <div className="flex h-20 items-center justify-between w-full">
              {/* Desktop Navigation */}
              <div className="hidden sm:flex items-center justify-between w-full">
                <div className="flex items-center flex-1">
                  <div className="flex items-center space-x-8">
                    {leftItems.map(renderNavItem)}
                  </div>
                  <div className="flex-1 flex items-center justify-end px-8">
                    <div className="w-full max-w-[200px] h-px bg-gradient-to-r from-transparent to-white/90"></div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 items-center justify-center z-10 mx-4">
                  <Link href="/" className="relative z-10">
                    <LogoComponent />
                  </Link>
                </div>
                <div className="flex items-center flex-1">
                  <div className="flex-1 flex items-center justify-start px-8">
                    <div className="w-full max-w-[200px] h-px bg-gradient-to-l from-transparent to-white/90"></div>
                  </div>
                  <div className="flex items-center space-x-8">
                    {rightItems.map(renderNavItem)}
                  </div>
                </div>
                {showThemeSwitcher && (
                  <div className="flex items-center ml-4">
                    <ThemeSwitcher />
                  </div>
                )}
              </div>

              {/* Mobile Navigation Header */}
              <div className="flex sm:hidden items-center justify-between w-full">
                <div className="flex flex-shrink-0 items-center ml-2">
                  <Link href="/">
                    <LogoComponent />
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  {showThemeSwitcher && <ThemeSwitcher />}
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
                        <IconWrapper
                          icon={LuX}
                          className="w-5 h-5 block text-white"
                        />
                      ) : (
                        <IconWrapper
                          icon={LuMenu}
                          className="block w-6 h-6 text-white"
                        />
                      )}
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </motion.div>

      {/* Mobile Menu Overlay - Separate Portal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 backdrop-blur-xl bg-black/60 z-[60] items-center justify-center sm:hidden flex flex-col"
          >
            {/* Header overlay to show logo and close button above blur */}
            <div className="fixed top-0 left-0 right-0 z-[70] px-2">
              <div className="flex h-20 items-center justify-between w-full">
                <div className="flex flex-shrink-0 items-center ml-2">
                  <Link href="/" onClick={closeMenu}>
                    <LogoComponent />
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  {showThemeSwitcher && <ThemeSwitcher />}
                  <button
                    className="inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close main menu</span>
                    <IconWrapper icon={LuX} className="w-5 h-5 block" />
                  </button>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-8 px-6 space-y-4">
              {navigationItems.map((item, index) => {
                const href =
                  navMode === "single" && item.sectionId
                    ? `#${item.sectionId}`
                    : item.path || item.href || "/";
                const isActive =
                  navMode === "single"
                    ? activeSection === item.sectionId
                    : pathname === item.path;
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
                        "flex items-center rounded-lg p-3 text-md font-medium transition-all duration-200 hover:bg-white/10 active:bg-white/20",
                        isActive
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:text-white"
                      )}
                      onClick={() => {
                        if (navMode === "single" && item.sectionId) {
                          setActiveSection(item.sectionId);
                        }
                        closeMenu();
                      }}
                    >
                      {item.icon && (
                        <item.icon className="mr-3 h-5 w-5 text-white/70" />
                      )}
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <div>
              <BookNowCTA
                variant="outline"
                size="small"
                shape="pill"
                text="Reserve Table"
                useGradient={true}
                gradientFrom="from-elements-primary-main"
                gradientTo="to-elements-primary-shadow"
                textColor="text-white"
                shadowColor="shadow-black"
                phoneNumber="02035185930"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConfigurableNavigation;
