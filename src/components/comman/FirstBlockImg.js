import React,{Component} from "react"
import FirstBlockImgSty from "../../assets/styleSheet/comman/firstBlockImg"

class FirstBlockImg extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        console.log(this.props)
        return(
            <div className={FirstBlockImgSty.fistImgBox}>
                <img src={this.props.imgurl} className={FirstBlockImgSty.fistImg}/>
                
                {
                    this.props.play && <i>&#xe768;</i>
                }
                {
                    this.props.time && <time>{this.props.time}</time>
                }
                
            </div>
        )
    }
}


export default FirstBlockImg



