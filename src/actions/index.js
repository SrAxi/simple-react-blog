import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USER = 'FETCH_USER';

const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: FETCH_POSTS,
        payload: response.data,
    });
};

const fetchUser = (userId) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);

    dispatch({
        type: FETCH_USER,
        payload: response.data,
    });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    // getting unique User ids from retrieved posts and fetching user data for each one of them
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};
