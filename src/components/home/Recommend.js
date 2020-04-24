import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../pages/home/store'
import {
	RecommendWrapper,
	RecommendList,
	RecommendListItem,
	RecommendQR,
	RecommendQRInfo,
	RecommendQRHover
} from '../../pages/home/style'

class Recommend extends Component {

	componentDidMount() {
		const { getRecommendList } = this.props
		getRecommendList()
	}

	render() {
		const { recommendList, handleMouseEnter, handleMouseLeave, QRShow } = this.props
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


					<RecommendQR
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<img src='http://q92tiutoq.bkt.clouddn.com/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf%20%281%29.png' alt='' />
						<RecommendQRInfo>
							<p>下载简书手机App ></p>
							<p>随时随地发现和创作内容</p>
						</RecommendQRInfo>
					</RecommendQR>

					<RecommendQRHover className={QRShow ? "fade in" : "hide"}>
						<div className="arrow"></div>
						<img src="http://q92tiutoq.bkt.clouddn.com/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf%20%281%29.png" alt="" />
					</RecommendQRHover>

				</RecommendWrapper>
			</Fragment >
		)
	}
}

const mapStateToProps = (state) => ({
	recommendList: state.getIn(['home', 'recommendList']),
	QRShow: state.getIn(['home', 'QRShow'])
})

const mapDispatchToProps = (dispatch) => {
	return {
		getRecommendList() {
			dispatch(actionCreators.getRecommendList())
		},
		handleMouseEnter() {
			dispatch(actionCreators.handleMouseEnter())
		},
		handleMouseLeave() {
			dispatch(actionCreators.handleMouseLeave())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
