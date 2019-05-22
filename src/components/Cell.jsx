import React, { useState } from "react";

const Cell = ({ isActive }) => {
  const [active, setActive] = useState(isActive);
  let className = "cell";
  if (active) {
    className += " cell-active";
  }
  return <div onClick={() => setActive(!active)} className={className} />;
};

export default Cell;
