import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, ListActionInfo, ListImgLink, LoadMore } from '../../pages/home/style';
import { actionCreators } from '../../pages/home/store'
import { connect } from 'react-redux';

class List extends PureComponent {

	getListArea() {
		const { list } = this.props
		const newList = list.toJS()
		for (let i = 0; i < newList.length; i++) {
			if (newList[i].imgUrl === "" || newList[i].imgUrl === null) {
				newList[i].isHaveImg = false
			}
		}
		return (
			newList.map((item, index) => (
				<ListItem key={index} id="list_wrapper" className={item.isHaveImg ? 'have_img' : ''}>
					<Link to='/detail'>
						<ListImgLink className="img_right">
							<img src={item.imgUrl} alt="" className={item.imgUrl === "" ? 'img_hide' : 'list_img'} />
						</ListImgLink>
					</Link>
					<ListInfo>
						<Link to='/detail'>
							<h3 className='list_title'>{item.title}</h3>
						</Link>
						<p className='list_content'>{item.desc}</p>
					</ListInfo>
					<ListActionInfo>
						<span>
							<i className="iconfont dimond">&#xe9ad;</i>
							{item.dimond}
						</span>
						<span className='hover_affect'>
							{item.author}
						</span>
						<span className='hover_affect'>
							<i className="iconfont">&#xe989;</i>
							{item.comment}
						</span>
						<span>
							<i className="iconfont">&#xe65d;</i>
							{item.like}
						</span>
					</ListActionInfo>
				</ListItem>

			))
		)
	}

	render() {
		const { getMoreArticle, page } = this.props
		return (
			<Fragment>
				{this.getListArea()}
				<LoadMore onClick={() => getMoreArticle(page)}>阅读更多</LoadMore>
			</Fragment>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => {
	return {
		getMoreArticle(page) {
			dispatch(actionCreators.getMoreArticle(page))
		}
	}
}

export default connect(mapState, mapDispatch)(List)