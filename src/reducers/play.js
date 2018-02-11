import {combineReducers} from 'redux'
import {ADDMUSIC} from '../utils/typeapi'

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
        default:
            return state;
    }
}
 



export default combineReducers({
    musicList
})
