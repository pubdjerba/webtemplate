const kebabCase = require("lodash/kebabCase");

exports.createPages = async ({ actions, graphql }) => {
  // Import the template for the category pages
  const categoryTemplate = require.resolve("./src/templates/category.js");
  // Execute a GraphQL query to retrieve all activities and their associated categories
  const result = await graphql(`
    query {
      allStrapiActivity {
        edges {
          node {
            title
            category {
              name
            }
          }
        }
      }
    }
  `);
  // Check for errors when running the query
  //console.log("result: " + JSON.stringify({ result }, null, 2));
  if (result.errors) {
    reporter.panic("error loading categories", result.errors);
    return;
  }
  // Extract the data of the activities from the query result
  const allItems = result.data.allStrapiActivity.edges;
  // Create a new set to store unique categories

  const uniqueCategory = new Set();

  // Iterate through the activities to extract unique categories
  allItems.forEach((item) => {
    const { category } = item.node;
    category.forEach(({ name }) => {
      uniqueCategory.add(name);
    });
    // Convert the set of unique categories to an array
    // console.log(JSON.stringify({ uniqueCategory }, null, 2));
    const allCategories = Array.from(uniqueCategory);

    // pagination
    allCategories.forEach((name) => {
      actions.createPage({
        path: `/categories/${kebabCase(name)}/`,
        component: categoryTemplate,
        context: {
          name,
        },
      });
    });
  });
};
