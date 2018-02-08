import React,{Component} from "react"
import ComHeader from "../../container/command/comHeader"
import FirstBlock from "../../container/command/firstBlockImg"
import SongList from "../../container/homelogic/newSong"
import ArtistSingerSty from "../../assets/styleSheet/artist/artistSinger"

class ArtistSinger extends Component{
    constructor(props){
        super(props)
        this.state={
            title:undefined,
            imgurl:null,
            time:null
        }
    }
    componentDidMount(){
        this.props.singerListinfo(this.props.match.params.id);
        this.setState({
            title:this.props.location.state.singername,
            imgurl:this.props.location.state.singerimg
        })
    }
    render(){
        return(
            <div>
                <ComHeader title={this.state.title}/>
               <div className={ArtistSingerSty.singerBox}>
                    <FirstBlock imgurl={this.state.imgurl} time={this.state.time}/>
                    <SongList/>
               </div>
            </div>
        )
    }
}



export default ArtistSinger


