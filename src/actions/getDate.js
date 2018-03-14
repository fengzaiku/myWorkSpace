import API from "../utils/api"
import fetch from 'cross-fetch';
import {combineReducers} from 'redux';
import * as Type from '../utils/typeapi'
import {parseLyric} from '../utils/tools'
import Cheerio from 'cheerio'

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
const removeMusic=(data) => {
    return {
        type:Type.REMOVEMUSIC,
        date:data
    }
}
const clearMusic=() => {
    return {
        type:Type.CLEARMUSIC
    }
}
const controlMusic=(data) => {
    return {
        type:Type.CONTROLMUSIC,
        date:data
    }
}
const setCurMusicIndex=(data) => {
    return {
        type:Type.CURRENTMUSICINDEX,
        date:data
    }
}
const updateMusicProgress=(data) => {
    return {
        type:Type.UPDATEPROGRESS,
        date:data
    }
}
const setSearchState=(data) => {
    return {
        type:Type.SEARCHSTATE,
        date:data
    }
}
const saveSearchHot=(data) => {
    return {
        type:Type.SAVESEARCH_HOT,
        date:data
    }
}
const SearchResultDate=(data) => {
    return {
        type:Type.SEARCHRESULTDATA,
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

            dispatch(AlbumDate(user))
        } 
        catch (error) {
            
        }
    }
}
const fetchSearchHot = () => {
    return async dispatch => {
        try {
            let result = await fetch(`/mobilecdn/${API.searchHot}?format=json`);
            let resultData = await result.json();
            dispatch(saveSearchHot(resultData));
        } catch (err) {
            console.log("Error", err);
        }
    }
}
const fetchSearchResult = (keyword, page = 1, pagesize = 20) => {
    return async dispatch => {
        try {
            let result = await fetch(`/mobilecdn/${API.searchResult}?format=json&keyword=${keyword}&page=${page}&pagesize=${pagesize}`);
            let user = await result.json();
            dispatch(SearchResultDate(user.data))
            // dispatch(saveSearchResult(resultData));
        } catch (err) {
            console.log("Error", err);
        }
    }
};
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
    controlMusic,
    removeMusic,
    clearMusic,
    setCurMusicIndex,
    updateMusicProgress,
    setSearchState,
    fetchSearchHot,
    fetchSearchResult
}




