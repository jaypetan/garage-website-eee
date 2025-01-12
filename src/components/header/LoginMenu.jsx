import { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "../typography/Typography";
import { ReactComponent as ArrowDown } from "../../icons/arrow_down.svg";
import { useAuth } from "../../contexts/AuthProvider";

import styles from "./Header.module.css";

const LoginMenu = ({ protected_navlinks }) => {
  const [ open, setOpen ] = useState(false);

  const { user, logoutAction } = useAuth();

  const handleHover = (e) => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <Link className={styles["navlink"]} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <Typography variant="body">{user} <ArrowDown /></Typography>
        {open &&
          <div className={styles["login-menu"]}>
            {protected_navlinks.map((navlink) => (
              <Link
                key={navlink.label}
                to={navlink.to}
                className={styles["navlink"]}
              >
                <Typography variant="body">{navlink.label}</Typography>
              </Link>
            ))}
            <Link
                onClick={logoutAction}
                className={styles["navlink"]}
              >
                <Typography variant="body">Logout</Typography>
              </Link>
          </div>
        }
      </Link>
    </div>
  );
};

export default LoginMenu;