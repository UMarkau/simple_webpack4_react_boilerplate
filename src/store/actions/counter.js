import {actionTypes} from './actionTypes';

export const counterUp = () => ({
    type: actionTypes.COUNTER_UP,
    value: 1
});

export const counterDown = () => ({
    type: actionTypes.COUNTER_DOWN,
    value: 1
});
