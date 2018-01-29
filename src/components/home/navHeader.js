import React,{Component} from "react"
import {Route,withRouter,Redirect} from 'react-router-dom';
import NavHeaderSty from '../../assets/styleSheet/home/navHeader'
class NavHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
            navLink:[
                {
                    path:'/home',
                    text:"个性推荐"
                },  
                {
                    path:'/newSong',
                    text:"新歌"
                },  
                {
                    path:'/rank',
                    text:"排行榜"
                },  
                {
                    path:'/artist',
                    text:"歌手"
                }
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.state.navLink.map((item,index) =>{
            // console.log(item.text)
        })
    }     
    handleClick(path){
        this.props.history.push(path);

        //   console.log(this.props.routes)
        
    }      
    render(){
        return (
            <article className={NavHeaderSty.navBox}>
                <ul className={NavHeaderSty.navList}>
                    {
                        this.state.navLink.map((item, index) => (
                            <li className={this.props.location.pathname === item.path ? NavHeaderSty.active : ''} key={index} onClick={this.handleClick.bind(this,item.path)}>{item.text}</li>))
                    }
                </ul>
            </article>
        )
    }
}


export default withRouter(NavHeader)


