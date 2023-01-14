import React from "react";

const Item = ({ item }) => {
  const item_1 = JSON.stringify(item, undefined, 2);
  return (
    <div>
      <pre>{item_1}</pre>
    </div>
  );
};
export default Item;
