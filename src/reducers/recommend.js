import * as Type from '../utils/typeapi'
import { type } from 'os';
import {combineReducers} from 'redux'

const state={
    selectedsubreddit: 'frontend',
    postsBySubreddit: {
      frontend: {
        isFetching: true,
        didInvalidate: false,
        items: []
      },
      reactjs: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: 1439478405547,
        items: [
          {
            id: 42,
            title: 'Confusion about Flux and Relay'
          },
          {
            id: 500,
            title: 'Creating a Simple Application Using React JS and Flux Architecture'
          }
        ]
      }
    }
  }



const BannerDate=(state=[],action) => {
    switch(action.type){
        case Type.BANNERDATA:
            return action.date;
        default:
            return state;
    }
}


const songList={
    items:{
        page:0,
        loaded:false,
        date:[]
    }
}
const NewSongDate=(state=songList.items,action) => {
    switch(action.type){
        case Type.NEWSONGDATA:
            return Object.assign({},state,{
                page:1,
                loaded:true,
                date:action.date
            })
        case Type.SINGERLISTDATA:
            return Object.assign({},state,{
                    page:1,
                    loaded:true,
                    date:action.date
           })
        default:
            return state;
    }
}
const recommendDate=(state=[],action) => {
    switch(action.type){
        case Type.REACOMMANDDATA:
            return action.date;
        default:
            return state;
    }
}
export default combineReducers({
    BannerDate,
    recommendDate,
    NewSongDate
})








