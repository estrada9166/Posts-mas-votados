import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const posts = (state=[], action) =>{
    if(action.type === "LOAD_PRODUCTS"){
        return action.posts
    }
    return state;
}

export default createStore(combineReducers({ posts }), applyMiddleware(thunk));