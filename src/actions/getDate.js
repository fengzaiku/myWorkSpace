import API from "../utils/api"
import fetch from 'cross-fetch';
import {combineReducers} from 'redux';
import * as Type from '../utils/typeapi'



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
    getArtistList
}
// export default combineReducers({
//     getSearchHot,
//     getSongList
// })





