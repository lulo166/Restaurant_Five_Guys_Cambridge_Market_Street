import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./styles.css";
import Link_to_more_stuff from "./Link_to_more_stuff";
export default function App() {
  return (
    <Router>
      <nav>
        <div>
          <div className="App">
            <Link_to_more_stuff />
          </div>
        </div>
      </nav>
    </Router>
  );
}
