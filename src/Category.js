import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
      categories: [
        { categoryId: "1", categoryName: "deneme1" },
        { categoryId: "2", categoryName: "deneme2" },
      ],
    };
  
 
  render() {
    return (
      <div>
        <h3>{this.props.title.titleCategory}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem onClick = {() => this.props.changeCategory(category) } key={category.categoryId}>
              {category.categoryName}
            </ListGroupItem>
          ))}
          {this.props.currentCategory}
        </ListGroup>
      </div>
    );
  }

}