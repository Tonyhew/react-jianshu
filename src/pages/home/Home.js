import React, { PureComponent } from 'react';
import { HomeWrapper, HomeDetailLeft, HomeDetailRight } from './style';
import { connect } from 'react-redux';
import Topic from '../../components/home/Topic';
import List from '../../components/home/List';
import Author from '../../components/home/Author';
import Recommend from '../../components/home/Recommend';
import { actionCreators } from './store';

class Home extends PureComponent {

	componentDidMount() {
		const { changeHomeData } = this.props
		changeHomeData()
	}

	render() {
		return (
			<HomeWrapper>
				<div className='row'>
					<HomeDetailLeft>
						<a href="/#">
							<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
						</a>
						<Topic />
						<List />
					</HomeDetailLeft>
					<HomeDetailRight>
						<Recommend />
						<Author />
					</HomeDetailRight>
				</div>
			</HomeWrapper>
		)
	}

}

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeData())
	}
})

export default connect(null, mapDispatch)(Home)