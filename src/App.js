import React from 'react';
import './App.css';
import Home from './components/Home.js';
import { Route, Switch } from 'react-router-dom';
import OrderPizzaForm from './components/OrderPizzaForm';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/pizza' component={OrderPizzaForm} />
    </Switch>
  );
};
export default App;
