import React from "react";

const PlansCard = (props) => {
  console.log(props);
  return (
    <div className="planCard">
      <div className="planImage">
        <img
          src={props.item.planImage}
          alt="Sport Image"
          className="pimage"
        ></img>
      </div>

      <div className="planInfo">
        <div className="planTitle cursor">
          <div className="pTitleUp">Category : </div>
          <div className="pTitleDown">{props.item.planTitle}</div>
        </div>
        <div className="planPrice cursor">
          <div className="pPriceUp">Plan Price : </div>
          <div className="pPriceDown">{props.item.planPrice}</div>
        </div>
        <div className="planDays cursor">
          <div className="pDaysUp">Plan Days : </div>
          <div className="pDaysDown">{props.item.planDays}</div>
        </div>
        <div className="planDownload cursor">
          <div className="pDownloadUp">Downloads/Day : </div>
          <div className="pDownloadDown">{props.item.dailyDownloadLimit}</div>
        </div>
        <div className="planScreen cursor">
          <div className="pScreenUp">No. of Screen : </div>
          <div className="pScreenDown">{props.item.planScreen}</div>
        </div>
      </div>
    </div>
  );
};

export default PlansCard;
