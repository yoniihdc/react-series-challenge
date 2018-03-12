import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Favorites from './components/favorites/';
import Details from './components/details';
import Trending from './components/trending/';
import NotFound from './components/notFound';

import { Provider } from 'react-redux';
import store from './state/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path='/favorites' component={Favorites} exact />
              <Route path='/details/:gifId' component={Details} exact />
              <Route path='/' component={Trending} exact />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;