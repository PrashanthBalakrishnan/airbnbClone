import React from "react";

export default function Card(props) {
    const { coverImg, title, price, openSpots, location, } = props
    const { rating, reviewCount } = props.stats
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`../images/${coverImg}`} alt="Katie Zaferes" className="card-image" />
            <div className="card-stats">
                <img src="../images/star.png" alt="rating" className="card-star" />
                <span >{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray"> {location} </span>
            </div>
            <p className="card-title">{title}</p>
            <p className="card-price"><strong>From ${price}</strong>/Person</p>
        </div >

    )
}