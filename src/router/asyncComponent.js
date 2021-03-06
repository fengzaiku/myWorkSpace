import React,{Component} from "react"

export default function asyncComponent(importComponent){
    class AsyncComponent extends Component {
        constructor(props){
            super(props)
            this.state={
                component:null
            }
        }
        componentDidMount(){
            const {default:component} = importComponent;
            this.setState({
                component:component
            })
        }
        render(){
            const C=this.state.component;
            return C ? <C {...this.props}/> : null
        }
    }
    
    
    return AsyncComponent
}


