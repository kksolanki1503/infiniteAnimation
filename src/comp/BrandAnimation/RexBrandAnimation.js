import { maxWidth } from "@mui/system";
import React from "react";

const RexBrandAnimation = ({
  children,
  animationTime = "10s",
  borderOptions = {},
  itemOptions = {},
  itemWidth = "100px",
  itemHeight = "50px",
}) => {
  const count = React.Children.count(children);
  const list = {
    display: "flex",
    position: "relative",
    overflow: "hidden",
    ...borderOptions,
  };

  const item = {
    position: "absolute",
    left: `max(calc(${count} * ${itemWidth}), 100%)`,
    width: `${itemWidth}`,
    height: `${itemHeight}`,
    backgroundColor: "red",
    animation: `infiniteAnimation ${animationTime} linear 0s infinite`,
    ...itemOptions,
  };
  return (
    <div style={list}>
      <style>
        {`
          @keyframes infiniteAnimation {
            to {
              left: -${itemWidth};
            }
          }
        `}
      </style>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            style: {
              ...child.props.style,
              ...item,
              "animation-delay": `calc(-1 * ${animationTime} / ${count} * (${count} - ${
                index + 1
              }))`,
            },
          });
        } else {
          return child;
        }
      })}
    </div>
  );
};
export default RexBrandAnimation;
