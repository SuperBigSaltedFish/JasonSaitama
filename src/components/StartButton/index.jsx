import React from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'
import { Component } from 'react'
import { observer } from "mobx-react";

import './index.less'

@observer
class StartButton extends Component {
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

  handleClickStart = () => {
    this.props.store.runClock()
  }

  render() {
    const wrapStyle = assign({}, this.props.style)

    return (
      <div
        className="start_button"
        style={wrapStyle}
        onClick={this.handleClickStart}
      >
        开始
      </div>
    );
  }
}

export default StartButton;

