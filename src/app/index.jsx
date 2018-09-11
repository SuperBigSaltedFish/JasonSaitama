import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'
import TC from '../components/TestComponent/index.jsx'
import store from '../store/index.js'
import { observer } from "mobx-react";

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
        this is main container {store.state1}
        <TC
          style={{color: "green"}}
        />
      </div>
    );
  }
}

export default App;
