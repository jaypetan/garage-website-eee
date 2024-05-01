import styles from "./Typography.module.css";

const Typography = ({
  variant = "body",
  children,
  textAlign,
  style,
  className,
  ...props
}) => {
  const cn = [
    styles[variant],
    className,
    styles["base"],
    textAlign && styles[textAlign],
  ].join(" ");

  return (
    <p
      {...props}
      className={cn}
      style={{
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export default Typography;
