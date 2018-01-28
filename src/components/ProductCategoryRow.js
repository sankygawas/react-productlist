import React from "react";

const ProductCategoryRow = (props)=> (
        <tr>
            <td colSpan="2" className="h5 bg-light">
              {props.product.category}
            </td>
        </tr>
);

export default ProductCategoryRow;