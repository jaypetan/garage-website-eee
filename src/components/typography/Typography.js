import styles from "./Typography.module.css";

const Typography = ({
  variant = "body",
  children,
  style,
  className,
  ...props
}) => {
  const cn = [styles[variant], className, styles["base"]].join(" ");

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
