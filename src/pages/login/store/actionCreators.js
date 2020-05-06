import axios from 'axios';
import * as actionTypes from './actionTypes';


const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  loginState: true
})

export const logout = () => ({
  type: actionTypes.LOG_OUT,
  loginState: false
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      if (res.data.data) {
        dispatch(changeLogin())
      } else {
        alert('登录失败!')
      }
    }).catch(err => {
      console.log(err)
    })
  }
}