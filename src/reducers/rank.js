import {combineReducers} from 'redux'
import {SETRANKDATA,ARTISTDATA,ARTISTLISTDATA} from '../utils/typeapi'

const rankState={
    rank:{
        loaded:false,
        total:0,
        items:[]
    },
    artist:{
        loaded:false,
        artists:[]
    },
    artistList:{
        loaded:false,
        page:0,
        pagesize:0,
        total:0,
        listInfo:[]
    }
}


const rankDate=function(state=rankState.rank,action){
    switch(action.type){
        case SETRANKDATA:
            return Object.assign({},state,{
                loaded:true,
                total:action.date.total,
                items:[...state.items,action.date.list][0]  
            })
        default:
            return state;
    }
}
const artistDate=function(state=rankState.artist,action){
    switch(action.type){
        case ARTISTDATA:
            return Object.assign({},state,{
                loaded:true,
                artists:[...state.artists,action.date][0] 
            })
        default:
            return state;
    }
}
const artistListDate=function(state=rankState.artistList,action){
    switch(action.type){
        case ARTISTLISTDATA:
            return Object.assign({},state,{
                loaded:true,
                page:action.date.page,
                pagesize:action.date.pageSize,
                total:action.date.total,
                listInfo:[...state.listInfo,action.date.list.info][0] 
            })
        default:
            return state;
    }
}

export default combineReducers({
    rankDate,
    artistDate,
    artistListDate
})




