import { Link } from "react-router-dom";
import Typography from "../typography/Typography";

import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  startIcon,
  endIcon,
  to,
  variant = "filled",
  disabled = false,
  className,
  ...rest
}) => {
  // Use the btnStyle prop to determine the button class to be applied
  const cn = [
    className,
    styles.btn, // Base button class
    styles[variant],
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  const btn = (
    <button className={cn} onClick={onClick} disabled={disabled} {...rest}>
      {startIcon && (
        <div className={styles["start-icon-wrapper"]}>{startIcon}</div>
      )}
      <Typography variant="body">{children}</Typography>
      {endIcon && <div className={styles["end-icon-wrapper"]}>{endIcon}</div>}
    </button>
  );

  return to ? <Link to={to}>{btn}</Link> : btn;
};

export default Button;
