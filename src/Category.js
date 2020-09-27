import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {categories: [
      { categoryId: "1", categoryName: "asdsdfsd" },
      { categoryId: "2", categoryName: "dfdfdfg" }
    ]}
      
  }
  render() {
    return (
      <div>
        <h3>{this.props.title.titleCategory}</h3>
        <ListGroup>
          {
            this.state.categories.map(asd => <ListGroupItem key={asd.categoryId}>{asd.categoryName}</ListGroupItem>)
          }
        </ListGroup>
      </div>
    );
  }
}
