import React from "react";

const FoodItem = (props) => {
  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={props.meal.image} />
        </div>
        <div className="content">
        
          <div className="header">{props.meal.name}</div>
          <div className="meta">1520 cal</div>
          <div className="right float ">{props.meal.price}</div>
          <div className="description">
            {props.meal.description}
          </div>
          
        </div>
        <div className="extra content">
          <div className='right floated content'>
            <div aria-hidden="true" className="ui button primary ">add to cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
