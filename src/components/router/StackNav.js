import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { StackConfig } from './StackConfig';
import { addEmp, goBack } from '../../actions';

class StackNav extends Component {
  // static propTypes = {
  //   dispatch: PropTypes.func.isRequired,
  //   navigation: PropTypes.shape().isRequired,
  // };

  constructor(props) {
    super(props);
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  backAction = () => this.props.goBack();

  render() {
    const { dispatch, navigation } = this.props;
    console.log(this.props);
    return (
      <StackConfig
        ref={(ref) => { this.navigator = ref; }}
        screenProps={this.props}
        navigation={
          addNavigationHelpers({
            dispatch: this.props.goBack,
            state: navigation,
          })
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    navigation: state.nav
  };
};

export default connect(mapStateToProps, { addEmp, goBack })(StackNav);