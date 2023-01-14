import React from "react";
import Item from "./item";

const AllItems = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </div>
  );
};

export default AllItems;
