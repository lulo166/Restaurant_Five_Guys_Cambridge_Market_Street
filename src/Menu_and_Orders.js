import "./styles.css";
import Mycard from "./Mycard";
import { useState } from "react";

export default function Menu_and_Orders() {
  const [Order, setOrder] = useState(0);
  return (

  <div className="cardbox">
    <Mycard title="Hamburger" imgLocation="images/Hamburger.jpg" Order = {Order} setOrder = {setOrder}/>
    <Mycard title="Cheeseburger" imgLocation="images/Cheeseburger.jpg" />
    <Mycard title="Bacon Cheeseburger" imgLocation="images/Bacon_cheeseburger.jpg" />
    <Mycard title="Five Guys Style Fries" imgLocation="images/fries.jpg" />
    <Mycard title="Cajun Style Fries" imgLocation="images/five-guys-cajun-fries.jpg" />
    <Mycard title="Coca Cola" imgLocation="images/coca-cola.jpg" />
    <Mycard title="Sprite" imgLocation="images/Sprite_logo.webp" />
    <Mycard title="Fanta" imgLocation="images/Fanta-Logo.png" />
    <Mycard title="Water" imgLocation="images/water.jpg" />
  </div>
);
}
