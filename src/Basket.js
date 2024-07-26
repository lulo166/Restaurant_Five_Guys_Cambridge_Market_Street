import "./styles.css";
import { useState } from "react";
import Mycard from "./Mycard";
import Menu_and_Orders from "./Menu_and_Orders";

export default function Basket(props) {
  return (
  <div>
    <div>
      Number of Hamburger ordered: {props.totalHamburger}
    </div>
    <div>
      Number of Cheeseburger ordered: {props.totalCheese}
    </div>
    <div>
      Number of Bacon Cheeseburger ordered: {props.totalBacon}
    </div>
    <div>
      Number of Fries ordered: {props.totalFries}
    </div>
    <div>
      Number of Cajun Fries ordered: {props.totalCajunFries}
    </div>
    <div>
      Number of Coca Cola ordered: {props.totalCocaCola}
    </div>
    <div>
      Number of Sprite ordered: {props.totalSprite}
    </div>
    <div>
      Number of Fanta ordered: {props.totalFanta}
    </div>
    <div>
      Number of Water ordered: {props.totalWater}
    </div>
    <div>
      Number of items: {props.totalHamburger + props.totalCheese + props.totalBacon + props.totalFries + props.totalCajunFries + props.totalCocaCola + props.totalSprite + props.totalFanta + props.totalWater}
    </div>
  </div>
  );
}
