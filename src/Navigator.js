

import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,

} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navigator extends Component {
  render() {
    return (
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">E-Ticaret</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              <CartSummary removeFromCart ={this.props.removeFromCart} cart = {this.props.cart}></CartSummary>
              </DropdownToggle>
             
            </UncontrolledDropdown>
          </Nav>
          
         
        </Collapse>
      </Navbar>
      </div>
    )
  }
}

