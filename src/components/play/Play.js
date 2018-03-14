import React, {Component} from 'react';
import ReactSwipe from 'react-swipe'
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll'
import PlaySty from '../../assets/styleSheet/play/play'
import ComHeader from "../../container/command/comHeader"
import MusicList from "../../container/playlogic/musicList"

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state={
            musicListShow:false
        }
        this.playPause = this.playPause.bind(this);
        this.showMusicList = this.showMusicList.bind(this);
        this.getCurrentSong = this.getCurrentSong.bind(this);
        this.playPrev = this.playPrev.bind(this);
        this.playNext = this.playNext.bind(this);
    }

    componentDidMount() {
        const hash = this.props.match.params.id;
        if (hash) {
            this.props.musicInfo(hash);
            this.props.controlMusic({playing:true});
        }
    }
    
    playPause() {
        this.props.controlMusic({playing:!this.props.control.playing});
    }

    onChange(e) {
        // this.props.musicInfoActions.control({playing: true});
        // this.props.audio.player.seekTo(parseFloat(e.target.value));
    }

    showMusicList() {
        this.setState({musicListShow: true});
    }
    hideMusicList(date) {
        this.setState({musicListShow: date.show});
    }

    getCurrentSong() {
        const musicList = this.props.musicList;
        const hash = this.props.match.params.id;
        let currentSong = null;
        if (musicList.length > 0 && hash) {
            musicList.map((ele) => {
                if (ele.song.hash.toLowerCase() === hash.toLowerCase()) {
                    currentSong = ele;
                }
            })
        }
        
        return currentSong;
    }

    playPrev() {
        const musicList = this.props.musicList;
        let curIndex=this.props.currentPlayIndex.playIndex;
        let currentIndex = curIndex === 0 ? musicList.length - 1 : curIndex - 1;
        this.props.history.replace("/play/"+musicList[currentIndex].song.hash)
        this.props.setCurMusicIndex({playIndex:currentIndex})
    }

    playNext() {
        const musicList = this.props.musicList;
        let curIndex=this.props.currentPlayIndex.playIndex;
        let currentIndex = curIndex === musicList.length - 1 ? 0 : curIndex + 1;
        this.props.history.replace("/play/"+musicList[currentIndex].song.hash)
        this.props.setCurMusicIndex({playIndex:currentIndex})
    }
    componentDidUpdate(){
        const currentSongLyrics = this.getCurrentSong();
        if(currentSongLyrics){
            const songLyrics=currentSongLyrics.lyrics;
            const $this=this;
            let index=0;
            for(let i=0;i<songLyrics.length;i++){
                this.refs[songLyrics[i][0]].style.color="#fff"
                if(this.props.musicProgress.currentTime >= songLyrics[i][0]){
                    index=i;
                }
            }    
            if(index){
                this.refs.iScroll.withIScroll(function(iScroll) {
                    iScroll.scrollToElement($this.refs[songLyrics[index][0]],500)
                    $this.refs[songLyrics[index][0]].style.color="#e9203d"
                })
            }
        }
    }
    render() {
        if (this.getCurrentSong()) {
            const currentSong = this.getCurrentSong().song;
            const currentSongLyrics = this.getCurrentSong().lyrics;
                return (
                    <div className={PlaySty.containerFull}>
                        <div className={PlaySty.containerBg} 
                            style={{backgroundImage: `url(${currentSong.imgUrl.replace(/\{size\}/g, 400)})`}}
                            ></div>
                        <div className={PlaySty.containerPlay}>
                            <ComHeader style={{background: 'transparent'}}/>
                            <div className={PlaySty.containerInner}>
                                <div className={PlaySty.playerTitle}>
                                    <div className={PlaySty.songName}>
                                        {currentSong.songName}
                                    </div>
                                    <div className={PlaySty.singerName}>
                                        - {currentSong.singerName} -
                                     </div>
                                    <div className={PlaySty.dot}>
                                        <i className={PlaySty.iconMoreHoriz}>&#xe611;</i>
                                    </div>
                                </div>
                               <ReactSwipe swipeOptions={{
                                    continuous: false
                                   }} className={PlaySty.swiperOption}>
                                    <div className={PlaySty.slide}>
                                        <div className={PlaySty.componentsAlbum}>
                                            <div className={`${this.props.control.playing ? PlaySty.playing : PlaySty.paused} ${PlaySty.albumPic}`}
                                                 style={{background: `url(${currentSong.imgUrl.replace(/\{size\}/g, 400)}) center center`, backgroundSize: 'cover'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={PlaySty.originLyric}>
                                        <ReactIScroll iScroll={iScroll} ref="iScroll">
                                            <ul>
                                                {currentSongLyrics.map((ele, index) => (
                                                    <li key={index} id={`line-${ele[0]}`} ref={ele[0]}
                                                    className={`${PlaySty.line} ${PlaySty.lyicsStye}`}>
                                                        {ele[1]}
                                                    </li>
                                                ))}
                                            </ul>                         
                                        </ReactIScroll>
                                    </div> 
                               </ReactSwipe>
                                <div className={PlaySty.componentsPlayerControl}>
                                    <div className={PlaySty.playerTime}>
                                        <div className={PlaySty.timeLeft}>
                                            {/* {currentTime} */}
                                        </div>
                                        <div className={PlaySty.playerRange}>
                                            {/* <input type='range' min={0} max={1} step='any' value={percentage || '0'}
                                                   style={{background: this.props.background, backgroundSize: rangeStyle}} onChange={this.onChange}/> */}
                                        </div>
                                        <div className={PlaySty.timeRight}>
                                            {/* {duration} */}
                                        </div>
                                    </div>
                                    <div className={PlaySty.playerBtn}>
                                        <i className={PlaySty.colorSize+" icon-zuobofang"} onClick={this.playPrev}></i>
                                        <i className={(this.props.control.playing ? 'icon-caozuo-bofang-zanting ' : 'icon-kaishi ')+PlaySty.colorSize} onClick={this.playPause}></i>
                                        <i className={PlaySty.colorSize+" icon-youbofang"} onClick={this.playNext}></i>
                                        <i className={PlaySty.colorSize+" icon-gengduo1"} onClick={this.showMusicList}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MusicList show={this.state.musicListShow} hideMusicList={this.hideMusicList.bind(this)}/>
                    </div>
                )
        } else {
            return <div>加载中......</div>
        }
    }
}

