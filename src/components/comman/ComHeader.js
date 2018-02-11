import React,{Component} from "react"
import ComHeaderSty from "../../assets/styleSheet/comman/comheader"
class Header extends Component{
    constructor(props){
        super(props)
    }
    handleClick(){   
        this.props.history.goBack();
    }
    render(){
        return(
            <header className={ComHeaderSty.header} style={this.props.style ? this.props.style :null}>
                <i className={ComHeaderSty.returnIcon} onClick={this.handleClick.bind(this)}>&#xe65a;</i>
                <span>{this.props.title}</span>
            </header>
        )
    }
}

export default Header

