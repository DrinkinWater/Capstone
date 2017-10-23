import React from 'react';
import { TouchableHighlight, Text, Platform, View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'

const AddButton = ({ onPress, title, style }) =>
  (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={ 'transparent' } >
      <View style={[styles.AddButton, style]}>
              <Icon name='ios-add-outline' size= { 25 } color={ Colors.white }/>
      </View>
    </TouchableHighlight>
  );

AddButton.propTypes = {
  onPress: PropTypes.func,
};

export default AddButton;