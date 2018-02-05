import "babel-polyfill"
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

// import {BrowserRouter, Route,Switch} from 'react-router-dom'
import {Router, Route,Switch} from 'react-router-dom'
// import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import  createHistory from 'history/createBrowserHistory'
import store from './store'
const customHistory = createHistory({
  basename: "", // The base URL of the app (see below)
  forceRefresh: false, // Set true to force full page refreshes
  keyLength: 6, // The length of location.key
  // A function to use to confirm navigation with the user (see below)
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
})
const location = customHistory.location

customHistory.listen((location, action) => {
  console.log(
    `The current URL is ${location.pathname}${location.search}${location.hash}`
  )
  console.log(`The last navigation action was ${action}`)
})

import RouteWithSubRoutes from './router/'
// import Routes from './router/router'
// import './assets/styleSheet/comman/';

// const RouteWithSubRoutes = () => (
//   Routes.map((route, index) => (
//     <Route path={route.path} render={props => (
//         <route.component {...props} routes={route.routes}/>
//     )} key={index}/>
//   ))
// )


render(
  <Provider store={store}>
      <Router history={customHistory}>  
        <Route component={RouteWithSubRoutes} />
      </Router>
  </Provider>,
  document.getElementById('root')
);



// render(
//   <Provider store={store}>
//       <Router history={customHistory}>  
//         <Switch>
//           <RouteWithSubRoutes/>
//         </Switch>
//       </Router>
//   </Provider>,
//   document.getElementById('root')
// );



/*
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class ModalSwitch extends React.Component {
  constructor(props){
    super(props)
    this.previousLocation = this.props.location
  }
  componentWillUpdate(nextProps) {
    // console.log(nextProps)
    // console.log(this.props)
    // const { location } = this.props
    // if (
    //   nextProps.history.action !== 'POP' &&
    //   (!location.state || !location.state.modal)
    // ) {
    //   this.previousLocation = this.props.location
    // }
  }

  render() {
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path='/' component={Home}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/img/:id' component={ImageView}/>
        </Switch>
        {isModal ? <Route path='/img/:id' component={Modal} /> : null}
      </div>
    )
  }
}

const IMAGES = [
  { id: 0, title: 'Dark Orchid', color: 'DarkOrchid' },
  { id: 1, title: 'Lime Green', color: 'LimeGreen' },
  { id: 2, title: 'Tomato', color: 'Tomato' },
  { id: 3, title: 'Seven Ate Nine', color: '#789' },
  { id: 4, title: 'Crimson', color: 'Crimson' }
]

const Thumbnail = ({ color }) =>
  <div style={{
    width: 50,
    height: 50,
    background: color
  }}/>

const Image = ({ color }) =>
  <div style={{
    width: '100%',
    height: 400,
    background: color
  }}></div>

const Home = () => (
  <div>
    <Link to='/gallery'>Visit the Gallery</Link>
    <h2>Featured Images</h2>
    <ul>
      <li><Link to='/img/2'>Tomato</Link></li>
      <li><Link to='/img/4'>Crimson</Link></li>
    </ul>
  </div>
)

const Gallery = () => (
  <div>
    {IMAGES.map(i => (
      <Link
        key={i.id}
        to={{
          pathname: `/img/${i.id}`,
          // this is the trick!
          state: { modal: true }
        }}
      >
        <Thumbnail color={i.color} />
        <p>{i.title}</p>
      </Link>
    ))}
  </div>
)

const ImageView = ({ match }) => {
  const image = IMAGES[parseInt(match.params.id, 10)]
  if (!image) {
    return <div>Image not found</div>
  }

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  )
}

const Modal = ({ match, history }) => {
  const image = IMAGES[parseInt(match.params.id, 10)]
  if (!image) {
    return null
  }
  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div
      onClick={back}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.15)'
      }}
    >
      <div className='modal' style={{
      position: 'absolute',
        background: '#fff',
        top: 25,
        left: '10%',
        right: '10%',
        padding: 15,
        border: '2px solid #444'
      }}>
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type='button' onClick={back}>
          Close
        </button>
      </div>
    </div>
  )
}




render(
  <Router>
    <Route component={ModalSwitch} />
  </Router>,
  document.getElementById('root')
);

*/