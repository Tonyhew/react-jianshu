import React, { Component } from 'react';
import { TopicWrapper, TopicListItem, MoreToLink } from '../../pages/home/style';
import { connect } from 'react-redux';

class Topic extends Component {
	render() {
		const { list } = this.props
		return (
			<TopicWrapper>
				{
					list.map((item) => {
						return (
							<TopicListItem key={item.get('id')}>
								<img
									className="topic_img"
									src={item.get('imgUrl')}
									alt=""
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

export default connect(mapState, null)(Topic)