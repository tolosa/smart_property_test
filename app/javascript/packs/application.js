import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Index from '../application/index'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Index />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
