import { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "../typography/Typography";
import { ReactComponent as ArrowDown } from "../../icons/arrow_down.svg";
import { useAuth } from "../../contexts/AuthProvider";
import useBreakpoint from "../../hooks/useBreakpoint";
import styles from "./Header.module.css";

const LoginMenu = ({ protected_navlinks }) => {
  const [ open, setOpen ] = useState(false);
  const { user, logoutAction } = useAuth();
  const breakpoint = useBreakpoint();

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  }

  const handleLogout = (e) => {
    setOpen(false);
    logoutAction();
    window.location.reload();
  }

  return (
      <div className={styles["navlink"]} onMouseEnter={handleOpen} onMouseLeave={handleClose}>
        <Link className={styles["navlink"]}>
          <Typography variant="body">{user}<ArrowDown /></Typography>
        </Link>
        {open &&
          <div className={breakpoint!=="mobile" ? (styles["login-menu"]):(styles["mobile-login-menu"])}>
            {protected_navlinks.map((navlink) => (
              <Link
                key={navlink.label}
                to={navlink.to}
                className={styles["navlink"]}
                onClick={handleClose}
              >
                <Typography variant="body">{navlink.label}</Typography>
              </Link>
            ))}
            <Link
                onClick={handleLogout}
                className={styles["navlink"]}
              >
                <Typography variant="body">Logout</Typography>
              </Link>
          </div>
        }
      </div>
  );
};

export default LoginMenu;