import React, { useState } from "react";
import { motion } from "framer-motion";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "solid";
export type ButtonSize = "small" | "medium" | "large" | "extraLarge";
export type ButtonShape = "rounded" | "pill" | "sharp" | "subtle";

export interface BookNowCTAProps {
  phoneNumber?: string;
  text?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  useGradient?: boolean;
  onClick?: () => void; // New onClick prop

  // Color props with fallbacks
  backgroundColor?: string;
  backgroundColorHover?: string;
  gradientFrom?: string;
  gradientTo?: string;
  gradientVia?: string;
  gradientFromHover?: string;
  gradientToHover?: string;
  gradientViaHover?: string;
  textColor?: string;
  textColorHover?: string;
  borderColor?: string;
  borderColorHover?: string;
  shadowColor?: string;
  shadowColorHover?: string;

  className?: string;
}

export const BookNowCTA: React.FC<BookNowCTAProps> = ({
  phoneNumber = "02035185930",
  text = "Book Now",
  size = "large",
  variant = "primary",
  shape = "rounded",
  useGradient = true,
  onClick, // New onClick prop

  // Color props with fallbacks
  backgroundColor = "bg-blue-600",
  backgroundColorHover = "bg-blue-700",
  gradientFrom = "from-blue-600",
  gradientTo = "to-purple-600",
  gradientVia = "via-indigo-600",
  gradientFromHover = "from-blue-700",
  gradientToHover = "to-purple-700",
  gradientViaHover = "via-indigo-700",
  textColor = "text-white",
  textColorHover = "",
  borderColor = "border-blue-600",
  borderColorHover = "border-blue-700",
  shadowColor = "shadow-blue-500/30",
  shadowColorHover = "shadow-blue-600/40",

  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeStyles: Record<ButtonSize, string> = {
    small: "px-6 py-3 text-sm",
    medium: "px-8 py-4 text-base",
    large: "px-10 py-5 text-lg",
    extraLarge: "px-14 py-6 text-xl",
  };

  const shapeStyles: Record<ButtonShape, string> = {
    rounded: "rounded-xl",
    pill: "rounded-full",
    sharp: "rounded-none",
    subtle: "rounded-lg",
  };

  // Build background classes based on gradient toggle
  const getBackgroundClasses = () => {
    if (useGradient) {
      const base = gradientVia
        ? `bg-gradient-to-r ${gradientFrom} ${gradientVia} ${gradientTo}`
        : `bg-gradient-to-r ${gradientFrom} ${gradientTo}`;

      const hover = gradientViaHover
        ? `${gradientFromHover} ${gradientViaHover} ${gradientToHover}`
        : `${gradientFromHover} ${gradientToHover}`;

      return {
        base,
        hover: isHovered ? hover : "",
      };
    } else {
      return {
        base: backgroundColor,
        hover: isHovered ? backgroundColorHover : "",
      };
    }
  };

  const variants: Record<ButtonVariant, { base: string; hover: string }> = {
    primary: {
      base: `${
        getBackgroundClasses().base
      } ${textColor} border-0 shadow-lg ${shadowColor}`,
      hover: `${getBackgroundClasses().hover} ${
        textColorHover || textColor
      } shadow-2xl ${shadowColorHover}`,
    },
    secondary: {
      base: `${
        getBackgroundClasses().base
      } ${textColor} border-0 shadow-lg ${shadowColor}`,
      hover: `${getBackgroundClasses().hover} ${
        textColorHover || textColor
      } shadow-2xl ${shadowColorHover}`,
    },
    outline: {
      base: `bg-transparent ${textColor} border-2 ${borderColor} backdrop-blur-sm`,
      hover: `${getBackgroundClasses().base} ${
        textColorHover || "text-white"
      } ${borderColorHover} shadow-xl ${shadowColorHover}`,
    },
    ghost: {
      base: `bg-white/10 ${textColor} border ${borderColor} backdrop-blur-md`,
      hover: `${getBackgroundClasses().base}/20 ${
        textColorHover || textColor
      } ${borderColorHover} shadow-lg`,
    },
    solid: {
      base: `${backgroundColor} ${textColor} border-0 shadow-lg ${shadowColor}`,
      hover: `${backgroundColorHover} ${
        textColorHover || textColor
      } shadow-2xl ${shadowColorHover}`,
    },
  };

  const currentVariant = variants[variant];

  // Handle click - either call onClick prop or default phone behavior
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(`tel:${phoneNumber}`, "_self");
    }
  };

  // Determine if it should be a button or link
  const Component = onClick ? motion.button : motion.a;
  const componentProps = onClick
    ? { onClick: handleClick }
    : { href: `tel:${phoneNumber}` };

  return (
    <Component
      {...componentProps}
      className={`
        relative overflow-hidden font-semibold tracking-wide
        transition-all duration-500 ease-out transform-gpu
        ${sizeStyles[size]}
        ${shapeStyles[shape]}
        ${currentVariant.base}
        ${isHovered ? currentVariant.hover : ""}
        hover:scale-[1.02] active:scale-[0.98]
        focus:outline-none focus:ring-4 focus:ring-current/30
        group cursor-pointer inline-flex items-center justify-center gap-3
        backdrop-blur-sm
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
    >
      {/* Elegant shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%", skewX: -15 }}
        animate={{
          x: isHovered ? "100%" : "-100%",
          skewX: isHovered ? -15 : -15,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: isHovered ? 0.1 : 0,
        }}
      />

      {/* Icon with elegant styling - changes based on onClick */}
      <motion.div
        className="relative z-10"
        initial={{ rotate: 0, scale: 1 }}
        animate={{
          rotate: isHovered ? 5 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {onClick ? (
          // Download icon for menu
          <svg
            className="w-5 h-5 opacity-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        ) : (
          // Phone icon for booking
          <svg
            className="w-5 h-5 opacity-90"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        )}
      </motion.div>

      <span className="relative z-10 font-medium">{text}</span>

      {/* Elegant arrow with smooth animation */}
      <motion.div
        className="relative z-10"
        initial={{ x: 0, opacity: 0.8 }}
        animate={{
          x: isHovered ? 3 : 0,
          opacity: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </motion.div>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] opacity-0"
        animate={{
          opacity: isHovered ? 0.15 : 0,
        }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(circle at center, currentColor 0%, transparent 70%)`,
        }}
      />

      {/* Border glow for outline variants */}
      {(variant === "outline" || variant === "ghost") && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] border border-current opacity-0"
          animate={{
            opacity: isHovered ? 0.3 : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Component>
  );
};
