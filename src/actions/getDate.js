import API from "../utils/api"
import fetch from 'cross-fetch';
import {combineReducers} from 'redux';
import * as Type from '../utils/typeapi'
import {parseLyric} from '../utils/tools'
import Cheerio from 'cheerio'
// import {}

const RecommendList=(data) => {
    return {
        type:Type.REACOMMANDDATA,
        date:data
    }
}
const BannerdDate=(data) => {
    return {
        type:Type.BANNERDATA,
        date:data
    }
}
const NewSongDate=(data) => {
    return {
        type:Type.NEWSONGDATA,
        date:data
    }
}

const RankDate=(data) => {
    return {
        type:Type.SETRANKDATA,
        date:data
    }
}
const ArtistDate=(data) => {
    return {
        type:Type.ARTISTDATA,
        date:data
    }
}
const ArtistListDate=(data) => {
    return {
        type:Type.ARTISTLISTDATA,
        date:data
    }
}
const SingerListDate=(data) => {
    return {
        type:Type.SINGERLISTDATA,
        date:data
    }
}
const RankListDate=(data) => {
    return {
        type:Type.RANKLISTDATA,
        date:data
    }
}
const AlbumDate=(data) => {
    return {
        type:Type.ALBUMLISTDATA,
        date:data
    }
}
const addMusic=(data) => {
    return {
        type:Type.ADDMUSIC,
        date:data
    }
}
const controlMusic=(data) => {
    return {
        type:Type.CONTROLMUSIC,
        date:data
    }
}


const getMusicInfo=(id)=>{
    return async (dispatch) =>{
        try {
            let res_song=await fetch(`/kugou/${API.song_detail}?cmd=playInfo&hash=${id}`);
            if(res_song.status>400){
                throw new Error("播放列表请求失败！")
            }
            let res_song_json = await res_song.json()
        
            let res_lyrics=await fetch(`/kugou/${API.song_lyrics}?cmd=100&hash=${id}&timelength=${res_song_json.timeLength}`);
        
            if(res_lyrics.status>400){
                throw new Error("播放列表请求失败！")
            }
            let res_lyrics_detail=await res_lyrics.text();
           
            let musicObj = {"song": res_song_json,"lyrics": parseLyric(res_lyrics_detail)};
            console.log(musicObj)
            dispatch(addMusic(musicObj))
        } 
        catch (error) {
            
        }
    }
}

const getBannerList = () => {
    return async (dispatch) => {
        try {
          const res = await fetch(`/kugou/${API.new_song}`);
          
          if (res.status >= 400) {
            throw new Error("Bad response from server");
          }
          
          const user = await res.json();

          dispatch(BannerdDate(user.banner))
          dispatch(NewSongDate(user.data))
        } catch (err) {
          console.error(err);
        }
    }
};

const getSongList = () => {
    return async (dispatch) => {
        try {
          const res = await fetch(`/kugou/${API.song_play}`);
          
          if (res.status >= 400) {
            throw new Error("Bad response from server");
          }
          
          const user = await res.json();
        
          dispatch(RecommendList(user.plist.list.info))
        } catch (err) {
          console.error(err);
        }
    }
};
const getRankList=()=>{
    return async (dispatch) =>{
        try {
            let res=await fetch(`/kugou/${API.rank}`);
            if(res.status>=400){
                throw new Error("获取歌曲排行失败！")
            }
            
            let user= await res.json();

            dispatch(RankDate(user.rank))
        } 
        catch (error) {
            console.log("获取歌曲排行失败！")
        }
    }
}

const getArtist=()=>{
    return async (dispatch)=>{
        try {
            let res=await fetch(`/kugou/${API.singer_category}`);
            
            if(res.status>=400){
                throw new Error("获取歌手表单失败！")
            }

            var user=await res.json();

            console.log(user)
            dispatch(ArtistDate(user.list))
        } 
        catch (error) {
            
        }
    }
}

const getArtistList =(id)=>{
    return async (dispatch) =>{
        try {
            let res= await fetch(`/kugou/${API.singer_list}${id}?json=true`);
            if(res.status>=400){
                throw new Error("请求错误！")
            }    

            let user = await res.json();

            console.log(user)
            dispatch(ArtistListDate(user.singers))
        } 
        catch (error) {
            
        }
    }
}

const getSingerList=(id)=>{
    return async (dispatch)=>{
        try {
            let res=await fetch(`/yy_kugou/singer/home/${id}.html`);
            
            if(res.status>400){
                throw new Error("获取歌手列表失败！");
            }

            let user= await res.text();
            const $ = Cheerio.load(user);
            const list = $('#song_container').children();
            let userDate=[];

            list.each((index,item)=>{
                let arr=$(item).find("input.song_hid").val().split("|");
                userDate.push({"filename":arr[0],"hash":arr[1],"id":arr[2]})
            })
          dispatch(SingerListDate(userDate))
        } 
        catch (error) {
            
        }
    }
}

const getListRankDate=(id)=>{
    return async (dispatch)=>{
        try {
            let res=await fetch(`/kugou/${API.rankid}?rankid=${id}&page=1&json=true`);
            if(res,status>400){
                throw new Error("歌曲排行获取失败！")
            }

            let user=await res.json();

            console.log(user)
            dispatch(RankListDate(user))
        } 
        catch (error) {
            
        }
    }
}

const getAlbumDate=(id) => {
    return async (dispatch) =>{
        try {
            let res= await fetch(`/kugou/${API.song_playlist}/${id}?json=true`);
            
            if(res.status>400){
                throw new Error("获取热播歌曲失败！")
            }  

            let user= await res.json();

            console.log(user)
            dispatch(AlbumDate(user))
        } 
        catch (error) {
            
        }
    }
}

// const getSongList = () => {
//     return (dispatch)=>{
//         fetch(`/kugou/${API.new_song}`)
//         .then(res => {
//             if (res.status >= 400) {
//                 throw new Error("Bad response from server");
//             }
//                 return res.json();
//         })
//         .then(user => {
//             dispatch(RecommendDate(user.data))
//             console.log(user);
//             console.log(user.data);
//         })
//         .catch(err => {
//             console.error(err);
//         })
//     }
// };


export {
    getBannerList,
    getSongList,
    getRankList,
    getArtist,
    getArtistList,
    getSingerList,
    getListRankDate,
    getAlbumDate,
    getMusicInfo,
    controlMusic
}
// export default combineReducers({
//     getSearchHot,
//     getSongList
// })





