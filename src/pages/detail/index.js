import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
// eslint-disable-next-line
import { DetailWrapper, DetailContainer, DetailContentLeft, DetailContentRight, ArticleTitle, ArticleBody, ImgView, AdImg } from './style'

class Detail extends PureComponent {

	componentDidMount() {
		this.props.getDetail(this.props.match.params.id)
	}

	render() {
		const { title, content } = this.props
		return (
			<DetailWrapper>
				<DetailContainer>
					<DetailContentLeft>

						<section className='article-content'>
							<ArticleTitle>{title}</ArticleTitle>
							<ArticleBody dangerouslySetInnerHTML={{ __html: content }} />
						</section>

					</DetailContentLeft>
					<DetailContentRight>
						<aside>
							<AdImg>
								<img src="https://oimagea7.ydstatic.com/image?id=-8529848236635965102&product=adpublish&w=520&h=347" alt="" />
							</AdImg>
						</aside>
					</DetailContentRight>
				</DetailContainer>
			</DetailWrapper>
		)
	}

}

const mapState = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
	getDetail(id) {
		dispatch(actionCreators.getDetail(id))
	}
})

export default connect(mapState, mapDispatch)(Detail)