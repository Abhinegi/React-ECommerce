import Constants from './constants';

const INITIAL_STATE = {
    currentUser:null
}
const userReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case Constants.SET_CURRENT_USER : return {
            ...state,
            currentUser: action.payload
        }
        default: return state;
    }
}

export default userReducer;