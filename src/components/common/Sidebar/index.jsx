import React from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from './actions';

class Loader extends React.Component {
  render() {
    const { classes } = this.props;
    return (<div>Tests</div>)
  }
}

export default connect(
    (state) => ({}),
    {
      toggleSidebar,
    }
  )(Loader);
