import React from "react";
//@ts-ignore
import SwitchProvider from "@dhiwise/react-switch";

const variants = {
  swtFillBluegray100: {
    offColor: "#cccccc",
    onColor: "#6a5ae0",
    offHandleColor: "#ffffff",
    onHandleColor: "#ffffff",
  },
} as const;
const sizes = {
  xs: {
    width: 48,
    height: 24,
  },
} as const;

type SwitchProps = Partial<{
  value: string | boolean;
  className: string;
  checkedIcon: React.ReactNode;
  uncheckedIcon: React.ReactNode;
  onChange: Function;
  variant: keyof typeof variants;
  size: keyof typeof sizes;
}>;
const Switch: React.FC<SwitchProps> = ({
  value = false,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  onChange,
  variant = "swtFillBluegray100",
  size = "xs",
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val: string | boolean) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <div className={className}>
      <SwitchProvider
        checked={selected}
        onChange={handleChange}
        {...variants[variant]}
        {...sizes[size]}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </div>
  );
};

export { Switch };
