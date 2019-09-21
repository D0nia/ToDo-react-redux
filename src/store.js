import { createStore , applyMiddleware, compose } from 'redux'
import reducerRoot from './reducer';
import thunk from "redux-thunk";


const middleware = [ thunk ];


export default createStore(
    reducerRoot,
    compose(applyMiddleware(...middleware),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))
