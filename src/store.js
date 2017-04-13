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

const compareVotes = (arr, type, post) => {
    if(type === "SUM_VOTE"){
        arr.forEach(function(element, index) {
            if(JSON.stringify(element) === JSON.stringify(post) && index > 0){
                console.log(index)
                if(arr[index - 1]['votes'] < post['votes']){
                    arr.splice(index, 1);
                    arr.splice(index - 1, 0, post);
                }
            }
        });
        return arr;
    } else{
        arr.forEach(function(element, index) {
            if(JSON.stringify(element) === JSON.stringify(post) && index < arr.length -1){
                if(arr[index + 1]['votes'] > post['votes']){
                    arr.splice(index, 1);
                    arr.splice(index + 1, 0, post);
                }
            }
        });
        return arr;
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
        return compareVotes(modifyVotes(state, action), action.type, action.post);
    } else if(action.type === "REST_VOTE"){
        return compareVotes(modifyVotes(state, action), action.type, action.post);
    }

    return state;
}

export default createStore(combineReducers({ posts }), applyMiddleware(thunk));