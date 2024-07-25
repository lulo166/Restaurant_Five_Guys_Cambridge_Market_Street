import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Careers from "./careers";
import Location_and_about_us from "./Location_and_about_us";
import Menu_and_Orders from "./Menu_and_Orders";
import Merch from "./Merch";
import Homepage from "./homepage";

export default function Link_to_more_stuff() {
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
          <Link className="mylink_link" to="/careers">
            Careers
          </Link>
        </div>
        <div className="mylink">
          <Link className="mylink_link" to="/Merch">
            Merch
          </Link>
        </div>
      </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Menu_and_Orders" element={<Menu_and_Orders />} />
          <Route
            path="/Location_and_about_us"
            element={<Location_and_about_us />}
          />
          <Route path="/careers" element={<Careers />} />
        </Routes>
    </div>
  );
}
