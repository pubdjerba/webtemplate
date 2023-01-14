import { useStaticQuery, graphql } from "gatsby";

export const useCategory = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiCategory {
        edges {
          node {
            name
          }
        }
      }
    }
  `);
  return data.allStrapiCategory.edges;
};
