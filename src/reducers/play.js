import {combineReducers} from 'redux'
import {ADDMUSIC,CONTROLMUSIC,REMOVEMUSIC,CLEARMUSIC,CURRENTMUSICINDEX,UPDATEPROGRESS} from '../utils/typeapi'

const musicList=function(state=[],action){   
    switch(action.type){
        case ADDMUSIC:
            let arr = [...state, action.date];
            let hash = {};

            // 去除数组里的重复对象
            let newArr = arr.reduce((item, next) => {
                // hash[next.song.hash] ? '' : hash[next.song.hash] = true && item.push(next);
                if(!hash[next.song.hash]){
                    hash[next.song.hash] = true;
                    item.push(next);
                }

                return item
            }, []);
            return newArr;
            break;
        case REMOVEMUSIC:
            return state.filter((item)=>{
                if(item.song.hash !== action.date){
                    return item;
                }
            })
            break;
        case CLEARMUSIC:
            return state=[];
            break;
        default:
            return state;
    }
}
 
const control=function(state={playing:false},action){
    switch(action.type){
        case CONTROLMUSIC:
            return Object.assign({},state,action.date)
        default:
            return state;
    }
}
const currentPlayIndex=function(state={playIndex:0},action){
    switch(action.type){
        case CURRENTMUSICINDEX:
            return Object.assign({},state,action.date)
        default:
            return state;
    }
}
const updateMusicProgress=function(state={currentTime:0, percentage:false},action){
    switch(action.type){
        case UPDATEPROGRESS:
            return Object.assign({},state,action.date)
        default:
            return state;
    }
}



export default combineReducers({
    musicList,
    control,
    currentPlayIndex,
    updateMusicProgress
})
