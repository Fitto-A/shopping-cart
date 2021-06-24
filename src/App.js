import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopItem from './pages/ShopItem';
import Cart from './pages/Cart';
import Error from './pages/Error';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/shopItem/:id'>
          <ShopItem />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
