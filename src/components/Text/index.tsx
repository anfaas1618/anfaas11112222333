import React from "react";

const sizes = {
  "5xl": "text-5xl font-medium leading-[140%] md:text-[44px] sm:text-[38px]",
  xs: "text-xs font-normal leading-[150%]",
  lg: "text-lg font-medium leading-[135%]",
  "6xl": "text-[80px] font-medium leading-[150%] md:text-5xl",
  "7xl": "text-[240px] font-medium leading-[150%] md:text-5xl",
  s: "text-sm font-medium leading-[140%]",
  "2xl": "text-2xl font-normal leading-[150%] md:text-[22px]",
  "3xl": "text-[32px] font-normal leading-[150%] md:text-3xl sm:text-[28px]",
  "4xl": "text-[40px] font-medium leading-[150%] md:text-[38px] sm:text-4xl",
  xl: "text-xl font-medium leading-[140%]",
  md: "text-base font-medium leading-[150%]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "2xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-700 font-rubik ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
