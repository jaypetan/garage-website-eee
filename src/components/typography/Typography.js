import React from "react";
import typographyConfig from "./TypographyConfig";
import useBreakpoint from "../../hooks/useBreakpoint";

const Typography = ({ variant, children }) => {
  const breakpoint = useBreakpoint();
  const typography = typographyConfig[breakpoint] || {};
  const { fontSize, lineHeight } = typography[variant] || {};

  return <p style={{ fontSize, lineHeight }}>{children}</p>;
};

export default Typography;
