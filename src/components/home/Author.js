import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { actionCreators } from '../../pages/home/store'
import {
	AuthorWrapper,
	AuthorTitle,
	AuthorSwitch,
	AuthorList,
	AuthorListItem,
	Avatar,
	UserName,
	Follow,
	AuthorMore
} from '../../pages/home/style'

function intlFormat(num) {
	return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
}
function makeFriendly(num) {
	if (num >= 1000)
		return intlFormat(num / 1000) + 'k';
	return intlFormat(num);
}

class Author extends PureComponent {

	getAuthorArea() {
		const { authorList, page, totalPage, handleChangeList, handleChangeFollow, login, history } = this.props;
		const newList = authorList.toJS()
		const pageList = []

		if (newList.length) {
			for (let i = (page - 1) * 5; i < page * 5; i++) {

				pageList.push(
					<AuthorListItem key={newList[i].id}>
						<Avatar>
							<img src={newList[i].avatarUrl} alt="" />
						</Avatar>
						<Follow className={newList[i].isFollow ? 'active' : ''} onClick={() => { handleChangeFollow(newList[i].isFollow, i, login, history) }}>
							{/*{newList[i].attention?"已关注":"+关注"}*/}
							{newList[i].isFollow ? <div className="content"><i className='iconfont'>&#xe614;</i>已关注</div> : <div className="content"><i className='iconfont'>&#xe625;</i>关注</div>}
							{newList[i].isFollow ? <div className="cancel"><i className='iconfont'>&#xe617;</i>取消关注</div> : null}
						</Follow>
						<UserName>
							{newList[i].userName}
						</UserName>
						<p>
							写了{makeFriendly(newList[i].fontCount)} 字 · {makeFriendly(newList[i].likes)}喜欢
						</p>
					</AuthorListItem>
				)
			}
		}

		return (
			<AuthorWrapper>
				<AuthorTitle>
					推荐作者
					<AuthorSwitch onClick={() => { handleChangeList(page, totalPage, this.spinIcon) }}>
						<i ref={(icon) => { this.spinIcon = icon }} className='iconfont change_search_list'>&#xe851;</i>
              换一批
          </AuthorSwitch>
				</AuthorTitle>
				<AuthorList>
					{pageList}
				</AuthorList>
				<AuthorMore href="#">查看全部 ></AuthorMore>
			</AuthorWrapper>
		)
	}

	render() {
		return (
			<div>
				{this.getAuthorArea()}
			</div>
		)
	}
}

const mapState = (state) => ({
	authorList: state.getIn(['home', 'authorList']),
	page: state.getIn(['home', 'page']),
	totalPage: state.getIn(['home', 'totalPage']),
	login:state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => {
	return {
		handleChangeList(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10)
			} else {
				originAngle = 0
			}

			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1))
			} else {
				dispatch(actionCreators.changePage(1))
			}
		},
		handleChangeFollow(isFollow, index, login, history) {
			if (!login) {
				history.push('/login')
				return
			}
			dispatch(actionCreators.handleChangeFollow(!isFollow, index))
		}
	}
}

export default withRouter(connect(mapState, mapDispatch)(Author))