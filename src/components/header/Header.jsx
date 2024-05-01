import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  delay,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Typography from "../typography/Typography";
import useBreakpoint from "../../hooks/useBreakpoint";
import Logo from "../../icons/header.svg";
import Menu from "../../icons/menu.svg";
import Close from "../../icons/close.svg";
import Gutter from "../pageTemplate/gutter/Gutter";
import Modal from "../modal/Modal";

import styles from "./Header.module.css";

const MenuButton = ({ open, setOpen }) => {
  const handleClick = (e) => {
    setOpen((prev) => !prev);
  };

  const anim = {
    initial: {
      rotate: "-30deg",
    },
    animate: {
      rotate: "0deg",
      transition: {
        ease: [0, 0.8, 0.25, 1.4],
        duration: 0.3,
      },
    },
  };

  return (
    <button
      className={styles["button"]}
      aria-label="Menu button"
      aria-pressed={open}
      onClick={handleClick}
    >
      {open ? (
        <motion.img src={Close} alt="Close menu icon" key="close" {...anim} />
      ) : (
        <motion.img src={Menu} alt="Menu icon" key="menu" {...anim} />
      )}
    </button>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const breakpoint = useBreakpoint();

  const { scrollY } = useScroll();
  const [shadow, setShadow] = useState(false);

  const topPaddings = {
    desktop: 60,
    tablet: 60,
    mobile: 40,
  };

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y >= topPaddings[breakpoint] && !shadow) setShadow(true);
    else if (y < topPaddings[breakpoint] && shadow) setShadow(false);
  });

  const navlinks = [
    {
      label: "Projects",
      to: "/projects",
    },
    {
      label: "Events",
      to: "/events",
    },
  ];

  const linkVariants = {
    initial: {
      x: 30,
    },
    animate: (i) => ({
      x: 0,
      transition: {
        delay: 0.1 * i + 0.2,
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
    exit: {
      y: -20,
      transition: {
        duration: 0.5,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };

  useEffect(() => {
    if (breakpoint !== "mobile" && open) setOpen(false);
  }, [breakpoint]);

  return (
    <>
      <header
        className={[styles.header, (shadow || open) && styles["shadow"]]
          .filter(Boolean)
          .join(" ")}
      >
        <Gutter>
          <div className={styles["header-inner"]}>
            <Link to="/">
              <img src={Logo} alt="Garage Logo" className={styles.logo} />
            </Link>
            {breakpoint !== "mobile" ? (
              <nav className={styles["nav"]}>
                {navlinks.map((navlink) => (
                  <Link
                    key={navlink.label}
                    to={navlink.to}
                    className={styles["navlink"]}
                  >
                    <Typography variant="body">{navlink.label}</Typography>
                  </Link>
                ))}
              </nav>
            ) : (
              <MenuButton open={open} setOpen={setOpen} />
            )}
          </div>
          {breakpoint === "mobile" && (
            <motion.nav
              className={styles["drawer"]}
              initial={false}
              animate={open ? { height: "auto" } : { height: 0 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
            >
              <motion.div className={styles["drawer-inner"]}>
                <AnimatePresence mode="wait">
                  {open && (
                    <motion.div
                      key="separator"
                      className={styles["separator"]}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      exit={{ y: -20 }}
                      transition={{
                        delay: 0.1,
                        duration: 0.5,
                        ease: [0.7, 0, 0.3, 1],
                      }}
                    />
                  )}
                  {open &&
                    navlinks.map((navlink, index) => (
                      <motion.div
                        key={navlink.label}
                        variants={linkVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        custom={index}
                      >
                        <Link to={navlink.to} className={styles["navlink"]}>
                          <Typography variant="body">
                            {navlink.label}
                          </Typography>
                        </Link>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </motion.div>
            </motion.nav>
          )}
        </Gutter>
      </header>
      <Modal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Header;
