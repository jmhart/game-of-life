import React, { useState } from "react";

const Cell = () => {
  const [active, setActive] = useState(false);
  let className = "cell";
  if (active) {
    className += " cell-active";
  }
  return <div onClick={() => setActive(!active)} className={className} />;
};

export default Cell;
