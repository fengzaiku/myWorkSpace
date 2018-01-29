import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import SearchHeader from './searchHeader'
import NavHeader from './navHeader'
import HomeSty from '../../assets/styleSheet/home/home'

export default class extends Component {
    constructor(props){
        super(props)
        console.log(this.props.routes)
    }
    componentDidMount() {
        
    }

    render() {
        return (
            <div className="container">
                <SearchHeader/>
                <NavHeader />

                <article className={HomeSty.scrollBox}>
                    { this.props.routes.map((route, index) => (
                        <Route path={route.path}  key={index} component={route.component}/>
                    ))}
                </article>
                

                {/*路由多级嵌套  { this.props.routes.map((route, index) => (
                    <Route path={route.path} render={props => (
                        <route.component {...props} routes={route.routes}/>
                    )} key={index}/>
                ))} */}
   
            </div>
        )
    }
}