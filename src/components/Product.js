import React from "react";

const Product = props => (
  <tr>
    <td>{props.product.name}</td>
    <td>{props.product.price}</td>
  </tr>
);

export default Product;
