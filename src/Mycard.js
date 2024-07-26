import "./styles.css";
import { useState } from "react";

export default function Mycard(props) {
  const [Order, setOrder] = useState(0);
  function handleOrder() {
    setOrder(Order + 1);
    props.setTotalOrder(props.totalOrder + 1);
  }
  function handleLessOrder() {
    setOrder(Order - 1);
  }

  return (
    <div className="mycard">
      <h5>{props.title}</h5>
      <img src={props.imgLocation} width="100px" height="100px" />
      <h6>Price: {props.price}$</h6>
      <h6>Number of items ordered: {Order}</h6>
      <button onClick={handleOrder}>Add One Item</button>
      <button onClick={handleLessOrder}>Remove One Item</button>
    </div>
  );
}
