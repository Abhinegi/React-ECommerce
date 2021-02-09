
import {createSelector} from 'reselect';

export const userData = state=> state.user

export const userSelector = createSelector([userData],(user)=>user.currentUser)