import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
  height:56px;
  background: #fff;
  border: 1px solid transparent;
  border-color: #f0f0f0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`;

export const WidthLimit = styled.div`
  height: 100%;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

export const Logo = styled.a`
  float: left;
  width: 100px;
  height: 56px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  font-size: 17px;
  margin-top: 9px;
  margin-right: 50px;
  color: #333;
  line-height: 38px;
  box-sizing: border-box;
  &.menu_left {
    float: left;
  }
  &.menu_right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
  .iconfont {
    margin: 0 5px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    width: 30px;
    line-height: 30px;
    right: 5px;
    bottom: 13px;
    border-radius: 15px;
    text-align: center;
    color: #969696;
    &.focused {
      background: #969696;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  float: left;
  width: 160px;
  height: 38px;
  margin: 9px auto;
  color: #666;
  padding: 0 35px 0 20px;
  border-radius: 19px;
  background: #eee;
  border: none;
  outline: none;
  box-sizing: border-box;
  &.focused {
    width: 240px;
  }
  @media (min-width: 1439px) {
    width: 240px;
    &.focused {
      width: 320px!important;
    }
  }
  &::placeholder {
    color: #999;
  }
  &.slide-enter {
    transition: all .2s ease-out
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out
  }
  &.slide-exit-active {
    width: 160px;
  }
  @media (min-width: 1439px) {
    &.slide-enter {
      transition: all .2s ease-out
    }
    &.slide-enter-active {
      width: 320px;
    }
    &.slide-exit {
      transition: all .2s ease-out
    }
    &.slide-exit-active {
      width: 240px;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  top: 100%;
  left: 0px;
  @media (min-width: 1439px) {
    width: 300px
  }
  width: 220px;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
  &::before {
    position: absolute;
    background-color: #fff;
    content: "";
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: -5px;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 20px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  .change_search_list {
    position: static;
    display: block;
    float: left;
    margin: -4px;
    font-size: 12px;
    transition: all .3s ease-in;
    transform-origin: center center;
  }
`;

export const SearchList = styled.ul`
  overflow: hidden;
`;

export const SearchListItem = styled.li`
  float: left;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-bottom: 10px;
  margin-right: 14px;
  padding: 5px;
  font-size: 12px;
`;

export const SearchListLink = styled.a``;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  width: 100px;
  height: 38px;
  margin: 9px 15px;
  font-size: 14px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid #ea6f5a;
  padding: 0 15px;
  line-height: 38px;
  border-radius: 19px;
  color: #fff;
  &.reg {
    width: 80px;
    color: #ea6f5a;
  }
  &.writing {
    background: #ea6f5a;
    .iconfont {
      margin-right: 5px;
      vertical-align: middle;
    }
  }
`;

export const ButtonLogin = styled.div`
  float: right;
  line-height: 38px;
  margin: 9px 20px;
  color: #969696;
  .iconfont {
    font-size: 25px;
    font-weight: 400;
  }
`;
