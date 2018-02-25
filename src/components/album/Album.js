import React,{Component} from "react"
import ComHeader from "../../container/command/comHeader"
import AlbumSty from "../../assets/styleSheet/album/album"

class Album extends Component{
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
        this.props.albumInfo(this.props.match.params.id);
        console.log(this.props)
        // RankList
    }
    handleClick(hash){
        this.props.history.push("/play/"+hash)
    }
    render(){
        console.log(this.props)
        const listInfo=this.props.albumList.listDate || [];
        const albumInfo=this.props.albumList.info || {};
        if(this.props.albumList.loaded){
            return(
                <div>
                    <ComHeader title={"热歌"}/>
                   <div className={AlbumSty.singerBox}>
                        <img src={albumInfo.imgurl.replace(/\{size\}/,400)}  className={AlbumSty.blurImg}/>
                        <figure className={AlbumSty.info}>
                            <img  src={albumInfo.imgurl.replace(/\{size\}/,400)}/>
                            <figcaption className={AlbumSty.info_intro}>
                                <p>名称：{albumInfo.specialname}</p>
                                <p>创建人：{albumInfo.nickname}</p>
                                <time>更新时间：{albumInfo.publishtime}</time>
                            </figcaption>
                        </figure>


                        <div className={AlbumSty.playAll}>
                            <span>播放全部</span>
                            <i>&#xe62a;</i>
                        </div>
                        <ul className={AlbumSty.album_box}>
                            { 
                                    listInfo.map((item,index) => (
                                        <li key={index} onClick={this.handleClick.bind(this,item.hash)} className={AlbumSty.album_list}>
                                            <div>
                                                <h3>{item.filename}</h3>
                                                <p>{item.remark}</p>
                                            </div>
                                            <i>&#xe62d;</i>
                                        </li>)
                                    )                
                            }
                        </ul>
                   </div>
                </div>
            )
        }
        return <div>Loading.....</div>
    }
}



export default Album


