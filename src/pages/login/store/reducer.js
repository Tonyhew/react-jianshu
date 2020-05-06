import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'

const defaultState = fromJS({
  login: false
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('login', action.loginState)
    case actionTypes.LOG_OUT:
      return state.set('login', action.loginState)  
    default:
      return state
  }
}


