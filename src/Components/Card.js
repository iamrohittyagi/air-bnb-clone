import React from "react";

function Card(props) {
  console.log(props.img);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  }else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={`../Static/Images/${props.item.coverImg}`}
        alt="card-pic"
        className="card-image"
      />
      <div className="card-stats">
        <img src="../Static/Star 1.png" alt="star" className="card-star" />
        <span>{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.reviewCount}) • </span>
        <span className="grey">{props.item.location}</span>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-price">
        <span className="bold">From $ {props.item.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
