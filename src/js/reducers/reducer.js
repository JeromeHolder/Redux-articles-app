import { ADD_ARTICLE } from '../constants/action-types';

const intialState = {
    articles: []
};

const rootReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload]};
        default:
            return state;
    }
};

export default rootReducer;