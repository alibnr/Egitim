import React, { Component } from "react";
import { Button, Table } from "reactstrap";

class ProductList extends Component { 
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
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {this.props.product.map((pro) => ( 
              <tr key={pro.id}>
              <th scope="row" >{pro.id}</th>
              <td>{pro.productName}</td>
              <td>{pro.categoryId}</td>
              <td>{pro.quantityPerUnit}</td>
              <td>{pro.unitPrice}</td>
              <td>{pro.unitsInStock}</td>
              <td><Button onClick={()=> {this.props.addToCart(pro)}} color="info">Add</Button></td>
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