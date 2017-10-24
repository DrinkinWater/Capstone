import React from 'react';
import { TouchableHighlight, Text, Platform, View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';
import styles from './styles';

const RoundedButton = ({ onPress, title, style }) =>
  (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={ 'transparent' }
      delayPressIn={0} >
      <View style={[styles.roundedButton, style]}>
              <Text style={styles.roundedButtonText}>
                {title}
              </Text>
      </View>
    </TouchableHighlight>
  );

RoundedButton.propTypes = {
  onPress: PropTypes.func,
};

export default RoundedButton;
