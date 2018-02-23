import _ from 'lodash';
import * as actions from '../actions';
import { actionTypes } from 'redux-form';

export default function (state = {}, action) {

    switch (action.type) {
        case actions.FETCH_POSTS_SUCCESS:
            return _.mapKeys(action.payload, 'id');

        case actions.FETCH_POST_SUCCESS:
             return { ...state, [action.payload.data.id]: action.payload.data }

        case actions.CREATE_POST_SUCCESS:
            return { ...state, [action.payload.data.id]: action.payload.data }

        case actions.DELETE_POST_SUCCESS:
            return _.omit(state, action.payload);    

        default:
            return state;
    }

}