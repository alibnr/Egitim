import React, { Component } from "react";
import { Table } from "reactstrap";

class ProductList extends Component {
  state = {
    products: [],
  };
  
  render() {
    return (
      <div>
        <h2>{this.props.title.titleCategory + " - " + this.props.currentCategory}</h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Category Id</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Unit In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.product.map((product) => ( 
              <tr key={product.id}>
              <th scope="row" >{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.categoryId}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
            </tr>
            )
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProductList;