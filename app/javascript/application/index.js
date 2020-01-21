import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/header'
import IndexPage from './pages/index'
import NewPropertyPage from './pages/new-property'

const Index = () => (
  <>
    <Header title="Smart Property Test" />
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/new-property" component={NewPropertyPage} />
    </Switch>
  </>
)

export default Index
