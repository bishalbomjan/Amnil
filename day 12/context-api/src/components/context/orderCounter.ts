import { createContext, type Dispatch } from "react";
import type { actionCoutner } from "../reducer/cardCounter";

interface orderContextType {
  orderCount: number;
  dispatch: Dispatch<actionCoutner>;
}
const OrderContext = createContext<orderContextType>({} as orderContextType);
export default OrderContext;
