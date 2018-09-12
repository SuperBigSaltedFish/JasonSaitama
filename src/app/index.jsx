import React from 'react'
import { Component } from 'react'
import { observer } from "mobx-react";
import PropTypes from 'prop-types'
import assign from 'object-assign'
import {
  StartButton,
  EndButton,
} from '../components'
import store from '../store/index.js'

import './index.less'

@observer
class App extends Component {
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
        <StartButton
          store={store}
        />
        <EndButton
          store={store}
        />
      </div>
    );
  }
}

export default App;
