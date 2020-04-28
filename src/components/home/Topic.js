import React, { PureComponent } from 'react';
import { actionCreators } from '../../pages/home/store'
import { TopicWrapper, TopicListItem, MoreToLink } from '../../pages/home/style';
import { connect } from 'react-redux';

class Topic extends PureComponent {
	componentDidMount() {
		const { getTopicList } = this.props
		getTopicList()
	}

	render() {
		const { list } = this.props
		return (
			<TopicWrapper>
				{
					list.map((item) => {
						return (
							<TopicListItem href='#' key={item.get('id')}>
								<img
									className="topic_img"
									src={item.get('imgUrl')}
									alt="64"
								/>
								{item.get('title')}
							</TopicListItem>
						)
					})
				}

				<MoreToLink>
					更多热门专题 >
				</MoreToLink>
			</TopicWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'topicList'])
})

const mapDispatch = (dispatch) => {
	return {
		getTopicList() {
			dispatch(actionCreators.getTopicList())
		}
	}
}

export default connect(mapState, mapDispatch)(Topic)