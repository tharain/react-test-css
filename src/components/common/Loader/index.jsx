import React from 'react';
import { connect } from 'react-redux';
import { stopLoader } from './actions';

class Loader extends React.Component {
  render() {
    const { classes } = this.props;
    return this.props.isLoading === undefined || this.props.isLoading ? (
      <div className="fullscreen">
        <div className="innerFrame">
          {(() => {
          switch (this.props.loadState) {
            case 1:
              return (
                    <div className="lds-ripple">
                      <div />
                      <div />
                    </div>

              );
            case 2:
              return (
                <div class="lds-heart">
                  <div>
                  </div>
                </div>
              )
            case 3:
              return (
                <div class="lds-default">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              )
            default:
              return null;
          }
        })()}
      </div>
    </div>
  ) : null;
  }
}

export default connect(
    (state) => ({
      isLoading: state.loadingStatus.isLoading,
      loadState: state.loadingStatus.loadState,
    }),
    {
      stopLoader,
    }
  )(Loader);
