
/*
import Home from '../container/homelogic/index'
import Recommend from '../container/homelogic/recommend'
import NewSong from '../container/homelogic/newSong'
import Rank from '../container/ranklogic/rank'
import Artist from '../container/artistlogic/artist'
import ArtistList from '../container/artistlogic/artistList'
import ArtistSinger from '../container/artistlogic/artistSinger'
import RankList from '../container/ranklogic/rankList'
import Album from '../container/album/album'
*/
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
const ArtistSinger=Loadable({loader: () => import('../container/artistlogic/artistSinger'),loading:Loading})
const RankList=Loadable({loader: () => import('../container/ranklogic/rankList'),loading:Loading})
const Album=Loadable({loader: () => import('../container/album/album'),loading:Loading})
const Play=Loadable({loader: () => import('../container/playlogic/play'),loading:Loading})

// import Async from './asyncComponent'
const routes = [
    { path: '/home',
      component: Home,
      routes: [
        { path: '/home',
          exact:true,
          component:Recommend
        },
        { path: '/home/newSong',
          component:NewSong
        },
        { path: '/home/rank',
          component:Rank
        },
        { path: '/home/artist',
          component:Artist
        }
      ]
    },
    {
      path:'/artist/:id',
      component:ArtistList
    },
    {
      path:'/singer/:id',
      component:ArtistSinger
    },
    {
      path:'/ranklist/:id',
      component:RankList
    },
    {
      path:"/album/:id",
      component:Album
    },
    {
      path:"/play/:id",
      component:Play
    }
  ]
export default routes;


