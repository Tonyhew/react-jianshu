import styled from 'styled-components';

export const DetailWrapper = styled.div`
  box-sizing: border-box;
  background: #f9f9f9;
`

export const DetailContainer = styled.div`
  box-sizing: content-box;
  width: 1000px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 66px);
  padding-top: 10px;
  font-size: 16px;
`

export const DetailContentLeft = styled.div`
  flex-shrink: 0;
  width: 730px;
  margin-bottom: 24px;
  margin-right: 10px;
  box-sizing: border-box;
  .article-content {
    background: #fff;
    padding: 25px;
    word-break: break-word;
  }
`

export const ArticleTitle = styled.h1`
  margin: 0 0 25px 0;
  font-size: 34px;
  line-height: 44px;
  font-weight: bold;
`

export const ArticleBody = styled.div`
  p {
    font-size: 16px;
    line-height: 32px;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
  }
`

export const ImgView = styled.div`
  margin: 0;
  padding-bottom: 25px;
  text-align: center;
  font-size: 0;
`

export const DetailContentRight = styled.div`
  flex-shrink: 0;
  width: 260px;
`

export const AdImg = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`