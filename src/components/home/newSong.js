import React,{Component} from "react"
import NewSongSty from '../../assets/styleSheet/home/newsong'

class NewSong extends Component {
    constructor(props){
        super(props)
    }
    handleClick(hash,ev){
        ev.preventDefault();
        this.props.history.push("/play/"+hash)
    }
    render(){
        const SongList=this.props.newSong.date || [{}];
        return(
            <ul className={NewSongSty.songBox}>
               {
                    SongList.map((item,index) => {
                        return(
                            <li className={NewSongSty.songList} key={index} onClick={this.handleClick.bind(this,item.hash)}>
                                <span>{item.filename}</span>
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






