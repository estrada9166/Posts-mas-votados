import axios from 'axios';

const loadPosts = () => {
    return dispatch => {
        return axios.get("http://localhost:3001/posts")
        .then(response => {
            const dataResponse = response.data.sort()
            dispatch({
                type: "LOAD_PRODUCTS",
                posts: response.data
            })
        }) 
    }
}

export { loadPosts };