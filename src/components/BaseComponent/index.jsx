import React from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'
import { Component } from 'react'
import { observer } from "mobx-react";
import { action } from "mobx";

import './index.less'

@observer
class BaseComponent extends Component {
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


  render() {
    const wrapStyle = assign({}, this.props.style)

    return (
      <div className="base_component" style={wrapStyle}>
        this is base component
      </div>
    );
  }
}

export default BaseComponent;

