import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';


const sortedPostsBackward = arr => {
    return arr.concat().sort((a,b) => {
        return b.votes - a.votes;
    });
}

const sortedPostsForward = arr => {
    return arr.concat().sort((a,b) => {
        return a.votes - b.votes;
    });
}

const modifyVotes = (state, action) => {
    return state.map((post) => {
        if(JSON.stringify(post) === JSON.stringify(action.post)){
            if(action.type === "SUM_VOTE"){
                post['votes'] ++;
                return post;
            } else{
                post['votes'] --;
                return post;
            }
        }
        return post;
    })
}

const compareVotes = (arr, type) => {
    if(type === "SUM_VOTE"){
        return arr.concat().sort((a, b) => {
            if(a.votes < b.votes){
                return 1;
            } else if(a.votes > b.votes){
                return -1;
            }
            return 0;
        })
    } else{
        return arr.concat().sort((a, b) => {
            if(a.votes > b.votes){
                return 1;
            } else if(a.votes < b.votes){
                return -1;
            }
            return 0;
        })
    }
}

const posts = (state=[], action) =>{
    if(action.type === "LOAD_POSTS"){
        return sortedPostsForward(action.posts);
    } else if(action.type === "ORDER_FORWARD"){
        return sortedPostsForward(state);
    } else if(action.type === "ORDER_BACKWARD"){
        return sortedPostsBackward(state);
    } else if(action.type === "SUM_VOTE"){
        return compareVotes(modifyVotes(state, action), action.type);
    } else if(action.type === "REST_VOTE"){
        return compareVotes(modifyVotes(state, action), action.type);
    }

    return state;
}

export default createStore(combineReducers({ posts }), applyMiddleware(thunk));