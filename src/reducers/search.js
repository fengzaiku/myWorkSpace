import {combineReducers} from 'redux'
import {SEARCHSTATE,SAVESEARCH_HOT} from '../utils/typeapi'

const searchDate=(state = {searchState:false},action) => {
    switch(action.type){
        case SEARCHSTATE:
            return Object.assign({},state,{
                searchState:action.date
            });
        default:
        return state;
    }
}
const searchHot=(state = {},action) => {
    switch(action.type){
        case SAVESEARCH_HOT:
            return Object.assign({},state,action.date);
        default:
        return state;
    }
}

export default combineReducers({
    searchDate,
    searchHot
})
