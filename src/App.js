import Navigator from "./Navigator";
import Category from "./Category";
import { Container, Row, Col } from "reactstrap";
import ProductList from "./ProductList";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id)
    
  };

  componentDidMount(){
    this.getProducts();
  }

  getProducts = (id) => {
    let url= "http://localhost:3000/products"
    if (id){
      url = url + "?categoryId=" + id;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  render() {
    let info = {
      titleProduct: "Product Lİst",
      titleCategory: "Category List",
    };
    return (
      <div>
        <Container>
          <Row>
            <Navigator></Navigator>
          </Row>
          <Row>
            <Col xs="3">
              <Category
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                title={info}
              ></Category>
            </Col>
            <Col xs="9">
              <ProductList
                product={this.state.products}
                currentCategory={this.state.currentCategory}
                title={info}
              ></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
