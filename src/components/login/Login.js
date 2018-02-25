import React,{Component} from "react"
import ComHeader from "../../container/command/comHeader"

class Login extends Component{
    constructor(props){
        super(props)
        
    }  
    render(){
            return(
                <div>
                    <ComHeader title="登陆"/>
                   <div style={{"width":"100%","position":"absolute","left":0,"top":"50px","textAlign":"center","paddingTop":"100px"}}>
                        开发中,敬请期待......
                    </div>
                </div>
            )
    }
}



export default Login


