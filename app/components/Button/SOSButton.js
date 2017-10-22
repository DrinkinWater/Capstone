import React from 'react';
import { TouchableHighlight, Text, Platform, View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';
import styles from './styles';

const SOSButton = ({ onLongPress, title, style }) =>
  (
    <TouchableHighlight
      onLongPress={onLongPress}
      underlayColor={ 'transparent' } >
      <View style={[styles.SOSButton, style]}>
              <Text style={styles.SOSButtonText}>
                {title}
              </Text>
      </View>
    </TouchableHighlight>
  );

SOSButton.propTypes = {
  onLongPress: PropTypes.func,
};

export default SOSButton;
