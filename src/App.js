import React from "react";
import Navigator from "./Navigator";
import Category from "./Category";
import { Container, Row, Col } from "reactstrap";
import ProductList from "./ProductList";

function App() {

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
            <Category title = {info} ></Category>
          </Col>
          <Col xs="9"> 
            <ProductList title = {info} ></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
