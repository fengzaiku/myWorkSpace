import { createStore, applyMiddleware,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/index'

let middleware = [thunk];

// let finalCreateStore;
let finalCreateStore =createStore(
    reducers,
    applyMiddleware(thunk)
);

// if (process.env.NODE_ENV === 'production') {
//     finalCreateStore = applyMiddleware(...middleware)(createStore);
//   } else {
//     finalCreateStore = compose(
//       applyMiddleware(...middleware),
//       createStore
//     );
//   }
export default  finalCreateStore
// export default  finalCreateStore(reducers)






