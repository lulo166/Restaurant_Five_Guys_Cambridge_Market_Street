import "./styles.css";
import Mycard from "./Mycard";

export default function Menu_and_Orders() {
  return (
  <div className="cardbox">
    <Mycard title="Hamburger" imgLocation="images/Hamburger.jpg" />
    <Mycard title="Cheeseburger" imgLocation="" />
    <Mycard title="Bacon Burger" imgLocation="" />
    <Mycard title="Bacon Cheeseburger" imgLocation="" />
    <Mycard title="Five Guys Style Fries" imgLocation="" />
    <Mycard title="Cajun Style Fries" imgLocation="" />
    <Mycard title="Coca Cola" imgLocation="" />
    <Mycard title="Sprite" imgLocation="" />
    <Mycard title="Fanta" imgLocation="" />
    <Mycard title="DrPepper" imgLocation="" />
    <Mycard title="Water" imgLocation="" />
</div>
);
}
