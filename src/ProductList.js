import React, { Component } from 'react';

export default class ProductList extends Component {
  render() {
    return (
      <div> {this.props.title.titleProduct}</div>
    );
  }
}
