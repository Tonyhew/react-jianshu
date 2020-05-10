import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators as headerCreators } from '../../components/header/store'

class DownLoad extends PureComponent {

  componentDidMount() {
    this.props.changeCurrentDown()
  }

  render() {
    return (
      <div>
        download
      </div>
    )
  }

}

const mapDispatch = (dispatch) => ({
  changeCurrentDown() {
    dispatch(headerCreators.changeCurrent('downLoad'))
  }
})

export default connect(null, mapDispatch)(DownLoad)
