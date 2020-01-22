import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const Header = props =>
  <Navbar dark={true} color="primary">
    <NavbarBrand>{props.title}</NavbarBrand>
  </Navbar>

export default Header
