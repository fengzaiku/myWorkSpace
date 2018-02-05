import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import SearchHeader from './searchHeader'
import NavHeader from './navHeader'
import HomeSty from '../../assets/styleSheet/home/home'
import {renderRoutes } from 'react-router-config'

export default class extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.MusicInfo.getBannerList();
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <SearchHeader/>
                <NavHeader />

                <article className={HomeSty.scrollBox}>
                    {renderRoutes(this.props.route.routes)}
                    {/* { this.props.routes.map((route, index) => (
                        <Route path={route.path}  key={index} component={route.component}/>
                    ))} */}
                </article>
            </div>
        )
    }
}