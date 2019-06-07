import React from 'react';
import { connect } from 'react-redux';
import {
  startLoader,
  stopLoader,
} from 'src/components/common/Loader/actions';
import { Button } from 'antd/lib';
import Loader from 'src/components/common/Loader/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderType: 1,
      isClick: false,
    };
  }
  render() {
    return (
      <>
        <Button type="primary" onClick={() => {
          this.props.startLoader(1);
          setTimeout(() => {
            this.props.stopLoader();
          }, 5000)
        }}>Trigger Loader 1</Button>
        <Button type="primary" onClick={() => {
          this.props.startLoader(2);
          setTimeout(() => {
            this.props.stopLoader();
          }, 5000)
        }}>Trigger Loader 2</Button>
        <Button type="primary" onClick={() => {
          this.props.startLoader(3);
          setTimeout(() => {
            this.props.stopLoader();
          }, 5000)
        }}>Trigger Loader 3</Button>
        <Loader />
      </>
    );
  }
}

export default connect(
  (state) => ({}),
  { startLoader, stopLoader }
)(App);
