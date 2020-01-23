import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand } from 'reactstrap'

const Header = props =>
  <Navbar dark={true} color="primary">
    <Link to="/">
      <NavbarBrand>{props.title}</NavbarBrand>
    </Link>
  </Navbar>

export default Header
