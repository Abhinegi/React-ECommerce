import Constants from './constants';

export const userAction = user =>({
    type: Constants.SET_CURRENT_USER,
    payload : user
})