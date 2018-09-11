import React from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'
import { Component } from 'react'
import store from '../../store/index.js'
import {
 observer,
} from "mobx-react";
import {
 action,
} from "mobx";


@observer
class TestComponent extends Component {
	static propTypes = {
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {},
  };

  componentDidMount() {
  	setTimeout(() => {
  		store.change('haha???')
  	}, 3000)
  }


  render() {
		const wrapStyle = assign({}, this.props.style)

    return (
      <div className="main_container" style={wrapStyle}>
        this is TestComponent
        <div>
      	'store.state1: ' { store.state1 }
      	<br/>
				'store.state2: ' { store.state2 }
      </div>
      </div>
    );
  }
}

export default TestComponent;
