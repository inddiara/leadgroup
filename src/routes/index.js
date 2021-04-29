import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LeadPanel from '../Pages/LeadPanel';  

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <LeadPanel {...props} />}/>
    </Switch>
  </BrowserRouter>
);

