import React from "react";

const Menu = ({ handleStyle }) => {
  return (
    <i
      class="fas fa-bars absolute mt-10 right-5 top-5 text-3xl z-50 cursor-pointer"
      onClick={handleStyle}
    ></i>
  );
};

export default Menu;
