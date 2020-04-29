import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
	QRShow: false,
	topicList: [],
	articleList: [],
	recommendList: [],
	authorList: [],
	page: 1,
	totalPage: 1,
	articlePage: 1,
	scrollShow: false
})
export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList),
				authorList: fromJS(action.authorList),
				totalPage: fromJS(action.totalPage)
			})
		case actionTypes.CHANGE_FOLLOW:
			const newState = JSON.parse(JSON.stringify(state.toJS()));
			newState.authorList[action.index].isFollow = action.isFollow;
			return fromJS(newState);
		case actionTypes.CHANGE_ADD_ARTICLE:
			return state.merge({
				articleList: state.get('articleList').concat(action.list),
				articlePage: action.nextPage
			})
		case actionTypes.CHANGE_SCROLL_SHOW:
			return state.set('scrollShow', action.flag)
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


