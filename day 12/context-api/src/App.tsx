import { useReducer } from "react";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/productss/Products";
import cardCounter from "./components/reducer/cardCounter";
import OrderContext from "./components/context/orderCounter";

const App = () => {
  const [orderCount, dispatch] = useReducer(cardCounter, 0);

  return (
    <div>
      <OrderContext.Provider value={{ orderCount, dispatch }}>
        <NavBar />
        <Products />
      </OrderContext.Provider>
    </div>
  );
};

export default App;
