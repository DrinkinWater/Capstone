import React from 'react';
import { TouchableHighlight, Text, Platform, View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';
import styles from './styles';

const SOSButton = ({ onPress, title, style }) =>
  (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={ 'transparent' } >
      <View style={[styles.SOSButton, style]}>
              <Text style={styles.roundedButtonText}>
                {title}
              </Text>
      </View>
    </TouchableHighlight>
  );

SOSButton.propTypes = {
  onPress: PropTypes.func,
};

export default SOSButton;
