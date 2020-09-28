import React from "react";

const Menu = ({ handleStyle }) => {
  return (
    <i
      class="fas fa-bars absolute top-0 right-0 text-3xl z-50"
      onClick={handleStyle}
    ></i>
  );
};

export default Menu;
