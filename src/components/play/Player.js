/**
 * Created by 0easy-23 on 2017/9/15.
 */
import React, {Component} from 'react'
import ReactPlayer from 'react-player';
// import * as localStore from '../../util/localStorage';

class Player extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        // this.onDuration = this.onDuration.bind(this);
        this.onProgress = this.onProgress.bind(this)
        this.getCurrentSong = this.getCurrentSong.bind(this)
        this.onEnd = this.onEnd.bind(this);
    }

    onDuration(e) {
        // localStore.setItem('duration', e);
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps)
    }
    getCurrentSong() {
        const musicList = this.props.musicList;
        let playIndex=this.props.currentPlayIndex.playIndex;
        let hash=null;
        this.props.location.pathname.replace(/\/play\/(?=([A-Z|a-z|0-9]+))/,function($1,$2){
            hash=$2;
        });
        let currentSong = null;
        if (musicList.length > 0 && hash) {
            musicList.map((ele) => {            
                // console.log(ele)
                if (ele.song.hash === hash) {
                    currentSong = ele;
                }
            })
        }else if(musicList.length > 0){
            currentSong=musicList[playIndex]
        }
        return currentSong;
    }

    onProgress(state) {
        // console.log(state)
        const currentLyrics = this.getCurrentSong().lyrics;
        this.props.updateMusicProgress({currentTime: state.playedSeconds, percentage: state.played});
        // this.props.musicInfoActions.updateProgress({currentTime: state.playedSeconds, percentage: state.played});
        // for (let i = 0, l = currentLyrics.length; i < l; i++) {
        //     if (state.playedSeconds > currentLyrics[i][0]) {
        //         //显示到页面
        //         // lyricContainer.textContent = that.lyric[i][1];
        //         this.props.musicInfoActions.updateLyrics({updateLyrics: currentLyrics[i][1], time: currentLyrics[i][0], index: i});
        //     }
        // }
    }

    onEnd(e) {
        // 播放完毕播放下一首
        let curIndex=this.props.currentPlayIndex.playIndex;
        const musicList = this.props.musicList;
        // const hash = this.props.music.hash;
        if (musicList.length > 1) {   
            let currentIndex = curIndex === musicList.length - 1 ? 0 : curIndex + 1;
            this.props.history.replace("/play/"+musicList[currentIndex].song.hash)
            this.props.setCurMusicIndex({playIndex:currentIndex})
        //     let index = 0;
        //     for (let i = 0; i < musicList.length; i++) {
        //         if (musicList[i].song.hash === hash) {
        //             index = i;
        //         }
        //     }
        //     let currentIndex = index + 1 > musicList.length - 1 ? 0 : ++index;
        //     const currentSong = musicList[currentIndex].song;
        //     this.props.musicInfoActions.getMusic({hash: currentSong.hash});
        //     if (window.location.pathname === '/play/') {
        //         const reg = new RegExp(window.location.href.split('#')[1]);
        //         const url = window.location.href.replace(reg, currentSong.hash);
        //         window.location.replace(url);
        //     }
            // this.props.musicInfoActions.fetchMusic(currentSong.hash);
        } else {
            this.props.controlMusic({playing:false});
        }

    }

    componentDidMount() {
        // this.props.musicInfoActions.audioObj({player: this.player});
    }
    render() {
        const currentSong = this.getCurrentSong();
        console.log(this.props.control.playing)
        // const volume = this.props.volumeObj.volume;
        return (
            <div style={{display: 'none'}}>
                <ReactPlayer 
                    url={currentSong ? currentSong.song.url : null} 
                    onProgress={this.onProgress}
                    controls 
                    ref={player => {this.player=player}}
                    playing={this.props.control.playing}
                    onEnded={this.onEnd}
                    />
                {/* <ReactPlayer volume={volume} url={currentSong ? currentSong.song.url : null} controls playing={this.props.control.playing} ref={player => {
                    this.player = player
                }} onProgress={this.onProgress} onDuration={this.onDuration} onEnded={this.onEnd}/> */}
            </div>
        )
    }
}

export default Player;