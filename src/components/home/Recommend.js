import React, { Component, Fragment } from 'react';
import { RecommendWrapper, RecommendList, RecommendListItem, RecommendQR, RecommendQRInfo } from '../../pages/home/style'

class Recommend extends Component {
	render() {
		return (
			<Fragment>
				<RecommendWrapper>
					<RecommendList>
						<RecommendListItem>
							<img src="http://q92tiutoq.bkt.clouddn.com/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt='' />
						</RecommendListItem>
						<RecommendListItem>
							<img src="http://q92tiutoq.bkt.clouddn.com/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt='' />
						</RecommendListItem>
						<RecommendListItem>
							<img src="http://q92tiutoq.bkt.clouddn.com/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt='' />
						</RecommendListItem>
						<RecommendListItem>
							<img src="http://q92tiutoq.bkt.clouddn.com/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt='' />
						</RecommendListItem>
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

export default Recommend;
