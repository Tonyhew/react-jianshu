import React, { Component, Fragment } from 'react';
import { ListItem, ListInfo, ListActionInfo, ListImgLink } from '../../pages/home/style';
import { connect } from 'react-redux';
import { actionCreators } from '../../pages/home/store'

class List extends Component {
	componentDidMount() {
		const { getHomeList } = this.props
		getHomeList()
	}

	getListArea() {
		const { list } = this.props
		const newList = list.toJS()
		for (let i = 0; i < newList.length; i++) {
			if (newList[i].imgUrl === "" || newList[i].imgUrl === null) {
				newList[i].isHaveImg = false
			}  else if (newList[i].imgUrl !== "") {
				newList[i].isHaveImg = true
			}
		}
		return (
			newList.map((item) => (
				<ListItem key={item.id} id="list_wrapper" className={item.isHaveImg ? 'have_img' : ''}>
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
			))
		)
	}

	render() {
		return (
			<Fragment>
				{this.getListArea()}
			</Fragment>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
})

const mapDispatch = (dispatch) => {
	return {
		getHomeList() {
			dispatch(actionCreators.getList())
		},
	}
}

export default connect(mapState, mapDispatch)(List)