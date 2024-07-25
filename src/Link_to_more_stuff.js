import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Careers from "./careers";
import Location_and_about_us from "./Location_and_about_us";
import Menu_and_Orders from "./Menu_and_Orders";
import Merch from "./Merch";
import Homepage from "./homepage";

export default function Link_to_more_stuff() {
  return (
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
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
      <div className="mylink">
        <Link className="mylink_link" to="/Menu_and_Orders">
          Menu and Orders
        </Link>
        <Routes>
          <Route path="/Menu_and_Orders" element={<Menu_and_Orders />} />
        </Routes>
      </div>
      <div className="mylink">
        <Link className="mylink_link" to="/Location_and_about_us">
          Location and about us
        </Link>
        <Routes>
          <Route
            path="/Location_and_about_us"
            element={<Location_and_about_us />}
          />
        </Routes>
      </div>
      <div className="mylink">
        <Link className="mylink_link" to="/careers">
          Careers
        </Link>
        <Routes>
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
      <div className="mylink">
        <Link className="mylink_link" to="/Merch">
          Merch
        </Link>
        <Routes>
          <Route path="/Merch" element={<Merch />} />
        </Routes>
      </div>
    </div>
  );
}
