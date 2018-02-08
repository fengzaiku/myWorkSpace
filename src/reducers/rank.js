import {combineReducers} from 'redux'
import {SETRANKDATA,ARTISTDATA,ARTISTLISTDATA,RANKLISTDATA,ALBUMLISTDATA} from '../utils/typeapi'

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
    },
    rankList:{
        loaded:false,
        page:0,
        pagesize:0,
        total:0,
        info:{},
        timestamp:0,
        listInfo:[]
    },
    albumList:{
        loaded:false,
        page:0,
        pagesize:0,
        info:{},
        listDate:[]
    }
}


const albumDate=function(state=rankState.albumList,action){
    switch(action.type){
        case ALBUMLISTDATA:
        return Object.assign({},state,{
            loaded:true,
            page:action.date.list.page,
            pagesize:action.date.list.pagesize,
            info:action.date.info.list,
            listDate:[...state.listDate,action.date.list.list.info][0] 
        })
        default:
            return state;
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
const rankListDate=function(state=rankState.rankList,action){
    switch(action.type){
        case RANKLISTDATA:
        console.log(action.date.songs)
            return Object.assign({},state,{
                loaded:true,
                page:action.date.songs.page,
                pagesize:action.date.songs.pagesize,
                total:action.date.songs.total,
                timestamp:action.date.songs.timestamp * 1000,
                info:action.date.info,
                listInfo:[...state.listInfo,action.date.songs.list][0] 
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
    artistListDate,
    rankListDate,
    albumDate
})




