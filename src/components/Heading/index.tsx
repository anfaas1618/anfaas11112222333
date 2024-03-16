import React from "react";

const sizes = {
  "3xl": "text-4xl font-extrabold leading-[140%] md:text-[34px] sm:text-[32px]",
  "2xl": "text-[32px] font-bold leading-[150%] md:text-3xl sm:text-[28px]",
  xl: "text-[28px] font-bold leading-[150%] md:text-[26px] sm:text-2xl",
  "5xl": "text-[64px] font-extrabold md:text-5xl",
  "4xl": "text-6xl font-semibold leading-[140%] md:text-[52px] sm:text-[46px]",
  "7xl": "text-[100px] font-semibold leading-[140%] md:text-5xl",
  s: "text-sm font-bold leading-[140%]",
  md: "text-base font-bold leading-[150%]",
  "6xl": "text-[80px] font-semibold leading-[140%] md:text-5xl",
  xs: "text-[8px] font-semibold leading-[8%]",
  lg: "text-[22px] font-bold leading-[31px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "s",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-700 font-rubik ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
