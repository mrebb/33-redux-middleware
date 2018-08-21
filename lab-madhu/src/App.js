import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';

import store from './store/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/" component={Dashboard} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
