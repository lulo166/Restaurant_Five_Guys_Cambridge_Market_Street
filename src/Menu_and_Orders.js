import "./styles.css";
import Mycard from "./Mycard";
import { useState } from "react";

export default function Menu_and_Orders() {
  const [totalHamburger, setTotalHamburger] = useState(0);
  const [totalCheese, setTotalCheese] = useState(0);
  const [totalBacon, setTotalBacon] = useState(0);
  const [totalFries, setTotalFries] = useState(0);
  const [totalCajunFries, setTotalCajunFries] = useState(0);
  const [totalCocaCola, setTotalCocaCola] = useState(0);
  const [totalSprite, setTotalSprite] = useState(0);
  const [totalFanta, setTotalFanta] = useState(0);
  const [totalWater, setTotalWater] = useState(0);
  return (
  <div>
    <div>
      Number of items: {totalHamburger + totalCheese + totalBacon + totalFries + totalCajunFries + totalCocaCola + totalSprite + totalFanta + totalWater}
    </div>
    <div className="cardbox">
      <Mycard title="Hamburger" imgLocation="images/Hamburger.jpg" totalOrder = {totalHamburger} setTotalOrder = {setTotalHamburger}/>
      <Mycard title="Cheeseburger" imgLocation="images/Cheeseburger.jpg" totalOrder = {totalCheese} setTotalOrder = {setTotalCheese}/>
      <Mycard title="Bacon Cheeseburger" imgLocation="images/Bacon_cheeseburger.jpg" totalOrder = {totalBacon} setTotalOrder = {setTotalBacon}/>
      <Mycard title="Five Guys Style Fries" imgLocation="images/fries.jpg" totalOrder = {totalFries} setTotalOrder = {setTotalFries}/>
      <Mycard title="Cajun Style Fries" imgLocation="images/five-guys-cajun-fries.jpg" totalOrder = {totalCajunFries} setTotalOrder = {setTotalCajunFries}/>
      <Mycard title="Coca Cola" imgLocation="images/coca-cola.jpg" totalOrder = {totalCocaCola} setTotalOrder = {setTotalCocaCola}/>
      <Mycard title="Sprite" imgLocation="images/Sprite_logo.webp" totalOrder = {totalSprite} setTotalOrder = {setTotalSprite}/>
      <Mycard title="Fanta" imgLocation="images/Fanta-Logo.png" totalOrder = {totalFanta} setTotalOrder = {setTotalFanta}/>
      <Mycard title="Water" imgLocation="images/water.jpg" totalOrder = {totalWater} setTotalOrder = {setTotalWater}/>
    </div>
  </div>
);
}
