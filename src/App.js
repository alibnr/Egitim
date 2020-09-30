import Navigator from "./Navigator";
import Category from "./Category";
import { Container, Row, Col } from "reactstrap";
import ProductList from "./ProductList";
import React, { Component } from "react";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import CartList from "./CartList";
import NotFound from "./NotFound";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url = url + "?categoryId=" + id;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  addToCart = (pro) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((p) => p.product.id === pro.id);

    if (addedItem) {
      addedItem.quantity++;
    } else {
      newCart.push({ product: pro, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(pro.productName + " added to cart");
  };

  removeFromCart = (cartItem) => {
    let newCart = this.state.cart.filter(
      (c) => c.product.id !== cartItem.product.id
    );
    this.setState({ cart: newCart });
  };

  render() {
    let info = {
      titleProduct: "Product Lİst",
      titleCategory: "Category List",
    };
    return (
      <div>
        <Container>
          <Navigator
            removeFromCart={this.removeFromCart}
            cart={this.state.cart}
          ></Navigator>

          <Row>
            <Col xs="3">
              <Category
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                title={info}
              ></Category>
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" render = {(props) => (
                 
                  <ProductList
                  {...props}
                  product={this.state.products}
                addToCart={this.addToCart}
                currentCategory={this.state.currentCategory}
                title={info}
              ></ProductList>
                )

                }></Route>
                <Route exact path="/cart" component={CartList}></Route>
                <Route exact component={NotFound}></Route>
              </Switch>

              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
