import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
  return (
    <div >
    <AnimatedCursor
      innerSize={20}
      outerSize={20}
      color='0, 128, 128'
      outerAlpha={0.2}
      innerScale={0.4}
      outerScale={4}
      trailingSpeed={10}
      
    />
    </div>
  );
}