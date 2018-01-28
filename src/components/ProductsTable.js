import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import Product from "./Product";
class ProductsTable extends Component{

    render(){
      const rows = [];
      let previousCategory = null;

      this.props.products.forEach((product)=>{
          if (previousCategory !== product.category) 
           {   
             rows.push(<ProductCategoryRow product={product}   />);
             rows.push(<Product product={product} key={product.name} />);
            }
          else
              rows.push(<Product product={product} key={product.name}/>);
          previousCategory = product.category;
      })
        return <table className="table w-25 mx-auto table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>;
    }
}

export default ProductsTable;