

import React, { Component } from 'react'
import {Link } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle, DropdownItem

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

              <DropdownItem>
                <Link to="form">From Demo</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="form2">From Demo 2</Link>
              </DropdownItem>
              
             
            </UncontrolledDropdown>
          </Nav>
          
         
        </Collapse>
      </Navbar>
      </div>
    )
  }
}

