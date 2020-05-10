import React, { PureComponent } from 'react';
import { HomeWrapper, HomeDetailLeft, HomeDetailRight } from './style';
import { connect } from 'react-redux';
import Topic from '../../components/home/Topic';
import List from '../../components/home/List';
import Author from '../../components/home/Author';
import Recommend from '../../components/home/Recommend';
import { actionCreators } from './store';
import { actionCreators as headerCreators } from '../../components/header/store'
import { BackTop } from './style'

class Home extends PureComponent {

	componentDidMount() {
		const { changeHomeData, changeCurrentHome } = this.props
		changeHomeData()
		this.bindScroll()
		changeCurrentHome()
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollShow)	
	}

	backTop() {
		window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
	}

	bindScroll() {
		window.addEventListener('scroll', this.props.changeScrollShow)
	}

	render() {
		const { scrollShow } = this.props
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
				{scrollShow ? <BackTop onClick={this.backTop}><i className="iconfont">&#xe699;</i></BackTop> : null}
			</HomeWrapper>
		)
	}

}

const mapState = (state) => ({
	scrollShow: state.getIn(['home', 'scrollShow'])
})

const mapDispatch = (dispatch) => ({
	changeCurrentHome() {
		dispatch(headerCreators.changeCurrent('home'))
	},
	changeHomeData() {
		dispatch(actionCreators.getHomeData())
	},
	changeScrollShow() {
		if (document.documentElement.scrollTop > 200) {
			dispatch(actionCreators.changeScroll(true))
		} else {
			dispatch(actionCreators.changeScroll(false))
		}
	}
})

export default connect(mapState, mapDispatch)(Home)