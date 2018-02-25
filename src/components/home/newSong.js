import React,{Component} from "react"
import NewSongSty from '../../assets/styleSheet/home/newsong'

class NewSong extends Component {
    constructor(props){
        super(props)
        // console.log(this.props.match)
    }
    handleClick(hash,ev){
        ev.preventDefault();
        this.props.history.push("/play/"+hash)
    }
    render(){
        const SongList=this.props.newSong.date || [{}];
        // console.log(SongList)
        // const SongList= this.props.match.url=='/home/newSong'? this.props.newSong : {}
        return(
            <ul className={NewSongSty.songBox}>
               {
                    SongList.map((item,index) => {
                        return(
                            <li className={NewSongSty.songList} key={index} onClick={this.handleClick.bind(this,item.hash)}>
                                <span>{item.filename}</span>
                                {/* <span>新歌 <b className={NewSongSty.centerLine}></b>列表</span> */}
                                <i className={NewSongSty.icon}>&#xe703;</i>
                            </li>
                        )
                    })
               }           
            </ul>
        )
    }
}


export default NewSong






