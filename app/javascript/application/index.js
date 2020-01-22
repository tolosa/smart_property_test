import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { store } from './store'

import Header from './components/Header'
import IndexPage from './pages/Index'
import NewPropertyPage from './pages/NewProperty'

const App = () => (
  <Provider store={store}>
    <Header title="Smart Property Test" />
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/new-property" component={NewPropertyPage} />
    </Switch>
  </Provider>
)

export default App
