import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import {
  HeaderWrapper,
  WidthLimit,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchList,
  SearchListItem,
  SearchListLink,
  Addition,
  Button,
  ButtonLogin
} from './headerStyle';

class Header extends PureComponent {
  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangeList } = this.props;
    const newList = list.toJS()
    const pageList = []

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchListItem key={newList[i]}><SearchListLink>{newList[i]}</SearchListLink></SearchListItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => { handleChangeList(page, totalPage, this.spinIcon) }}>
              <i ref={(icon) => { this.spinIcon = icon }} className='iconfont change_search_list'>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchList>
            {pageList}
          </SearchList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props
    return (
      <HeaderWrapper>
        <WidthLimit>
          <Link to='/'>
            <Logo />
          </Link>
          <Nav>
            <Link to='/'>
              <NavItem className='menu_left active'>
                <i className='iconfont'>&#xe816;</i>
                首页
              </NavItem>
            </Link>
            <NavItem className='menu_left'>
              <i className='iconfont'>&#xe71c;</i>
                下载App
            </NavItem>

            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames='slide'
              >
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={focused ? 'focused iconfont' : 'iconfont'}>
                &#xe61f;
                </i>
              {this.getListArea()}
            </SearchWrapper>
          </Nav>

          <Addition>
            <Button className='writing'>
              <i className='iconfont'>&#xe624;</i>
                写文章
            </Button>
            <Button className='reg'>注册</Button>
            <ButtonLogin className='login'>登录</ButtonLogin>
            <ButtonLogin className='style'>
              <i className='iconfont'>&#xe636;</i>
            </ButtonLogin>
          </Addition>
        </WidthLimit>
      </HeaderWrapper>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      console.log(list);
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangeList(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }

      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)