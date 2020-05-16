import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NewSpot from './pages/NewSpot'


export default function Router(){
  return(
    <BrowserRouter>
      <Switch> {/* Esse switch permite que apenas uma rota seja acessada por vez */}
        <Route path="/" exact component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/newspot" exact component={NewSpot}/>
      </Switch>
    </BrowserRouter>
  )
}