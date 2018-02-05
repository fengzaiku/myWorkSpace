import React,{Component} from "react"
import { renderRoutes } from 'react-router-config'
import {Router, Route,Switch} from 'react-router-dom'
import '../assets/styleSheet/comman/';
import Routes from './router'


class RouteWithSubRoutes extends Component {
  constructor(props){
    super(props)
   
  }
  componentWillUpdate(nextProps) {
   
  }
  render(){
    return(
      <Switch>
        {renderRoutes(Routes)}
      </Switch>
    )
  }
}

export default RouteWithSubRoutes
