import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
	isHaveImg: true,
	topicList: [{
		id: 1,
		title: '摄影',
		imgUrl: 'https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
	}, {
		id: 2,
		title: '故事',
		imgUrl: 'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
	}],
	articleList: []
})
export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_LIST:
            return state.merge({
                articleList: action.data,
			})
		case actionTypes.HAVE_IMG:
			console.log(action)
			return state.set('isHaveImg', false)
		default:
			return state
	}
}


