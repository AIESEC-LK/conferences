import React from "react";

const Helmet = (props) => {
  document.title = "NLDS' 24 - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
