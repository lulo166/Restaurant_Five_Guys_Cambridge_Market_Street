import "./styles.css";
import { useState } from "react";
import Mycard from "./Mycard";
import Menu_and_Orders from "./Menu_and_Orders";

export default function Basket() {
  const [totalOrder] = useState(0);
  return <div>Number of items: {totalOrder}</div>;
}
