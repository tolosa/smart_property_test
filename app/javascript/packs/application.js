import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

import App from '../application/index'

axios.defaults.baseURL = '/api/v1'
axios.defaults.headers.common['Authorization'] = "Token token=Rq0Sffmyre4pXxOoynCc5r2GkKZBLL_ZEC49mybX-5VUzSlcRqQgcTAkjzPMOotPO5Z52NcLKJDWN5fCsG944A"

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
