import Navigator from "./Navigator";
import Category from "./Category";
import { Container, Row, Col } from "reactstrap";
import ProductList from "./ProductList";
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    currentCategory: "",
  }
  changeCategory = (category)=>{
    this.setState({currentCategory:category.categoryName})
  }
  render() {
    let info = {
      titleProduct: "Product Lİst",
      titleCategory:"Category List"
    };
    return (
      <div>
        <Container>
          <Row>
            <Navigator ></Navigator>
          </Row>
          <Row>
            <Col xs="3">
              <Category currentCategory= {this.state.currentCategory} changeCategory={this.changeCategory} title = {info} ></Category>
            </Col>
            <Col xs="9"> 
              <ProductList currentCategory = {this.state.currentCategory} title = {info} ></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


