import React,{Component} from 'react'
import MusiListSty from '../../assets/styleSheet/play/musicList'
export default class MusicList extends Component {
    constructor(props){
        super(props)

        this.state={
            curIndex:0
        }
        this.removeMusic=this.removeMusic.bind(this)
    }
    close(){
        this.props.hideMusicList({show:false})
    }
    clearAllMusic(){
        this.props.clearMusic();
        this.props.history.goBack()
    }
    removeMusic(id,i){
        this.props.removeMusic(id);
        let list=this.props.musicList;
        
        if(id !== this.props.match.params.id){return;}
        if(list.length > 1){
            let index = i === list.length-1 ? 0 : i;
            this.props.history.replace("/play/"+list[index].song.hash)
        }else{
            this.props.history.goBack()
        }
    }
    chooseMusic(id,index){
        this.props.history.replace("/play/"+id)
        this.props.setCurMusicIndex({playIndex:index})
    }
    componentDidMount(){
        this.props.setCurMusicIndex({playIndex:this.curIndex})
    }
    render(){
        const musicList=this.props.musicList;
        return(
            <div className={MusiListSty.listBox} style={{display:this.props.show ? "block" : "none"}}>
                <div className={MusiListSty.listTitle}>
                    <i className={MusiListSty.delate+' icon-shanchu'} onClick={this.close.bind(this)}></i>
                    <span>播放列表（{musicList.length}）首</span>
                    <em onClick={this.clearAllMusic.bind(this)}>清除</em>
                </div>
                <ul className={MusiListSty.listUl}>
                    {
                        musicList.map((item,index)=>(
                            <li key={index} className={MusiListSty.list} onClick={this.chooseMusic.bind(this,item.song.hash,index)}>
                                <span className={item.song.hash === this.props.match.params.id ? MusiListSty.on : ''} ref={el => {
                                    item.song.hash === this.props.match.params.id ? this.curIndex=index : ''
                                }}>{item.song.fileName}</span>
                                {/* <span className={item.song.hash === this.props.match.params.id ? MusiListSty.on : ''}>{item.song.fileName}</span> */}
                                <i className={MusiListSty.delate+' icon-shanchu'} onClick={() => this.removeMusic(item.song.hash,index)}></i>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
