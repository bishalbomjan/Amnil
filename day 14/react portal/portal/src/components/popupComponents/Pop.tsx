import { useState } from "react";
import PopBox from "./PopBox";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
const Pop = () => {
  const [click, setClick] = useState(false);
  return (
    <div className={styles.btnClickContainer}>
      <button
        className={`${styles.btn} ${styles.btnPrimary}`}
        onClick={() => setClick(!click)}
      >
        Click
      </button>
      <div className={click ? `${styles.container}` : ""}>
        {click &&
          createPortal(
            <PopBox handlePop={(value) => setClick(value)} />,
            document.body
          )}
      </div>
    </div>
  );
};

export default Pop;
