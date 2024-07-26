import "./styles.css";
import Mycard from "./Mycard";
import { useState } from "react";

export default function Menu_and_Orders() {
  const [totalOrder, setTotalOrder] = useState(0);
  return (
  <div>
    <div>
      Number of items: {totalOrder}
    </div>
    <div className="cardbox">
      <Mycard title="Hamburger" imgLocation="images/Hamburger.jpg" totalOrder = {totalOrder} setTotalOrder = {setTotalOrder}/>
      <Mycard title="Cheeseburger" imgLocation="images/Cheeseburger.jpg" totalOrder = {totalOrder} setTotalOrder = {setTotalOrder}/>
      <Mycard title="Bacon Cheeseburger" imgLocation="images/Bacon_cheeseburger.jpg" totalOrder = {totalOrder} setTotalOrder = {setTotalOrder}/>
      <Mycard title="Five Guys Style Fries" imgLocation="images/fries.jpg" totalOrder = {totalOrder} setTotalOrder = {setTotalOrder}/>
      <Mycard title="Cajun Style Fries" imgLocation="images/five-guys-cajun-fries.jpg" totalOrder = {totalOrder} setTotalOrder = {setTotalOrder}/>
      <Mycard title="Coca Cola" imgLocation="images/coca-cola.jpg" totalOrder = {totalOrder} setTotalOrder = {setTotalOrder}/>
      <Mycard title="Sprite" imgLocation="images/Sprite_logo.webp" totalOrder = {totalOrder} setTotalOrder = {setTotalOrder}/>
      <Mycard title="Fanta" imgLocation="images/Fanta-Logo.png" totalOrder = {totalOrder} setTotalOrder = {setTotalOrder}/>
      <Mycard title="Water" imgLocation="images/water.jpg" totalOrder = {totalOrder} setTotalOrder = {setTotalOrder}/>
    </div>
  </div>
);
}
