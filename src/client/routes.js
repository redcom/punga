// import Examples from './examples/page.react';
import App from './app/app.react';
import Home from './home/page.react';
import Login from './auth/page.react';
import Me from './me/page.react';
import NotFound from './components/notfound.react';
import React from 'react';
import Todos from './todos/page.react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />
    <NotFoundRoute handler={NotFound} name="not-found" />
    {/*<Route handler={Examples} name="examples" />*/}
    <Route handler={Login} name="login" />
    <Route handler={Me} name="me" />
    <Route handler={Todos} name="todos" />
  </Route>
);
