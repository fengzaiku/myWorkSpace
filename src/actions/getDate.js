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


const getBannerList = () => {
    return async (dispatch) => {
        try {
          const res = await fetch(`/kugou/${API.new_song}`);
          
          if (res.status >= 400) {
            throw new Error("Bad response from server");
          }
          
          const user = await res.json();
        
          console.log(user);
          dispatch(BannerdDate(user.banner))
        //   dispatch(RecommendDate(user.data))
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
        
          console.log(user);
          dispatch(RecommendList(user.plist.list.info))
        //   dispatch(RecommendDate(user.data))
        } catch (err) {
          console.error(err);
        }
    }
};
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
    getSongList
}
// export default combineReducers({
//     getSearchHot,
//     getSongList
// })





