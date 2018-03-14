
import React, {Component} from 'react'
import ReactPlayer from 'react-player';

class Player extends Component {
    constructor(props) {
        super(props);
        this.onProgress = this.onProgress.bind(this)
        this.getCurrentSong = this.getCurrentSong.bind(this)
        this.onEnd = this.onEnd.bind(this);
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
                if (ele.song.hash.toLowerCase() === hash.toLowerCase()) {
                    currentSong = ele;
                }
            })
        }else if(musicList.length > 0){
            currentSong=musicList[playIndex]
        }
        return currentSong;
    }

    onProgress(state) {
        const currentLyrics = this.getCurrentSong().lyrics;
        this.props.updateMusicProgress({currentTime: state.playedSeconds, percentage: state.played});
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
        } else {
            this.props.controlMusic({playing:false});
        }

    }
    render() {
        const currentSong = this.getCurrentSong();
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
            </div>
        )
    }
}

export default Player;