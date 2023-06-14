import React from "react";
import CategoryCard from "./CategoryCard.jsx";
import "./Categories.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

import { useEffect, useState } from "react";
import { getPosts } from "../../client";

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const argument = "categories";
    async function fetchData(arg) {
      let result = await getPosts(arg);
      setCategoryData(result);
    }

    fetchData(argument);
  }, []);

  console.log(categoryData);

  return (
    <ContentWrapper>
      <div className="categoryContainer">
        {categoryData.map((category, index) => {
          return <CategoryCard key={index} item={category}></CategoryCard>;
        })}
      </div>
    </ContentWrapper>
  );
};

export default Categories;
