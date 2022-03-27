import React from 'react'
import Home from './pages/Home'
import { Switch, Route } from 'react-router-dom'
import SearchData from './pages/SearchData'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/google-clone/">
          <Home />
        </Route>
        <Route exact path="/google-clone/search">
          <SearchData />
        </Route>
      </Switch>

    </>
  )
}

export default App
