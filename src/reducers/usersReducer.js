import { FETCH_USER } from '../actions';

export default (state = [], { type, payload }) => {
    switch (type) {
        case FETCH_USER:
            return [...state, payload];
        default:
            return state;
    }
};
