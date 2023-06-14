import React from "react";

const CategoryCard = (props) => {
  console.log(props);

  return (
    <div className="categoryConatiner">
      <div className="categoryImage">
        <img className="cImage" src={props.item.catagoryImage}></img>
      </div>
      <div className="categoryInfo">
        <div className="cInfoUp">Category : </div>
        <div className="cInfoDown">{props.item.catagoryName}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
