import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../pages/home/store'
import {
	RecommendWrapper,
	RecommendList,
	RecommendListItem,
	RecommendQR,
	RecommendQRInfo
} from '../../pages/home/style'

class Recommend extends Component {

	componentDidMount() {
		const { getRecommendList } = this.props
		getRecommendList()
	}

	render() {
		const { recommendList } = this.props
		const newRecommendList = recommendList.toJS()
		return (
			<Fragment>
				<RecommendWrapper>
					<RecommendList>
						{
							newRecommendList.map((item) => {
								return (
									<RecommendListItem href='' key={item.id}>
										<img src={item.imgUrl} alt='' />
									</RecommendListItem>
								)
							})
						}
					</RecommendList>

					<RecommendQR>
						<img src='http://q92tiutoq.bkt.clouddn.com/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf%20%281%29.png' alt='' />
						<RecommendQRInfo>
							<p>下载简书手机App ></p>
							<p>随时随地发现和创作内容</p>
						</RecommendQRInfo>
					</RecommendQR>
				</RecommendWrapper>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	recommendList: state.getIn(['home', 'recommendList'])
})

const mapDispatchToProps = (dispatch) => {
	return {
		getRecommendList() {
			dispatch(actionCreators.getRecommendList())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
