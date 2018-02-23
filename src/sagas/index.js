import { all, call, put, takeEvery } from 'redux-saga/effects';
import "regenerator-runtime/runtime";
import * as actions from '../actions/';

function* fetchPostsSaga(action) {
    console.log('Saga =>', action)
    const posts = yield call(actions.fetchPosts);
    yield put({type: 'fetch_posts_success', payload: posts.data});
}

function* fetchPostSaga(action) {
    console.log('Fetch Post Saga =>', action)
    const post = yield call(actions.fetchPost, action.payload.id);
    yield put({type: "fetch_post_success", payload: post});
}

function* createPostSaga(action) {
    console.log('Saga =>', action)
    const post = yield call(actions.createPost, action.payload.data);
    console.log('Create Posr ', post);
    yield put({type: "create_post_success", payload: post});
}

function* deletePostSaga(action) {
    console.log('SagaDeLEte =>', action)
    const post = yield call(actions.deletePost, action.payload.id);
    yield put({type: "delete_post_success", payload: post});
}


export default function* rootSaga() {
    // yield takeEvery('fetch_posts_saga', fetchPostsSaga);
    yield all([
        takeEvery('fetch_posts_saga', fetchPostsSaga),
        takeEvery('fetch_post_saga', fetchPostSaga),
        takeEvery('create_post_saga', createPostSaga),
        takeEvery('delete_post_saga',deletePostSaga),
    //     takeEvery(deletePostSaga),
    ])
}
