import {actionTypes} from '../actions/actionTypes';

const initialState = {
    counter: 0
};

export const getCounter = state => state.counter;

const counterUp = (state, action) => ({
    ...state,
    counter: state.counter + action.value
});

const counterDown = (state, action) => ({
    ...state,
    counter: state.counter - action.value
});

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COUNTER_UP:
            return counterUp(state, action);
        case actionTypes.COUNTER_DOWN:
            return counterDown(state, action);
        default:
            return state;
    }
};
