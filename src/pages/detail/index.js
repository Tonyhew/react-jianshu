import React, { Component } from 'react';
import { connect } from 'react-redux'
import { DetailWrapper, DetailContainer, DetailContentLeft, DetailContentRight, ArticleTitle, ArticleBody, ImgView, AdImg } from './style'

class Detail extends Component {

	render() {
		const { articleBody } = this.props
		const newList = articleBody.toJS()
		return (
			<DetailWrapper>
				<DetailContainer>
					<DetailContentLeft>
						{
							newList.map((item) => {
								return (
									<section className='article-content' key={item.id}>
										<ArticleTitle>{item.title}</ArticleTitle>
										<ArticleBody dangerouslySetInnerHTML={{__html: item.content}}></ArticleBody>
									</section>
								)
							})
						}
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
	articleBody: state.getIn(['detail', 'articleContent'])
})

export default connect(mapState, null)(Detail)