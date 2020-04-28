import React, { PureComponent } from 'react';
import { TopicWrapper, TopicListItem, MoreToLink } from '../../pages/home/style';
import { connect } from 'react-redux';

class Topic extends PureComponent {
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

export default connect(mapState, null)(Topic)