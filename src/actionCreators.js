import axios from 'axios';

const loadPosts = () => {
    return dispatch => {
        return axios.get("http://localhost:3001/posts")
        .then(response => {
            dispatch({
                type: "LOAD_POSTS",
                posts: response.data
            })
        }) 
    }
}


const orderForward = () => {
    return {
        type: "ORDER_FORWARD"  
    }
}

const orderPostBackward = () => {
    return {
        type: "ORDER_BACKWARD"
    }
}

const sumVote = post => {
    return {
        type: "SUM_VOTE",
        post
    }
}

const restVote = post => {
    return {
        type: "REST_VOTE",
        post
    }
}

export { loadPosts, orderPostBackward, orderForward, sumVote, restVote };