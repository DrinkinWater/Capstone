import React from 'react';
import { TouchableNativeFeedback, Text, Platform, View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';

import styles from './styles';

const RoundedButton = ({ onPress, title, style }) =>
  (
    <View style={[styles.roundedButton, style]}>
      <TouchableNativeFeedback
        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
        onPress={onPress}
        underlayColor={ 'transparent' } >
        <Text style={styles.roundedButtonText}>
          {title}
        </Text>
      </TouchableNativeFeedback>
    </View>
  );

RoundedButton.propTypes = {
  onPress: PropTypes.func,
};

export default RoundedButton;
