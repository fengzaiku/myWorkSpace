import * as Type from '../utils/typeapi'
import { type } from 'os';
import {combineReducers} from 'redux'

const BannerDate=(state=[],action) => {
    switch(action.type){
        case Type.BANNERDATA:
            return state.concat(action.date);
            // return [...state,action.date];
        default:
            return state;
    }
}
const recommendDate=(state=[],action) => {
    switch(action.type){
        case Type.REACOMMANDDATA:
            return state.concat(action.date);
        default:
            return state;
    }
}
export default combineReducers({
    BannerDate,
    recommendDate
})








