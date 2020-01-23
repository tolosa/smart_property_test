import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const Header = props =>
  <Navbar dark={true} color="primary">
    <NavbarBrand href="/">
      <i className="fa fa-building-o fa-lg fa-fw"></i>
      {props.title}
    </NavbarBrand>
  </Navbar>

export default Header
