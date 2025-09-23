import { useContext } from "react";
import OrderContext from "../context/orderCounter";
import styles from "./navbar.module.css";
function NavBar() {
  const { orderCount } = useContext(OrderContext);
  return (
    <>
      <div className={styles.nav}>
        <p>NavBar</p> <p>Count {orderCount}</p>
      </div>
    </>
  );
}

export default NavBar;
