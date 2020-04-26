import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
	QRShow: false,
	topicList: [],
	articleList: [],
	recommendList: []
})
export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_TOPIC_LIST:
			return state.merge({
				topicList: action.data
			})
		case actionTypes.CHANGE_LIST:
			return state.merge({
				articleList: action.data,
			})
		case actionTypes.CHANGE_RECOMMEND_LIST:
			return state.merge({
				recommendList: action.data,
			})
		case actionTypes.HANDLE_MOUSE_ENTER:
			return state.set('QRShow', true)
		case actionTypes.HANDLE_MOUSE_LEAVE:
			return state.set('QRShow', false)	
		default:
			return state
	}
}


