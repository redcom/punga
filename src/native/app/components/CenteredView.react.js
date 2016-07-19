import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import styles from '../styles';
import { View } from 'react-native';

export default class CenteredView extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    style: View.propTypes.style,
  };

  render() {
    const { children, style } = this.props;
    return (
      <View {...this.props} style={[styles.centeredView, style]}>
        {children}
      </View>
    );
  }

}
