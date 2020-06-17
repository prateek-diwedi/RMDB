import React from "react";
import  CircularProgressbar  from "react-circular-progressbar";
import { Spring , config } from "react-spring/renderprops";
import "react-circular-progressbar/dist/styles.css";

function MovieCircularPercentage(props) {
  
  return (
    <div
    style={{
      width: "60px",
      height: "60px",
      background: 'black',
      borderRadius:100,
      zIndex: 50,
    }}
    >
      <Spring
        from={{ percentage: 0 }}
        to={{ percentage: props.rating }}
        config={config.molasses}
      >
        {({ percentage }) => {
          const roundedPercentage = Math.round(percentage);
          return (
            <CircularProgressbar
              percentage={roundedPercentage}
              text={`${roundedPercentage}%`}
              styles={{
                path: {
                  transform: "rotate(180deg)",
                  transformOrigin: "center center",
                  stroke: percentage >= 70 ? "#22D07A" : "#D3D530"
                },
                trail: {
                  strokeWidth: 0
                },
                text: {
                  fontSize: 22,
                  fontWeight: 800,
                  animation: "fadein 2s",
                  fill: percentage >= 70 ? "#22D07A" : "#D3D530"
                }
              }}
            />
          );
        }}
      </Spring>
    </div>
  );
}


export default MovieCircularPercentage
