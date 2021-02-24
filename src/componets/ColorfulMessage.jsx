import React from "react";

export const ColorfulMessage = (props) => {
  const { color, message } = props;
  const contentStyle = {
    color: color,
    fontSize: "25px"
  };
  return <p style={contentStyle}>{message}</p>;
};
