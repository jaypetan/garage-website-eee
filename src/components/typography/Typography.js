import React from "react";
import typographyConfig from "./TypographyConfig";
import useBreakpoint from "../../hooks/useBreakpoint";

const Typography = ({ variant, children, ...props }) => {
  const breakpoint = useBreakpoint();
  const typography = typographyConfig[breakpoint] || {};
  const { fontSize, lineHeight, fontWeight } = typography[variant] || {};

  return (
    <p style={{ fontSize, lineHeight, fontWeight, ...props }}>{children}</p>
  );
};

export default Typography;
