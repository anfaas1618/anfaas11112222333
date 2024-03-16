import React from "react";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[20px]",
  circle: "rounded-[50%]",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-deep_purple-400",
    deep_purple_50: "bg-deep_purple-50 text-deep_purple-400",
    light_blue_900: "bg-light_blue-900 text-white-A700",
    deep_purple_400: "bg-deep_purple-400 text-white-A700",
    teal_50: "bg-teal-50",
    red_100: "bg-red-100",
    green_A200_01: "bg-green-A200_01 text-white-A700",
    pink_300: "bg-pink-300 text-white-A700",
    deep_purple_300: "bg-deep_purple-300 text-white-A700",
    cyan_200: "bg-cyan-200",
    pink_A100: "bg-pink-A100 text-white-A700",
    orange_A100: "bg-orange-A100",
    blue_200: "bg-blue-200",
    blue_100: "bg-blue-100",
  },
} as const;
const sizes = {
  "8xl": "h-[88px]",
  sm: "h-[30px] px-3 text-xs",
  xl: "h-[40px] pl-2 pr-[17px] text-2xl",
  "2xl": "h-[40px] px-[35px] text-base",
  md: "h-[32px] px-1.5",
  "4xl": "h-[44px] px-5 text-sm",
  xs: "h-[24px] px-1",
  "3xl": "h-[44px] px-2",
  "6xl": "h-[56px]",
  lg: "h-[34px] px-2.5 text-xs",
  "7xl": "h-[56px] px-[35px] text-base",
  "5xl": "h-[48px] px-3",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "5xl",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
