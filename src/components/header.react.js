import React, {Text, View, Image, TouchableOpacity} from 'react-native';
import Component from '../components/component.react';

import style from './header.style';

export default class Header extends Component {

  static propTypes = {
    backButtonAction: React.PropTypes.func,
    menuButtonAction: React.PropTypes.func,
    title: React.PropTypes.string.isRequired
  }

  render() {
    const {title, menuButtonAction, backButtonAction} = this.props;

    return (
      <View style={style.container}>

        {menuButtonAction && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={menuButtonAction}>
              <Image
                source={require('image!menu-icon')}
                style={style.menuIcon}
              />
          </TouchableOpacity>
        )}

        {backButtonAction && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={backButtonAction}>
              <Text style={style.menuLink}>{'<'}</Text>
          </TouchableOpacity>
        )}

        <Text style={style.header}>{title}</Text>
      </View>
    );
  }

}
