import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Favorites from './components/favorites';
import Details from './components/details';
import Trending from './components/trending';
import NotFound from './components/notFound';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Header />
        <Switch>
          <Route path='/favorites' component={Favorites} exact />
          <Route path='/details/:gifId' component={Details} exact />
          <Route path='/' component={Trending} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;