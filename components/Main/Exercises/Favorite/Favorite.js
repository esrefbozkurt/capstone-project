import { useState } from "react";
import { StyledFav } from "./StyledFav";

export default function Favorite( this ) {
  const [animate, setAnimate] = useState({ active: false });

  const StyledFav = (props) => {
    return <span className={props.className}>howdy</span>;
  };

  function toggleActive() {
    console.log("toggling");
    setAnimate({ active: !this.animate.active });
  }

  return (
    <div className="target">
      <button onClick={toggleActive()}>toggle</button>
      {/* <StyledThing active={this.state.active} /> */}
      <StyledFav active={this.animate.active}>Hello</StyledFav>;
    </div>
  );
}
