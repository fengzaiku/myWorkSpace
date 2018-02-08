import React,{Component} from 'react'
import RankSty from '../../assets/styleSheet/rank/rank.less'
class Rank extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        if(!this.props.RankList.loaded){
            this.props.RankInfo()
        }
    }
    handleClick(item){
        this.props.history.push("/ranklist/"+item.rankid,{
            "singerimg":item.imgurl.replace(/\{size\}/,400),
            "singername":item.rankname,
            "play":false
        })
    }
    render(){
        const rankList=this.props.RankList.items || [];
        console.log(rankList)
        if(rankList.length>=0){
            return(
                <ul className={RankSty.ulBox}>
                    {
                        rankList.map((item,index)=>{
                            return(
                                <li key={index} onClick={this.handleClick.bind(this,item)}>
                                    <figure className={RankSty.rankBox}>
                                        <img src={item.imgurl.replace(/\{size\}/ig,400)}/>
                                        <figcaption className={RankSty.figcaption}>
                                            <p>{item.rankname}</p>
                                            <i className={RankSty.rightArrow}>&#xe612;</i>
                                        </figcaption>
                                    </figure>
                                </li>                                
                            )
                        })
                    }
                </ul>
            )    
        }else{
            return (
                <div>正在加载中.....</div>
            )
        }
    }
}

export default Rank


