import { useStaticQuery, graphql } from "gatsby";

export const useActivity = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiActivity {
        edges {
          node {
            age_minimum
            booking_options
            departure
            description
            duration
            equipment
            languages
            location
            minimum_number
            name
            on_demand
            payment_methods
            physical_level
            price
            rating
            restrictions
            title
            transport
            category {
              name
            }
            inclusions {
              name
            }
          }
        }
      }
    }
  `);
  return data.allStrapiActivity.edges;
};
