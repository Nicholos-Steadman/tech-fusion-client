import React from "react";
import "./Card.scss";

const Card = ({ productData }) => {
    return (
        <div className="card">
            
           
            <img
                src={productData.image}
                alt={productData.name}
                className="card__image"
            />
             <h3 className="card__title">{productData.name}</h3>
            {/* <p className="card__tag">{productData.tag}</p> */}
            <p className="card__price">${productData.price.toFixed(2)}</p>
     
        </div>
    );
};

export default Card;