import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'
import axios from 'axios';

const changeHomeData = (result) => ({
	type: actionTypes.CHANGE_HOME_DATA,
	articleList: result.articleList,
	topicList: result.topicList,
	recommendList: result.recommendList,
	authorList: result.authorList,
	totalPage: Math.ceil(result.authorList.length / 5)
})

const addMoreArticle = (list, nextPage) => ({
	type: actionTypes.CHANGE_ADD_ARTICLE,
	list: fromJS(list),
	nextPage
})

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})

export const handleMouseEnter = () => ({
	type: actionTypes.HANDLE_MOUSE_ENTER,
})

export const handleMouseLeave = () => ({
	type: actionTypes.HANDLE_MOUSE_LEAVE,
})

export const handleChangeFollow = (isFollow, index) => ({
	type: actionTypes.CHANGE_FOLLOW,
	isFollow,
	index
})

export const getHomeData = () => {
	return (dispatch) => {
		axios.get('/api/homeList.json').then((res) => {
				const result = res.data;
				dispatch(changeHomeData(result));
		});
	}	
}

export const getMoreArticle = (page) => {
	return (dispatch) => {
		axios.get('/api/homeNewList.json?page' + page).then((res) => {
			const result = res.data.data;
			dispatch(addMoreArticle(result, page + 1));
	});
	}
}

export const changeScroll = (flag) => ({
	type: actionTypes.CHANGE_SCROLL_SHOW,
	flag
})





