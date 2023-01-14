import React from "react";
import { Link } from "gatsby";
import { useCategory } from "../hooks/use-category";
const kebabCase = require("lodash/kebabCase");

const AllCategories = () => {
  const categories = useCategory();
  console.log(categories);
  return (
    <>
      <h6>Categories</h6>
      {categories.map((item, i) => (
        <Link to={`/categories/${kebabCase(item.node.name)}/`} key={i}>
          <p>{item.node.name}</p>
        </Link>
      ))}
    </>
  );
};

export default AllCategories;
