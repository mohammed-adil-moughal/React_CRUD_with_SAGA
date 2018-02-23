import axios from 'axios';

export const FETCH_POSTS ='fetch_posts';
export const FETCH_POSTS_SUCCESS ='fetch_posts_success';
export const CREATE_POST ='create_post';
export const CREATE_POST_SUCCESS ='create_post_success';
export const FETCH_POST ='fetch_post';
export const FETCH_POST_SUCCESS ='fetch_post_success';
export const DELETE_POST='delete_post';

const ROOT_URL="http://reduxblog.herokuapp.com/api";
const API_KEY="?key=ADILADIL"

export function fetchPosts() {  
    console.log('FETCH_POSTS ACTION');
    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios({
        method:'get',
        url
    })
    return request;
}

export function createPost(values) {
    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios.post(url,values);
    return request;
}

export function fetchPost(id) {
    const url=`${ROOT_URL}/posts/${id}${API_KEY}`;
    const request=axios.get(url);
    return request;
}

export function deletePost(id) {
    const url=`${ROOT_URL}/posts/${id}${API_KEY}`;
    const request=axios.delete(url);
    return request;
}
