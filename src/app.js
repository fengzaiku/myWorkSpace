import "babel-polyfill"
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
// import {BrowserRouter, Route,Switch} from 'react-router-dom'
import {Router, Route,Switch} from 'react-router-dom'
// import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import  createHistory from 'history/createBrowserHistory'
import store from './store'
const customHistory = createHistory({
  basename: "", // The base URL of the app (see below)
  forceRefresh: false, // Set true to force full page refreshes
  keyLength: 6, // The length of location.key
  // A function to use to confirm navigation with the user (see below)
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
})
const location = customHistory.location

customHistory.listen((location, action) => {
  console.log(
    `The current URL is ${location.pathname}${location.search}${location.hash}`
  )
  console.log(`The last navigation action was ${action}`)
})

import Routes from './router/'
import './assets/styleSheet/comman/';

const RouteWithSubRoutes = () => (
  Routes.map((route, index) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )} key={index}/>
  ))
)


render(
  <Provider store={store}>
    <Router history={customHistory}>  
      <Switch>
        <RouteWithSubRoutes/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
