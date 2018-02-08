import React,{Component} from "react"
import ComHeader from "../../container/command/comHeader"
import FirstBlock from "../../container/command/firstBlockImg"
import ArtistSingerSty from "../../assets/styleSheet/artist/artistSinger"

class ArtistSinger extends Component{
    constructor(props){
        super(props)
        this.state={
            title:undefined,
            imgurl:null,
            time:null,
            play:false
        }
    }
    componentDidMount(){
        this.props.rankListinfo(this.props.match.params.id);
        console.log(this.props)
        // RankList
    }
    render(){
        console.log(this.props)
        const listInfo=this.props.RankList.listInfo || [];
        if(this.props.RankList.loaded){
            const localTime=(new Date(this.props.RankList.timestamp)).toString();
            return(
                <div>
                    <ComHeader title={this.props.RankList.info.rankname}/>
                   <div className={ArtistSingerSty.singerBox}>
                        <FirstBlock imgurl={this.props.RankList.info.imgurl.replace(/\{size\}/,400)} time={localTime}  play={this.state.play}/>
                        <div className={ArtistSingerSty.playAll}>
                            <span>播放全部</span>
                            <i>&#xe62a;</i>
                        </div>
                        <ul className={ArtistSingerSty.ranklistBox}>
                            {
                                listInfo.map((item,index) => (
                                    <li key={index} className={ArtistSingerSty.ranklist}>
                                        <em>{index+1}</em>
                                        <p>{item.filename}</p>
                                        <i>&#xe62d;</i>
                                    </li>
                                ))
                            }
                            
                        </ul>
                   </div>
                </div>
            )
        }
        return <div>Loading.....</div>
    }
}



export default ArtistSinger


