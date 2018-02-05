

import Home from '../container/homelogic/index'
import Recommend from '../container/homelogic/recommend'
import NewSong from '../container/homelogic/newSong'
import Rank from '../container/ranklogic/rank'
import Artist from '../container/artistlogic/artist'
import ArtistList from '../container/artistlogic/artistList'
import ArtistSinger from '../container/artistlogic/artistSinger'
/*

import React,{Component} from "react"
const Loading=() =>{
  return(
    <div>Loding.....</div>
  )
}

import Loadable from 'react-loadable'
const Home=Loadable({loader: () => import('../container/homelogic/index'),loading:Loading})
const Recommend=Loadable({loader: () => import('../container/homelogic/recommend'),loading:Loading})
const NewSong=Loadable({loader: () => import('../container/homelogic/newSong'),loading:Loading})
const Rank=Loadable({loader: () => import('../container/ranklogic/rank'),loading:Loading})
const Artist=Loadable({loader: () => import('../container/artistlogic/artist'),loading:Loading})
const ArtistList=Loadable({loader: () => import('../container/artistlogic/artistList'),loading:Loading})
*/
// import Async from './asyncComponent'
const routes = [
    { path: '/home',
      component: Home,
      // component:Async(() => import('../container/homelogic/index')),
      routes: [
        { path: '/home',
          exact:true,
          component:Recommend
          // component:Async(() => import('../container/homelogic/recommend'))
        },
        { path: '/home/newSong',
          component:NewSong
          // component:Async(() => import('../container/homelogic/newSong'))
        },
        { path: '/home/rank',
          component:Rank
          // component:Async(() => import('../container/ranklogic/rank'))
        },
        { path: '/home/artist',
          component:Artist
          // component:Async(() => import('../container/artistlogic/artist'))
        }
      ]
    },
    {
      path:'/artist/:id',
      component:ArtistList
      // component:Async(() => import('../container/artistlogic/artistList'))
    },
    {
      path:'/singer/:id',
      component:ArtistSinger
      // component:Async(() => import('../container/artistlogic/artistList'))
    }
  ]
export default routes;


