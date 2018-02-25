import React, {Component} from 'react';
import ReactSwipe from 'react-swipe'
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll'
// var iScroll = require('iscroll');
// import 'babel-polyfill';
// import classnames from 'classnames';
// import Header from '../../components/Common/Header';
// import * as localStore from '../../util/localStorage';
// import {formatTime} from '../../util/tools';
// import Slider from 'react-slick';
import PlaySty from '../../assets/styleSheet/play/play'
import ComHeader from "../../container/command/comHeader"
import MusicList from "../../container/playlogic/musicList"

// import Loading from '../../components/Common/Loading';
// import noData from '../../static/images/nodata.png';
// import svg1 from '../../static/css/svg/svg-1.svg';
// import svg2 from '../../static/css/svg/svg-2.svg';

export default class Player extends Component {
        // background: '-webkit-linear-gradient(#e9203d, #e9203d) no-repeat, #ddd',
        // height:38, // 歌词每行高度
        // settings: {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        // }
    constructor(props) {
        super(props);
        this.state={
            musicListShow:false
        }
        // this.state = {
        //     loaded: false,
        //     modal: false, // 弹层默认不显示
        //     dot: false,
        //     volumed: true, // 是否静音,
        //     progress: localStore.getItem('currentVolume') ? localStore.getItem('currentVolume') * 100 + '%' : this.props.volumeObj.volume * 100 + '%', // 声音进度条进度
        // };
        // this.onChange = this.onChange.bind(this);
        this.playPause = this.playPause.bind(this);
        this.showMusicList = this.showMusicList.bind(this);
        this.getCurrentSong = this.getCurrentSong.bind(this);
        this.playPrev = this.playPrev.bind(this);
        this.playNext = this.playNext.bind(this);
        // this.openDot = this.openDot.bind(this);
        // this.closeDot = this.closeDot.bind(this);
        // this.setSVG = this.setSVG.bind(this);
        // this.setVolume = this.setVolume.bind(this);
        // this.addFavourite = this.addFavourite.bind(this);
        // this.singerInfo = this.singerInfo.bind(this);
        // this.favouriteStyle = this.favouriteStyle.bind(this);
    }

    componentDidMount() {
        const hash = this.props.match.params.id;
        if (hash) {
            this.props.musicInfo(hash);
            this.props.controlMusic({playing:true});
        }


        console.log(this.props)
        // if (hash && hash !== 'null' && hash !== this.props.music.hash) {
        //     this.props.musicInfoActions.getMusic({hash: hash});
        //     this.props.musicInfoActions.fetchMusic(hash);
        //     this.props.musicInfoActions.control({playing: true});
        // }
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
                if (ele.song.hash === hash) {
                    currentSong = ele;
                }
            })
            // this.setState({songLyrics:currentSong.lyrics})
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

    openDot() {
        // this.setState({dot: true,modal: false});
    }

    closeDot() {
        // this.setState({dot: false});
    }

    setSVG() {
        // return this.state.volumed ? {backgroundImage: `url(${svg1})`} : {backgroundImage: `url(${svg2})`};
    }

    setVolume() {
        // const currentVolume = localStore.getItem('currentVolume');
        // this.setState({volumed: !this.state.volumed});
        // if (this.state.volumed) {
        //     this.props.musicInfoActions.volumeControl({volume: 0});
        //     this.setState({progress: 0});
        // } else {
        //     if (currentVolume && currentVolume !== null) {
        //         this.props.musicInfoActions.volumeControl({volume: parseFloat(currentVolume)});
        //         this.setState({progress: parseFloat(currentVolume) * 100 + '%'});
        //     } else {
        //         this.setState({progress: 0.5 * 100 + '%'});
        //         this.props.musicInfoActions.volumeControl({volume: 0.5});
        //     }
        // }
    }

    handleStart(e) {
        // e.preventDefault();
        // const touchObj1 = e.changedTouches[0];
        // const x = touchObj1.clientX;
        // const l = e.target.offsetLeft;
        // const leftVal = x - l;
        // this.setState({
        //     leftVal: leftVal,
        //     sliderWidth: this.refs.slider.offsetWidth,
        //     barWidth: e.target.offsetWidth,
        // })
    }

    handleTouchMove(e) {
        // const {leftVal, sliderWidth, barWidth} = this.state;
        // const touchObj2 = e.changedTouches[0];
        // const thisX = touchObj2.clientX;
        // let barLeft = thisX - leftVal;
        // if (barLeft < 0) {
        //     barLeft = 0;
        // } else if (barLeft > sliderWidth - barWidth) {
        //     barLeft = sliderWidth - barWidth
        // }
        // const currentValue = sliderWidth - barWidth > 0 ? (barLeft / ( sliderWidth - barWidth)).toFixed(2) : 0.5;
        // if (currentValue >= 0 && currentValue <= 1) {
        //     parseFloat(currentValue) === 0 ? this.setState({volumed: false}) : this.setState({volumed: true});
        //     this.props.musicInfoActions.volumeControl({volume: parseFloat(currentValue)});
        //     localStore.setItem('currentVolume', currentValue);
        // } else {
        //     this.props.musicInfoActions.volumeControl({volume: 0.5});
        // }
        // this.setState({progress: barLeft + 'px'});
    }

    addFavourite(filename) {
        // const currentEle = this.refs.favourite;
        // if (currentEle.style.color === '') {
        //     this.props.musicInfoActions.addFavorite(this.props.music.hash + ',' + filename);
        // } else {
        //     currentEle.style.color = '';
        //     this.props.musicInfoActions.removeFavorite(this.props.music.hash + ',' + filename);
        // }
    }

    favouriteStyle() {
        // return this.props.favoriteMusic.toString().indexOf(this.props.music.hash) > -1 ? {color: 'rgb(233, 32, 61)'} : {color: ''};
    }

    singerInfo(id) {
        // this.props.history.push({pathname: '/singer/info', state: {singerId: id}});
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
        // if (this.props.spin && this.getCurrentSong()) {
            const currentSong = this.getCurrentSong().song;
            const currentSongLyrics = this.getCurrentSong().lyrics;
            // const albumImg = currentSong.imgUrl.replace(/\{size\}/g, 400);
            // const duration = formatTime(localStore.getItem('duration'));
            // const percentage = this.props.progress.percentage;
            // const rangeStyle = percentage * 100 + '%' + ' ' + '100%';
            // if (currentSong.error) {
            //     return (
            //         <div className="container">
            //             {/* <Header/> */}
            //             <div className="no-data">
            //                 <img src={noData}/>
            //                 <span>很抱歉，当前音乐{currentSong.error}！</span>
            //             </div>
            //         </div>
            //     )
            // } else {
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
                                            <ul 
                                                // className={PlaySty.originUlBox}
                                            // className={PlaySty.originLyric} 
                                                // style={{transform: 'translateY(-' + this.props.lyricsUpdate.index * 38 + 'px)'}}
                                                >
                                                {currentSongLyrics.map((ele, index) => (
                                                    <li key={index} id={`line-${ele[0]}`} ref={ele[0]}
                                                    className={`${PlaySty.line} ${PlaySty.lyicsStye}`}>
                                                    {/* className={`${this.props.lyricsUpdate.time === ele[0] ? PlaySty.lineOn : PlaySty.line} ${PlaySty.lyicsStye}`}> */}
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
                                        {/* 
                                        <i onClick={this.playPause} className={this.props.control.playing ? 'icon-pause' : 'icon-play'}></i>
                                        <i className="icon-list" onClick={this.showMusicList}></i> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <MusicList musicList={this.props.musicList} show={this.state.modal} hash={this.props.match.params.id}
                                   changeShowModal={this.changeShowModal.bind(this)} {...this.props}/> */}
                        <MusicList show={this.state.musicListShow} hideMusicList={this.hideMusicList.bind(this)}/>
                    </div>
                )
            // }
        // } else if (!this.props.music.hash || this.props.music.hash === 'null') {
        //     return (
        //         <div className="container">
        //             {/* <Header/> */}
        //             <div className="no-data">
        //                 <img src={noData}/>
        //                 <span>当前无音乐！</span>
        //             </div>
        //         </div>
        //     )
        } else {
            return <div>加载中......</div>
        }
    }
}

