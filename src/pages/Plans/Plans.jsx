import React from "react";
import PlansCard from "./PlansCard";
import "./Plans.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

import { useEffect, useState } from "react";
import { getPosts } from "../../client";

const Plans = () => {
  const argument = "plans";
  const [plansData, setplansData] = useState([]);
  useEffect(() => {
    async function fetchData(arg) {
      let result = await getPosts(arg);
      setplansData(result);
    }

    fetchData(argument);
  }, []);

  //   console.log(plansData);

  return (
    <ContentWrapper>
      <div className="plansContainer">
        {plansData.map((plan, index) => {
          return <PlansCard key={index} item={plan}></PlansCard>;
        })}
      </div>
    </ContentWrapper>
  );
};

export default Plans;
