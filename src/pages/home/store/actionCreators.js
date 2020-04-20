import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'
import axios from 'axios';


const changeList = (data) => ({
	type: actionTypes.CHANGE_LIST,
	data: fromJS(data),
})

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/data.json').then((res) => {
			const data = res.data
			dispatch(changeList(data.articleList))
		}).catch(() => {
			console.log('error')
		})
	}
}












