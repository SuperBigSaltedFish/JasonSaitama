import React from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'
import { Component } from 'react'
import { observable } from "mobx";


@observer
class TestComponent extends Component {
	static propTypes = {
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {},
  };

  render() {
		const wrapStyle = assign({}, this.props.style)

    return (
      <div className="main_container" style={wrapStyle}>
        this is TestComponent
      </div>
    );
  }
}

export default TestComponent;
