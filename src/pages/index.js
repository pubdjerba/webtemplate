import * as React from "react";
import AllCategories from "../components/allCategories";
import AllItems from "../components/allItems";
import { useActivity } from "../hooks/use-activity";

const IndexPage = () => {
  const items = useActivity();
  items.map((node) => console.log(node.node.category));

  return (
    <main>
      <article>
        <AllCategories items={items} />
      </article>
      <article>
        <AllItems items={items} />
      </article>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
