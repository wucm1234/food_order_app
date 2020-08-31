import React from "react";
import faker from "faker";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CateItem = (props) => {
  
  return (
    <Link to={`/menu/category/${props.id}`}>
      <div className="column">
        <h3 className="ui item header">{props.title}</h3>

        <Image src={props.image} className="ui image" />
      </div>
    </Link>
  );
};

export default CateItem;
