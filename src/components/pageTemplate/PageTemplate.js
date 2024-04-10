import Footer from "../footer/Footer";
import Header from "../header/Header";
import Gutter from "./gutter/Gutter";

import styles from "./PageTemplate.module.css";

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Gutter>
          <div className={styles.wrapper}>{children}</div>
        </Gutter>
      </main>
      <Footer />
    </>
  );
};

export default PageTemplate;
