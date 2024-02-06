import React from "react";
import styles from "./Gutter.module.css";

const Gutter = ({ children }) => {
  return <div className={styles.gutter}>{children}</div>;
};

export default Gutter;
