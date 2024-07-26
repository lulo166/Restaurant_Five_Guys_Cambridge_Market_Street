import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Basket from "./Basket";
import Location_and_about_us from "./Location_and_about_us";
import Menu_and_Orders from "./Menu_and_Orders";
import Homepage from "./homepage";
import { useState } from "react";

export default function Link_to_more_stuff() {
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
      <div className="mylinks">
        <div className="mylink_logo">
          <Link to="/">
            <img
              src="images/Five-Guys-Emblem-500x281.png"
              width="120px"
              height="100px"
              className="image_logo"
            />
          </Link>
        </div>
        <div className="mylink">
          <Link className="mylink_link" to="/Menu_and_Orders">
            Menu and Orders
          </Link>
        </div>
        <div className="mylink">
          <Link className="mylink_link" to="/Location_and_about_us">
            Location and about us
          </Link>
        </div>
        <div className="mylink">
          <Link className="mylink_link" to="/Basket">
          Basket
          </Link>
        </div>
      </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Menu_and_Orders" element={<Menu_and_Orders totalHamburger={totalHamburger} setTotalHamburger={setTotalHamburger} totalCheese={totalCheese} setTotalCheese={setTotalCheese} totalBacon={totalBacon} setTotalBacon={setTotalBacon} totalFries={totalFries} setTotalFries={setTotalFries} totalCajunFries={totalCajunFries} setTotalCajunFries={setTotalCajunFries} totalCocaCola={totalCocaCola} setTotalCocaCola={setTotalCocaCola} totalSprite={totalSprite} setTotalSprite={setTotalSprite} totalFanta={totalFanta} setTotalFanta={setTotalFanta} totalWater={totalWater} setTotalWater={setTotalWater}/>} />
          <Route
            path="/Location_and_about_us"
            element={<Location_and_about_us />}
          />
          <Route path="/Basket" element={<Basket totalHamburger={totalHamburger} setTotalHamburger={setTotalHamburger} totalCheese={totalCheese} setTotalCheese={setTotalCheese} totalBacon={totalBacon} setTotalBacon={setTotalBacon} totalFries={totalFries} setTotalFries={setTotalFries} totalCajunFries={totalCajunFries} setTotalCajunFries={setTotalCajunFries} totalCocaCola={totalCocaCola} setTotalCocaCola={setTotalCocaCola} totalSprite={totalSprite} setTotalSprite={setTotalSprite} totalFanta={totalFanta} setTotalFanta={setTotalFanta} totalWater={totalWater} setTotalWater={setTotalWater}/>} />
        </Routes>
    </div>
  );
}
