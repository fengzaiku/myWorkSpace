import React , { Component } from 'react'
import RecommentListSty from "../../assets/styleSheet/home/recommentList"
class RecommentList extends Component {
    constructor(props){
        super(props);
        // this.handleClick=this.handleClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        console.log(this.props)
        // this.store=this.context.store;
    }
    componentWillMount(){
        this.props.getSongList();
    }
    handleClick(id){
        this.props.history.push('/album/'+id);
    }
    render(){
        const recommendList=this.props.RecommendDate;
        console.log(recommendList)
        const $this=this;
        if(recommendList.length){
            return (
                <ul className={RecommentListSty.box}>
                    {
                        recommendList.map(function(item,index){
                            return (
                                <li key={index} onClick={(e) => $this.handleClick(item.specialid,e)}>
                                    <figure className={RecommentListSty.figure}>
                                        <p> 
                                            <img src={item.user_avatar} title={item.intro}/>
                                        </p>
                                        <figcaption>
                                            {item.specialname}
                                        </figcaption>
                                    </figure>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }else{
            return(
                <div>
                    werwerwerter
                </div>
            )
    
        }
    }
}

export default RecommentList















