import React from "react";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import "./News.scss";
import { useEffect, useState } from "react";
import { getPosts } from "../../client";
import NewsCard from "./NewsCard";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let result = await getPosts();
      setNewsData(result);
    }

    fetchData();
  }, []);

  // console.log(newsData);
  return (
    <ContentWrapper>
      <div className="newsContainerMain">
        {newsData.map((news, index) => {
          return <NewsCard key={index} item={news}></NewsCard>;
        })}
      </div>
    </ContentWrapper>
  );
};

export default News;
