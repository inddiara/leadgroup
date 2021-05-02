import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LeadPanel from '../Pages/LeadPanel';  
import Register from '../Pages/Register';

const Routes = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LeadPanel}/>
        <Route path="/register" exact component={Register}/>
      </Switch>
    </BrowserRouter>
);

export default Routes;
  

