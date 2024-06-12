import React from 'react';
import './App.css';
import Home from './components/Home.js';
import { Route, Switch } from 'react-router-dom';
import OrderPizzaForm from './components/OrderPizzaForm';

const App = () => {
  return (
    // Switch between components
    <Switch>
      {/*   Route to home page */}
      <Route exact path='/' component={Home} />
      {/* Route to pizza order form */}
      <Route path='/pizza' component={OrderPizzaForm} />
    </Switch>
  );
};
export default App;
