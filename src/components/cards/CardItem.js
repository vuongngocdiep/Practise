import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import "./CardItem.css";

const { Meta } = Card;

function CardItem(props) {
  return (
    <div>
      <Link to={`/${props.name}`}>
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={<img alt="" src={props.src} />}
        >
          <Meta
            title={props.name.charAt(0).toUpperCase() + props.name.slice(1)}
            description={props.number}
          />
          <div className="types">
            {props.types.map((type, index) => (
              <h5 key={index} className={type}>
                {type}
              </h5>
            ))}
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default CardItem;
