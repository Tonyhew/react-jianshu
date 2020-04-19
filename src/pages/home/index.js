import React, { Component } from 'react';
import { HomeWrapper, HomeDetailLeft, HomeDetailRight } from './style'
import Topic from '../../components/home/Topic';
import List from '../../components/home/List';
import Author from '../../components/home/Author';


class Home extends Component {

	render() {
		return (
			<HomeWrapper>
				<div className='row'>
					<HomeDetailLeft>
						<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
						<Topic />
						<List />
					</HomeDetailLeft>
					<HomeDetailRight>
						<Author />
					</HomeDetailRight>
				</div>
			</HomeWrapper>
		)
	}

}

export default Home