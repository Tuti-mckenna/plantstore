import React from "react";
//Bootstrap
import { Row, Col } from "react-bootstrap";
//Bootstrap Icons
import {
  TrashFill,
  DashCircleFill,
  PlusCircleFill,
} from "react-bootstrap-icons";
//css
import "./CartItem.css";

export const CartItem = (props) => {
  const {
    title,
    imageUrl,
    price,
    quantity,
    id,
    description,
    increase,
    decrease,
    removeProduct,
  } = props;
  const product = { title, imageUrl, price, quantity, id, description };

  return (
    <Row className="item">
      <Col
        style={{ width: "18rem" }}
        className="block-example border rounded mb-0"
      >
        <img src={imageUrl} className="cartImg" alt="imagen-planta" />

        <h4>{title}</h4>
        <p>$ {price}</p>
        <h5>cantidad: {quantity}</h5>

        <PlusCircleFill width="30px" onClick={() => increase(product)} />

        {quantity >= 1 && (
          <TrashFill width="30px" onClick={() => removeProduct(product)} />
        )}
        {quantity > 1 && (
          <DashCircleFill width="30px" onClick={() => decrease(product)} />
        )}
      </Col>
    </Row>
  );
};
