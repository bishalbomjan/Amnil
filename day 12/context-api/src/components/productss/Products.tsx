import { useContext, useState } from "react";
import styles from "./style.module.css";
import OrderContext from "../context/orderCounter";
interface Products {
  id: number;
  name: string;
  image: string;
}
const Products = () => {
  const [products] = useState<Products[]>([
    {
      id: 1,
      name: "Car",
      image: "car.jpg",
    },
    { id: 2, name: "Book", image: "book.jpg" },
    { id: 3, name: "Mobile", image: "mobile.jpg" },
  ]);
  const { dispatch } = useContext(OrderContext);
  const handleOrder = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <div className={styles.container}>
        {products.map((item) => (
          <div className={styles.card} key={item.id}>
            <img className={styles.img} src={`images/${item.image}`} alt="" />
            <p className={styles.name}>{item.name}</p>
            <button className={styles.btn} onClick={handleOrder}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button
        className={styles.btn}
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Products;
