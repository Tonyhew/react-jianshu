import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
	QRShow: false,
	topicList: [],
	articleList: [],
	recommendList: [],
	authorList: [],
	page: 1,
	totalPage: 1
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
		case actionTypes.CHANGE_AUTHOR_LIST:
			return state.merge({
				authorList: action.data,
				totalPage: action.totalPage
			})
		case actionTypes.CHANGE_FOLLOW:
			const newState = JSON.parse(JSON.stringify(state.toJS()));
			newState.authorList[action.index].isFollow = action.isFollow;
			return fromJS(newState);
		case actionTypes.HANDLE_MOUSE_ENTER:
			return state.set('QRShow', true)
		case actionTypes.HANDLE_MOUSE_LEAVE:
			return state.set('QRShow', false)
		case actionTypes.CHANGE_PAGE:
			return state.set('page', action.page)
		default:
			return state
	}
}


