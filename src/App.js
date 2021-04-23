import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import AllBeers from './components/AllBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path="/allbeers" component={AllBeers}>
            <AllBeers />
          </Route>
          <Route path="/random-beer">
            <RandomBeer />
          </Route>
          <Route path="/newbeer">
            <NewBeer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
