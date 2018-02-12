import React,{Component} from "react"
import { renderRoutes } from 'react-router-config'
import {Router, Route,Switch} from 'react-router-dom'
import '../assets/styleSheet/comman/';
import '../assets/fonts/iconfont.css'
import Routes from './router'
import Player from "../container/playlogic/player"



class RouteWithSubRoutes extends Component {
  constructor(props){
    super(props)
   
  }
  componentWillUpdate(nextProps) {
   
  }
  render(){
    return(
      <div id="pageRoot">
        <Player/>      
        <Switch>
          {renderRoutes(Routes)}
        </Switch>
      </div>
    )
  }
}

export default RouteWithSubRoutes
