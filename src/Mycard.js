import "./styles.css";
import { useState } from "react";

export default function Mycard(props) {
  const [order, setLike] = useState(0);
  function handleLike() {
    setLike(order + 1);
    props.setTotalLike(props.totalLike + 1);
  }
  function handledisLike() {
    setLike(order - 1);
  }

  return (
    <div className="mycard">
      <h4>My Card</h4>
      <h5>{props.title}</h5>
      <img src={props.imgLocation} width="100px" height="100px" />
      <div>Like: {like}</div>
      <button onClick={handleLike}>Like</button>
      <button onClick={handledisLike}>Dislike</button>
    </div>
  );
}
