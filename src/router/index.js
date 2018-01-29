
// import Home from '../components/home/index';
import Home from '../container/homelogic/index';
import Recommend from '../container/homelogic/recommend'

const routes = [
    { path: '/',
      component: Home,
      routes: [
        { path: '/home',
          component:Recommend
        },
        { path: '/newSong',
          // component: Address1
        },
        { path: '/rank',
          // component: Address2
        },
        { path: '/artist',
          // component: Address3
        }
      ]
    }
  ]
export default routes;