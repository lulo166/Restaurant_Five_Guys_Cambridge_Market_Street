import "./styles.css";
import { useState } from "react";

export default function Mycard(props) {
  const [order, setOrder] = useState(0);
  function handleOrder() {
    setOrder(order + 1);
    props.setTotalOrder(props.totalOrder + 1);
  }
  function handleLessOrder() {
    setOrder(order - 1);
  }

  return (
    <div className="mycard">
      <h5>{props.title}</h5>
      <img src={props.imgLocation} width="100px" height="100px" />
      <div>order: {order}</div>
      <button onClick={handleOrder}>Add One Item</button>
      <button onClick={handleLessOrder}>Remove One Item</button>
    </div>
  );
}
