import React from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'
import { Component } from 'react'
import { observer } from "mobx-react";

import './index.less'


@observer
class EndButton extends Component {
  static propTypes = {
    style: PropTypes.object,
    store: PropTypes.object,
  };

  static defaultProps = {
    style: {},
    store: {},
  };

  componentDidMount() {
  }

  handleClickEnd = () => {
    this.props.store.endClock()
  }

  render() {
    const wrapStyle = assign({}, this.props.style)

    return (
      <div
        className="end_button"
        style={wrapStyle}
        onClick={this.handleClickEnd}
      >
        结束
      </div>
    );
  }
}

export default EndButton;

