import { useState } from "react";
import styles from "./style.module.css";
interface Products {
  id: number;
  name: string;
  image: string;
  quantity: number;
}
interface Order {
  id: number;
  count: number;
}
const Products = () => {
  const [products, setProducts] = useState<Products[]>([
    {
      id: 1,
      name: "Car",
      image: "car.jpg",
      quantity: 10,
    },
    { id: 2, name: "Book", quantity: 5, image: "book.jpg" },
    { id: 3, name: "Mobile", quantity: 3, image: "mobile.jpg" },
  ]);
  let error = "";
  const [order, setOrder] = useState<Order[]>([]);
  const handleOrder = (id: number) => {
    products.map((item) => {
      if (item.id === id && item.quantity > 0) {
        setProducts([
          ...products,
          {
            ...item,
            quantity: item.quantity - 1,
          },
        ]);
        setOrder([...order, { id, count: 0 + 1 }]);
      } else {
        error = "Item is not sufficent";
      }
      console.log(order);
    });
  };
  return (
    <>
      {error && <p>{error}</p>}
      <div className={styles.container}>
        {products.map((item) => (
          <div className={styles.card} key={item.id}>
            <img className={styles.img} src={`images/${item.image}`} alt="" />
            <div className={styles.containerName}>
              <p className={styles.name}>{item.name}</p>{" "}
              <button
                className={styles.btn}
                onClick={() => handleOrder(item.id)}
              >
                Add to Cart
              </button>
            </div>
            <p>Available Quantity {item.quantity}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
