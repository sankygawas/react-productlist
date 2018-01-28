import React from "react";

const Product = props => (
  <tr style={{ color: !props.product.stocked ? "red" : "black" }}>
    <td>{props.product.name}</td>
    <td>{props.product.price}</td>
  </tr>
);

export default Product;
