import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	box-sizing: border-box;
	.row {
		overflow: hidden;
	}
	.banner-img {
		width: 100%;
	}
`

export const HomeDetailLeft = styled.div`
	float: left;
	width: 66.6%;
	padding-top: 30px;
	padding-right: 0;

`
export const HomeDetailRight = styled.div`
	float: left;
	width: 29.4%;
	padding: 30px 0 0;
	margin-left: 4%;
`
export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
`

export const TopicListItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 10px;
	background: #f7f7f7;
	color: #333;
	font-size: 14px;
	padding-right: 10px;
	border-radius: 4px;
	border: 1px solid #dcdcdc;
	.topic_img {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`

export const MoreToLink = styled.a`
	font-size: 14px;
	vertical-align: middle;
	text-align: center;
	line-height: 32px;
	height: 32px;
	display: inline-block;
	margin: 0 15px;
`

export const ListItem = styled.div`
	position: relative;
	width: 100%;
	margin: 0 0 15px;
	padding: 15px 2px 20px 0;
	border-bottom: 1px solid #f0f0f0;
	word-wrap: break-word;
	box-sizing: border-box;
	&.have_img .list_content {
		padding-right: 165px;
	}
`

export const ListImgLink = styled.a`
	position: absolute;
	top: 50%;
	right: 0;
	width: 150px;
	height: 100px;
	margin-top: -60px;
	img {
		width: 100%;
		height: 100%;
		border-radius: 4px;
		border: 1px solid #f0f0f0;
	}
`

export const ListInfo = styled.div`
	.list_title {
			margin: -7px 0 4px;
			display: inherit;
			font-size: 18px;
			font-weight: 700;
			line-height: 1.5;
	}
	.list_content {
			margin: 0 0 8px;
			font-size: 13px;
			line-height: 24px;
			color: #999;
	}
`
export const ListActionInfo = styled.div`
	padding: 0;
	font-size: 12px;
	line-height: 20px;
	span {
		color: #b4b4b4;
		margin-right: 10px;
		i {
				margin-right: 2px;
				vertical-align: bottom;
		}
	}
	.dimond {
		color: #ea6f5a;
	}
	.hover_affect:hover {
		transition: .1s ease-in;
		color: #787878;
	}
`

export const RecommendWrapper = styled.div`
	width: 100%;
	min-height: 50px;
`

export const RecommendList = styled.div`
	height: 100%;
`
export const RecommendListItem = styled.a`
	display: block;
	border-radius: 4px;
	margin-top: 5px;
	&:first-child {
		margin-top: 0;
	}
	img {
		width: 100%;
		height: 100%;
	}
`

export const RecommendQR = styled.a`
	display: block;
	box-sizing: border-box;
	margin: 10px 0 20px 0;
	padding: 10px 20px;
	width: 100%;
	border: 1px solid #f0f0f0;
	border-radius: 6px;
	background-color: #fff;
	img {
		width: 60px;
    height: 60px;
    opacity: .85;
		vertical-align: middle;
	}
`

export const RecommendQRInfo = styled.div`
	display: inline-block;
	vertical-align: middle;
	margin-left: 4px;
	line-height: 20px;
	p:first-child {
		font-size: 15px;
		color: #333;
	}
	p:nth-child(2) {
		margin-top: 4px;
    font-size: 13px;
    color: #999;
	}
`