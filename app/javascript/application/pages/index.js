import React from 'react'
import { Link } from 'react-router-dom'

const IndexPage = () => (
  <div>
    Index
    <Link to="/new-property">
      New Property
    </Link>
  </div>
)

export default IndexPage
