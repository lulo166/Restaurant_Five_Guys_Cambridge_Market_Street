import "./styles.css";
import Mycard from "./Mycard";


export default function Menu_and_Orders(props) {
  return (
  <div>
    <div>
    Number of items: {props.totalHamburger + props.totalCheese + props.totalBacon + props.totalFries + props.totalCajunFries + props.totalCocaCola + props.totalSprite + props.totalFanta + props.totalWater}
    </div>
    <div className="cardbox">
      <Mycard title="Hamburger" imgLocation="images/Hamburger.jpg" price = "10" totalOrder = {props.totalHamburger} setTotalOrder = {props.setTotalHamburger}/>
      <Mycard title="Cheeseburger" imgLocation="images/Cheeseburger.jpg" price = "11" totalOrder = {props.totalCheese} setTotalOrder = {props.setTotalCheese}/>
      <Mycard title="Bacon Cheeseburger" imgLocation="images/Bacon_cheeseburger.jpg" price = "12" totalOrder = {props.totalBacon} setTotalOrder = {props.setTotalBacon}/>
      <Mycard title="Five Guys Style Fries" imgLocation="images/fries.jpg" price = "4" totalOrder = {props.totalFries} setTotalOrder = {props.setTotalFries}/>
      <Mycard title="Cajun Style Fries" imgLocation="images/five-guys-cajun-fries.jpg" price = "5" totalOrder = {props.totalCajunFries} setTotalOrder = {props.setTotalCajunFries}/>
      <Mycard title="Coca Cola" imgLocation="images/coca-cola.jpg" price = "2" totalOrder = {props.totalCocaCola} setTotalOrder = {props.setTotalCocaCola}/>
      <Mycard title="Sprite" imgLocation="images/Sprite_logo.webp" price = "2" totalOrder = {props.totalSprite} setTotalOrder = {props.setTotalSprite}/>
      <Mycard title="Fanta" imgLocation="images/Fanta-Logo.png" price = "2" totalOrder = {props.totalFanta} setTotalOrder = {props.setTotalFanta}/>
      <Mycard title="Water" imgLocation="images/water.jpg" price = "1" totalOrder = {props.totalWater} setTotalOrder = {props.setTotalWater}/>
    </div>
  </div>
);
}
