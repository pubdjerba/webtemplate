import React from "react";
import { graphql } from "gatsby";
import AllItems from "../components/allItems";

export default function CategoryTemplate({ data }) {
  const items = data.allStrapiActivity.edges;

  return (
    <div>
      <AllItems items={items} />
    </div>
  );
}

export const pageQuery = graphql`
  query ($name: String) {
    allStrapiActivity(
      filter: { category: { elemMatch: { name: { in: [$name] } } } }
    ) {
      edges {
        node {
          title
        }
      }
    }
  }
`;
