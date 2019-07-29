import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { StripeProvider } from 'react-stripe-elements';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_1IZFtE9GvSsI3DEfJdeBwTuZ00wr7w70ox">
        <Router>
          <div className="App">
            <AppRouter />
          </div>
        </Router>
      </StripeProvider>
    )
  }
}

export default App;
