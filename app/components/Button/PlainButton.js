import React from 'react';
import { TouchableOpacity, Text, Platform, View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';
import styles from './styles';

const PlainButton = ({ onPress, title, style }) =>
  (
    <TouchableOpacity
      onPress={onPress} >
      <Text style={[styles.plainButtonText, style]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

PlainButton.propTypes = {
  onPress: PropTypes.func,
};

export default PlainButton;
