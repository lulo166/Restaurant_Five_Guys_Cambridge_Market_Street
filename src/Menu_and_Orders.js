import "./styles.css";
import Mycard from "./Mycard";

export default function Menu_and_Orders() {
  return (
  <div className="cardbox">
    <Mycard title="Hamburger" imgLocation="images/Hamburger.jpg" />
    <Mycard title="Cheeseburger" imgLocation="images/Cheeseburger.jpg" />
    <Mycard title="Bacon Cheeseburger" imgLocation="images/Bacon_cheeseburger.jpg" />
    <Mycard title="Five Guys Style Fries" imgLocation="images/fries.jpg" />
    <Mycard title="Cajun Style Fries" imgLocation="images/five-guys-cajun-fries.jpg" />
    <Mycard title="Coca Cola" imgLocation="images/" />
    <Mycard title="Sprite" imgLocation="images/" />
    <Mycard title="Fanta" imgLocation="images/" />
    <Mycard title="Water" imgLocation="images/" />
</div>
);
}
