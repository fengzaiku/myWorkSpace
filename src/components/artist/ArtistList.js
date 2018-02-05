
import React,{Component} from "react"
import ComHeader from "../../container/command/comHeader"
import ArtistListSty from "../../assets/styleSheet/artist/artistList"


class ArtistList extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    componentDidMount(){
        this.props.artistListInfo(this.props.match.params.id)
        // artistListInfo
    }
    handleClick(id){
        this.props.history.push("/singer/"+id)
    }
    render(){
        const artistInfo=this.props.artistInfo.listInfo || [];
        
        if(artistInfo.length > 0){
            return(
                <div>
                    <ComHeader   title="热门歌手" />
                    <ul className={ArtistListSty.box}>
                        {
                            artistInfo.map((item,index)=>(
                                <li key={index} onClick={this.handleClick.bind(this,item.singerid)} className={ArtistListSty.list}>
                                    <figure className={ArtistListSty.listFigure}>
                                        <img src={item.imgurl.replace(/\{size\}/ig,400)}/>
                                        <figcaption>
                                            <span>{item.singername}</span>
                                            <i className={ArtistListSty.rightArrow}>&#xe62f;</i>
                                        </figcaption>
                                    </figure>
                                </li>  
                            ))
                        }
                    </ul>
                </div>
            )    
        }

        return <div>loading...</div>
    }
}

export default ArtistList













