import React, { Component, Fragment } from 'react';
import { ListItem, ListInfo, ListActionInfo, ListImgLink } from '../../pages/home/style';
import { connect } from 'react-redux';
import { actionCreators } from '../../pages/home/store'

class List extends Component {
	componentDidMount() {
		const { getHomeList, isImg } = this.props
		getHomeList()
		isImg()
	}

	render() {
		const { list, isHaveImg } = this.props
		const newList = list.toJS()
		return (
			<Fragment>

				{
					newList.map((item) => {
						return (
							<ListItem key={item.id} id="list_wrapper" className={isHaveImg ? 'have_img' : ''}>
								<ListImgLink className="img_right">
									<img src={item.imgUrl} alt="" className="list_img" />
								</ListImgLink>
								<ListInfo>
									<h3 className='list_title'>{item.title}</h3>
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
						)
					})
				}



			</Fragment>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	isHaveImg: state.getIn(['home', 'isHaveImg'])
})

const mapDispatch = (dispatch) => {
	return {
		getHomeList() {
			dispatch(actionCreators.getList())
		},
		isImg() {
			// dispatch(actionCreators.isHaveImg())
		}
	}
}

export default connect(mapState, mapDispatch)(List)